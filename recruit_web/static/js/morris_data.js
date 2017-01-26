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

function click_orlando(){
    document.getElementById('header').innerHTML = "Orlando Shooting";
    document.getElementById('box1_head1').innerHTML = "Brexit";
    document.getElementById('box1_head2').innerHTML = "@OrlandoPolice";
    document.getElementById('box1_cont').innerHTML = "Official victim count: 49 shooting victims plus suspect. Total 50.";

    document.getElementById('box2_head1').innerHTML = "Orlando Police";
    document.getElementById('box2_head2').innerHTML = "@OrlandoPolice";
    document.getElementById('box2_cont').innerHTML = "Any information you have could aid investigators in this case.";
    
    document.getElementById('box3_head1').innerHTML = "Orlando Police";
    document.getElementById('box3_head2').innerHTML = "@OrlandoPolice";
    document.getElementById('box3_cont').innerHTML = "Pulse Shooting: The shooter inside the club is dead.";
    
    document.getElementById('box4_head1').innerHTML = "Orlando Police";
    document.getElementById('box4_head2').innerHTML = "@OrlandoPolice";
    document.getElementById('box4_cont').innerHTML = "That sound was a controlled explosion by law enforcement. Please avoid reporting inaccuracies at this time.";
    
    document.getElementById('box5_head1').innerHTML = "Orlando Police";
    document.getElementById('box5_head2').innerHTML = "@OrlandoPolice";
    document.getElementById('box5_cont').innerHTML = "Shooting at Pulse Nightclub on S Orange. Multiple injuries. Stay away from area.";
       
}
function click_brexit(){
    document.getElementById('header').innerHTML = "Brexit";
    document.getElementById('box1_head1').innerHTML = "Brexit";
    document.getElementById('box1_head2').innerHTML = "@Brexit";
    document.getElementById('box1_cont').innerHTML = "RT @Ironwand: If you're happy with those who made this happen, vote to to <font color = 'red'>#REMAIN</font> in the <font color = 'red'>EU</font>. If you are not ";

    document.getElementById('box2_head1').innerHTML = "Brexit";
    document.getElementById('box2_head2').innerHTML = "@Brexit";
    document.getElementById('box2_cont').innerHTML = "I fear that #Brexit could be the beginning of the destruction of not only the <font color = 'red'>EU</font>, but also of <font color = 'red'>Western</font> political civilisation: @eucopresident";
    
    document.getElementById('box3_head1').innerHTML = "Brexit";
    document.getElementById('box3_head2').innerHTML = "@Brexit";
    document.getElementById('box3_cont').innerHTML = "RT @theordinaryman2: need to listen to @DanHannanMEP he's the smartest #Tory I know #EURef #VoteLeave #Brexit #remain #INorOUT #Labour";
    
    document.getElementById('box4_head1').innerHTML = "@Brexit";
    document.getElementById('box4_head2').innerHTML = "Brexit";
    document.getElementById('box4_cont').innerHTML = "<font color = 'red'>Freedom</font> lies in being bold. ";
    
    document.getElementById('box5_head1').innerHTML = "Brexit";
    document.getElementById('box5_head2').innerHTML = "@Brexit";
    document.getElementById('box5_cont').innerHTML = "RT @noticiassefarad: <font color = 'red'>EU Commission</font> Seeks Support to Greatly Expand Immigration despite Record <font color = 'red'>Unemployment</font>";
       
}
function click_fashion(){
    document.getElementById('header').innerHTML = "Fashion";
    document.getElementById('box1_head1').innerHTML = "fashion";
    document.getElementById('box1_head2').innerHTML = "@fashion";
    document.getElementById('box1_cont').innerHTML = "RT @jewellery_bank: <font color = 'red'>Beautiful</font> & distinctive Pendants 300 Designs";

    document.getElementById('box2_head1').innerHTML = "fashion";
    document.getElementById('box2_head2').innerHTML = "@fashion";
    document.getElementById('box2_cont').innerHTML = "Hailee Steinfeld Shows Off Her Chic Airport Style in Toronto http://dlvr.it/LcNlFL";
    
    document.getElementById('box3_head1').innerHTML = "fashion";
    document.getElementById('box3_head2').innerHTML = "@fashion";
    document.getElementById('box3_cont').innerHTML = "Carmen Vecchio Talks To Durtti About http://www.durtti.com/?p=406";
    
    document.getElementById('box4_head1').innerHTML = "fashion";
    document.getElementById('box4_head2').innerHTML = "@fashion";
    document.getElementById('box4_cont').innerHTML = "Nike men's 6.0 Skateboard Shoes Purple size 7 EUR 40";
    
    document.getElementById('box5_head1').innerHTML = "fashion";
    document.getElementById('box5_head2').innerHTML = "@fashion";
    document.getElementById('box5_cont').innerHTML = "Summer / winter looks #sketches #characterdesign #fashion";   
}

