const { sequelize, DataTypes } = require('../util/sequelize');

const User = sequelize.define('User', {
  userType: { type: DataTypes.INTEGER, defaultValue: 1 },
  qualtricsId: { type: DataTypes.STRING },
  username: { type: DataTypes.STRING },
  normValence: { type: DataTypes.INTEGER },
  composition: { type: DataTypes.INTEGER },

  pageTime0: { type: DataTypes.INTEGER, defaultValue: 0 },
  pageTime1: { type: DataTypes.INTEGER, defaultValue: 0 },

  pageStart0: { type: DataTypes.DATE},
  pageStart1: { type: DataTypes.DATE},

  pageComment0: { type: DataTypes.INTEGER, defaultValue: 0 },
  pageComment1: { type: DataTypes.INTEGER, defaultValue: 0 },

  pagePostUpvote0: { type: DataTypes.INTEGER, defaultValue: 0 },
  pagePostUpvote1: { type: DataTypes.INTEGER, defaultValue: 0 },

  pagePostDownvote0: { type: DataTypes.INTEGER, defaultValue: 0 },
  pagePostDownvote1: { type: DataTypes.INTEGER, defaultValue: 0 },

  pageCommentUpvote0: { type: DataTypes.INTEGER, defaultValue: 0 },
  pageCommentUpvote1: { type: DataTypes.INTEGER, defaultValue: 0 },

  pageCommentDownvote0: { type: DataTypes.INTEGER, defaultValue: 0 },
  pageCommentDownvote1: { type: DataTypes.INTEGER, defaultValue: 0 },

});

User.beforeCreate((user, options) => {
  user.normValence = Math.floor(Math.random() * 3);
  user.composition = Math.floor(Math.random() * 2);
});

module.exports = User;
