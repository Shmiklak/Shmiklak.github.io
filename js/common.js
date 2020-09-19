$(function() {

    new WOW().init();

	$(".mobile-nav-toggle").on('click', function() {
	   $('.header-nav-list').addClass('active');
	   $('body').addClass('fade');
    });


    $(window).click(function() {
        $('.header-nav-list').removeClass('active');
        $('body').removeClass('fade');
    });

    $('.header-nav-list, .mobile-nav-toggle').click(function(event){
        event.stopPropagation();
    });

    Splitting();

    $(window).on('load', function () {
        $('[data-splitting], .banner').addClass('loaded');
        $('.loader').fadeOut('fast');
    });
});
