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

function addRowHandlers() {
    var table = document.getElementById("tableId");
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
        var currentRow = table.rows[i];
        var createClickHandler = 
            function(row) {
                return function(){ 
                    var cell = row.getElementsByTagName("td")[0];
                    var id = cell.innerHTML;
                    alert("id:" + id);

                    if(id =="#orlando"){
                        Morris.Area({
                        element: 'morris-area-chart',
                        data: orlando,
                        xkey: 'period', //datetime 
                        ykeys : ['retweets', 'uniqueTweets', 'exposure'], //tweets
                        labels: ['Retweets', 'Unique Tweets', 'Hastag Exposure(00s)' ],
                        pointSize: 2,
                        hideHover: 'auto',
                        resize: true
                        });

                    }
                    else if (id == "##brexit"){
                        Morris.Area({
                        element: 'morris-area-chart',
                        data: brexit,
                        xkey: 'period', //datetime 
                        ykeys : ['retweets', 'uniqueTweets', 'exposure'], //tweets
                        labels: ['Retweets', 'Unique Tweets', 'Hastag Exposure(00s)' ],
                        pointSize: 2,
                        hideHover: 'auto',
                        resize: true
                        });

                    }
                };
            };

        currentRow.onclick = createClickHandler(currentRow);
    }
}
window.onload = addRowHandlers();