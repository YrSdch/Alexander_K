// $(window).load(function() {
//   $(".loader_inner").fadeOut();
//   $(".loader").delay(400).fadeOut("slow");
// });

document.addEventListener("DOMContentLoaded", function() {

	/*===================slide menu functions=======================*/

	$('.hamburger').click(function(){
		$('.slide-menu').toggleClass('active')
		$('body').toggleClass('stop-scroll')
		$('.overlay').toggleClass('active')
	})
	$('.overlay').click(function(){
		$(this).removeClass('active')
		$('body').removeClass('stop-scroll')
		$('.slide-menu').removeClass('active')
	})


});
