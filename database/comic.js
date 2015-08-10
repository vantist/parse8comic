var connection = require('./config');

var comic = function(obj) {
	var connection = connection;
	this.update = update;
	this.remove = remove;
	this.insert = insert;

	function update() {}
	function remove() {}
	function insert() {
		connection.connect();

		connection.end();
	}
}

var comics = function() {
	var that = this;

	function getData() {
		var comic = that.comic;
		connection.connect();

		connection.query('SELECT * FROM `comic`', function(err, rows, fields) {
		  if (err) throw err;
		  comic = rows;
		});

		connection.end();
	}
}

module.exports = comic;