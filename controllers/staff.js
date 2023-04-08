let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let staffForm = require('../models/staff-form');

module.exports.processStaffForm = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: 'Please enter Information' });
    return;
  }

  // new Staff form
  const request = new staffForm({
    studentName: req.body.studentName,
  studentEmail: req.body.studentEmail,
  staffName: req.body.staffName,
  organizeType: req.body.organizeType,
  appointmentDate: req.body.appointmentDate,
  appointmentTime: req.body.appointmentTime,
  appointmentNotes: req.body.appointmentNotes,
  });

  request
    .save(request)
    .then((data) => {
      res.redirect('/staff/staff-dashboard');
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some errors...',
      });
    });
};
