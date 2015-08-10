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

var num = 0;

// 每十分鐘執行一次
var scheduler_job = new CronJob({
  cronTime: '*/10 * * * * *',
  onTick: function() {
    var going = true;
    var start_time = (new Date()).getTime();
    var p_num = num++;
    console.log(p_num + ' start!');
    while (going) {
      if ((new Date()).getTime() - start_time > 5000) {
        going = false;
        console.log(p_num + ' stop!');
      }
    }
  },
  start: false
});

// scheduler_job.start();

module.exports = scheduler_job;