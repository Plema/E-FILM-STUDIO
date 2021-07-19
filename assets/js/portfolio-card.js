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

    $('.services .filter-title').on('click', function(){
        $('.services .filter-list').toggle();
        $('.services .filter-title .filter-arrow').toggleClass('filter-arrow-down');
    });
    if($(window).width() < 1024){
        $('.services .filter-list li').on('click', function(){
            $('.services .filter-list').toggle();
            $('.services .filter-title .filter-arrow').toggleClass('filter-arrow-down');
        });
    }

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

    // Example slider
    var exampleSlider = $('.example-slider');

    exampleSlider.on("init", function(event, slick){
        $(".example_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    exampleSlider.on("afterChange", function(event, slick, currentSlide){
        $(".example_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    exampleSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
    });

    $(".example-item .text p").each(function(i){
        len=$(this).text().length;
        if(len>116)
        {
          $(this).text($(this).text().substr(0,116)+'...');
        }
    }); 
    
    $("#my-accordion").accordionjs();
});