var express = require('express');
var app = express();
var router = express.Router();
//var port = 3000;

let indexController = require("../controllers/index");

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
  res.render('about', { title: 'About Us' });
});
/* GET contactUs page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

/* GET contactUs page */
router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Meet the Team' });
});


/* STUDENT LOGIN */
/* GET Route for displaying the Login page */
router.get("/login", indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post("/login", indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get("/register", indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post("/register", indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get("/logout", indexController.performLogout);


/* STAFF */
/* GET Route for displaying the Login page */
router.get("/staff-login", indexController.displayStaffLoginPage);

/* POST Route for processing the Login page */
router.post("/staff-login", indexController.processStaffLoginPage);

/* GET Route for displaying the Register page */
router.get("/staff-register", indexController.displayStaffRegisterPage);

/* POST Route for processing the Register page */
router.post("/staff-register", indexController.processStaffRegisterPage);


/* RECRUITER LOGIN */
/* GET Route for displaying the Login page */
router.get("/recruiter-login", indexController.displayRecruiterLoginPage);

/* POST Route for processing the Login page */
router.post("/recruiter-login", indexController.processRecruiterLoginPage);

/* GET Route for displaying the Register page */
router.get("/recruiter-register", indexController.displayRecruiterRegisterPage);

/* POST Route for processing the Register page */
router.post("/recruiter-register", indexController.processRecruiterRegisterPage);



/* GET to perform UserLogout */
router.get("/logout", indexController.performLogout);

module.exports = router;
