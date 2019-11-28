// $(window).load(function() {
//   $(".loader_inner").fadeOut();
//   $(".loader").delay(400).fadeOut("slow");
// });

document.addEventListener("DOMContentLoaded", function() {

	const player = new Plyr('#player'); //init player
	 
	
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
/*===================slide menu functions=======================*/
	

/*=================== the functions of the slides of 
collection versions in header(homepage) functions 
=======================*/
		function fadeHeaderNext(elem, dataSlide){
			$(elem).click(function(){
				var currentEl = $('.current'+dataSlide);
				var currentElIndex = currentEl.index();
				var nextElIndex = currentElIndex + 1;
				var nextEl = $(dataSlide).eq(nextElIndex);
				currentEl.hide();
				currentEl.removeClass('current');
				if(nextElIndex == $(dataSlide+':last').index()+1){
					$(dataSlide).eq(0).fadeIn();
					$(dataSlide).eq(0).addClass('current');
				} else {
					nextEl.show();
					nextEl.addClass('current');
				}
			})
		}
		function fadeHeaderPrev(elem, dataSlide){
			$(elem).click(function(){
				var currentEl = $('.current'+dataSlide);
				var currentElIndex = currentEl.index();
				var prevtElIndex = currentElIndex - 1;
				var prevtEl = $(dataSlide).eq(prevtElIndex);
				currentEl.hide();
				currentEl.removeClass('current');
				prevtEl.show();
				prevtEl.addClass('current')
				
			})
		}
/*=================== the functions of the slides of 
collection versions in header(homepage) functions 
=======================*/
/*=================== rotate arrow 
=======================*/
	$('.arrow-up-right[data-action=click]').click(function(){
		
	})

	
	$('.arrow-up-right').click(function(){
		$(this).toggleClass('active');
		$('.version-wrapp').toggleClass('hidden');
		$(this).parent('.header__lower-signature').find('span').toggleClass('hidden');
	})
/*=================== rotate arrow 
=======================*/


/*=================== swipe function
=======================*/
	jQuery('header').swipe({
		 swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		 	if (direction == 'left') {
		 		function slideLeft(dataSlide){
		 			var currentEl = $('.current'+dataSlide);
					var currentElIndex = currentEl.index();
					var prevtElIndex = currentElIndex - 1;
					var prevtEl = $(dataSlide).eq(prevtElIndex);
					currentEl.hide();
					currentEl.removeClass('current');
					prevtEl.show();
					prevtEl.addClass('current')
		 		}
		 		slideLeft('[data-slide=collec-img]')
		 		slideLeft('[data-slide=collec-title]')			
		 		slideLeft('[data-slide=collec-ver]')
      }
      if (direction == 'right') {
        function slideRight(dataSlide){
        	var currentEl = $('.current'+dataSlide);
					var currentElIndex = currentEl.index();
					var nextElIndex = currentElIndex + 1;
					var nextEl = $(dataSlide).eq(nextElIndex);
					currentEl.hide();
					currentEl.removeClass('current');
					if(nextElIndex == $(dataSlide+':last').index()+1){
						$(dataSlide).eq(0).fadeIn();
						$(dataSlide).eq(0).addClass('current');
					} else {
						nextEl.show();
						nextEl.addClass('current');
					}
        }
        slideRight('[data-slide=collec-img]')
        slideRight('[data-slide=collec-title]')
        slideRight('[data-slide=collec-ver]')
      }
		 },
		});


	slideMenu('.hamburger', '.slide-menu', '.overlay');
	slideMenu('.icon-shop', '.shopping-cart-wrapper', '.overlay-bg');
	hideMenuBg('.overlay-bg', '.shopping-cart-wrapper')
	hideMenuBg('.overlay', '.slide-menu')

	fadeHeaderNext('.arrow-right', '[data-slide=collec-img]');
	fadeHeaderNext('.arrow-right', '[data-slide=collec-title]');
	fadeHeaderNext('.arrow-right', '[data-slide=collec-ver]');

	fadeHeaderPrev('.arrow-left', '[data-slide=collec-img]');
	fadeHeaderPrev('.arrow-left', '[data-slide=collec-title]');
	fadeHeaderPrev('.arrow-left', '[data-slide=collec-ver]');
/*=================== swipe function 
=======================*/

$(window).resize(function(){
		setMargin()
	})
	function setMargin(){
		var marg = $('[data-margin=propaganda]').offset().left - 20
		$('#setOffset').offset({left: marg})
	}
	setMargin()
	
});
