$(document).ready(function() {

    var movementStrength = 30;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $('.top').mousemove(function(e){
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('.top').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });

    $('.nav-button').click(function() {
       $('.responsive-nav').toggleClass('show');
    });

    $(window).scroll(function () {

       var scrolled = $(window).scrollTop();

       if(scrolled > 0) {

           $('.scroll_to').fadeOut(200);

           $('.nav').addClass('scrolling');
           $('.nav-button').addClass('scrolling');
       }

       if(scrolled == 0) {

           $('.scroll_to').fadeIn(200);

           $('.nav').removeClass('scrolling');
           $('.nav-button').removeClass('scrolling');

       }

    });

    $('.scroll_to').click(function() {
        $('html, body').animate({
            scrollTop: $('.infos').offset().top
        }, 800, function(){
            //window.location.hash = hash;
        });
    });

    $('.logo').click(function () {
       $(this).removeClass('bounce');
       $(this).addClass('bounce');
       setTimeout(function() {
           $('.logo').removeClass('bounce');
       },1000);
    });

    $('.logo').mouseleave(function () {
       $(this).removeClass('jackInTheBox');
       $(this).addClass('bounce');
    });

    var baseDuration = 2000;

    window.sr = ScrollReveal({ mobile: true, delay: '100' });

    sr.reveal('#service-image', { duration: baseDuration, origin: 'left' });
    sr.reveal('img', { duration: baseDuration, origin: 'bottom' });
    sr.reveal('.whyus p', { duration: baseDuration, origin: 'bottom' });
    sr.reveal('.column.text', { duration: baseDuration, origin: 'bottom', distance: '2em' });
    sr.reveal('#service-text', { duration: baseDuration, origin: 'bottom', delay: 550 });
    sr.reveal('.button.estimate', { duration: baseDuration, origin: 'bottom', delay: 550 });
    sr.reveal('#service-title', { duration: baseDuration, origin: 'top', delay: 350 });

    $('.column.small-12.medium-8 p').each(function () {
        $(this).append(' (Toutes fonctionnalités supplémentaires peuvent être indiquées)');
    });

});