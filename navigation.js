$(document).ready(function() {
	$("a[href='#top']").click(function(){
		$('html, body').animate({ scrollTop: 0}, "slow");
		return false;
	})
	$("a[href='#scroll']").click(function(){
		$('html, body').animate({ 
			scrollTop: $(".main").offset().top
		}, "slow");
	})
	$("#hamburger").click(function(){
		$("ul").slideToggle("slow");
	})
})
				  
// JavaScript Document