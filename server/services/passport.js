const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

// Google strategy
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: keys.googleClientID,
//       clientSecret: keys.googleClientSecret,
//       callbackURL: "http://localhost:3001/auth/google/callback",
//       userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log("access token", accessToken);
//       console.log("refresh token", refreshToken);
//       console.log("profile:", profile);
//       User.findOne({ googleId: profile.id }).then((existingUser) => {
//         if (existingUser) {
//           // we already have a record with the given profile ID
//           done(null, existingUser);
//         } else {
//           // we don't have a user record with this ID, make a new record
//           new User({ googleId: profile.id })
//             .save()
//             .then((user) => done(null, user));
//         }
//       });
//     }
//   )
// );

// Facebook strategy
// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: keys.facebookClientId,
//       clientSecret: keys.facebookClientSecret,
//       callbackURL: "http://localhost:3001/auth/facebook/callback"
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log("access token", accessToken);
//       console.log("refresh token", refreshToken);
//       console.log("profile:", profile);
//       User.findOne({ facebookId: profile.id }).then((existingUser) => {
//         if (existingUser) {
//           // we already have a record with the given profile ID
//           done(null, existingUser);
//         } else {
//           // we don't have a user record with this ID, make a new record
//           new User({ facebookId: profile.id })
//             .save()
//             .then((user) => done(null, user));
//         }
//       });
//     }
//   )
// );

// Github strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: keys.githubClientId,
      clientSecret: keys.githubClientSecret,
      callbackURL: "http://localhost:3001/auth/github/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("access token", accessToken);
      console.log("refresh token", refreshToken);
      console.log("profile:", profile);
      User.findOne({ githubId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // we already have a record with the given profile ID
          done(null, existingUser);
        } else {
          // we don't have a user record with this ID, make a new record
          new User({ githubId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);



