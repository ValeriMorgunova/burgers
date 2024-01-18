//accordeon Section Team
var accoVerticalTitle = document.getElementsByClassName('team-acco__link');
var accoVerticalContent = document.getElementsByClassName('team-acco__block');

for (var i = 0; i < accoVerticalTitle.length; i++) {
	accoVerticalTitle[i].addEventListener('click', function() {
		if (!(this.classList.contains('active'))) {
			for(var i = 0; i < accoVerticalTitle.length; i++) {
				accoVerticalTitle[i].classList.remove('active');
			}
			this.classList.add('active');
		} else {
			this.classList.remove('active');
		}
	})
}



//accordeon Section Menu
$(function(){
$('.acco-menu__link').on('click', function(e){
    e.preventDefault();

    	let calculateWidth = () => {
		let windowWidth = $(window).width();
		let links = $(".acco-menu__link");
		let linkWidth = links.width();
		let reqWidth = windowWidth - linkWidth * links.length;
            console.log(reqWidth);
		return reqWidth > 500 ? 500 : reqWidth;
}

        var $this = $(this),
        container = $this.closest('.acco-menu__list'),
        item = $this.closest('.acco-menu__item'),
        items = container.find('.acco-menu__item'),
        activeItem = items.filter('.is-active'),
        content = item.find('.acco-menu__description'),
        activeContent = activeItem.find('.acco-menu__description');
        openWidth = calculateWidth();

        
        if (!item.hasClass('is-active')) {
            items.removeClass('is-active');
            item.addClass('is-active');
            activeContent.animate({
                   'width' : '0px'
            });       
            content.animate({
                   'width' : openWidth + 'px'

                   
            });
        } else {
            item.removeClass('is-active');
            content.animate({
                   'width' : '0px'
            });

        }
});



$(document).on('click', function (e) {
   var $this = $(e.target);
   if (!$this.closest('.acco-menu__list').length) {
         $('.acco-menu__description').animate({
               'width' : '0px'
         });
         $('.acco-menu__link').removeClass('is-active');
   }
});
});



//OnePageScroll
$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 800,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});



//burger-menu for adaptive
$('.menu__hamburger').on('click', function() {
   $('.nav__list').toggleClass('menu_state_open');
    $('.menu__hamburger').toggleClass('menu_state_open');

    });
    
      
    $('nav__item').on('click', function() {
      $('.nav__list')
        .removeClass('menu_state_open');
     });
  




//popup
$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $(".reviews-popup").show();
}
function PopUpHide(){
    $(".reviews-popup").hide();
}
$('.reviews-popup').on('click',function(e){
	var target = e.target;
	if(target.className !=='reviews-popup__block'){
		$(".reviews-popup").hide();
	}
})


//scroll
/* $(document).ready(function(){
	$(".button__link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);

	});
}); */

