$(function(){

    if($(window).width() >= 768){
        $('.our-services-item h3').matchHeight({
            byRow: false
        });    
    }

    if($('.banner').hasClass('banner-with-video')){
        if($(window).width() >= 320){
            $('.banner').css({'padding-bottom': '140px'});
        } 
        if($(window).width() >= 768){
            $('.banner').css({'padding-bottom': '180px'});
        } 
        if($(window).width() >= 1024){
            $('.banner').css({'padding-bottom': '214px'});
        } 
        if($(window).width() >= 1280){
            $('.banner').css({'padding-bottom': '310px'});
        } 
        if($(window).width() >= 1440){
            $('.banner').css({'padding-bottom': '340px'});
        } 
        if($(window).width() >= 1680){
            $('.banner').css({'padding-bottom': '380px'});
        } 
        if($(window).width() >= 1920){
            $('.banner').css({'padding-bottom': '420px'});
        }
    }


    $('.add-file').on('change', function(){
        if(this.value){
            $('.file').append('<div class="delete">Удалить бриф</div>');

            if($('.file').has('.delete')){
                $('.delete').on('click', function() {     
                    $(".add-file").val('')
                    jcf.getInstance($(".add-file")).refresh()
                    $('.delete').remove();
                 });
            }

        } else{
            $('.delete').remove();
        }
    });
        
    
    $('.our-services .filter li').on('click', function(){
        $('.our-services .filter li').removeClass('active');
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
    $('.our-services .filter-title').on('click', function(){
        $('.our-services .filter-list').toggle();
        $('.our-services .filter-title .filter-arrow').toggleClass('filter-arrow-down');
    });
    if($(window).width() < 1024){
        $('.our-services .filter-list li').on('click', function(){
            $('.our-services .filter-list').toggle();
            $('.our-services .filter-title .filter-arrow').toggleClass('filter-arrow-down');
        });
    }

    $('.portfolio .filter li').on('click', function(){
        $('.portfolio .filter li').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('active') && $(this).hasClass('video-portfolio')){
            $('.portfolio-items').addClass('hide');
            $('.portfolio-items').removeClass('show');
            $('.video-portfolio-items').removeClass('hide');
            $('.video-portfolio-items').addClass('show');

            $('.video-portfolio-items').find('.portfolio-video-slider').get(0).slick.setPosition();
        }
        if($(this).hasClass('active') && $(this).hasClass('site-portfolio')){
            $('.portfolio-items').addClass('hide');
            $('.portfolio-items').removeClass('show');
            $('.site-portfolio-items').removeClass('hide');
            $('.site-portfolio-items').addClass('show');

            $('.site-portfolio-items').find('.portfolio-site-slider').get(0).slick.setPosition();
        }
        if($(this).hasClass('active') && $(this).hasClass('marketing-portfolio')){
            $('.portfolio-items').addClass('hide');
            $('.portfolio-items').removeClass('show');
            $('.marketing-portfolio-items').removeClass('hide');
            $('.marketing-portfolio-items').addClass('show');

            $('.marketing-portfolio-items').find('.portfolio-marketing-slider').get(0).slick.setPosition();
        }
    });

    $('.portfolio .filter-title').on('click', function(){
        $('.portfolio .filter-list').toggle();
        $('.portfolio .filter-title .filter-arrow').toggleClass('filter-arrow-down');
    });
    if($(window).width() < 1024){
        $('.portfolio .filter-list li').on('click', function(){
            $('.portfolio .filter-list').toggle();
            $('.portfolio .filter-title .filter-arrow').toggleClass('filter-arrow-down');
        });
    }

    jcf.replaceAll();

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

    //Portfolio-video
    var portfolioVideoSlider = $('.portfolio-video-slider');
    portfolioVideoSlider.on("init", function(event, slick){
        $(".portfolio_video_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    portfolioVideoSlider.on("afterChange", function(event, slick, currentSlide){
        $(".portfolio_video_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    portfolioVideoSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
    });

    //Portfolio-site
    var portfolioSiteSlider = $('.portfolio-site-slider');
    portfolioSiteSlider.on("init", function(event, slick){
        $(".portfolio_site_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    portfolioSiteSlider.on("afterChange", function(event, slick, currentSlide){
        $(".portfolio_site_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    portfolioSiteSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
    });

    //Portfolio-marketing
    var portfolioMarSlider = $('.portfolio-marketing-slider');
    portfolioMarSlider.on("init", function(event, slick){
        $(".portfolio_marketing_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    portfolioMarSlider.on("afterChange", function(event, slick, currentSlide){
        $(".portfolio_marketing_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });
    portfolioMarSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
        prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
    });

    //Reviews
    let reviewsSlider = $('.reviews-slider');

    reviewsSlider.on("init", function(event, slick){
        $(".reviews_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    reviewsSlider.on("afterChange", function(event, slick, currentSlide){
        $(".reviews_count").html(parseInt(slick.currentSlide + 1) + ' / <span>' + slick.slideCount + '</span>');
    });

    $(window).on('load resize', function(){
        if($(window).width() < 1024){
            reviewsSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                nextArrow: '<button class="slick-arrow next"><img src="img/arrow-slider.svg"></button>',
                prevArrow: '<button class="slick-arrow prev"><img src="img/arrow-slider.svg"></button>',
            });
        }else{
            reviewsSlider.unslick();
        }
    });

    // Fancybox
    $('.media-item').fancybox({
        parentEl: '.fancybox',
        clickContent: false,
        padding: 0,
        thumbs: false,
        loop: true,
        // touch: false,
        arrows: true,
        transitionDuration: 500,
        hash: false,
        overlayColor: '#fff',
        autoSize : false,
        beforeShow: function(){
            $("body").css({'overflow-y':'hidden'});
        },
        afterClose: function(){
            $("body").css({'overflow-y':'auto'});
            if($('body').css('overflow-y') == 'auto'){
                $('.blackout-fancy').remove();
            }
        },
    });

    $('.media-item').on('click', function(){
        $('.fancybox-container').toggle();

        $('.wrapper').append('<div class="blackout-fancy"></div>');
    });

    $(".portfolio-item .text p").each(function(i){
        len=$(this).text().length;
        if(len>116)
        {
          $(this).text($(this).text().substr(0,116)+'...');
        }
      }); 


    $('.input-wrapper input').focus(function(){
        $(this).parent().addClass('value')
    })

    $('.input-wrapper input').blur(function(){
        if($(this).val().length === 0 ){
            $(this).parent().removeClass('value')
        }
    })

    

    
    if($('.input-wrapper input').val().length > 0 ){
        console.log(111)
        $(this).parent().addClass('value')
    }

});