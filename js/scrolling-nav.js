$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        $('html').animate({scrollTop: $($(this).attr('href')).offset().top-54}, 1000);
    });

    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });
});

