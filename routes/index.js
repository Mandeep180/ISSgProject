var express = require('express');
var app = express();
var router = express.Router();
var port = 3000;

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

/* GET Student Dashboard page */
router.get("/student-dashboard", (req, res, next) => {
  res.render("student/dashboard", {
    title: "Student Dashboard",
    //name: "",
  });
});
/* GET Student Calendar page */
router.get("/student-calendar", (req, res, next) => {
  res.render("student/calendar", {
    title: "Student Calendar",
    //name: "",
  });
});
/* GET Student Checklist page */
router.get("/student-checklist", (req, res, next) => {
  res.render("student/checklist", {
    title: "Student Checklist",
    //name: "",
  });
});
/* GET Student Contact page */
router.get("/student-contact", (req, res, next) => {
  res.render("student/contact", {
    title: "Student Contact",
    //name: "",
  });
});

/* GET Admin Dashboard page */
router.get("/admin-dashboard", (req, res, next) => {
  res.render("admin/dashboard", {
    title: "Admin Dashboard",
    //name: "",
  });
});

/* GET Recruiter Dashboard page */
router.get("/recruiter-dashboard", (req, res, next) => {
  res.render("recruiter/dashboard", {
    title: "Recruiter Dashboard",
    //name: "",
  });
});

module.exports = router;
