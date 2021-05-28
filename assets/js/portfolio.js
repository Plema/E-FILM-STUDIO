$(function(){
    $('.portfolio .filter li').on('click', function(){
        $('.portfolio li').removeClass('active');
        $(this).addClass('active');

        if($(this).hasClass('active') && $(this).hasClass('portfolio-all')){
            $('.portfolio-items').addClass('hide');
            $('.portfolio-items').removeClass('show');
            $('.portfolio-all-items').removeClass('hide');
            $('.portfolio-all-items').addClass('show');
        }
        if($(this).hasClass('active') && $(this).hasClass('portfolio-video')){
            $('.portfolio-items').addClass('hide');
            $('.portfolio-items').removeClass('show');
            $('.portfolio-video-items').removeClass('hide');
            $('.portfolio-video-items').addClass('show');
        }
        if($(this).hasClass('active') && $(this).hasClass('portfolio-site')){
            $('.portfolio-items').addClass('hide');
            $('.portfolio-items').removeClass('show');
            $('.portfolio-site-items').removeClass('hide');
            $('.portfolio-site-items').addClass('show');
        }
        if($(this).hasClass('active') && $(this).hasClass('portfolio-marketing')){
            $('.portfolio-items').addClass('hide');
            $('.portfolio-items').removeClass('show');
            $('.portfolio-marketing-items').removeClass('hide');
            $('.portfolio-marketing-items').addClass('show');
        }
    });
    $("#my-accordion").accordionjs();
});