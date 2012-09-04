/*  slideshow.js
	Quick and dirty JavaScript slideshow 
	STC digital signage project
    ITGS HL project by Matt Chan 2011-12 
    Homepage: http://themattchan.com
    GitHub: http://github.com/themattchan/STCsignageTV.git
*/

//Parameters
//store all photos in the images directory under root,and name them 1,2,3,4... etc,up to 20
var imgDir = "images/";
//random images yes/no
var random_slides = 0;
//initial total number of images in the directory. FALLBACK
var imgTotal = 20;
//initial time interval between switch in ms. FALLBACK
var interval = 1500;
//function to get user defined parameters
function getParameters(param1,param2,param3){
	imgTotal=param1;
	interval=param2;
	random_slides=param3
}
//------------------------------------------------------
//init array of image links
var imgNum = 0;
	imgArray = new Array();
	
//for loop to iterate through all images, as defined by the global variable imgTotal
for (i=1; i<imgTotal; i++){
	imgArray[imgNum++] = new imgElem(imgDir +"Slide"+ i + ".jpg");	
	}
	
//functions to control the slideshow. 
//get location of the current image object
function imgElem(imgLoc){
	this.imgInst = new Image();
	this.imgInst.src = imgLoc;
	}
	
//get location of any image object	
function getImgElemLoc(imgObj){
	return(imgObj.imgInst.src)
	}

//function for random numbers (kind of)
function randNum(x,y){
	var range = y - x + 1;
	return Math.floor(Math.random() * range) + x;
	}
	
//function to go to the next image. spits out the location of the next image
//using the getImgElmLoc function
function getNextImg(){
		if (random_slides) {imgNum = randNum(0,imgTotal-1);}
		else {imgNum = (imgNum+1) % imgTotal;}
    var newImg = getImgElemLoc(imgArray[imgNum]);
	return(newImg);
	}

//alas, define the actual slideshow function
function runSlideshow(id){
	//a variable to call the Function
	var newImg = getNextImg();
	//put the variable into the HTML through DOM
	document[id].src = newImg;
	//infinite loop
	var looper = "runSlideshow('"+id+"')";
	timerID = setTimeout(looper,interval);
	}

