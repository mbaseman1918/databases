var models = require('../models');

module.exports = {
  // a function which handles a get request for all messages
  get: function (req, res) {
    models.messages.getAll((err, results) => {
      if (err) {
        console.error('Unable to retrieve messages from the database: ', err);
        res.sendStatus(500);
      } else {
        res.json(results);
      }
    });
  },
  // a function which handles posting a message to the database
  post: function (req, res) {
    var params = [req.body.message, req.body.username, req.body.roomname];
    models.messages.create(params, (err, results) => {
      if (err) {
        console.error('Unable to post messages to the DB: ', err);
        res.sendStatus(500);
      }
      res.sendStatus(201);
    });
  }
};