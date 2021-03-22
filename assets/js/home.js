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

});