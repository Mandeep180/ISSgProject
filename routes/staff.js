var express = require('express');
var app = express();
var router = express.Router();
var port = 3000;

app.set('view engine', 'ejs');

//import controller
const controller = require('../controllers/admin');
//import axios for bakground request (retrieve requests from students)
const axios = require('axios');

/* GET Staff Dashboard page */
router.get('/staff-dashboard', (req, res, next) => {
  res.render('staff/dashboard', {
    title: 'Staff Dashboard',
    //name: "",
  });
});

/* GET Staff Calendar page */
router.get('/staff-calendar', (req, res, next) => {
  res.render('staff/calendar', {
    title: 'Staff Calendar',
    //name: "",
  });
});

/* GET Staff Form page */
router.get('/staff-form', (req, res, next) => {
  res.render('staff/form', {
    title: 'Staff Form',
    //name: "",
  });
});

/* GET Staff Inbox page */
router.get('/staff-inbox', (req, res) => {
  axios
    .get('http://localhost:3000/staff/api')
    .then(function (response) {
      res.render('staff/inbox', { requests: response.data, title: 'Inbox' });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get('/api', controller.findRequests);

module.exports = router;
