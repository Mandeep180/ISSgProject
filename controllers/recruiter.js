let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let jobPost = require('../models/job-posting');

module.exports.proccessJobForm = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be empty' });
    return;
  }

  //new Job Post
  const post = new jobPost({
    JobTitle: req.body.JobTitle,
    CompanyName: req.body.CompanyName,
    Email: req.body.Email,
    PhoneNumber: req.body.PhoneNumber,
    Salary: req.body.Salary,
    Location: req.body.Location,
    Availability: req.body.Availability,
    JobDetails: req.body.JobDetails,
  });

  post
    .save(post)
    .then((data) => {
      res.redirect('/recruiter/recruiter-job');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occured while creating a new job post',
      });
    });
};

module.exports.findJobPosts = (req, res) => {
  jobPost
    .find()
    .then((post) => {
      res.send(post);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Error occured while retriving job posts information',
      });
    });
};
