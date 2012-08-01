/*  feeds.js
	JavaScript feed parser utilizing the Google feed API and jQuery
	STC digital signage project
    ITGS HL project by Matt Chan 2011-12 
    Homepage: http://themattchan.com
    Live demo: http://corbomite.org/itgs
    GitHub: http://github.com/themattchan/STCsignageTV.git
*/

var feeds={};

function getbulletin() {
google.load("feeds", "1");
google.setOnLoadCallback(function() {
 var feed = new google.feeds.Feed("http://rss.cnn.com/rss/edition_business.rss");
 //https://sc3.tg.esf.edu.hk/public/bulletin/get_bulletin_rss.php?u=b3515c2bb7fdb03f5b23be39ce3fec94&SchoolCode=SC
	  feed.setNumEntries(10);
      feed.load(function(result) {
        if (!result.error) {
        var max=Math.min(result.feed.entries.length,10);
		var feedtitle=result.feed.title;
			for (var i=0; i<max; i++) {
				var entry=result.feed.entries[i];
				var title=entry.title;
				var snip=entry.contentSnippet;
				var link=entry.link;
				var date=entry.publishedDate;
				var f=$('<li class="bulletin-item"></li>').appendTo('#entries-bulletin');
					f.append('<h2 class="feed">'+title+'</h2>')
					.append('<div class="snip">'+snip+'</div> '); 
				}
			}
			});
		});
}

function getnewsfeeds() {
//feed parser using the Google Feed API
//init all the variables needed
google.load("feeds","1");
google.setOnLoadCallback(function() {
var rss=[
'http://rss.cnn.com/rss/edition.rss',
'http://rss.cnn.com/rss/edition_business.rss',
'http://www.forbes.com/news/index.xml',
'http://www.forbes.com/business/index.xml',
'http://feeds.bbci.co.uk/news/business/rss.xml',
'http://feeds.bbci.co.uk/news/world/rss.xml',
];
jQuery.each(rss, function(j,rss) {
	var feed=new google.feeds.Feed(rss);
	feed.setNumEntries(20);
	feed.load(function(result) {
		if (!result.error) {
			var max=Math.min(result.feed.entries.length,20);
			// 5 at most
			var feedtitle=result.feed.title;
			for (var i=0; i<max; i++) {
				var entry=result.feed.entries[i];
				var title=entry.title;
				var snip=entry.contentSnippet;
				var link=entry.link;
				var date=entry.publishedDate;
				var f=$('<li class="news-item"></li>').appendTo('#entries-bottom-rss');
					f.append('<h2 class="feed">'+title+'&nbsp-&nbsp<small>'+feedtitle+'</small></h2>')
					.append('<div class="snip">'+snip+'</div> '); 
				}
			}
			});
		});
	});
	}

function ticker(item,container,delay,speed){
jQuery(function($) {
	setInterval(function() {
		var first = $(item,container).first().each(function() {
			$(this).closest(container).append($(this).clone());
			$(this).slideUp(speed, function() {
				$(this).remove();
			});
		});
	}, delay);
});}

