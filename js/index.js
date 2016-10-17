$(document).ready(function () {
    $('.flash').click(function () {
        $('.brain').toggleClass('laser');
    });

$(".btncolor").click(function(){
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);

    //Generate an RGBA value from red, green and blue
    var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';

    // Changes background color to random
    $("body").css("background", randomRGBA);
    });
});