var processtime = function() {
	// private
	var that = this;
	var startTime;
	// public
	this.start = start;
	this.end = end;

	function start(prefix) {
		that.startTime = (new Date()).getTime();
		console.log(prefix + ', 起始時間: ' + that.startTime);
	}
	
	function end(prefix) {
		var end = (new Date()).getTime();
		console.log(prefix + ', 結束時間: ' + end + ', 執行秒數: ' + (end - that.startTime)/1000.0);
	}
}

module.exports = processtime;