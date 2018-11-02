$(document).ready(function() {

    $('.slider-header').slick({
        infinite: true,
        // autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    });

    $('.menu-btn').on('click', function() {
		$(this).toggleClass('menu-btn_active');
		$(this).next('nav').slideToggle();
    });


    $(window).scroll(function(){
        let winTop = $(window).scrollTop();
        if(winTop >= 5){
            $('.header').addClass("box-shadow");
        }else{
            $('.header').removeClass("box-shadow");
        }
    });


    $('.slider').slick({
        infinite: true,
        // autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '260px',
        arrows: true,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '130px',
            }
          },
          {
            breakpoint: 992,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '70px',
            }
          },
          {
            breakpoint: 500,
            settings: {
                variableWidth: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
          }
        ]
    });
    
});