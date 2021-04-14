$(function(){

    jcf.replaceAll();

    //Projects slider
    var projectsSlider = $('.projects-slider');

    if($(window).width() < 1024){
        projectsSlider.on("init", function(event, slick){
            $(".projects_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
        });
    
        projectsSlider.on("afterChange", function(event, slick, currentSlide){
            $(".projects_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
        });
    
        projectsSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            nextArrow: '<button class="slick-arrow next"></button>',
            prevArrow: '<button class="slick-arrow prev"></button>',
        });
    }

    //Cut string
    $(".slider-item-text").text(function(i, text) {
        if($(window).width() >= 320){

            if (text.length >= 116) {
                text = text.substring(0, 116);
                var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
                text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
            }
              
            $(this).text(text);
        }
    });
});