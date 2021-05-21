const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require("./app/models");

const app = express();

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/hello", function (req, res,) {
  console.log("test route");
  res.send("bonjour le monde.")
});

var test = require("./app/api/test.routes");

app.use('/test', test);

// définit le port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});