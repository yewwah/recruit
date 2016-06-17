$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
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
        }],
        xkey: 'period', //datetime 
        ykeys : ['retweets', 'uniqueTweets', 'exposure'], //tweets
        labels: ['Retweets', 'Unique Tweets', 'Hastag Exposure(00s)' ],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
