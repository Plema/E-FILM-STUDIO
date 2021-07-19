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

    $('.portfolio .filter-title').on('click', function(){
        $('.portfolio .filter-list').toggle();
        $('.portfolio .filter-title .filter-arrow').toggleClass('filter-arrow-down');
    });
    if($(window).width() < 1024){
        $('.portfolio .filter-list li').on('click', function(){
            $('.portfolio .filter-list').toggle();
            $('.portfolio .filter-title .filter-arrow').toggleClass('filter-arrow-down');
        });
    }

    $(".portfolio-item .text p").each(function(i){
        len=$(this).text().length;
        if(len>116)
        {
          $(this).text($(this).text().substr(0,116)+'...');
        }
      }); 
    
    $("#my-accordion").accordionjs();
    jcf.replaceAll();
});