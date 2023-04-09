let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

//create the user model instance
let userModel = require("../models/user");
let User = userModel.User; //alias

/* STUDENT AUTHENTICATION */
module.exports.displayLoginPage = (req, res, next) => {
  // check if the user is already logged in
  if (!req.user) {
    res.render("auth/login", {
      title: "Student Sign In",
      messages: req.flash("loginMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }

      // const payload = {
      //   id: user._id,
      //   displayName: user.displayName,
      //   username: user.username,
      //   email: user.email,
      // };

      // const authToken = jwt.sign(payload, DB.Secret, {
      //   expiresIn: 604800, // 1 week
      // });

      /* TODO - Getting Ready to convert to API
          res.json({success: true, msg: 'User Logged in Successfully!', user: {
              id: user._id,
              displayName: user.displayName,
              username: user.username,
              email: user.email
          }, token: authToken});
          */

      return res.redirect("/student/student-dashboard");
    });
  })(req, res, next);
};

module.exports.displayRegisterPage = (req, res, next) => {
  // check if the user is not already logged in
  if (!req.user) {
    res.render("auth/register", {
      title: "Student Registration",
      messages: req.flash("registerMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processRegisterPage = (req, res, next) => {
  // instantiate a user object
  let newUser = new User({
    username: req.body.username,
    //password: req.body.password
    email: req.body.email,
    displayName: req.body.displayName
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        req.flash(
          "registerMessage",
          "Registration Error: User Already Exists!"
        );
        console.log("Error: User Already Exists!");
      }
      return res.render("auth/register", {
        title: "Student Registration",
        messages: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName : "",
      });
    } else {
      // if no error exists, then registration is successful

      // redirect the user and authenticate them

      /* TODO - Getting Ready to convert to API
          res.json({success: true, msg: 'User Registered Successfully!'});
          */

      return passport.authenticate("local")(req, res, () => {
        res.redirect("/student/student-dashboard");
      });
    }
  });
};


/* STAFF AUTHENTICATION */
module.exports.displayStaffLoginPage = (req, res, next) => {
  // check if the user is already logged in
  if (!req.user) {
    res.render("auth/login", {
      title: "Staff Sign In",
      messages: req.flash("loginMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processStaffLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }
      return res.redirect("/staff/staff-dashboard");
    });
  })(req, res, next);
};

module.exports.displayStaffRegisterPage = (req, res, next) => {
  // check if the user is not already logged in
  if (!req.user) {
    res.render("auth/register", {
      title: "Staff Registration",
      messages: req.flash("registerMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processStaffRegisterPage = (req, res, next) => {
  // instantiate a user object
  let newUser = new User({
    username: req.body.username,
    //password: req.body.password
    email: req.body.email,
    displayName: req.body.displayName
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        req.flash(
          "registerMessage",
          "Registration Error: User Already Exists!"
        );
        console.log("Error: User Already Exists!");
      }
      return res.render("auth/register", {
        title: "Staff Registration",
        messages: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName : "",
      });
    } else {
      return passport.authenticate("local")(req, res, () => {
        res.redirect("/staff/staff-dashboard");
      });
    }
  });
};





/* RECRUITER AUTHENTICATION */
module.exports.displayRecruiterLoginPage = (req, res, next) => {
  // check if the user is already logged in
  if (!req.user) {
    res.render("auth/login", {
      title: "Recruiter Sign In",
      messages: req.flash("loginMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processRecruiterLoginPage = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // server err?
    if (err) {
      return next(err);
    }
    // is there a user login error?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      // server error?
      if (err) {
        return next(err);
      }
      return res.redirect("/recruiter/recruiter-dashboard");
    });
  })(req, res, next);
};

module.exports.displayRecruiterRegisterPage = (req, res, next) => {
  // check if the user is not already logged in
  if (!req.user) {
    res.render("auth/register", {
      title: "Recruiter Registration",
      messages: req.flash("registerMessage"),
      displayName: req.user ? req.user.displayName : "",
    });
  } else {
    return res.redirect("/");
  }
};

module.exports.processRecruiterRegisterPage = (req, res, next) => {
  // instantiate a user object
  let newUser = new User({
    username: req.body.username,
    //password: req.body.password
    email: req.body.email,
    displayName: req.body.displayName
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        req.flash(
          "registerMessage",
          "Registration Error: User Already Exists!"
        );
        console.log("Error: User Already Exists!");
      }
      return res.render("auth/register", {
        title: "Recruiter Registration",
        messages: req.flash("registerMessage"),
        displayName: req.user ? req.user.displayName : "",
      });
    } else {
      return passport.authenticate("local")(req, res, () => {
        res.redirect("/recruiter/recruiter-dashboard");
      });
    }
  });
};


/* Logout */
module.exports.performLogout = (req, res, next) => {
  req.logout(function(err) {
    if (err) {return next(err); }
    res.redirect("/");
  });
};
