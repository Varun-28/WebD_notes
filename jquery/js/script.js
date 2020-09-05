//script.js

//jquery brgins
$(function() {
    
    //alert("hello!!");
    
//    we select html elements in jquery and perform action on it as:-
//    $(selector).action();
    
//    $('#box').hide();
//    $('.thing').fadeOut();
//    $('h1').css("color","blue");
    $('button').click(function() {
        $('#box').fadeout(1000);
    });
});