function upvoteCount(upvotes, currentUser) {
  const upvoteScore = upvotes.length;
  const includesUser = upvotes.some((user) => user.id == currentUser.id);

  // Like count
  if (includesUser) {
    if (upvoteScore == 1) {
      return `<strong>${currentUser.username}</strong> vind dit leuk`;
    } else if (upvoteScore == 2) {
      return `<strong>${currentUser.username}</strong> en <strong>${upvotes[0].username}</strong> vinden dit leuk`;
    } else {
      return `<strong>${currentUser.username}</strong>, <strong>${upvotes[0].username}</strong> en <strong>${upvoteScore - 2} andere(n)</strong> vinden dit leuk`;
    }
  } else {
    if (upvoteScore == 0) {
      return `<strong>0 personen</strong> vinden dit leuk`;
    } else if (upvoteScore == 1) {
      return `<strong>${upvotes[0].username}</strong> vind dit leuk`;
    } else if (upvoteScore == 2) {
      return `<strong>${upvotes[0].username}</strong> en <strong>${upvotes[1].username}</strong> vinden dit leuk`;
    } else {
      return `<strong>${upvotes[0].username}</strong> en <strong>${upvoteScore - 1} andere(n)</strong> vinden dit leuk`;
    }
  }
}

function downvoteCount(downvotes, currentUser) {
  const downvoteScore = downvotes.length;
  const includesUser = downvotes.some((user) => user.id == currentUser.id);

  // Dislike count
  if (includesUser) {
    if (downvoteScore == 1) {
      return `<strong>${currentUser.username}</strong> vind dit niet leuk`;
    } else if (downvoteScore == 2) {
      return `<strong>${currentUser.username}</strong> en <strong>${downvotes[0].username}</strong> vinden dit niet leuk`;
    } else {
      return `<strong>${currentUser.username}</strong>, <strong>${downvotes[0].username}</strong> en <strong>${downvoteScore - 2} andere(n)</strong> vinden dit niet leuk`;
    }
  } else {
    if (downvoteScore == 0) {
      return `<strong>0 personen</strong> vinden dit niet leuk`;
    } else if (downvoteScore == 1) {
      return `<strong>${downvotes[0].username}</strong> vind dit niet leuk`;
    } else if (downvoteScore == 2) {
      return `<strong>${downvotes[0].username}</strong> en <strong>${downvotes[1].username}</strong> vinden dit niet leuk`;
    } else {
      return `<strong>${downvotes[0].username}</strong> en <strong>${downvoteScore - 1} andere(n)</strong> vinden dit niet leuk`;
    }
  }
}

// HAS USER (DIS)LIKED A COMMENT OR A POST? --> CHANGE BUTTON CLASS
function upvotesPostArrayUser(upvotes, currentUser) {
  return upvotes.some((user) => user.id == currentUser.id) ? 1 : 0;
}

function downvotesPostArrayUser(downvotes, currentUser) {
  return downvotes.some((user) => user.id == currentUser.id) ? 1 : 0;
}

function upvotesCommentArrayUser(upvotes, currentUser) {
  return upvotes.some((user) => user.id == currentUser.id) ? 1 : 0;
}

function downvotesCommentArrayUser(downvotes, currentUser) {
  return downvotes.some((user) => user.id == currentUser.id) ? 1 : 0;
}

module.exports = {
  upvoteCount: upvoteCount,
  downvoteCount: downvoteCount,
  upvotesPostArrayUser: upvotesPostArrayUser,
  downvotesPostArrayUser: downvotesPostArrayUser,
  upvotesCommentArrayUser: upvotesCommentArrayUser,
  downvotesCommentArrayUser: downvotesCommentArrayUser,
};
