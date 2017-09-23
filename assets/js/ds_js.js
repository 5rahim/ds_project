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

    $(window).scroll(function () {
       var scrolled = $(window).scrollTop();

       if(scrolled > 0) {

           $('.scroll_to').fadeOut(200);

           $('.nav').addClass('scrolling');
       }

       if(scrolled == 0) {

           $('.scroll_to').fadeIn(200);

           $('.nav').removeClass('scrolling');

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

});