var progressBarOptions1 = {
    startAngle: -1.55,
    size: 120,
    value: 0.33,
    fill: {
        color: '#fff'
    }
};

var progressBarOptions2 = {
    startAngle: -1.55,
    size: 120,
    value: 0.66,
    fill: {
        color: '#fff'
    }
};

var progressBarOptions3 = {
    startAngle: -1.55,
    size: 120,
    value: 1.0,
    fill: {
        color: '#fff'
    }
};


$('#circle-1').circleProgress(progressBarOptions1).on('circle-animation-progress', function(event, progress, stepValue) {
    

});

$('#circle-2').circleProgress(progressBarOptions2).on('circle-animation-progress', function(event, progress, stepValue) {

});

$('#circle-3').circleProgress(progressBarOptions3).on('circle-animation-progress', function(event, progress, stepValue) {

});



$(function() {
    $.mask.definitions['~'] = "[+-]";
    $("#phone-1").mask("+7 (999) 999-99-99");
    $("#phone-2").mask("+7 (999) 999-99-99");
    $("#phone-3").mask("+7 (999) 999-99-99");
    $("#phone-4").mask("+7 (999) 999-99-99");
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoWidht: true,
    autoplay: true,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: ['<span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>','<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>'],
    
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})