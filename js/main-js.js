$(document).ready(function() {

    $('.slider-header').slick({
        infinite: true,
        autoplay:true,
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

    $('#loadMoreNews').click(function(event) {
        event.preventDefault();
        $('.news-wrap').append('<a href="#" class="news-content d-flex"><div class="news-content__img d-flex"><img src="image/news/news-photo.png" alt=""><div class="news-date"><time>Okt. 22 2018</time></div></div><div class="news-content__desc"><h3>Clash Royale.There should be a news header here</h3><p>There should be a short part of the news here. Battle with the ultimate legends and lead them into action in this online strategy RPG game! Breed ... </p></div></a><a href="#" class="news-content d-flex"><div class="news-content__img d-flex"><img src="image/news/news-photo.png" alt=""><div class="news-date"><time>Okt. 22 2018</time></div></div><div class="news-content__desc"><h3>Clash Royale.There should be a news header here</h3><p>There should be a short part of the news here. Battle with the ultimate legends and lead them into action in this online strategy RPG game! Breed ... </p></div></a><a href="#" class="news-content d-flex"><div class="news-content__img d-flex"><img src="image/news/news-photo.png" alt=""><div class="news-date"><time>Okt. 22 2018</time></div></div><div class="news-content__desc"><h3>Clash Royale.There should be a news header here</h3><p>There should be a short part of the news here. Battle with the ultimate legends and lead them into action in this online strategy RPG game! Breed ... </p></div></a>');
    });

    
});