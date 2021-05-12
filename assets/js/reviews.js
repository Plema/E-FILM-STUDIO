$(function(){
    //Reviews
    let reviewsSlider = $('.reviews-slider');

    reviewsSlider.on("init", function(event, slick){
        $(".reviews_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    reviewsSlider.on("afterChange", function(event, slick, currentSlide){
        $(".reviews_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    $(window).on('load resize', function(){
        if($(window).width() < 1024){
            reviewsSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
                prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
            });
        }else{
            reviewsSlider.unslick();
        }
    });

    $('.reviews .filter li').on('click', function(){
        $('.reviews li').removeClass('active');
        $(this).addClass('active');
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