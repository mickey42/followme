var express = require("express")
const test = require("../controllers/test.controller.js");

const router = express.Router();

//test
router.get('/hello4thetest', function (req, res) {
  res.send('Hello World!');
});

// Create a new Test
router.post("/", (req, res) => {
  res.send(test.create);
});

// // find all
// router.get("/", test.findAll);
router.get("/", (req, res) => {
  res.send(test.findAll);
})

// // getAll
router.get("/all", (req, res) => {
  res.send(test.findAllPublished);
})

// // getOne
router.get("/:id", (req, res) => {
  res.send(test.findOne);
})

// // updateById
router.put("/:id", (req, res) => {
  res.send(test.update);
})

// // deleteById
router.delete("/:id", (req, res) => {
  res.send(test.delete);
}) 

// // deleteAll
router.delete("/", (req, res) => {
  res.send(test.deleteAll);
})

module.exports = router;