const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  JobTitle: {
    type: String,
    required: true,
  },

  CompanyName: {
    type: String,
    required: true,
  },

  Email: {
    type: String,
    required: true,
  },

  PhoneNumber: {
    type: String,
    required: true,
  },

  Salary: {
    type: String,
    required: true,
  },

  JobDetails: {
    type: String,
    required: true,
  },
});

const jobRequest = mongoose.model('jobRequest', schema);

module.exports = jobRequest;
