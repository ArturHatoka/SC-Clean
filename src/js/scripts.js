$(document).ready(function () {
    //первый уровень меню
    $('.nav__point').hover(
        function () {
            $(this).addClass("active");
            $(this).children('.nav__put_in').addClass("active");
            $(this).children('.nav__pop_up').addClass("active");
        },
        function () {
            $(this).removeClass("active");
            $(this).children('.nav__put_in').removeClass("active");
            $(this).children('.nav__pop_up').removeClass("active");
        }
    );
    //второй уровень меню
    $('.pop_up__point').hover(
        function () {
            $(this).addClass("active");
            $(this).children('.pop_up__put_in').addClass("active");
            $(this).children('.pop_up__link').addClass("active");
            $(this).children('.pop_up__put_in_next').addClass("active");
            $(this).children('.nav__deep_pop_up').addClass("active");
        },
        function () {
            $(this).removeClass("active");
            $(this).children('.pop_up__put_in').removeClass("active");
            $(this).children('.pop_up__link').removeClass("active");
            $(this).children('.pop_up__put_in_next').removeClass("active");
            $(this).children('.nav__deep_pop_up').removeClass("active");
        }
    );
    //предпросмотр корзины
    $('.header__cart').hover(
        function () {
            $(this).children('.cart__preview').addClass("active");
        },
        function () {
            $(this).children('.cart__preview').removeClass("active");
        }
    );
    //слайдер клиенты
    $('.clients__slider').slick({
        infinite: true,
        dots: true,
        dotsClass: 'slider__dots slick-dots',
        prevArrow: '<button type="button" class="slider__prev slick-prev">Previous</button>' ,
        nextArrow: '<button type="button" class="slider__next slick-next">Next</button>' ,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: true,
        // variableWidth: true,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    //слайдер отзывы
    $('.reviews__slider').slick({
        infinite: true,
        dots: true,
        dotsClass: 'slider__dots slick-dots',
        prevArrow: '<button type="button" class="slider__prev slick-prev">Previous</button>' ,
        nextArrow: '<button type="button" class="slider__next slick-next">Next</button>' ,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        // variableWidth: true,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});

