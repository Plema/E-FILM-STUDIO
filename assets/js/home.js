$(function(){

    if($(window).width() >= 768){
        $('.our-services-item h3').matchHeight({
            byRow: false
        });    
    }

    $('.our-services .filter li').on('click', function(){
        $('.filter li').removeClass('active');
        $(this).addClass('active');
    });

    $('.portfolio .filter li').on('click', function(){
        $('.portfolio li').removeClass('active');
        $(this).addClass('active');
    });

    jcf.replaceAll();

    var customersSlider = $('.customers-slider');

    customersSlider.on("init", function(event, slick){
        $(".customers_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    customersSlider.on("afterChange", function(event, slick, currentSlide){
        $(".customers_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    customersSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><img src="../img/arrow-slider.svg"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="../img/arrow-slider.svg"></button>',
    });

    $("#my-accordion").accordionjs();

    var customersSlider = $('.portfolio-slider');

    customersSlider.on("init", function(event, slick){
        $(".portfolio_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    customersSlider.on("afterChange", function(event, slick, currentSlide){
        $(".portfolio_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    customersSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><img src="../img/arrow-slider.svg"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="../img/arrow-slider.svg"></button>',
    });

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
                nextArrow: '<button class="slick-arrow next"><img src="../img/arrow-slider.svg"></button>',
                prevArrow: '<button class="slick-arrow prev"><img src="../img/arrow-slider.svg"></button>',
            });
        }else{
            reviewsSlider.unslick();
        }
    });
    
});