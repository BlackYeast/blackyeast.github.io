$(function () {
    $(".img_highres").off().on("load", function () {
        var id = $(this).attr("id");
        var highres = $(this).attr("src").toString();
        var target = "#div_" + id.substring(4);
        $(target).css("background-image", "url(" + highres + ")");
    });
});

$(document).ready(function () {
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
});

