$(function(){

    //Blog filter
    $('.blog .filter li').on('click', function(){
        $('.blog .filter li').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('active') && $(this).hasClass('blog-all')){
            $('.blog-items').addClass('hide');
            $('.blog-items-all').removeClass('hide');
            $('.blog-items-all').addClass('show-flex');
        }
        if($(this).hasClass('active') && $(this).hasClass('blog-video')){
            $('.blog-items').addClass('hide');
            $('.blog-items-video').removeClass('hide');
            $('.blog-items-video').addClass('show-flex');
        }
        if($(this).hasClass('active') && $(this).hasClass('blog-site')){
            $('.blog-items').addClass('hide');
            $('.blog-items-site').removeClass('hide');
            $('.blog-items-site').addClass('show-flex');
        }
        if($(this).hasClass('active') && $(this).hasClass('blog-marketing')){
            $('.blog-items').addClass('hide');
            $('.blog-items-marketing').removeClass('hide');
            $('.blog-items-marketing').addClass('show-flex');
        }
    });

    $('.blog .filter-title').on('click', function(){
        $('.blog .filter-list').toggle();
        $('.blog .filter-title .filter-arrow').toggleClass('filter-arrow-down');
    });
    if($(window).width() < 1024){
        $('.blog .filter-list li').on('click', function(){
            $('.blog .filter-list').toggle();
            $('.blog .filter-title .filter-arrow').toggleClass('filter-arrow-down');
        });
    }

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
