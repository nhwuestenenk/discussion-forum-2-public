const path = require('path');
const config = require(path.join(__dirname, '..', 'config', 'config.js'));
const { Sequelize, DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "..", "sqlite3.db"),
});

// Load this in your models
exports.sequelize = sequelize;

// Use these DataTypes in your models
exports.DataTypes = DataTypes;
exports.Op = Op;
