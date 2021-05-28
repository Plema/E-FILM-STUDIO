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

    //Blog-nav
    var block_show = null;
 
    function scrollTracking(){
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $('.blog-content-main').offset().top;
        var eh = $('.blog-content-main').outerHeight();
    
        if (wt + wh >= et + 300 && wt + wh - eh * 2 <= (et - 600) + (wh - eh)){
            if (block_show == null || block_show == false) {

                $('.popup-nav-btn').removeClass('hide');
                $('.popup-nav-btn').addClass('show-btn');
            }
            block_show = true;
        } else {
            if (block_show == null || block_show == true) {

                $('.popup-nav-btn').removeClass('show-btn');
                $('.popup-nav-btn').addClass('hide');
            }
            block_show = false;
        }
    }
    $(window).scroll(function(){
        scrollTracking();
    });
        
    $(document).ready(function(){ 
        scrollTracking();
    });

    $('.popup-nav-btn').click(function(){
        $('.popup-nav').removeClass('hide');
        $('.popup-nav').addClass('show-popup fade');
        $('.popup-nav-btn').css({'background': 'linear-gradient(270deg, #FFCC80 0.14%, #FF8080 100.13%)'});
    });
    $('.nav-close').click(() => {
        $('.popup-nav').removeClass('show-popup fade');
        $('.popup-nav').addClass('hide');
        $('.popup-nav-btn').css({'background': '#525D7D'});
    });

    //Table of contents
    $(window).on("scroll", function(){
        $( ".main-title" ).each(function() {
            var sectionID = $(this).attr("id");
            if ( $(window).scrollTop() >= $(this).offset().top) {
                $('.blog-nav-link').removeClass("active");
                $('.blog-nav-link a[href=\'#'+sectionID+'\']').parent().addClass("active");
            }
        });
    });

    var topMenu = $(".blog-links"),
        topMenuHeight = topMenu.outerHeight() + 30,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { 
            return item; 
        }
        });

    menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+36;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
    });

    //For desktop
    $(window).on("scroll", function(){
        $( ".main-title" ).each(function() {
            var sectionDesktopID = $(this).attr("id");
            if ( $(window).scrollTop() >= $(this).offset().top) {
                $('.blog-nav-link').removeClass("active");
                $('.blog-nav-link a[href=\'#'+sectionDesktopID+'\']').parent().addClass("active");
            }
        });
    });

    var topMenuDesktop = $(".blog-items"),
        topMenuHeightDesktop = topMenuDesktop.outerHeight() - 313,
        // All list items
        menuItemsDesktop = topMenuDesktop.find("a"),
        // Anchors corresponding to menu items
        scrollItemsDesktop = menuItemsDesktop.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { 
            return item; 
        }
        });

    menuItemsDesktop.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeightDesktop+30;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
    });

    //Length of string
    $(".recommend-text").text(function(i, text) {
        if($(window).width() >= 1024){

            if (text.length >= 92) {
                text = text.substring(0, 92);
                var lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
                text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
            }
              
            $(this).text(text);
        }

    });

    //Sticky sidebar
    $('.blog-content-nav').stickySidebar({
        containerSelector: '.blog-content-main',
        innerWrapperSelector: '.blog-nav-inner',
        topSpacing: 60,
        bottomSpacing: 60
    });

    $("#my-accordion").accordionjs();
});