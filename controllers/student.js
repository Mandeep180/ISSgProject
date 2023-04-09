let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let studentRequest = require('../models/studentForm');

module.exports.processStudentContactForm = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty' });
    return;
  }

  //new Student request
  const request = new studentRequest({
    name: req.body.name,
    studentID: req.body.studentID,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  });

  request
    .save(request)
    .then((data) => {
      res.redirect('/student/student-dashboard');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occured while creating a create operation',
      });
    });
};
