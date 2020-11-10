$(function() {
    
// 1. jQuery chaining
    
    //$('.notification-bar').delay(1000).slideDown().delay(5000).fadeOut();
    
    // 1000 = 1 second
    
// 2. jQuery hiding and showing
    
    // $('h1').hide();
    // $('div.hidden').show();
    
    // $('p').fadeOut(2000);
    // $('div.hidden').fadeIn(4000);
    
    // $('#box1').click(function() {
    //     $(this).fadeTo(1000, 0.25, function() {
    //         //animation is complete
    //         $(this).slideUp();
    //     });
    // });

    // $('div.hidden').slideDown()
    
    // $('button').click(function() {
    //     $('#box1').slideToggle();
    // });
    
// 3. jQuery Animate
    
    $('#left').click(function() {
        $('.box').animate({
            left: "-=40px",
            fontSize: "+=2px"
        }, function() {
            // animation is complete
        });
    });
    
    $('#up').click(function() {
        $('.box').animate({
            top: "-=40px",
            opacity: "+=0.1"
        }, function() {
            // animation is complete
        });
    });
    
    $('#right').click(function() {
        $('.box').animate({
            left: "+=40px",
            fontSize: "-=2px"
        }, function() {
            // animation is complete
        });
    });
    
    $('#down').click(function() {
        $('.box').animate({
            top: "+=40px",
            opacity: "-=0.1"
        }, function() {
            // animation is complete
        });
    });
    
// 4. jQuery CSS
    
    $('#circle2').css({
        'background': '#8a8d22',
    });
    
});