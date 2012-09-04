/*  feeds.js
	JavaScript feed parser utilizing the Google feed API and jQuery
	STC digital signage project
    ITGS HL project by Matt Chan 2011-12 
    Homepage: http://themattchan.com
    Live demo: http://corbomite.org/itgs
    GitHub: http://github.com/themattchan/STCsignageTV.git
*/

function getbulletin() {
//load the google API
google.load("feeds", "1");
google.setOnLoadCallback(function() {
var feed = new google.feeds.Feed("https://sc2.tg.esf.edu.hk/public/bulletin/get_bulletin_rss.php?u=b3515c2bb7fdb03f5b23be39ce3fec94&SchoolCode=SC");
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
google.setOnLoadCallback(function(){
//instead of a single feed, we iterate over an array of feeds
var rss=[
'http://rss.cnn.com/rss/edition.rss',
'http://rss.cnn.com/rss/edition_business.rss',
'http://www.forbes.com/news/index.xml',
'http://www.forbes.com/business/index.xml',
'http://feeds.bbci.co.uk/news/business/rss.xml',
'http://feeds.bbci.co.uk/news/world/rss.xml',
];
//using a jQuery iterator for simplicity, we apply an anonymous function to all entries in the rss array
//said array takes each item in each piece of xml and extracts the information by scanning xml tags
//at last, though DOM manipulation, the items are written
jQuery.each(rss, function(j,rss) {
	//grab entries
	var feed=new google.feeds.Feed(rss);
	feed.setNumEntries(20);
	feed.load(function(result) {
		if (!result.error) {
			var max=Math.min(result.feed.entries.length,20);
			var feedtitle=result.feed.title;
			//grab bits inside entries
			for (var i=0; i<max; i++) {
				var entry=result.feed.entries[i];
				var title=entry.title;
				var snip=entry.contentSnippet;
				var link=entry.link;
				var date=entry.publishedDate;
				//write each bit into the HTML, formatted with the relevant tags
				var f=$('<li class="news-item"></li>').appendTo('#entries-bottom-rss');
					f.append('<h2 class="feed">'+title+'&nbsp-&nbsp<small>'+feedtitle+'</small></h2>')
					.append('<div class="snip">'+snip+'</div> '); 
				}
			}
			});
		});
	});
	}

//ticker function
function ticker(item,container,delay,speed){
//jQuery anonymous function
jQuery(function($) {
	setInterval(function() {
		var first = $(item,container).first().each(function() {
			$(this).closest(container).append($(this).clone());
			//jQuery animation function
			$(this).slideUp(speed, function() {
				$(this).remove();
			});
		});
	}, delay);
});}

