const { sequelize } = require('./sequelize');

const db = {
  Comment: require('../models/comment'),
  Post: require('../models/post'),
  User: require('../models/user'),
};

// Call this in your main script to initilialize sequelize
exports.initialize = async function () {
  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  // Now that associations are defined,
  // create the tables if they do not exist
  try {
    await sequelize.sync({ force: false });
  } catch (err) {
    console.error(err);
  }

  return db;
};
