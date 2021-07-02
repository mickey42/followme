const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const db = require("./app/models");

const app = express();

var corsOptions = {
  origin: "http://localhost:8001"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", function (req, res,) {
  console.log("hello wooorld");
  res.send("<h1>bonjour le monde.</h1>")
});

var test = require("./app/api/test.routes");

//Routes principales
app.use('/test', test);

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

// définit le port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});