$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        infinite: false,
        TouchMove: false,
        focusOnSelect: true,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    $('.history-top-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true

                }
            }
        ]
    });

    $('.history .history-info-block').not(':first').hide();
    $('.history-top-slider .history-top-slider_block').click(function() {
        $('.history-top-slider .history-top-slider_block').removeClass('active').eq($(this).index()).addClass('active');
        $('.history .history-info-block').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active');


    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    $('.slowly').on('click', function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 600);
    });

});