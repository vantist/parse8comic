var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'vantist.tw',
  user     : 'parse8comic',
  password : 'vantistparse8comic',
  database : 'parse8comic_test'
});

module.exports = connection;

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });

// connection.end();