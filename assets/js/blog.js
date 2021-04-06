$(function(){

    //Blog filter
    $('.blog .filter li').on('click', function(){
        $('.filter li').removeClass('active');
        $(this).addClass('active');
    });

    //Cut string
    $(".blog-item-text").text(function(i, text) {
        if($(window).width() < 768){

            if (text.length >= 96) {
                text = text.substring(0, 96);
                var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
                text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
            }
              
            $(this).text(text);

        }else if($(window).width() >= 768){

            if (text.length >= 146) {
                text = text.substring(0, 146);
                var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
                text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
            }
              
            $(this).text(text);

        }else if($(window).width() >= 1024){

            if (text.length >= 143) {
                text = text.substring(0, 143);
                var lastIndex = big.lastIndexOf(" ");       // позиция последнего пробела
                text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
            }
              
            $(this).text(text);
        }
    });
    
    $("#my-accordion").accordionjs();
});
