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
    // Used to make documentation button stick to top when scrolling down!
    $(window).scroll(function() {
        var button = $('#documentationButton')[0]
        var sticky = button.offsetTop;
        if (window.pageYOffset > sticky) {
            button.classList.add("sticky");
        } else {
            button.classList.remove("sticky");
        }
    });
});