let mongoose = require("mongoose");
let passportLocalMongoose = require("passport-local-mongoose");

//model class
//STUDENT
let User = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "username is required",
    },
    /* 
    password: {
      type: String,
      default: '',
      trim: true,
      required: 'password is required'
    },
    */
    email: {
      type: String,
      default: "",
      trim: true,
      required: "email address is required",
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display Name is required",
    },
    created: {
      type: Date,
      default: Date.now,
    },
    update: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "users",
  }
);

//STAFF
let StaffUser = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "username is required",
    },
    /* 
    password: {
      type: String,
      default: '',
      trim: true,
      required: 'password is required'
    },
    */
    email: {
      type: String,
      default: "",
      trim: true,
      required: "email address is required",
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display Name is required",
    },
    created: {
      type: Date,
      default: Date.now,
    },
    update: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "staff_users",
  }
);

//RECRUITER
let RecruiterUser = mongoose.Schema(
  {
    username: {
      type: String,
      default: "",
      trim: true,
      required: "username is required",
    },
    /* 
    password: {
      type: String,
      default: '',
      trim: true,
      required: 'password is required'
    },
    */
    email: {
      type: String,
      default: "",
      trim: true,
      required: "email address is required",
    },
    displayName: {
      type: String,
      default: "",
      trim: true,
      required: "Display Name is required",
    },
    created: {
      type: Date,
      default: Date.now,
    },
    update: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "recruiter_users",
  }
);

// configure options for User Model

let options = { missingPasswordError: "Wrong / Missing Password" };

//STUDENT
User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model("User", User);

//STAFF
StaffUser.plugin(passportLocalMongoose, options);

module.exports.StaffUser = mongoose.model("StaffUser", StaffUser);

//RECRUITER
RecruiterUser.plugin(passportLocalMongoose, options);

module.exports.RecruiterUser = mongoose.model("RecruiterUser", RecruiterUser);
