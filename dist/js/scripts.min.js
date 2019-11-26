// $(window).load(function() {
//   $(".loader_inner").fadeOut();
//   $(".loader").delay(400).fadeOut("slow");
// });

document.addEventListener("DOMContentLoaded", function() {

	/*===================slide menu functions=======================*/
	
	function slideMenu (clickElem, target, overlay){
		$(clickElem).click(function(){
			$(target).toggleClass('active');
			$('body').toggleClass('stop-scroll');
			$(overlay).toggleClass('active')
		});
	}

	function hideMenuBg (clickElem, target){ //hide menu with clicking on overlap bg
		$(clickElem).click(function(){
			$(this).removeClass('active')
			$('body').removeClass('stop-scroll')
			$(target).removeClass('active')
		});
	}

	$('.icon-white-bag').click(function(){
		$('.overlay-bg').removeClass('active')
		$('.shopping-cart-wrapper').removeClass('active')
		$('body').removeClass('stop-scroll')

	})

	slideMenu('.hamburger', '.slide-menu', '.overlay');
	slideMenu('.icon-shop', '.shopping-cart-wrapper', '.overlay-bg');
	
	hideMenuBg('.overlay-bg', '.shopping-cart-wrapper')
	hideMenuBg('.overlay', '.slide-menu')

/*===================slide menu functions=======================*/
	$('.arrow-up-right').click(function(){
		$(this).toggleClass('active');
		$('.version-wrapp').toggleClass('hidden');
		$(this).parent('.header__lower-signature').find('span').toggleClass('hidden');
	})

	
	
	
});
