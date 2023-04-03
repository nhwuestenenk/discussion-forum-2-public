const { Op, sequelize, DataTypes } = require('../util/sequelize');

const Comment = sequelize.define('Comment', {
  minutesAgo: { type: DataTypes.INTEGER },
  preText: { type: DataTypes.STRING },
  text: { type: DataTypes.TEXT },
  depth: { type: DataTypes.INTEGER },
  show: { type: DataTypes.INTEGER },
});

// Get the upvotes from 'admin' users and from logged-in user
Comment.prototype.getUpvotesForUser = function(userId) {
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
Comment.prototype.getDownvotesForUser = function(userId) {
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

Comment.associate = (models) => {
  Comment.belongsTo(models.User, { as: 'author' });
  Comment.belongsTo(models.Post);
  Comment.belongsTo(models.Comment, { as: 'parentComment' }); 
  Comment.belongsToMany(models.User, { through: 'Comment_Upvotes', as: 'upvotes' });
  Comment.belongsToMany(models.User, { through: 'Comment_Downvotes', as: 'downvotes' });
};

module.exports = Comment;
