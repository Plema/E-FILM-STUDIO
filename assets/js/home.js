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
        $('.filter li').removeClass('active');
        $(this).addClass('active');
    });

    jcf.replaceAll();

});