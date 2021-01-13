$(document).ready(function () {
    const hamburger = $('.hamburger'),
        menu = $('.menu'),
        $menu_link = $('.menu__item-link');


    $(document).on('click', '.hamburger', function () {
        if (!$('.menu').hasClass('active')) {
            openMenu();
        } else {
            hideMenu();
        }
    });

    $('.menu__item-link--active').on('click', function (e) {
        e.preventDefault();
        return false;
    });

    $menu_link.on('click', function (e) {
        if (!$(this).hasClass('menu__item-link--active')) {
            $menu_link.removeClass('menu__item-link--active');
            $(this).addClass('menu__item-link--active');
            hideMenu();
        } else {
            e.preventDefault();
            hideMenu();
            return false
        }       
    });

    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        let href = $(this).attr('href');
        if (href !== "#") {
            $('html, body').animate({scrollTop: $(href).offset().top}, 500, 'linear');
        }
    });


    function hideMenu() {
        menu.removeClass('active');
        hamburger.removeClass('is-active');
        $('html').removeClass("no-scroll");
    }

    function openMenu() {
        hamburger.addClass("is-active");
        $('html').addClass("no-scroll");
        menu.addClass('active');
    }
});