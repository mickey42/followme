const db = require("../models");
const Test = db.test;
const Op = db.Sequelize.Op;

// Create and Save a new Test
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "TEST DE CONTENU"
      });
      return;
    }
  
    // Create a Test
    const test = {
      title: req.body.title,
      description: req.body.description,
      // published: req.body.published ? req.body.published : false
    };
  
    // save test
    Test.create(test)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "errorkatsanscatnotefonde"
        });
      });
  };

// find all tests in the db
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Test.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "errorkatsanscatnotefonde"
        });
      });
  };

//find one test by id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Test.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Test with id=" + id
        });
      });
  };

// edit a test already exist
exports.update = (req, res) => {
    const id = req.params.id;
  
    Test.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Test was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Test with id=${id}. Maybe Test was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Test with id=" + id
        });
      });
  };
//delete one by id
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Test.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Test was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Test with id=${id}. Maybe Test was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Test with id=" + id
        });
      });
  };