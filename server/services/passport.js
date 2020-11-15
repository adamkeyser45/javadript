const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
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

// Github strategy
passport.use(
  new GitHubStrategy(
    {
      clientID: keys.githubClientId,
      clientSecret: keys.githubClientSecret,
      callbackURL: "http://localhost:3001/auth/github/callback",
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
          new User({ githubId: profile.id, displayName: profile.displayName })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
