$(document).ready(function(){

	var navbar = document.getElementById("navbar");
	var windowHeight = window.innerHeight;

	console.dir($(window).scrollTop());

	$(window).scroll(function(){
		if($(window).scrollTop() > windowHeight) { 
			$("#navbar").css("background-color", "rgba(1,1,1,0.6)");
		}else{
			$("#navbar").css("background-color", "rgba(1,1,1,1)");
		}
	})



});

