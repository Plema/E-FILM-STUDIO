$(function(){
    $('.reviews .filter li').on('click', function(){
        $('.reviews li').removeClass('active');
        $(this).addClass('active');

        if($(this).hasClass('active') && $(this).hasClass('reviews-all')){
            $('.reviews-items').addClass('hide');
            $('.reviews-items').removeClass('show');
            $('.reviews-all-items').removeClass('hide');
            $('.reviews-all-items').addClass('show');

            $('.reviews-all-items').find('.reviews-slider-all').get(0).slick.setPosition();
        }
        if($(this).hasClass('active') && $(this).hasClass('reviews-video')){
            $('.reviews-items').addClass('hide');
            $('.reviews-items').removeClass('show');
            $('.reviews-video-items').removeClass('hide');
            $('.reviews-video-items').addClass('show');

            $('.reviews-video-items').find('.reviews-slider-video').get(0).slick.setPosition();
        }
        if($(this).hasClass('active') && $(this).hasClass('reviews-site')){
            $('.reviews-items').addClass('hide');
            $('.reviews-items').removeClass('show');
            $('.reviews-site-items').removeClass('hide');
            $('.reviews-site-items').addClass('show');

            $('.reviews-site-items').find('.reviews-slider-site').get(0).slick.setPosition();
        }
        if($(this).hasClass('active') && $(this).hasClass('reviews-marketing')){
            $('.reviews-items').addClass('hide');
            $('.reviews-items').removeClass('show');
            $('.reviews-marketing-items').removeClass('hide');
            $('.reviews-marketing-items').addClass('show');

            $('.reviews-marketing-items').find('.reviews-slider-marketing').get(0).slick.setPosition();
        }
    });

    //Reviews all slider
    let reviewsAllSlider = $('.reviews-slider-all');
    reviewsAllSlider.on("init", function(event, slick){
        $(".reviews_all_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    reviewsAllSlider.on("afterChange", function(event, slick, currentSlide){
        $(".reviews_all_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    $(window).on('load resize', function(){
        if($(window).width() < 1024){
            reviewsAllSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
                prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
            });
        }else{
            reviewsAllSlider.unslick();
        }
    });
    //Reviews video slider
    let reviewsVideoSlider = $('.reviews-slider-video');
    reviewsVideoSlider.on("init", function(event, slick){
        $(".reviews_video_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    reviewsVideoSlider.on("afterChange", function(event, slick, currentSlide){
        $(".reviews_video_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    $(window).on('load resize', function(){
        if($(window).width() < 1024){
            reviewsVideoSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
                prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
            });
        }else{
            reviewsVideoSlider.unslick();
        }
    });

    //Reviews site slider
    let reviewsSiteSlider = $('.reviews-slider-site');
    reviewsSiteSlider.on("init", function(event, slick){
        $(".reviews_site_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    reviewsSiteSlider.on("afterChange", function(event, slick, currentSlide){
        $(".reviews_site_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    $(window).on('load resize', function(){
        if($(window).width() < 1024){
            reviewsSiteSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
                prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
            });
        }else{
            reviewsSiteSlider.unslick();
        }
    });

    //Reviews marketing slider
    let reviewsMarSlider = $('.reviews-slider-marketing');
    reviewsMarSlider.on("init", function(event, slick){
        $(".reviews_marketing_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    reviewsMarSlider.on("afterChange", function(event, slick, currentSlide){
        $(".reviews_marketing_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    $(window).on('load resize', function(){
        if($(window).width() < 1024){
            reviewsMarSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
                prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
            });
        }else{
            reviewsMarSlider.unslick();
        }
    });

    jcf.replaceAll();

    $("#my-accordion").accordionjs();

    // Fancybox
    $('.media-item').fancybox({
        parentEl: '.fancybox',
        clickContent: false,
        padding: 0,
        thumbs: false,
        loop: true,
        // touch: false,
        arrows: true,
        transitionDuration: 500,
        hash: false,
        overlayColor: '#fff',
        autoSize : false,
        beforeShow: function(){
            $("body").css({'overflow-y':'hidden'});
        },
        afterClose: function(){
            $("body").css({'overflow-y':'auto'});
            if($('body').css('overflow-y') == 'auto'){
                $('.blackout-fancy').remove();
            }
        },
    });

    $('.media-item').on('click', function(){
        $('.fancybox-container').toggle();

        $('.wrapper').append('<div class="blackout-fancy"></div>');
    });
});