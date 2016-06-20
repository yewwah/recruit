var orlando = [{
        period: '2016-06-10',
        retweets: 1000,
        uniqueTweets:3000,
        exposure:1253
    }, {
        period: '2016-06-11',
        retweets: 4600,
        uniqueTweets:3800,
        exposure:799
    }, {
        period: '2016-06-12',
        retweets: 1198200,
        uniqueTweets:319400,
        exposure:418885
    }, {
        period: '2016-06-13',
        retweets: 1061400,
        uniqueTweets:26400,
        exposure:856268
    }, {
        period: '2016-06-14',
        retweets: 424500,
        uniqueTweets:119900,
        exposure:290949
    }, {
        period: '2016-06-15',
        retweets: 201300,
        uniqueTweets:66700,
        exposure:203843
        }];

var brexit = [{
        period: '2016-06-10',
        retweets: 100,
        uniqueTweets:3000,
        exposure:1253
    }, {
        period: '2016-06-11',
        retweets: 460,
        uniqueTweets:3800,
        exposure:799
    }, {
        period: '2016-06-12',
        retweets: 119200,
        uniqueTweets:319400,
        exposure:418885
    }, {
        period: '2016-06-13',
        retweets: 106400,
        uniqueTweets:26400,
        exposure:856268
    }, {
        period: '2016-06-14',
        retweets: 42400,
        uniqueTweets:119900,
        exposure:290949
    }, {
        period: '2016-06-15',
        retweets: 20100,
        uniqueTweets:66700,
        exposure:203843
        }];
var fashion = [{
        period: '2016-06-10',
        retweets: 9800,
        uniqueTweets:41400,
        exposure:11945
    }, {
        period: '2016-06-11',
        retweets: 11800,
        uniqueTweets:66400,
        exposure:19541
    }, {
        period: '2016-06-12',
        retweets: 14400,
        uniqueTweets:55100,
        exposure:16060
    }, {
        period: '2016-06-13',
        retweets: 18000,
        uniqueTweets:56000,
        exposure:17129
    }, {
        period: '2016-06-14',
        retweets: 18000,
        uniqueTweets:56000,
        exposure:17129
    }, {
        period: '2016-06-15',
        retweets: 14400,
        uniqueTweets:58000,
        exposure:16637
        }];
var iphone = [{
        period: '2016-06-10',
        retweets: 2700,
        uniqueTweets:21800,
        exposure:5190
    }, {
        period: '2016-06-11',
        retweets: 4800,
        uniqueTweets:52600,
        exposure:16487
    }, {
        period: '2016-06-12',
        retweets: 6800,
        uniqueTweets:49200,
        exposure:12503
    }, {
        period: '2016-06-13',
        retweets: 6200,
        uniqueTweets:52500,
        exposure:9127
    }, {
        period: '2016-06-14',
        retweets: 6800,
        uniqueTweets:48900,
        exposure:17878
    }, {
        period: '2016-06-15',
        retweets: 4300,
        uniqueTweets:52600,
        exposure:10744  
        }];
var impulserewards = [{
        period: '2016-06-10',
        retweets: 100,
        uniqueTweets:36000,
        exposure:161
    }, {
        period: '2016-06-11',
        retweets: 200,
        uniqueTweets:61000,
        exposure:573
    }, {
        period: '2016-06-12',
        retweets: 100,
        uniqueTweets:59800,
        exposure:375
    }, {
        period: '2016-06-13',
        retweets: 200,
        uniqueTweets:60200,
        exposure:223
    }, {
        period: '2016-06-14',
        retweets: 400,
        uniqueTweets:55600,
        exposure:356
    }, {
        period: '2016-06-15',
        retweets: 200,
        uniqueTweets:62600,
        exposure:331
        }];
$('#tableId').find('tr').click( function(){
  var test = ($(this).index());
  $('#morris-area-chart').remove();
  $('#append').append('<div id =  "morris-area-chart" />');
  var chart = Morris.Area({
        element: 'morris-area-chart',
        data: orlando,
        xkey: 'period', //datetime 
        ykeys : ['retweets', 'uniqueTweets', 'exposure'], //tweets
        labels: ['Retweets', 'Unique Tweets', 'Hastag Exposure(00s)' ],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
        });  
  if (test == '1') {
        chart.setData(brexit);
    }
    else if (test == '0'){
        chart.setData(orlando);
    }
    else if (test == '2'){
        chart.setData(fashion);

    }
    else if (test == '3'){
        chart.setData(iphone);

    }
    else if (test == '4'){
        chart.setData(impulserewards);

    }
});
