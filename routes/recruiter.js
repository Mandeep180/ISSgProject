var express = require('express');
var app = express();
var router = express.Router();
var port = 3000;


app.set('view engine', 'ejs');

/* GET Recruiter Dashboard page */
router.get("/recruiter-dashboard", (req, res, next) => {
  res.render("recruiter/dashboard", {
    title: "Recruiter Dashboard",
    //name: "",
  });
});

/* GET Recruiter Job page */
router.get("/recruiter-job", (req, res, next) => {
  res.render("recruiter/job", {
    title: "Recruiter Job Board",
    //name: "",
  });
});

/* GET Recruiter Job posting page */
router.get("/recruiter-posting", (req, res, next) => {
  res.render("recruiter/posting", {
    title: "Recruiter Job Posting",
    //name: "",
  });
});

/* GET Recruiter Inbox page */
router.get("/recruiter-inbox", (req, res, next) => {
  res.render("recruiter/inbox", {
    title: "Recruiter Inbox",
    //name: "",
  });
});

module.exports = router;