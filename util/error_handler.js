'use strict';

const path = require('path');
const config = require(path.join(__dirname, '..', 'config', 'config.js'));

module.exports = function handleError(err, req, res, next) {
  console.log('Error on page', req.originalUrl, ':', err);

  if (req.user && config.environment === 'development') {
    return res.status(500).send({
      result: 'error',
      error: err,
    });
  }

  if (req.method === 'GET') {
    res.status(500).send('An error has occured');
  } else {
    res.status(500).send({
      status: 'error',
    });
  }
};
