var models = require('../models');

module.exports = {
  get: function (req, res) {

    var data = models.users.getAll((err, results) => {
      if (err) {
        console.error('Unable to retrieve users from the database: ', err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    // console.log('I am the cashier taking the order', req.body);
    // console.log(models);
    var params = [req.body.username];
    models.users.create(params, (err, results) =>{
      if (err) {
        console.error('Unable to post users to the DB: ', err);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  }
};
