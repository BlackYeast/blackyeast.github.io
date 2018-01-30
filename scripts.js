$(function () {
    console.log("Page loaded.");

    var movementStrength = 25;
    var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    $("#div_bg_movable").mousemove(function (e) {
        var pageX = e.pageX - ($(window).width() / 2);
        var pageY = e.pageY - ($(window).height() / 2);
        var newvalueX = width * pageX * -1 - 25;
        var newvalueY = height * pageY * -1 - 50;
        $('#div_bg_movable').css("background-position", newvalueX + "px     " + newvalueY + "px");
    });


    // bg img flicking animation
    $("#div_byName").shake();
});

var shakeDelay;
var shakeY;
var shakeTime;


jQuery.fn.shake = function () {
    this.each(function (i) {
        $(this).css({ "position": "relative" });
        for (var x = 1; x <= 100; x++) {
            shakeDelay = Math.random() * 10000;
            shakeY = Math.random() * 10;
            shakeTime = Math.random() * 20;
            $(this).fadeTo(shakeTime, Math.random() + 0.5);
            $(this).animate({ top: -shakeY }, shakeTime).animate({ top: shakeY }, shakeTime).animate({ top: 0 }, shakeTime);
            $(this).fadeTo(shakeTime, 1);
            $(this).delay(shakeDelay);

        }
    });
    return this;
}

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});

