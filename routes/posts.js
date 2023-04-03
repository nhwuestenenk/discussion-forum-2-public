const express = require('express');
const Post = require('./../models/post');
const User = require('./../models/user');
const Comment = require('./../models/comment');
const router = express.Router();

const timeAgo = require('./../public/javascripts/timeAgo.js');
const voteCount = require('../public/javascripts/voteCount.js');
const { sequelize } = require('../util/sequelize');

// Load associated tables
const Comment_Upvotes = sequelize.define('Comment_Upvotes');
const Comment_Downvotes = sequelize.define('Comment_Downvotes');
const Post_Upvotes = sequelize.define('Post_Upvotes');
const Post_Downvotes = sequelize.define('Post_Downvotes');

const csrf = require('csurf');
var csrfProtection = csrf({ cookie: true })

// Object containing all forum topics
const forumTopics = ['homosexuality', 'abortion'];

router.get('/instruction-end', csrfProtection, async function (req, res) {
  const user = await User.findByPk(req.user.id);
  res.render('pages/instruction-end', {
            currentUser: user.toJSON(),
            layout: 'layouts/layoutInstruction',
            csrfToken: req.csrfToken()
  });
});

// Load forum pages
router.get('/:topic', csrfProtection, async (req, res) => {
  const user = await User.findByPk(req.user.id);

  // Find id admin users
  const findAdminUsers = await User.findAll({
    where: { userType: 'admin' },
    attributes: ['id'],
    raw: true,
  });
  const adminUsers = [];
  Object.entries(findAdminUsers).map(([map, val]) => adminUsers.push(val.id));

  // Topic and page number
  let topic = req.params.topic;
  let pageNr = forumTopics.findIndex((forumTopics) => forumTopics === topic);

  // Find post and affiliated author, upvotes, downvotes and comments
  const post = await Post.findOne({
    where: {
      thread: topic,
      normValence: user.normValence,
      composition: user.composition,
    },
  });

  const postAuthor = await post.getAuthor();
  const postUpvotes = await post.getUpvotes();
  const postUpvotesJson = postUpvotes.map(user => user.toJSON());
  const postDownvotes = await post.getDownvotes();
  const postDownvotesJson = postDownvotes.map(user => user.toJSON());
  const postComments = await post.getComments();
  const postCommentsJson = postComments.map(comment => comment.toJSON());

  // Find comments and affiliated upvotes, downvotes and author
  for (let i=0; i<postCommentsJson.length; i++) {
    const upvotes = await postComments[i].getUpvotes();
    const downvotes = await postComments[i].getDownvotes();
    const author = await postComments[i].getAuthor();
    postCommentsJson[i].upvotes = upvotes.map(user => user.toJSON());
    postCommentsJson[i].downvotes = downvotes.map(user => user.toJSON());
    postCommentsJson[i].author = author;
  }

  // Get start time for user
  if (pageNr === 0) {
    if (user.pageStart0 == null) {
      await user.update({pageStart0: new Date()})
      await user.save();
    }
  } else {
    if (user.pageStart1 == null) {
      await user.update({pageStart1: new Date()})
      await user.save();
    }
  }

  try {
    res.render('pages/show', {
      post: post,
      postAuthor: postAuthor,
      postUpvotes: postUpvotesJson,
      postDownvotes: postDownvotesJson,
      postComments: postCommentsJson,
      currentUser: user.toJSON(),
      timeAgoPost: timeAgo.timeAgoPost,
      timeAgoComment: timeAgo.timeAgoComment,
      upvoteCount: voteCount.upvoteCount,
      downvoteCount: voteCount.downvoteCount,
      upvotesPostArrayUser: voteCount.upvotesPostArrayUser,
      downvotesPostArrayUser: voteCount.downvotesPostArrayUser,
      upvotesCommentArrayUser: voteCount.upvotesCommentArrayUser,
      downvotesCommentArrayUser: voteCount.downvotesCommentArrayUser,
      pageNr: pageNr,
      previousPage: forumTopics[pageNr - 1],
      nextPage: forumTopics[pageNr + 1],
      layout: 'layouts/layoutPosts',
      csrfToken: req.csrfToken()
    });
  } catch (err) {
    console.log(err);
  }
});

// New comment
router.post('/:postId/comments', csrfProtection, async function (req, res) {
  // Create a comment
  const comment = new Comment(req.body);

  comment.authorId = req.user.id;
  comment.PostId = req.params.postId;
  comment.upvoteScore = 0;
  comment.downvoteScore = 0;
  comment.depth = 1;

  // Increase number of comments on this page
  let user = await User.findByPk(req.user.id);
  await user.increment(String(`pageComment${req.body.pageNr}`), { by: 1 });

  try {
    await comment.save();
    res.send({ success: true });
  } catch (err) {
    console.log(err);
  }
});

// New reply
router.post('/:postId/comments/:commentId/replies', csrfProtection, async (req, res) => {
  // LOOKUP THE PARENT POST AND COMMENT
  const parentComment = await Comment.findByPk(req.params.commentId);

  // TURN REPLY INTO A COMMENT OBJECT
  const reply = new Comment(req.body);

  reply.authorId = req.user.id;
  reply.PostId = req.params.postId;
  reply.depth = parentComment.depth + 1;
  reply.parentCommentId = parentComment.id;

  // Display username of parent for replies to replies
  const parentUser = await User.findByPk(parentComment.authorId);
  if (reply.depth >= 3) {
    reply.preText = `@${parentUser.username}`;
  }

  // Increase number of comments on this page
  let user = await User.findByPk(req.user.id);
  await user.increment(String(`pageComment${req.body.pageNr}`), { by: 1 });

  try {
    await reply.save();
    res.send({ success: true });
  } catch (err) {
    console.log(err);
  }
});

