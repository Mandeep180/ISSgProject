var express = require('express');
var app = express();
var router = express.Router();
var port = 3000;


app.set('view engine', 'ejs');

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

/* GET Student Job page */
router.get("/student-job", (req, res, next) => {
  res.render("student/job", {
    title: "Student Job Board",
    //name: "",
  });
});

module.exports = router;