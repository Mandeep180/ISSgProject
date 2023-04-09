let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
var app = express();
//var port = 3000;

//import axios

const axios = require('axios');

//import controller from student
let controller = require('../controllers/student');

//import controller from recruiter
let recruiterController = require('../controllers/recruiter');

let passport = require('passport');
//let studentController = require("../controllers/student");

//function for guard purposes
function requireAuth(req, res, next) {
  // check if the user is logged in
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  next();
}

app.set('view engine', 'ejs');

/* GET Student Dashboard page */
router.get('/student-dashboard', (req, res, next) => {
  res.render('student/dashboard', {
    title: 'Student Dashboard',
    //name: "",
  });
});

/* GET Student Calendar page */
router.get('/student-calendar', (req, res, next) => {
  res.render('student/calendar', {
    title: 'Student Calendar',
    //name: "",
  });
});

/* GET Student Checklist page */
router.get('/student-checklist', (req, res, next) => {
  res.render('student/checklist', {
    title: 'Student Checklist',
    //name: "",
  });
});

/* GET Student Contact page */
router.get('/student-contact', (req, res, next) => {
  res.render('student/contact', {
    title: 'Student Contact',
    //name: "",
  });
});

/* GET Student Job page */
router.get('/student-job', (req, res) => {
  axios.get('http://localhost:3000/student/api').then(function (response) {
    res.render('student/job', {
      post: response.data,
      title: 'Student Job Board',
    });
  });
});

//Post Student Request from student contact page
router.post('/student-contact', controller.processStudentContactForm);

//Api request to display Student job board
router.get('/api', recruiterController.findJobPosts);

module.exports = router;