// Upvote post
router.put('/:id/vote-up-post', csrfProtection, async function (req, res) {
  const post = await Post.findByPk(req.params.id);
  const user = await User.findByPk(req.user.id);

  const userUpvoted = await Post_Upvotes.findOne({ where: { UserId: user.id, PostId: post.id } });
  const userDownvoted = await Post_Downvotes.findOne({
    where: { UserId: user.id, PostId: post.id },
  });

  // If user has not upvoted the post yet, add this upvote to post and user
  if (userUpvoted == null) {
    await post.addUpvote(user);
    await user.increment(String(`pagePostUpvote${req.body.pageNr}`), { by: 1 });

    // If user has downvoted the post, remove this downvote from post and user
    if (userDownvoted != null) {
      await post.removeDownvote(user);
      await user.decrement(String(`pagePostDownvote${req.body.pageNr}`), { by: 1 });
    }
    // If user has upvoted the post, remove this upvote from post and user
  } else {
    await post.removeUpvote(user);
    await user.decrement(String(`pagePostUpvote${req.body.pageNr}`), { by: 1 });
  }
  res.send({ success: true });
});

// Downvote post
router.put('/:id/vote-down-post', csrfProtection, async function (req, res) {
  const post = await Post.findByPk(req.params.id);
  const user = await User.findByPk(req.user.id);

  const userUpvoted = await Post_Upvotes.findOne({ where: { UserId: user.id, PostId: post.id } });
  const userDownvoted = await Post_Downvotes.findOne({
    where: { UserId: user.id, PostId: post.id },
  });

  // If user has not downvoted the post yet, add this downvote to post and user
  if (userDownvoted == null) {
    await post.addDownvote(user);
    await user.increment(String(`pagePostDownvote${req.body.pageNr}`), { by: 1 });

    // If user has upvoted the post, remove this upvote from post and user
    if (userUpvoted != null) {
      await post.removeUpvote(user);
      await user.decrement(String(`pagePostUpvote${req.body.pageNr}`), { by: 1 });
    }
    // If user has downvoted the post, remove this downvote from post and user
  } else {
    await post.removeDownvote(user);
    await user.decrement(String(`pagePostDownvote${req.body.pageNr}`), { by: 1 });
  }
  res.send({ success: true });
});

// Upvote comment
router.put('/:id/vote-up-comment', csrfProtection, async function (req, res) {
  const comment = await Comment.findByPk(req.params.id);
  const user = await User.findByPk(req.user.id);

  const userUpvoted = await Comment_Upvotes.findOne({
    where: { UserId: user.id, CommentId: comment.id },
  });
  const userDownvoted = await Comment_Downvotes.findOne({
    where: { UserId: user.id, CommentId: comment.id },
  });

  // If user has not upvoted the comment yet, add this upvote to comment and user
  if (userUpvoted == null) {
    await comment.addUpvote(user);
    await user.increment(String(`pageCommentUpvote${req.body.pageNr}`), { by: 1 });

    // If user has already downvoted the comment, remove this downvote from comment and user
    if (userDownvoted != null) {
      await comment.removeDownvote(user);
      await user.decrement(String(`pageCommentDownvote${req.body.pageNr}`), { by: 1 });
    }
    // If user has already upvoted the comment, remove this upvote from comment and user
  } else {
    await comment.removeUpvote(user);
    await user.decrement(String(`pageCommentUpvote${req.body.pageNr}`), { by: 1 });
  }
  res.send({ success: true });
});

// Downvote comment
router.put('/:id/vote-down-comment', csrfProtection, async function (req, res) {
  const comment = await Comment.findByPk(req.params.id);
  const user = await User.findByPk(req.user.id);

  const userUpvoted = await Comment_Upvotes.findOne({
    where: { UserId: user.id, CommentId: comment.id },
  });
  const userDownvoted = await Comment_Downvotes.findOne({
    where: { UserId: user.id, CommentId: comment.id },
  });

  // If user has not downvoted the comment yet, add this downvote to comment and user
  if (userDownvoted == null) {
    await comment.addDownvote(user);
    await user.increment(String(`pageCommentDownvote${req.body.pageNr}`), { by: 1 });

    // If user has already upvoted the comment, remove this upvote from comment and user
    if (userUpvoted != null) {
      await comment.removeUpvote(user);
      await user.decrement(String(`pageCommentUpvote${req.body.pageNr}`), { by: 1 });
    }
    // If user has already downvoted the comment, remove this downvote from comment and user
  } else {
    await comment.removeDownvote(user);
    await user.decrement(String(`pageCommentDownvote${req.body.pageNr}`), { by: 1 });
  }
  res.send({ success: true });
});

// Page timer
router.post('/time', csrfProtection, async function (req, res) {
  let user = await User.findByPk(req.user.id);
  await user.increment(String(`pageTime${req.body.pageNr}`), { by: req.body.diff });
  await user.reload();

  let startTime = req.body.pageNr == 0 ? new Date(user.pageStart0) : new Date(user.pageStart1);
  let endTime = new Date();

  if (Math.abs(startTime-endTime) < 30000) {
    res.sendStatus(400);
  } else {
    res.sendStatus(200);
  }
});

module.exports = router;
