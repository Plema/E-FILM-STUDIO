$(function(){

    $(".top-link").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

    // Header

    $('.open-menu').on('click', function() {
        $('.header').find('nav').toggle();
    });

    // POPUPS

    if($('.project-popup').hasClass('show') || $('.thanks-project-popup').hasClass('show') || $('.error-project-popup').hasClass('show') || $('.vacancy-popup').hasClass('show') || $('.reviews-popup').hasClass('show') || $('.thanks-reviews-popup').hasClass('show') || $('.error-reviews-popup').hasClass('show')){

        $('body').css('overflow', 'hidden');
    }
    $('.close-popup').on('click', () => {
        $('.project-popup, .thanks-project-popup, .error-project-popup, .vacancy-popup, .reviews-popup, .thanks-reviews-popup, .error-reviews-popup').removeClass('show');
        
        $('.project-popup, .thanks-project-popup, .error-project-popup, .vacancy-popup, .reviews-popup, .thanks-reviews-popup, .error-reviews-popup').addClass('hide');
        $('body').css('overflow', 'auto');
    });

});