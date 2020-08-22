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
            $("body,html").animate({
                    scrollTop: $("#documentationButton").offset().top
                },
                'slow');
        } else {
            $("#documentation").css({
                display: "none"
            });

            $("body,html").animate({
                    scrollTop: $("#header").offset().top
                },
                500);
        }
    });

    var originalPosition;
    // Used to make documentation button stick to top when scrolling down!
    $(window).scroll(function() {
        /*         if ($(this).scrollTop() & gt; = 290) {
                    $('').addClass('stickytop');
                } else {
                    $('nav.main-nav').removeClass('stickytop');
                } */
        var button = $('#documentationButton');
        var sticky = button.offset().top;
        console.log("pos", originalPosition);
        console.log("wow", button.hasClass('sticky'));
        console.log("window", window.pageYOffset);
        console.log("sticky", sticky);

        if (window.pageYOffset > sticky && !button.hasClass('sticky')) {
            button.addClass("sticky");
            originalPosition = window.pageYOffset;
        } else if (window.pageYOffset <= originalPosition) {
            button.removeClass("sticky");
        }
    });
});