function click_iphone(){
    document.getElementById('header').innerHTML = "Iphone";
    document.getElementById('box1_head1').innerHTML = "iphone";
    document.getElementById('box1_head2').innerHTML = "@iphone";
    document.getElementById('box1_cont').innerHTML = "I have <font color = 'red'>Cauldron</font> on my island! Now my island is even more awesome! http://gigam.es/imtw_Tribez";

    document.getElementById('box2_head1').innerHTML = "iphone";
    document.getElementById('box2_head2').innerHTML = "@iphone";
    document.getElementById('box2_cont').innerHTML = "<font color = 'red'>Japan</font> Collections 28. 高校生のためのOCW - <font color = 'red'>Kyoto</font> University http://tinyurl.com/m9vscuu";
    
    document.getElementById('box3_head1').innerHTML = "iphone";
    document.getElementById('box3_head2').innerHTML = "@iphone";
    document.getElementById('box3_cont').innerHTML = "I have <font color = 'red'>Warehouse</font> on my <font color = 'red'>island</font>! Now my island is even more awesome! http://gigam.es/imtw_Tribez ";
    
    document.getElementById('box4_head1').innerHTML = "@iphone";
    document.getElementById('box4_head2').innerHTML = "iphone";
    document.getElementById('box4_cont').innerHTML = "<font color = 'red'>iPhone</font> 7 Rumored to Ship With Standard 3.5mm EarPods and <font color = 'red'>Lightning</font> Adapter http://bit.ly/28K8tTR";
    
    document.getElementById('box5_head1').innerHTML = "iphone";
    document.getElementById('box5_head2').innerHTML = "@iphone";
    document.getElementById('box5_cont').innerHTML = "I just gained 21 new followers using this awesome #iPhone #app";    
}

function click_implusrewards(){
    document.getElementById('header').innerHTML = "Implusrewards";
    document.getElementById('box1_head1').innerHTML = "rewards";
    document.getElementById('box1_head2').innerHTML = "@implusrewards";
    document.getElementById('box1_cont').innerHTML = "I'm earning #mPLUSRewards in The Weather Channel. http://getm.pt/g6u5ec";

    document.getElementById('box2_head1').innerHTML = "rewards";
    document.getElementById('box2_head2').innerHTML = "@implusrewards";
    document.getElementById('box2_cont').innerHTML = "I'm earning #mPLUSRewards in Ask Da Ball Android. http://getm.pt/plqw8x";
    
    document.getElementById('box3_head1').innerHTML = "rewards";
    document.getElementById('box3_head2').innerHTML = "@implusrewards";
    document.getElementById('box3_cont').innerHTML = "I'm earning #mPLUSRewards in Shower Thoughts with mPoints. http://getm.pt/66icch";
    
    document.getElementById('box4_head1').innerHTML = "";
    document.getElementById('box4_head2').innerHTML = "@implusrewards";
    document.getElementById('box4_cont').innerHTML = "I'm earning #mPLUSRewards in ScanLife. http://getm.pt/p0hg0v";
    
    document.getElementById('box5_head1').innerHTML = "rewards";
    document.getElementById('box5_head2').innerHTML = "@implusrewards";
    document.getElementById('box5_cont').innerHTML = "I'm earning #mPLUSRewards in Punchcard. http://getm.pt/smafbq @MyPunchcard";    
}

