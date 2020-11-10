const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const path = require("path");
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./models/User");
require("./services/passport");


const { typeDefs, resolvers } = require("./schemas");
// const { authMiddleware } = require('./utils/auth');
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// passport initialize
app.use(passport.initialize());
app.use(passport.session());


require("./routes/authRoutes")(app);

// Serve up static assets
app.use("/images", express.static(path.join(__dirname, "../client/images")));

// if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
// }

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

