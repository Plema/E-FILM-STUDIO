$(function(){

    jcf.replaceAll();

    $("#my-accordion").accordionjs();

    $('.portfolio .filter li').on('click', function(){
        $('.portfolio li').removeClass('active');
        $(this).addClass('active');
    });

    if($(window).width() < 1400){
        // Portfolio slider
        var portfolioSlider = $('.portfolio-slider');

        portfolioSlider.on("init", function(event, slick){
            $(".portfolio_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
        });

        portfolioSlider.on("afterChange", function(event, slick, currentSlide){
            $(".portfolio_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
        });

        portfolioSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
            prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
        });
    }
    $("#my-accordion").accordionjs();

});