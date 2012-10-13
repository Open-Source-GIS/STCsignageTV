STC Digital Signage System
==========================

About
-----

[Matt Chan][]'s project for IB ITGS HL, May 2013 examinations. Developed for use on information displays in [Sha Tin College][], Hong Kong.

Requirements
------------

[Google Chrome][] recommended. A web server or [local XAMPP stack][] required for PHP file uploader.

How to use
----------

1. Download and open index.html
2. Modify the parameters in the index.html file to change:

Slideshow settings:

	getParameters(<total number of images><time interval in ms>,<randomize slideshow Y N>);
	runSlideshow('carousel');
	
RSS slider settings:

	ticker(<rss item id>,<rss container id>,<time delay in ms>,<speed in ms>);
	
3. Modify the parameters in the feeds.js file to change the RSS links
	
	var rss=[
	'feed1.rss',
	'feed2.rss',
	<etc>,
	];
	
To use the PHP uploader, the source files must be run from a server supporting PHP. Download and install a copy of XAMPP, and modify the .htaccess file to point to your password file.

	AuthUserFile </absolute/path/to/password>

Consult the Apache docs for information on how to generate the password file.


Reference materials and code
----------------------------

Documentation and How-tos:
- <http://www.w3schools.com/>
- <http://docs.jquery.com/>
- <http://www.php.net/manual/en/>
- <http://httpd.apache.org/docs/2.2/>

RSS feed loader:
- <https://developers.google.com/feed/v1/>
- <http://code.google.com/apis/ajax/playground/?exp=feeds>
- <http://www.javascriptkit.com/dhtmltutors/googleajaxfeed.shtml>

RSS slider:
- <http://workshop.rs/2011/09/news-ticker-in-4-lines-of-jquery/>

Slideshow:
- <http://www.webmonkey.com/2010/02/make_a_javascript_slideshow/>

PHP slide uploader:
- <http://www.php.net/manual/en/features.file-upload.multiple.php>
- <http://www.php.net/manual/en/function.unlink.php>

[Matt Chan]: http://themattchan.com
[Sha Tin College]: http://shatincollege.edu.hk
[Google Chrome]: https://www.google.com/intl/en/chrome/browser/
[local XAMPP stack]: http://www.apachefriends.org/en/xampp.html