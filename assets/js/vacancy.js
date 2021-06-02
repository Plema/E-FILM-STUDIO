$(function(){
    $("#my-accordion").accordionjs();
    $("#accordion-vacancies").accordionjs({
        // activeIndex: false,
    });
    if($(window).width() < 1024){
        $("#accordion-desc").accordionjs({
            activeIndex: false,
        });
        $("#accordion-desc1").accordionjs();
    }
    
    $('.vac-title').each(function() {
        let l = $(this).text().length;

        if(l > 34){
            $(this).addClass('big');
        }
    });
    // let str = $('.vac-title').text().length;
    // console.log(str);
});