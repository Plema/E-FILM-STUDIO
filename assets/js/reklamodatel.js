$(function(){

    $('.portfolio .filter li').on('click', function(){
        $('.portfolio li').removeClass('active');
        $(this).addClass('active');

        if($(this).hasClass('active') && $(this).hasClass('portfolio-all')){
            $('.portfolio-items').addClass('hide');
            $('.portfolio-items').removeClass('show');
            $('.all-portfolio-items').removeClass('hide');
            $('.all-portfolio-items').addClass('show');

            $('.all-portfolio-items').find('.portfolio-all-slider').get(0).slick.setPosition();
        }
        if($(this).hasClass('active') && $(this).hasClass('portfolio-video')){
            $('.portfolio-items').addClass('hide');
            $('.portfolio-items').removeClass('show');
            $('.video-portfolio-items').removeClass('hide');
            $('.video-portfolio-items').addClass('show');

            $('.video-portfolio-items').find('.portfolio-video-slider').get(0).slick.setPosition();
        }
        if($(this).hasClass('active') && $(this).hasClass('portfolio-site')){
            $('.portfolio-items').addClass('hide');
            $('.portfolio-items').removeClass('show');
            $('.site-portfolio-items').removeClass('hide');
            $('.site-portfolio-items').addClass('show');

            $('.site-portfolio-items').find('.portfolio-site-slider').get(0).slick.setPosition();
        }
        if($(this).hasClass('active') && $(this).hasClass('portfolio-marketing')){
            $('.portfolio-items').addClass('hide');
            $('.portfolio-items').removeClass('show');
            $('.marketing-portfolio-items').removeClass('hide');
            $('.marketing-portfolio-items').addClass('show');

            $('.marketing-portfolio-items').find('.portfolio-marketing-slider').get(0).slick.setPosition();
        }
    });

    if($(window).width() < 1400){

        // Portfolio all slider
        var portfolioAllSlider = $('.portfolio-all-slider');
        portfolioAllSlider.on("init", function(event, slick){
            $(".portfolio_all_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
        });
        portfolioAllSlider.on("afterChange", function(event, slick, currentSlide){
            $(".portfolio_all_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
        });
        portfolioAllSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
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
    }

    //Info block
    var infoSlider = $('.info-slider');

    infoSlider.on("init", function(event, slick){
        $(".info_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    infoSlider.on("afterChange", function(event, slick, currentSlide){
        $(".info_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    infoSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
    });

    $("#my-accordion").accordionjs();
    jcf.replaceAll();

});