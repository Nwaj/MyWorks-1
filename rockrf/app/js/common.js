$(function() {

    var imgHead = [
            'img/bg-1.png',
            'img/bg-2.png',
            'img/bg-3.png',
            'img/bg-4.png',
            'img/bg-5.png'
        ],
        i = 1;

    function backgroundSlider() {

        if (i > (imgHead.length - 1)) {
            $('.header-bg').animate({ 'opacity': '0' }, 200, function() {
                i = 1;
                $('.header-bg').css({ 'background': 'url(' + imgHead[0] + ')' });
            });
            $('.header-bg').animate({ 'opacity': '1' }, 200);
        } else {
            $('.header-bg').animate({ 'opacity': '0' }, 200, function() {
                $('.header-bg').css({ 'background': 'url(' + imgHead[i] + ')' });
                i++;
            });
            $('.header-bg').animate({ 'opacity': '1' }, 200);
        }

    }
    var intervalBackgroundSlider = setInterval(backgroundSlider, 8000);

    $('.company-news .company-news-slider').slick({
        dots: false,
        arrow: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 8000,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

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
                return item.el.attr('title');
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