$(function(){
    //Task slider
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

    jcf.replaceAll();

    $("#my-accordion").accordionjs();
});