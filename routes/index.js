var express = require('express');
var app = express();
var router = express.Router();
var port = 3000;

app.set('view engine', 'ejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
/* GET checklist page. */
router.get('/checklist', function(req, res, next) {
  res.render('checklist', { title: 'Checklist' });
});
/* GET contactUs page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
/* GET Booking services */
router.get('/booking', function(req, res, next) {
  res.render('booking', { title: 'Booking' });
});



module.exports = router;
