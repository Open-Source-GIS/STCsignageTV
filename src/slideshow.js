/*  slideshow.js
	Quick and dirty JavaScript slideshow 
	STC digital signage project
    ITGS HL project by Matt Chan 2011-12 
    Homepage: http://themattchan.com
    GitHub: http://github.com/themattchan/STCsignageTV.git
*/

//store all photos in the images directory under root,and name them 1,2,3,4... etc,up to 20
var imageDir = "images/";
//random images yes/no
var random_display = 0;
//initial total number of images in the directory. FALLBACK
var imageTotal = 20;
//initial time interval between switch in ms. FALLBACK
var interval = 1500;
//function to get user defined parameters
function getParameters(param1,param2,param3){
	imageTotal=param1;
	interval=param2;
	random_display=param3
}

//init array of image links
var imageNum = 0;
	imageArray = new Array();
	
//for loop to iterate through all images, as defined by the global variable imageTotal
for (i=1; i<imageTotal; i++){
	imageArray[imageNum++] = new imageItem(imageDir + i + ".jpg");	
	}
	
//functions to control the slideshow. i think the names are pretty self-explanatory.
function imageItem(image_location){
		this.image_item = new Image();
		this.image_item.src = image_location;
	}
function get_ImageItemLocation(imageObj){
		return(imageObj.image_item.src)
	}

//function for random numbers (kind of)
function randNum(x,y){
		var range = y - x + 1;
		return Math.floor(Math.random() * range) + x;
	}
	
//function to go to the next image
function getNextImage(){
		if (random_display) {
			imageNum = randNum(0,imageTotal-1);
		}
		else {
			imageNum = (imageNum+1) % imageTotal;
		}
    var new_image = get_ImageItemLocation(imageArray[imageNum]);
	return(new_image);
	}

//alas, define the actual slideshow function
function runSlideshow(id){
		var new_image = getNextImage();
		document[id].src = new_image;
		var recur_call = "runSlideshow('"+id+"')";
		timerID = setTimeout(recur_call,interval);
        }

