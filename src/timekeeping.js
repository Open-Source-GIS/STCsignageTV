/*  timekeeping.js
	JavaScript clock and date
	STC digital signage project
    ITGS HL project by Matt Chan 2011-12 
    Homepage: http://themattchan.com
    Live demo: http://corbomite.org/itgs
    GitHub: http://github.com/themattchan/STCsignageTV.git
*/

//define a function for the clock
function clock(){
	//get the parameters we need: h,m,s. we pull these attributes from the global variable,
	//javascript's built in Date function that handles all things to do with time.
	var time=new Date();
	var hr=time.getHours();
	var min=time.getMinutes();
	var sec=time.getSeconds();
	var day=time.getDay();
	var mnth=time.getMonth();
	var yr=time.getFullYear();
	
	//convert the 24 hr format into 12 hr, for aesthetic reasons
	var ampm=(hr<12)?"AM":"PM"; //add the AM/PM to the date
	
	//format the hour
	if (hr==0) {hr=12;}
	else if (hr>12) {hr=hr-12;}
	else {hr=hr};
	
	//add a zero in front of the mins and sec
	if (min<10) {min="0"+min;};
	if (sec<10) {sec="0"+sec;};
	
	//insert into an element with the ID 'clock' to save time.
	//also has the advantage of being self-updating.
	document.getElementById('clock').innerHTML=hr+":"+min+":"+sec+" "+ampm;
	t=setTimeout('clock()',500);
}

//define a function to print the date
function date(){
	//get the parameters we need: d,m,y.
	var time=new Date();
	var day=time.getDay();
	var mnth=time.getMonth();
	var yr=time.getFullYear();
	
	//since the parameters pulled from the Date function are all numerical, we need to 
	//convert them into the corresponding English words in order to print the date longform.
	//we do this by making arrays and then calling the corresponding entry by passing the current month/day into it
	var dayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var monthArray=["January","February","March","April","May","June","July","August","September","October","November","December"];
	var smallmonthArray=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	
	//insert into an element with the ID 'date'. when printing the variables in the arrays, the input numbers (e.g. what day it is)
	//automatically modulo themselves according to the no. of entries in the array.
	document.getElementById('date').innerHTML=dayArray[day]+", "+day+" "+monthArray[mnth]+" "+yr;
	t=setTimeout('date()',500);
}
