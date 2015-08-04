var CronJob = require('cron').CronJob;

var comicDomain = 'http://www.comicvip.com';
var allComicUrl = comicDomain + '/comic/all.html';
var comics = {

}

var Parse2jquery = require('./parse2jquery');
var parse2jquery = new Parse2jquery('big5');

parse2jquery.request(allComicUrl, function($) {
  $('a[onmouseout="hidethumb();"]').each(function(index, el) {
    console.log("漫畫名稱：" + $(this).text() + ", 漫畫連結：" + comicDomain + $(this).attr('href') + ", 漫畫縮圖：" + comicDomain + '/pics/0/' + $(this).attr('href').replace('/html/', '').replace('.html', '') +'s.jpg');
  });

  console.log('共有：' + $('a[onmouseout="hidethumb();"]').length + '漫畫');
});

// 每十分鐘執行一次
var scheduler_job = new CronJob({
  cronTime: '*/10 * * * * *',
  onTick: function() {
    console.log((new Date()).getTime());
  },
  start: false
});

// scheduler_job.start();

module.exports = scheduler_job;