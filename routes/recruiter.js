var express = require('express');
var app = express();
var router = express.Router();
var port = 3000;

//import controller
const controller = require('../controllers/recruiter');
//import axios for bakground request (retrieve requests from students)
const axios = require('axios');

app.set('view engine', 'ejs');

/* GET Recruiter Dashboard page */
router.get('/recruiter-dashboard', (req, res, next) => {
  res.render('recruiter/dashboard', {
    title: 'Recruiter Dashboard',
    //name: "",
  });
});

/* GET Recruiter Job page */
router.get('/recruiter-job', (req, res) => {
  axios.get('http://localhost:3000/recruiter/api').then(function (response) {
    res.render('recruiter/job', {
      post: response.data,
      title: 'Job Board',
    });
  });
});

/* GET Recruiter Job posting page */
router.get('/recruiter-posting', (req, res, next) => {
  res.render('recruiter/posting', {
    title: 'Recruiter Job Posting',
    //name: "",
  });
});

/* GET Recruiter Inbox page */
router.get('/recruiter-inbox', (req, res, next) => {
  res.render('recruiter/inbox', {
    title: 'Recruiter Inbox',
    //name: "",
  });
});

router.post('/recruiter-posting', controller.proccessJobForm);

router.get('/api', controller.findJobPosts);

module.exports = router;
