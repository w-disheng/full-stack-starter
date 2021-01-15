'use strict';

const express = require('express');
const HttpStatus = require('http-status-codes');
const path = require('path');
const router = express.Router();

const models = require('../models');

/// configure serving up a built client app
router.use(express.static(path.join(__dirname, '../client/build')));

/// configure serving any static file in public folder
router.use(express.static(path.join(__dirname, '../public')));

/// serve libraries installed as node modules
router.use('/libraries/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
router.use('/libraries/cleave', express.static(path.join(__dirname, '../node_modules/cleave.js/dist')));
router.use('/libraries/fontawesome', express.static(path.join(__dirname, '../node_modules/@fortawesome/fontawesome-free')));
router.use('/libraries/jquery', express.static(path.join(__dirname, '../node_modules/jquery/dist')));

/// serve some paths from other nested routers
router.use('/api', require('./api'));
if (process.env.FEATURE_REGISTRATION) {
  router.use('/register', require('./registrations'));
}

/// handle logging out the current user
router.get('/logout', function(req,res,next){
  req.logout();
  if (req.accepts('html')) {
    req.flash('info', 'You have been logged out.');
    res.redirect('/');
  } else {
    res.status(HttpStatus.NO_CONTENT).end();
  }
});

/// serve up the client app for all other routes, per SPA client-side routing
router.get('/*', function (req, res, next) {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  } else {
    next();
  }
});

module.exports = router;
