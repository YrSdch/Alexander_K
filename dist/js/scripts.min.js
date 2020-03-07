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

	 $(window).scroll(function(){
	 	if(document.querySelector('.site-header .arrow-up-right')){
	 		document.querySelector('.site-header .arrow-up-right').classList.add('active')
	 	}
	 })
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
	$('.header__lower-signature[data-action=click]').click(function(){
		$(this).find($('.arrow-up-right')).toggleClass('active');
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
		 		console.log(distance)
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
      if (direction == 'up') {
      	$('html, body').animate({scrollTop: distance+$(window).scrollTop()},50)
      }
      if (direction == 'down') {
      	$('html, body').animate({scrollTop: $(window).scrollTop()-distance},50)
      }
		 },
		});

	
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
$('.number-mask').keydown(function(){
	$(this).mask('#');
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
/*=================== change  open share menu
=======================*/
	$('[data-click=share]').click(function(){
		$(this).parents('.share-wrapper').toggleClass('active')
	})
/*=================== change open share menu 
=======================*/

/*=================== check-out page function  
=======================*/

	$('input[data-action=copy]').blur(function(){
		if($(this).val()==''){
			$(this).parent('.input-row').removeClass('valid')
			$(this).parent('.input-row').addClass('not-valid')
		}else {
			$(this).parent('.input-row').removeClass('not-valid')
			$(this).parent('.input-row').addClass('valid')
		}
	})
	$('.submit-like-btn').on('click', function(){
		var stepCounter = $('[data-stepCounter]')// these var are needed to change the step counter in the <form> tag
		var stepVal = stepCounter.attr('data-stepCounter')//these var are needed to change the step counter in the <form> tag
		var currentStepVal = $(this).attr('data-stepIndex')//these var are needed to change the step counter in the <form> tag
		var parent = $(this).parents('.input-wrapper')
		var input = parent.find('[data-action=copy]')// find input 
		var newConteiner = parent.find('.input-info .input-info-content')// create a new container and add users data
		newConteiner.empty()
		input.each(function(){
			if($(this).val()==''){
				$(this).parent('.input-row').addClass('not-valid')
			}else{
				$(this).parent('.input-row').removeClass('not-valid')
			}
		})
		if(parent.find('.input-row').hasClass('not-valid')){
			return 
		}
		input.each(function(){ 

			var el = '<div>'+$(this).val()+'</div>'// create a new container and add users data
			newConteiner.append(el)
		})
		if(stepVal<currentStepVal){ // change the counter in the <form> tag
			stepCounter.attr('data-stepCounter',currentStepVal)
		}
		parent.toggleClass('active')
		setRoundProgressBar()
	})
	$('.input-wrapper').on('click', '.edit', function(){
		$(this).parents('.input-wrapper').toggleClass('active')
	})
	$('.input-bright').click(function(){
		$(this).removeClass('filled')
	})
	$('.input-bright').blur(function(){
		if(!$(this).val()==''){
			$(this).addClass('filled')
		}
	})

	// below function should check all input data at the last step and if input.val! == '' show order
	$('.input-container').on('keyup','input[data-action=copy]', function(){
		var parent = $(this).parents('.acordion-content')
		var input = $(this).parents('.acordion-content').find('input[data-action=copy]')
		var error = 0
		input.each(function(){
			if($(this).val() == ''){
				error = error+1
			}
		})
		function checkParent(){
			if(!input.parent('.input-row').hasClass('not-valid')){
				return true
				console.log('checkParent')

			}else{ 
				return false}
			}
			if(checkParent() && error == 0){
				$('.order-btn').removeAttr('disable')
				$('.order-btn').addClass('active')
			} else {
				$('.order-btn').attr('disable', true)
				$('.order-btn').removeClass('active')
			}
	})



	function showAccord (el){
		$(el).click(function(){
			$('[data-stepCounter]').attr('data-stepCounter',$(this).attr('data-stepValue'))//set the value of the 
			$(el).parents('.input-row').removeClass('active')//form counter for the change progress bar at the top of the page
				$('input[data-action=acord]').not(':checked').parents('.input-container').find('.not-valid').removeClass('not-valid')// remove errors calss
				if(el=='input[data-action=acord2]'){

						if(!$(this).is(':checked')){
							$(this).parents('.input-row').addClass('active')
						}
						if($(this).is(':checked')){
							$(this).parents('.input-row').find('.not-valid').removeClass('not-valid')// remove error massages
						}
				}else	if($(this).is(':checked')){
					$(this).parents('.input-row').addClass('active')
				}

			setRoundProgressBar ()
			})
	}

	

	function setRoundProgressBar (){//set round progress bar in top of page
		var reference = $('[data-stepCounter]')
			if(reference){
				var referenceVal = reference.attr('data-stepCounter')
				var roundCounter = $('.round-counter svg')
				roundCounter.html('<use xlink:href="#round'+referenceVal+'"></use>')

			}
	}
	function inputOnFocus(el){
			function removeClass(el){
				el.parent('.input-row').removeClass('not-valid')
				el.parent('.input-row').removeClass('valid')
			}
			$('[data-action=copy]').focus(function(){
				removeClass($(this))
			})
			$('.input-wrapper').on('click',el, function(){
			 	removeClass($(this))
			$(this).parent('.input-row').find('[data-action=copy]').focus()
		})
	}
/*=================== check-out page function 
=======================*/
/*=================== product page function (img in modal window)
=======================*/
if(document.querySelector('.prod-size')){
	
$('.prod-size-label').eq(0).addClass('active')
}

$('.prod-size').on('click', 'input', function(){
	if($('.prod-size').hasClass('active')){
		$('.prod-size').removeClass('active')
	}else $('.prod-size').addClass('active')
	$('.prod-size input').parents('.prod-size-label').removeClass('active')
	$(this).parents('.prod-size-label').addClass('active')

})
	console.log($('.prod-size-label').length)
	
	function hideProductImg(){
		if(document.querySelector('.prod-preview')){
			var img = $('.prod-preview .room-hidden')
			img.each(function(){
				if(!$(this).eq(0)){
					$(this).addClass('displ-none')
				}
			})
		}
	}
	hideProductImg()
	$('.fullscreen').on('click', function(event){
		event.preventDefault()
		var img = $(this).parents('.prod-preview').find('img').eq(0),
				parent = $(this).parents('.prod-preview')
		$('.modal-wind').toggleClass('active')
		$('.modal__img').html('<img src = "'+img.prop('src')+'">')
	})
	$('.modal__bg').click(function(){
		$('.modal-wind').toggleClass('active')
	})
	$('.close-modal').click(function(){
		$('.modal-wind').removeClass('active')
	})
	$('.room').on('click', function(event){
		event.preventDefault()
		var img = $(this).parents('.prod-preview').find('img'),
			parent = $(this).parents('.prod-preview')
			console.log(img.length)
		if(img.length==1){
			img = $(this).parents('.prod-preview').find('img').eq(0)
			console.log(';')
		}else img = $(this).parents('.prod-preview').find('img').eq(1)
		$('.modal-wind').toggleClass('active')
		$('.modal__img').html('<img src = "'+img.prop('src')+'">')
	})
	
/*=================== product page function (img in modal window)
=======================*/
/*=================== about page function (swipe)
=======================*/

	$('.mobile-swipe').swipe({
		 swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		 	if (direction == 'left') {
		 		slideAboutCountentRight()
      }
      if (direction == 'right') {
        slideAboutCountent()
      }
      if (direction == 'up') {
       $('body,html').animate({scrollTop: 700}, 400)
      }
		 },
		});
	function hideContentAboutPage(){
		if($(window).width()<992){
			var startIndex = 1
			$('.right-col-img').each(function(){
				if($(this).index() == startIndex){
					$(this).addClass('df')
				}else{
					$(this).addClass('displ-none')
				}
			}) 
		}else if($(window).width()>991) {
				$('.right-col-img').each(function(){
					$(this).removeClass('displ-none')
					$(this).removeClass('df')
				})
			}
			
	}
	
	console.log(document.querySelector('.swipe-hand'))
		$(window).scroll(function(){
				if(document.querySelector('.swipe-hand')){
					console.log(';')
					 if($('.right-col-img.df').offset().top+$('.right-col-img.df').height()<$(window).scrollTop()){
									$('.right-col-img').each(function(){
										$(this).removeClass('displ-none')
										console.log($(this).index())
										if($(this).index()==1){
											$(this).addClass('df')
										}else{
											$(this).addClass('displ-none')
										}
									})
									}
				}else return
			})
	
	function slideAboutCountent(){
		var elem = $('.mobile-swipe').find('.right-col-img')
		var currentEl = $('.mobile-swipe').find('.right-col-img.df')
		var currentElIndex = currentEl.index()-1
		var prevtElIndex = currentElIndex + 1;
		var prevtEl = elem.eq(prevtElIndex);
		if(currentElIndex>elem.length-2){
			prevtEl = elem.eq(0)
		}
		currentEl.removeClass('df')
		currentEl.addClass('displ-none')
		prevtEl.removeClass('displ-none')
		prevtEl.addClass('df')
	}
	function slideAboutCountentRight(){
		var elem = $('.mobile-swipe').find('.right-col-img')
		var currentEl = $('.mobile-swipe').find('.right-col-img.df')
		var currentElIndex = currentEl.index()-1
		var nextIndex = currentElIndex-1
		var nextEl = elem.eq(nextIndex)
		if(currentElIndex==0){
			nextEl = elem.eq(elem.length-1)
		}
		currentEl.removeClass('df')
		currentEl.addClass('displ-none')
		nextEl.removeClass('displ-none')
		nextEl.addClass('df')
	}
	
	$(window).resize(function(){
		hideContentAboutPage()
	})
	hideContentAboutPage()
/*=================== about page function (swipe)
=======================*/
/*=================== photo page function (swipe)
=======================*/
function photoSlide(target){
	var slideItem = $('.photo__item'),
			itemIndex = slideItem.index(),
			curentItem = $('.photo__item.active'),
			curentIndex = curentItem.index(),
			elemWidth = curentItem.width(),
			curentPos = curentItem.offset().left,
			nextEl = slideItem.eq(curentIndex+1)
			nextElThecond = slideItem.eq(curentIndex+2)
			console.log(curentPos)
			console.log(curentPos)
	if (target.hasClass('video-next')) {
		curentItem.animate({left: `${elemWidth}`},1000)
		curentItem.removeClass('active')
		curentItem.addClass('next')
		// if (curentIndex+2>slideItem.length) {
		// 	nextElThecond = slideItem.eq(0)
		// }
		// nextEl.animate({left: `${elemWidth }`},1000,function(){
		// 	nextEl.offset({left:`${curentPos - 45}`})
		// 	nextEl.addClass('active')
		// })
		// nextElThecond.animate({left: `${elemWidth}`}, 1000,function(){
			
		// })

		
		
		
	}

}
$('.video-next').click(function(){
	photoSlide($('.video-next'))
})


/*=================== photo page function (swipe)
=======================*/
 /*=================== animate shop-basket
=======================*/
   function remCls(){
	$('.icon-shop ').removeClass('full-shop')
	}
	$('.checkout ').click(function(){
		var top1 = $('.icon-shop').offset().top
		var right1 = $('.icon-shop').offset().left+$('.icon-shop').width()/2
		$('.prod-preview img').eq(0).clone().appendTo('.clon-cont')

		$('.clon-cont').addClass('fixed').animate({top: 15, right: 20, width: 0, height: 0}
			,1000,
			function(){
				$('.clon-cont').empty()
				$('.clon-cont').removeAttr('style')
				$('.clon-cont').removeClass('fixed')
				$('.icon-shop ').addClass('full-shop')
				var timeoutID = setTimeout(remCls, 2100)
			})
		
	})     

 function hideProductImg(){
		if(document.querySelector('.prod-preview')){
			var img = document.querySelectorAll('.prod-preview  img')
			for(var i = 0; i<img.length; i++){
				if([i]>0){
					img[i].classList.add('displ-none')
				}
			}
			
		}
	}
	hideProductImg()


function magniflierZoom(elem){
var native_width = 0;
 	 var native_height = 0;
  	var mouse = {x: 0, y: 0};
  	var magnify;
  	var cur_img;

  	var ui = {
    magniflier: elem 
  };

  if (ui.magniflier.length) {
    var div = document.createElement('div');
    div.setAttribute('class', 'glass');
    ui.glass = $(div);

    $('body').append(div);
  }

  var mouseMove = function(e) {
    var $el = $(this);

    var magnify_offset = cur_img.offset();
    mouse.x = e.pageX - magnify_offset.left;
    mouse.y = e.pageY - magnify_offset.top;
    if (
      mouse.x < cur_img.width() &&
      mouse.y < cur_img.height() &&
      mouse.x > 0 &&
      mouse.y > 0
      ) {
      magnify(e);
    }
    else {
      ui.glass.fadeOut(100);
    }

    return;
  };

  var magnify = function(e) {

    var rx = Math.round(mouse.x/cur_img.width()*native_width - ui.glass.width()/2)*-1;
    var ry = Math.round(mouse.y/cur_img.height()*native_height - ui.glass.height()/2)*-1;
    var bg_pos = rx + "px " + ry + "px";
    var glass_left = e.pageX - ui.glass.width() / 2;
    var glass_top  = e.pageY - ui.glass.height() / 2;
    ui.glass.css({
      left: glass_left,
      top: glass_top,
      backgroundPosition: bg_pos
    });
    return;
  };

  elem.on('mousemove', function() {
    ui.glass.fadeIn(200);
    
    cur_img = $(this);

    var large_img_loaded = cur_img.data('large-img-loaded');
    var src = cur_img.data('large') || cur_img.attr('src');
    if (src) {
      ui.glass.css({
        'background-image': 'url(' + src + ')',
        'background-repeat': 'no-repeat'
      });
    }

      if (!cur_img.data('native_width')) {
        var image_object = new Image();

        image_object.onload = function() {
          native_width = image_object.width;
          native_height = image_object.height;

          cur_img.data('native_width', native_width);
          cur_img.data('native_height', native_height);
          mouseMove.apply(this, arguments);
          ui.glass.on('mousemove', mouseMove);
        };
        image_object.src = src;
        return;
      } else {
        native_width = cur_img.data('native_width');
        native_height = cur_img.data('native_height');
      }
    mouseMove.apply(this, arguments);
    ui.glass.on('mousemove', mouseMove);
  });
  ui.glass.on('mouseout', function() {
    ui.glass.off('mousemove', mouseMove);
  });
}
	
    		
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

	showAccord('input[data-action=acord]');
	showAccord('input[data-action=acord2]');
	changeFill();

	inputOnFocus('.error');
	inputOnFocus('.not-error');
	magniflierZoom($('.prod-preview').find('img').eq(0))
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
