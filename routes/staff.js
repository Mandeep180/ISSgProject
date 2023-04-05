var express = require('express');
var app = express();
var router = express.Router();
var port = 3000;


app.set('view engine', 'ejs');

/* GET Staff Dashboard page */
router.get("/staff-dashboard", (req, res, next) => {
  res.render("staff/dashboard", {
    title: "Staff Dashboard",
    //name: "",
  });
});

/* GET Staff Calendar page */
router.get("/staff-calendar", (req, res, next) => {
  res.render("staff/calendar", {
    title: "Staff Calendar",
    //name: "",
  });
});

/* GET Staff Form page */
router.get("/staff-form", (req, res, next) => {
  res.render("staff/form", {
    title: "Staff Form",
    //name: "",
  });
});

/* GET Staff Inbox page */
router.get("/staff-inbox", (req, res, next) => {
  res.render("staff/inbox", {
    title: "Staff Inbox",
    //name: "",
  });
});

module.exports = router;