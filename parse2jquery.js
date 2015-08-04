var request = require('request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');

var Processtime = require('./processtime');
/*
 * Sample: 
 * 		var parse2jquery = new Parse2jquery(encoding);
 * 		parse2jquery.request('http://google.com', function($) {
 * 			console.log($('a').text());	
 * 		});
 */

var parse2jquery = function(encoding) {
	// private
	var that = this;
	// public
	this.encoding = encoding || 'utf-8';
	this.request = Request;

	function Request(url, callback) {
		var encoding = that.encoding;
		var processtime = new Processtime();
		processtime.start('[parse2jquery][解析網頁: ' + url + ' ]');

		request({
		  uri: url,
		  encoding: null
		}, function (error, response, body) {
		  if (!error && response.statusCode == 200) {
		    callback.call(this, cheerio.load(iconv.decode(body, encoding)));
		  }
		  processtime.end('[parse2jquery][解析網頁: ' + url + ' ]');
		});
	}
}

module.exports = parse2jquery;