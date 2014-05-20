/*
JavaScript for the demo: Referrer Specific jQuery Greeting
Author: Ian Lunn
Author URL: http://www.ianlunn.co.uk/
Demo URL: http://www.ianlunn.co.uk/demos/referrer-specific-jquery-greeting/
Tutorial URL: http://www.ianlunn.co.uk/blog/code-tutorials/referrer-specific-jquery-greeting/
License: http://creativecommons.org/licenses/by-sa/3.0/ (Attribution Share Alike). Please attribute work to Ian Lunn simply by leaving these comments in the source code or if you'd prefer, place a link on your website to http://www.ianlunn.co.uk/.
*/


$(document).ready(function() {
		
	//$.cookie("greeting", null); //<-- uncomment this if you wish to delete the cookie for testing
	
//	if($.cookie("greeting") != "off"){ //if the greeting hasn't been shown or turned off previously...
	
		var referrer = document.referrer.toLowerCase(); //get the referrer and convert it to lowercase
		
		if(referrer == "http://www.biomed.drexel.edu/faculty_pages/lelkes/"){ //if the referrer was the url specified...
		
			msg = 'Hello, we noticed that you were looking for iCTERM's website at Drexel. Please, note that we have moved to Temple University. Our new home on the Internet is <a href="http://www.icterm.net">http://www.icterm.net</a>.; //this is the message we are going to display
			img = '<img src=\"img/arrow.png\" alt=\"Arrow\" />'; //this is the image to go with the message
			
			$('body').append("<div id=\"greeting\"><div class=\"close-button\">Close X</div>" + img + "<p>" + msg + "</p></div>"); //append the message before the closing body tag </body>
			$('#greeting').show(); //change the css of #greeting to display: block (show it)
			$('#greeting').animate({bottom: '+=60'}, 1000); //animate #greeting so it moves into view
			//$.cookie("greeting", "off", { expires: 7}); //set a cookie that won't show the greeting a second time
		
		//this next line is commented out for the purpose of the demo
		//}
		
//	}
	
	$(".close-button").click(function() { //if the close button is clicked...
	$("#greeting").hide(); //hide the greeting
//	$.cookie("greeting", "off", { expires: 7}); //set a cookie that won't show the greeting a second time
	});	
	
});
