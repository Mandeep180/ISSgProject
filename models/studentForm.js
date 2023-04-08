const mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  studentID: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const studentRequest = mongoose.model('studentRequest', schema);

module.exports = studentRequest;
