jQuery(document).ready(function() {
    var menuBtn = $('.header-nav_btn');
    var menu = $('.header-nav_menu');
    menuBtn.on('click', function(event) {
        event.preventDefault();
        menu.toggleClass('header-nav_menu__active');
    });
    $('.btn-load').on('click', function(event) {
        event.preventDefault();
        $('.cd-item-group-1').css('display', 'block');
        $('.btn-load').css('display', 'none');
        $('.btn-less').css('display', 'inline-block');
    });
    $('.btn-less').on('click', function(event) {
        event.preventDefault();
        $('.cd-item-group-1').css('display', 'none');
        $('.btn-less').css('display', 'none');
        $('.btn-load').css('display', 'inline-block');
    });

    var options = {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#000',
        trailColor: '#dfdfdf',
        trailWidth: 4,
        svgStyle: { width: '100%', height: '100%' }
    };
    var barHTML = new ProgressBar.Line(progressbarHTML, options);
    var barJS = new ProgressBar.Line(progressbarJS, options);
    var barPHP = new ProgressBar.Line(progressbarPHP, options);
    var barPY = new ProgressBar.Line(progressbarPY, options);
    var barRUBY = new ProgressBar.Line(progressbarRUBY, options);
    var barJAVA = new ProgressBar.Line(progressbarJAVA, options);

    barHTML.animate(0.8);
    barJS.animate(0.5);
    barPHP.animate(0.27);
    barPY.animate(0.3);
    barRUBY.animate(0.1);
    barJAVA.animate(0.13);


    $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height()) {
            $('.top').addClass('active');
        } else {
            $('.top').removeClass('active');
        };
    });
    $('.top').click(function() {
        $('html, body').stop().animate({ scrollTop: 0 }, 'slow', 'swing');
    });
    $(".slowly").on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 600);
    });
});