$(function(){

    //Task slider
    var taskSlider = $('.task-slider');

    taskSlider.on("init", function(event, slick){
        $(".task_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    taskSlider.on("afterChange", function(event, slick, currentSlide){
        $(".task_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    taskSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
    });
});