$(function() {
    $('.hamburger').on('click', function() {
        $('.hamburger').toggleClass('is-active');
        $('.nav__list').toggleClass('nav__list_active');
        // $('body').css('overflow-y', 'hidden');
    });
    $('.nav__link').on('click', function() {
        $('.hamburger').toggleClass('is-active');
        $('.nav__list').toggleClass('nav__list_active');
        // $('body').css('overflow-y', 'auto');
    });

    // $(window).resize(function() {
    //   if ($(window).width() > 576) {
    //     $('body').css('overflow-y', 'auto');;
    // }else{return}
    // });


    $('.materials__icon').hover(function() {
        /* Stuff to do when the mouse enters the element */
        $(this).siblings('.materials__item_desc').css('transform', 'translateX(0) scale(1,1)');
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $(this).siblings('.materials__item_desc').css('transform', 'translateX(-50%) scale(0,1)');
    });


});