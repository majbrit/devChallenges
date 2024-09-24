const express = require("express");
const cors = require("cors");
const session = require("express-session");

const app = express();

var corsOptions = {
  origin: "http://localhost:8001"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'mein-geheimer-schluessel', 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

const db = require("./app/models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

db.sequelize.sync({ force: true }).then(() => {});

app.get("/", (req, res) => {
  res.json({ message: "Hello, I'm the server!" });
});

require("./app/routes/taskboard.routes")(app);

// set port
// listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost: ${PORT}.`);
});

