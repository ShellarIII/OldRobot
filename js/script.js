$(function() {
	$('.menu-icon').on('click', function(e) {
		e.preventDefault();
		$(e.currentTarget).toggleClass('menu-icon-active');
		$('.menu-item').toggleClass('menu-item-active');
		$('.search-icon').toggleClass('search-icon-active');
		$('.main-menu .logo').toggleClass('logo-active');
	});
	$(window).on('scroll', function(){
	    var ratio = $(document).scrollTop()/(($(document).height() - $(window).height()) / 100);
	    $(".progress_bar").width(ratio+"%");
	});
	var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      freeMode: true,
			autoHeight: true,
			centeredSlides: true
    });
});