$('#tableId').find('tr').click( function(){
  var test = ($(this).index());
  $('#morris-area-chart').remove();
  $('#append').append('<div id =  "morris-area-chart" />');
  var chart = Morris.Area({
        element: 'morris-area-chart',
        data: orlando,
        xLabels: 'day',
        xkey: 'period', //datetime 
        ykeys : ['retweets', 'uniqueTweets', 'exposure'], //tweets
        labels: ['Retweets', 'Unique Tweets', 'Hastag Exposure(00s)' ],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
        });  


  if (test == '0') {
        chart.setData(orlando);
        document.getElementById("row1col1").innerHTML = "This Gov't is KILLING us! FBI had Undercover Informant on <font color = 'red'>Islamic</font> <font color = 'red'>#Orlando</font> Shooter Years Before Attack <font color = 'red'>#RadicalIslam</font>" ; 
        document.getElementById("row1col2").innerHTML = "Gov't, FBI, Shooter, Attack" ;
        document.getElementById("row2col1").innerHTML = "<font color = 'red'>Gun</font> control defeated in <font color = 'red'>Senate</font>. Again. #Orlando means nothing if you're paid by the <font color = 'red'>NRA</font>." ; 
        document.getElementById("row2col2").innerHTML = "Gun, NRA" ; 
        document.getElementById("row3col1").innerHTML = "<font color = 'red'>RETWEET</font> if you agree <font color = 'red'>Obama</font> admin should release the full, unredacted transcript of the #Orlando shooter's 911 call" ; 
        document.getElementById("row3col2").innerHTML = "RETWEET, Obama" ; 
        document.getElementById("row4col1").innerHTML = "Guess who supported <font color = 'red'>Hillary Clinton</font>? " ; 
        document.getElementById("row4col2").innerHTML = "Hillary, Clinton" ; 
        document.getElementById("row5col1").innerHTML = "At vigil outside <font color = 'red'>NRA</font> HQ protesters hold hearts with names of #Orlando <font color = 'red'>victims</font>." ; 
        document.getElementById("row5col2").innerHTML = "NRA, victims" ; 
    }
    else if (test == '1'){
        chart.setData(brexit);
        click_brexit();
        document.getElementById("row1col1").innerHTML = "RT @Ironwand: If you're happy with those who made this happen, vote to to <font color = 'red'>#REMAIN</font> in the <font color = 'red'>EU</font>. If you are not " ; 
        document.getElementById("row1col2").innerHTML = "#REMAIN, EU" ;
        document.getElementById("row2col1").innerHTML = "I fear that #Brexit could be the beginning of the destruction of not only the <font color = 'red'>EU</font>, but also of <font color = 'red'>Western</font> political civilisation: @eucopresident" ; 
        document.getElementById("row2col2").innerHTML = "EU, Western" ; 
        document.getElementById("row3col1").innerHTML = "<font color = 'red'>Freedom</font> lies in being bold. " ; 
        document.getElementById("row3col2").innerHTML = "Freedom" ; 
        document.getElementById("row4col1").innerHTML = "RT @theordinaryman2: need to listen to @DanHannanMEP he's the smartest #Tory I know #EURef #VoteLeave #Brexit #remain #INorOUT #Labour" ; 
        document.getElementById("row4col2").innerHTML = "" ; 
        document.getElementById("row5col1").innerHTML = "RT @noticiassefarad: <font color = 'red'>EU Commission</font> Seeks Support to Greatly Expand Immigration despite Record <font color = 'red'>Unemployment</font>" ; 
        document.getElementById("row5col2").innerHTML = "EU, Commission, Unemployment" ; 

    }
    else if (test == '2'){
        chart.setData(fashion);
        click_fashion();
        document.getElementById("row1col1").innerHTML = "RT @jewellery_bank: <font color = 'red'>Beautiful</font> & distinctive Pendants 300 Designs" ; 
        document.getElementById("row1col2").innerHTML = "Beautiful" ;
        document.getElementById("row2col1").innerHTML = "Hailee Steinfeld Shows Off Her Chic Airport Style in Toronto http://dlvr.it/LcNlFL" ; 
        document.getElementById("row2col2").innerHTML = "";
        document.getElementById("row3col1").innerHTML = "Carmen Vecchio Talks To Durtti About http://www.durtti.com/?p=406"; 
        document.getElementById("row3col2").innerHTML = "";
        document.getElementById("row4col1").innerHTML = "Nike men's 6.0 Skateboard Shoes Purple size 7 EUR 40" ; 
        document.getElementById("row4col2").innerHTML = "";
        document.getElementById("row5col1").innerHTML = "Summer / winter looks #sketches #characterdesign #fashion" ; 
        document.getElementById("row5col2").innerHTML = "" ; 
 

    }
    else if (test == '3'){
        chart.setData(iphone);
        click_iphone();
        document.getElementById("row1col1").innerHTML = "I have <font color = 'red'>Cauldron</font> on my island! Now my island is even more awesome! http://gigam.es/imtw_Tribez" ; 
        document.getElementById("row1col2").innerHTML = "Cauldron" ;
        document.getElementById("row2col1").innerHTML = "<font color = 'red'>Japan</font> Collections 28. 高校生のためのOCW - <font color = 'red'>Kyoto</font> University http://tinyurl.com/m9vscuu" ; 
        document.getElementById("row2col2").innerHTML = "Japan, Kyoto" ; 
        document.getElementById("row3col1").innerHTML = "I have <font color = 'red'>Warehouse</font> on my <font color = 'red'>island</font>! Now my island is even more awesome! http://gigam.es/imtw_Tribez " ; 
        document.getElementById("row3col2").innerHTML = "Warehouse, island" ; 
        document.getElementById("row4col1").innerHTML = "<font color = 'red'>iPhone</font> 7 Rumored to Ship With Standard 3.5mm EarPods and <font color = 'red'>Lightning</font> Adapter http://bit.ly/28K8tTR" ; 
        document.getElementById("row4col2").innerHTML = "iPhone, Lightning" ; 
        document.getElementById("row5col1").innerHTML = "I just gained 21 new followers using this awesome #iPhone #app" ; 
        document.getElementById("row5col2").innerHTML = "" ; 

    }
    else if (test == '4'){
        chart.setData(impulserewards);
        click_implusrewards
        document.getElementById("row1col1").innerHTML = "I'm earning #mPLUSRewards in The Weather Channel. http://getm.pt/g6u5ec" ; 
        document.getElementById("row1col2").innerHTML = "" ;
        document.getElementById("row2col1").innerHTML = "I'm earning #mPLUSRewards in Ask Da Ball Android. http://getm.pt/plqw8x" ; 
        document.getElementById("row2col2").innerHTML = "" ; 
        document.getElementById("row3col1").innerHTML = "I'm earning #mPLUSRewards in Shower Thoughts with mPoints. http://getm.pt/66icch" ; 
        document.getElementById("row3col2").innerHTML = "" ; 
        document.getElementById("row4col1").innerHTML = "I'm earning #mPLUSRewards in ScanLife. http://getm.pt/p0hg0v" ; 
        document.getElementById("row4col2").innerHTML = "" ; 
        document.getElementById("row5col1").innerHTML = "I'm earning #mPLUSRewards in Punchcard. http://getm.pt/smafbq @MyPunchcard" ; 
        document.getElementById("row5col2").innerHTML = "" ; 


    }
});
