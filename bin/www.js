require('dotenv').config();

const path = require('path');
const express = require('express');
require('express-async-errors'); // give better errors when using async/await
var errorHandler = require(path.join(__dirname, '', '../util', 'error_handler'));

const http = require('http');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { constants } = require('crypto');
const expressLayouts = require('express-ejs-layouts');
const csrf = require('csurf');
const frameguard = require('frameguard');

const postRouter = require('../routes/posts.js');
const authRouter = require('../routes/auth.js');

// Init app
const app = express();
app.use(cookieParser());

// Checking authentication
var checkAuth = (req, res, next) => {
  if (typeof req.cookies.nToken === 'undefined' || req.cookies.nToken === null) {
    req.user = null;
  } else {
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }
  next();
};

// Load view engine
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Body Parser Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const csrfProtection = csrf({
  cookie: {
    httpOnly: true,
    secure: true,
  },
});
app.use(frameguard({ action: 'SAMEORIGIN' }));

// Set public folder
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes
app.use(checkAuth);
app.use('/auth', authRouter);
app.use('/posts', postRouter);

// Home route
app.get('/', csrfProtection, (req, res) => {
  const urlParams = new URLSearchParams(req.url);
  let qualtricsId = urlParams.get('/?qualtricsId');
  res.render(`pages/instruction-1`, {
    layout: 'layouts/layoutInstruction',
    qualtricsId: qualtricsId,
    csrfToken: req.csrfToken(),
  });
});

app.use(errorHandler);

// Enable http
const httpServer = http.createServer({}, app);

// Run 'npx sequelize-cli db:seed:all --debug' when database is empty

// Initialize Sequelize
const { initialize } = require('../util/initSequelize');
initialize().then((db) => {
  httpServer.listen(process.env.PORT, process.env.HOST, function () {
    console.log('Server started on host ' + process.env.HOST + ' port ' + process.env.PORT);
  });
});
