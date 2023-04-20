var db = require('../db');

module.exports = {
  // a function which produces all the messages
  getAll: function (callback) {
    var sqlString = 'SELECT messages.id, messages.messageText, messages.roomname, users.username FROM messages LEFT OUTER JOIN users ON (messages.username = users.id) ORDER BY messages.id DESC';
    db.query(sqlString, (err, results) => {
      callback(err, results);
    });
  },
  // a function which can be used to insert a message into the database
  create: function (params, callback) {
    // return db.query(`SELECT users.id FROM users WHERE users.username = '${username}'`, (err, results) => {
    //   db.query(`INSERT INTO messages ( id, messageText, roomname, username ) VALUES ( DEFAULT, '${messageText}', '${roomname}', '${results}')`);
    // });
    var sqlString = 'insert into messages(messageText, username, roomname) \
                    value (?, (select id from users where username = ? limit 1), ?)';
    db.query( sqlString, params, (err, results) => {
      callback(err, results);
    });
  }
};
