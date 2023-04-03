require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('./../models/user');

const csrf = require('csurf');
var csrfProtection = csrf({ cookie: true })

// Instructions page 2
router.get('/instruction-2', csrfProtection, (req, res) => {
  const urlParams = new URLSearchParams(req.url);
  let qualtricsId = urlParams.get('/instruction-2/?qualtricsId');
  res.render(`pages/instruction-2`, {
    layout: 'layouts/layoutInstruction',
    qualtricsId: qualtricsId,
    csrfToken: req.csrfToken()
  });
})

// Login page
router.get('/login', csrfProtection, (req, res, next) => {
  const urlParams = new URLSearchParams(req.url);
  let qualtricsId = urlParams.get('/login/?qualtricsId')
  res.render('pages/login', { layout: 'layouts/layoutInstruction', 
                              error: '' ,
                              qualtricsId: qualtricsId,
                              csrfToken: req.csrfToken()
  });
});

// Login 
router.post('/login', csrfProtection, async (req, res, next) => {
  const username = req.body.username;
  var symbols = /[!@#$%^&*()+\=\[\]{};':"\\|,.<>\/?]+/;

  // Check if username has been filled in
  if (!username) {
    return res.render('pages/login', {
                      layout: 'layouts/layoutInstruction',
                      error: 'Vul een gebruikersnaam in',
                      qualtricsId: req.body.qualtricsId,
                      csrfToken: req.csrfToken()
    });

  // Check if username is at least 4 characters
  } else if (username.match(symbols)) {  
    return res.render('pages/login', {
                      layout: 'layouts/layoutInstruction',
                      error: 'U kunt geen gebruik maken van deze symbolen',
                      qualtricsId: req.body.qualtricsId,
                      csrfToken: req.csrfToken()
    });

  // Check if username is at least 4 characters
  } else if (username.length < 4 || (username.length == 4 && username.endsWith(" "))) {  
    return res.render('pages/login', {
                      layout: 'layouts/layoutInstruction',
                      error: 'Vul een gebruikersnaam in van ten minste vier tekens',
                      qualtricsId: req.body.qualtricsId,
                      csrfToken: req.csrfToken()
    });

  // Check if username does not contain a space
  } else if (username.slice(0, -1).match(" ")) { 
    return res.render('pages/login', {
                      layout: 'layouts/layoutInstruction',
                      error: 'Vul een gebruikersnaam in zonder spatie',
                      qualtricsId: req.body.qualtricsId,
                      csrfToken: req.csrfToken()
  });
}
  
// Force participants to fill in the survey before the website, and link their QualtricsID to username 
  let user = await User.findOne({ where: { qualtricsId: req.body.qualtricsId } });
  if (!user) {
    if (req.body.qualtricsId === '') {
      return res.render('pages/login', {
        layout: 'layouts/layoutInstruction',
        error: 'U moet eerst de vragenlijst invullen.', 
        qualtricsId: req.body.qualtricsId,
        csrfToken: req.csrfToken()
      })
    } else {
      user = new User(req.body);
      user.username = req.body.username;
      user.qualtricsId = req.body.qualtricsId;
      await user.save();
    }   
  } else if (req.body.username != user.username) {
    return res.render('pages/login', {
                      layout: 'layouts/layoutInstruction',
                      error: `U heeft al ingelogd met de gebruikersnaam ${user.username}. Gebruik deze gebruikersnaam om in te loggen.`,
                      qualtricsId: req.body.qualtricsId,
                      username: user.username,
                      csrfToken: req.csrfToken()
    })
  }
  
  try {
    // Create a token
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET, {
      expiresIn: '60 days',
    });
    // Set a cookie
    res.cookie('nToken', token, { httpOnly: true,
                                  secure: true });

    // Redirect
    let topic = 'homosexuality';
    res.redirect(`/posts/${topic}`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
