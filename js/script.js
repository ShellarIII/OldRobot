$(function() {
	$('.menu-icon').on('click', function(e) {
		e.preventDefault();
		$(e.currentTarget).toggleClass('menu-icon-active');
		$('.menu-item').toggleClass('menu-item-active');
		$('.search-icon').toggleClass('search-icon-active');
		$('.main-menu .logo').toggleClass('logo-active');
	});
});
