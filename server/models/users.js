var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var sqlString = 'SELECT * FROM users';
    db.query(sqlString, (err, results) => {
      callback(err, results);
    });
  },
  create: function (params, callback) {
    // use db to send username to Database
    // db.query(`INSERT INTO users (id, username) VALUES (DEFAULT, '${username}')`);
    var sqlString = 'insert into users(username) value (?)';
    db.query(sqlString, params, (err, results) => {
      callback(err, results);
    });
  }
};
