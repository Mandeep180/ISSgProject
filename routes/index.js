var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});
/* GET checklist page. */
router.get('/checklist', function(req, res, next) {
  res.render('index', { title: 'Checklist' });
});
/* GET contactUs page */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' });
});
/* GET Booking services */
router.get('/booking', function(req, res, next) {
  res.render('index', { title: 'Booking' });
});



module.exports = router;
