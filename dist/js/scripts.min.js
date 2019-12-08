// $(window).load(function() {
//   $(".loader_inner").fadeOut();
//   $(".loader").delay(400).fadeOut("slow");
// });

document.addEventListener("DOMContentLoaded", function() {

	$('[data-hide=hideFooterMain]').parents('body').find('main').addClass('displ-none') //hide main-content on home page
	$('[data-hide=hideFooterMain]').parents('body').find('footer').addClass('displ-none')//hide footer on home page
	$('[data-action=click]').click(function(){
		$(this).parents('body').find('main').toggleClass('displ-none'); //show main-content on home page
		$(this).parents('body').find('footer').toggleClass('displ-none'); //show footer on home page
	})


	const player = new Plyr('#player'); //init player
	const player2 = new Plyr('#mediaPlayer'); //init player

	 
	
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
		$(this).toggleClass('active');
		$('.version-wrapp').toggleClass('hidden');
		$(this).parent('.header__lower-signature').find('span').toggleClass('hidden');
		if($(window).width()<991){
			$(this).parents('header').find('.tablet-aligm').toggleClass('displ-none');
			$(this).parents('header').find('.responsive-height').toggleClass('min-h30')
			$(this).parents('.site-header').toggleClass('min-h30')
		}
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

	/*=================== grid system for shap art page
=======================*/

	// $('.galery').imagesLoaded( function() {
	//   $('#galery__container').masonry({
	// 	  itemSelector: '.galery__item',
	// 	  columnWidth: '.galery__item',
	// 	  // horizontalOrder: true,
	// 	  transitionDuration: 0,

	// 	});
	// });

/*=================== grid system for shap art page
=======================*/
/*=================== form validation
=======================*/

	$('.check-valid input').each(function(){
		var parent = $(this).parent('.check-valid')
		$(this).focus(function(){
			parent.removeClass('not-valid')
			parent.removeClass('valid')
		})
		$(this).blur(function(){
			if($(this).val() == ''){
				$(this).parent('.check-valid').addClass('not-valid')
			}else{
				$(this).parent('.check-valid').addClass('valid')
			}
		})
	})


/*=================== form validation
=======================*/
$('.phone-mask').keydown(function(){
	$(this).mask('+1-000-000-00');
})
	

/*=================== like tabs on privacy page
=======================*/
	$('.privacy-list ul li span').click(function(){
         var attr = $(this).attr('data-name')
         $('.privacy-list ul li span').removeClass('active');
         $('.privacy-text p').removeClass('active');
         $(this).addClass('active');
         $('.privacy-text p').each(function(){
            if($(this).attr('data-name')==attr){
                $(this).addClass('active');
            }
         })
    })
/*=================== like tabs on privacy page
=======================*/
/*=================== cut long text
=======================*/
$("[data-action=cut_blog_text]").text(function(i, text) {
  if (text.length >= 155) {
    text = text.substring(0, 155);
    var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
    text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
  }
  $(this).text(text);
});

/*=================== cut long text
=======================*/
/*=================== change fill-prop of icon 
=======================*/ 
 function changeFill(){
 	var mark = document.querySelector('.bright-nav')
 		if (mark) {
 			document.getElementById('cart_path1').setAttribute('stroke','#000')
 			document.getElementById('cart_path2').setAttribute('stroke','#000')
 			document.getElementById('cart_path3').setAttribute('fill','#000')
 			document.getElementById('cart_path4').setAttribute('stroke','#000')
 			document.getElementById('cart_path5').setAttribute('stroke','#000')
 		} else return
 }



/*=================== change fill-prop of icon 
=======================*/
/*=================== call the function
=======================*/
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

	changeFill()
/*=================== swipe function 
=======================*/
// function to fix some responsive problem

var setOfset =document.getElementById('setOffset')
	function setMargin(){
		if (setOfset!==null) {
			var marg = document.querySelector('[data-margin=propaganda]').offsetLeft
			setOfset.style.left = marg - 20 +'px'
		}else return
			 
	}
	setMargin()
	$(window).resize(function(){
		setMargin()
	})
});
