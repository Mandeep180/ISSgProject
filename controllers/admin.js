let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let studentRequest = require('../models/studentForm');

module.exports.findRequests = (req, res) => {
  studentRequest
    .find()
    .sort({ name: 1 })
    .then((request) => {
      res.send(request);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Error occured while retriving user information',
      });
    });
};
