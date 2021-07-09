const path = require('path');
const router = require('express').Router();
const isAuthenticated = require('../config/middleware/isAuthenticated');


router.get('/', (req, res) => {
  if(req.user) {
    res.redirect('/index')
  }
  res.sendFile(path.join(__dirname, '../public/signup.html'));
});

router.get('/login', (req,res) => {
  if(req.user) {
    res.redirect('/index')
  }
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

// Place this route below all others to send he index.html file
// to any request that is not explicitly defined above
router.get('/index', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
module.exports = router;
