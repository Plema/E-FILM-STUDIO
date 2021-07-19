$(function(){

    jcf.replaceAll();

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

    //Explain slider
    let explainSlider = $('.explain-slider');

    $(window).on('load resize', function(){
        if($(window).width() < 768){
            explainSlider.slick({
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

    $("#my-accordion").accordionjs();
});