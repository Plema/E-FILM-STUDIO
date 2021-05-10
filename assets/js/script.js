$(function(){

    $(".top-link").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });

    // Header

    $(window).scroll(function(){
        var sticky = $('.header'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 200) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    $('.open-menu').on('click', function() {
        $('.header').find('nav').toggle();
        $('.open-menu').toggleClass('animate-menu-icon');


        if($(window).width() < 1024){
            if($('nav').css('display') == 'block'){
                $('.feedback_link').css('display', 'block');
                $('.wrapper').append('<div class="blackout"></div>');
                $('.fixed').css('height', '100vh');
            } else if($('nav').css('display') == 'none'){
                $('.feedback_link').css('display', 'none');
                $('.blackout').css('display', 'none');
                $('.header').removeClass('fixed');
                $('.header').css('height', 'auto');
            }
        }else if($(window).width() >= 1024){
            if($('nav').css('display') == 'block'){
                $('.header-nav').css('border', 'none');
                $('.wrapper').append('<div class="blackout"></div>');
            } else if($('nav').css('display') == 'none'){
                $('.header-nav').css('border-bottom', '1px solid #e0dfe6');
                $('.blackout').css('display', 'none');
                $('.nav-inner .nav-inner-item').find('.subnav').css('display', 'none');
                $('.header-nav').css('height', 'auto');
                $('.nav-inner .nav-inner-item').find('a').css('color', 'rgba(82, 93, 125, 0.7)');
                $('.nav-inner .nav-inner-item').find('.subnav-arrow').css({
                    'transform': 'rotate(0deg)', 
                    'transition': 'all 0.3s',
                    'background': 'url("img/subnav-arrow.svg") no-repeat center',
                    'background-size': 'cover'
                });
            }
        }
    });

    // Cities select

    function hideCitiesMenuAndArrow(){
        $('.dropdown-list').removeClass('show');
        $('.dropdown-list').addClass('hide');
        $('.arrow').css({'transform': 'rotate(0deg)', 'transition': 'all 0.3s'});
    }

    $(".default").click(function () {

        $('.cities-mob').toggleClass('active');

        if($('.cities-mob').hasClass('active')){
            $('.dropdown-list').removeClass('hide');
            $('.dropdown-list').addClass('show');
            $('.arrow').css({'transform': 'rotate(-180deg)', 'transition': 'all 0.3s'});

        }else{
            hideCitiesMenuAndArrow();
        }
    });
      
    $(".dropdown-list li").click(function() {
        $('.default').html($(this).text() + '<span class="arrow"></span>');
        $('.default .arrow').css({'transform': 'rotate(-180deg)', 'transition': 'all 0.01s'});
        $('.cities-mob').removeClass('active');

        setTimeout(hideCitiesMenuAndArrow, 10);
    });

    //Subnav
    if($('.nav-inner .nav-inner-item').has('.subnav')){
        $('a + .subnav').prev('a').append('<span class="subnav-arrow"></span>');

        $('.nav-inner .nav-inner-item').has('.subnav').on('click', function(){
            $(this).find('.subnav').toggle();

            if($(window).width() < 1024){
                if($(this).find('.subnav').css('display') === 'block'){
                    $(this).find('.subnav-arrow').css({'transform': 'rotate(-180deg)', 'transition': 'all 0.3s'});
                } else if($(this).find('.subnav').css('display') === 'none'){
                    $(this).find('.subnav-arrow').css({'transform': 'rotate(0deg)', 'transition': 'all 0.3s'});
                }
            } else if($(window).width() >= 1024 && $(window).width() < 1280){
                if($(this).find('.subnav').css('display') === 'block'){
                    $(this).find('.subnav').css({'display': 'flex'});
                }
                if($(this).find('.subnav').css('display') === 'flex'){
                    $(this).find('.subnav-arrow').css({
                        'transform': 'rotate(-90deg)', 
                        'transition': 'all 0.3s',
                        'background': 'url("img/hover-arrow.svg") no-repeat center',
                        'background-size': 'cover'
                    });
                    $(this).find('a').css({'color': '#525D7D'});
                    $('.header-nav').css({'height': '1010px'});

                } else if($(this).find('.subnav').css('display') === 'none'){
                    $(this).find('.subnav-arrow').css({
                        'transform': 'rotate(0deg)', 
                        'transition': 'all 0.3s',
                        'background': 'url("img/subnav-arrow.svg") no-repeat center',
                        'background-size': 'cover'
                    });
                    $(this).find('a').css({'color': 'rgba(82, 93, 125, 0.7)'});
                    $('.header-nav').css({'height': 'auto'});
                }
            } else if($(window).width() >= 1280){
                if($(this).find('.subnav').css('display') === 'block'){
                    $(this).find('.subnav').css({'display': 'flex'});
                }
                if($(this).find('.subnav').css('display') === 'flex'){
                    $('.header-nav').css({'height': '541px'});
                    $('.logo-languages').css({'border-bottom': '1px #DDDCE4 solid', 'padding-bottom': '25px'});
                    $('.nav-inner').css({'border-bottom': '1px #DDDCE4 solid', 'padding-bottom': '35px'});
                    $(this).find('.subnav-arrow').css({
                        'width': '11px',
                        'height': '11px',
                        'background': 'url("img/close-subnav.svg") no-repeat center',
                        'background-size': 'cover'
                    });
                    $('.header-nav-bg').toggle();

                } else if($(this).find('.subnav').css('display') === 'none'){
                    $('.header-nav').css({'height': 'auto'});
                    $('.logo-languages').css({'border-bottom': 'none', 'padding-bottom': '0'});
                    $('.nav-inner').css({'border-bottom': 'none', 'padding-bottom': '0'});
                    $(this).find('.subnav-arrow').css({
                        'width': '10px',
                        'height': '5px',
                        'background': 'url("img/subnav-arrow.svg") no-repeat center',
                        'background-size': 'cover'
                    });
                    $('.header-nav-bg').toggle();
                    $(this).removeClass('hover');
                }
            }
        });
        $('.nav-inner .nav-inner-item').on('mouseover', function(){
            $(this).addClass('hover');
        });
        $('.nav-inner .nav-inner-item').on('mouseleave', function(){
            $(this).removeClass('hover');
        });
        $('.nav-inner .nav-inner-item').on('click', function(){
            $('.nav-inner .nav-inner-item').removeClass('active');
            $(this).addClass('active');
        });
    }
    //Second-subnav
    if($('.subnav .subnav-item').has('.second-subnav')){
        if($(window).width() < 1024){
            $('a + .second-subnav').prev('a').append('<span class="second-subnav-arrow"></span>');

            $('.subnav-item').has('.second-subnav').on('click', function(e){
                e.stopPropagation();

                $(this).find('.second-subnav').toggle();

                if($(this).find('.second-subnav').css('display') === 'block'){
                    $(this).find('.second-subnav-arrow').css({'transform': 'rotate(-180deg)', 'transition': 'all 0.3s'});
                } else if($(this).find('.second-subnav').css('display') === 'none'){
                    $(this).find('.second-subnav-arrow').css({'transform': 'rotate(0deg)', 'transition': 'all 0.3s'});
                }
            });
        }
    }
    
    //Lang

    $('.contact-lang-mob .lang-mob li').on('click', function(){
        $('.lang-mob li').removeClass('active');
        $(this).addClass('active');
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