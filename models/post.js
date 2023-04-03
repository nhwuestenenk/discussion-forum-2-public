const { Op, sequelize, DataTypes } = require('../util/sequelize');
const User = require('./../models/user');

const Post = sequelize.define('Post', {
  thread: { type: DataTypes.STRING },
  normValence: { type: DataTypes.INTEGER },
  composition: { type: DataTypes.INTEGER },
  minutesAgo: {type: DataTypes.INTEGER },
  title: { type: DataTypes.STRING },
  text: { type: DataTypes.TEXT },
  websiteName: { type: DataTypes.STRING },
  websiteText: { type: DataTypes.STRING },
  websiteImage: { type: DataTypes.STRING },
  websiteLink: {type: DataTypes.STRING }
});

// Get the upvotes from 'admin' users and from logged-in user
Post.prototype.getUpvotesForUser = function(userId) {
  return this.getUpvotes({
    where: {
      [Op.or]: [
        {
          userType: 'admin',
        },
        {
          id: userId,
        },
      ],
    },
  })
}

// Get the downvotes from 'admin' users and from logged-in user
Post.prototype.getDownvotesForUser = function(userId) {
  return this.getDownvotes({
    where: {
      [Op.or]: [
        {
          userType: 'admin',
        },
        {
          id: userId,
        },
      ],
    },
  })
}

// Get the comments with up and downvotes from 'admin' users and from logged-in user
Post.prototype.getCommentsForUser = async function(userId) {
  return this.getComments({
    include: [{
      required: true, // <- true makes sure that only comments with users that conform to the below "where" statement are returned
      model: User,
      as: 'author',
      where: {
        [Op.or]: [{
          id: userId,
        }, {
          userType: 'admin',
        }]
      }
    }],
  })
}

Post.associate = (models) => {
  Post.hasMany(models.Comment);
  Post.belongsTo(models.User, { as: 'author' });
  Post.belongsToMany(models.User, { through: 'Post_Upvotes', as: 'upvotes' });
  Post.belongsToMany(models.User, { through: 'Post_Downvotes', as: 'downvotes' });
};

module.exports = Post;
