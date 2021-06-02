$(function(){

    $('.services .filter li').on('click', function(){
        $('.services .filter li').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('active') && $(this).hasClass('video-services')){
            $('.our-services-items').addClass('hide');
            $('.video-items').removeClass('hide');
            $('.video-items').addClass('show-flex');
        }
        if($(this).hasClass('active') && $(this).hasClass('site-services')){
            $('.our-services-items').addClass('hide');
            $('.site-items').removeClass('hide');
            $('.site-items').addClass('show-flex');
        }
        if($(this).hasClass('active') && $(this).hasClass('marketing-services')){
            $('.our-services-items').addClass('hide');
            $('.marketing-items').removeClass('hide');
            $('.marketing-items').addClass('show-flex');
        }
    });

    $('.portfolio .filter li').on('click', function(){
        $('.portfolio .filter li').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('active') && $(this).hasClass('video-portfolio')){
            $('.portfolio-items').addClass('hide');
            $('.portfolio-items').removeClass('show');
            $('.video-portfolio-items').removeClass('hide');
            $('.video-portfolio-items').addClass('show');

            $('.video-portfolio-items').find('.portfolio-video-slider').get(0).slick.setPosition();
        }
        if($(this).hasClass('active') && $(this).hasClass('site-portfolio')){
            $('.portfolio-items').addClass('hide');
            $('.portfolio-items').removeClass('show');
            $('.site-portfolio-items').removeClass('hide');
            $('.site-portfolio-items').addClass('show');

            $('.site-portfolio-items').find('.portfolio-site-slider').get(0).slick.setPosition();
        }
        if($(this).hasClass('active') && $(this).hasClass('marketing-portfolio')){
            $('.portfolio-items').addClass('hide');
            $('.portfolio-items').removeClass('show');
            $('.marketing-portfolio-items').removeClass('hide');
            $('.marketing-portfolio-items').addClass('show');

            $('.marketing-portfolio-items').find('.portfolio-marketing-slider').get(0).slick.setPosition();
        }
    });

    jcf.replaceAll();

    //Customer slider
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
        nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
    });

    //Portfolio-video
    var portfolioVideoSlider = $('.portfolio-video-slider');
    portfolioVideoSlider.on("init", function(event, slick){
        $(".portfolio_video_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    portfolioVideoSlider.on("afterChange", function(event, slick, currentSlide){
        $(".portfolio_video_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    portfolioVideoSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
    });

    //Portfolio-site
    var portfolioSiteSlider = $('.portfolio-site-slider');
    portfolioSiteSlider.on("init", function(event, slick){
        $(".portfolio_site_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    portfolioSiteSlider.on("afterChange", function(event, slick, currentSlide){
        $(".portfolio_site_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    portfolioSiteSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
    });

    //Portfolio-marketing
    var portfolioMarSlider = $('.portfolio-marketing-slider');
    portfolioMarSlider.on("init", function(event, slick){
        $(".portfolio_marketing_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    portfolioMarSlider.on("afterChange", function(event, slick, currentSlide){
        $(".portfolio_marketing_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    portfolioMarSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
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
                nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
                prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
            });
        }else{
            reviewsSlider.unslick();
        }
    });

    //Stages slider

    let stagesSlider = $('.stages-slider');

    $(window).on('load resize', function(){
        if($(window).width() < 768){
            stagesSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                dots: true,
                arrows: false
            });
        } else{
            stagesSlider.unslick();
        }
    });

    $("#my-accordion").accordionjs();
});