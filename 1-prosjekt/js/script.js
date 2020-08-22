$(document).ready(function() {
    $("#demo").html("I love jQuery <3");
    $("#rect1").bind("mouseover", function(event) {
        $("#rect1").css({
            fill: "red"
        });
    });
    $("#rect1").bind("mouseout", function(event) {
        $("#rect1").css({
            fill: "black"
        });
    });
    $("#documentationButton").click(function() {
        if ($("#documentation").css("display") == "none") {
            $("#documentation").css({
                display: "block"
            });
            $('html,body').animate({
                    scrollTop: $("#documentationButton").offset().top
                },
                'slow');
        } else {
            $("#documentation").css({
                display: "none"
            });
            $('html,body').animate({
                    scrollTop: $("#documentationButton").offset().top
                },
                'slow');
        }
    });
});