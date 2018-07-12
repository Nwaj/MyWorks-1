jQuery(document).ready(function() {
    var menuBtn = $('.top-nav_btn');
    var menu = $('.top-nav_menu');
    var sidebarBtn = $('.left-sidebar_btn');
    var sidebarMenu = $('.left-sidebar_menu');
    menuBtn.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('top-nav_menu__active');
    });
    sidebarBtn.on('click', function(event) {
        event.preventDefault();
        sidebarMenu.toggleClass('left-sidebar_menu__active');
    });
    $('.directions-blocks').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    //Выравнивает блоки по наибольшему
    function onResize() {
        $('.object-card-description').equalHeights();
    }
    onResize();
    window.onresize = function() { onResize() };
    // $('.qwert').on('click', function(event) {
    //     event.preventDefault();
    //     alert('jwebhgjde')
    // });
    $('[data-target="modal"]').on('click', function() {
        $('.modal').show();
    });
     $('.close').on('click', function() {
        $('.modal').hide();
    });


});