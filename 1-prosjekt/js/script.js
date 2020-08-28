$(document).ready(function() {
    $("#documentationButton").click(function() {
        if ($("#documentation").css("display") == "none") {

            $("#documentation").show();
            $("body,html").animate({
                    scrollTop: $("#documentationButton").offset().top
                },
                500);
            $("#documentationButton").html('Hide documentation');

        } else {
            if (window.pageYOffset == 0) {
                $("#documentation").hide()
            } else {

                $("body,html").animate({
                        scrollTop: 0
                    },
                    400);
                setTimeout(() => {
                    $("#documentation").hide();
                }, 600);
                $("#documentationButton").html('Show documentation');
            }

        }
    });
    $("#resetButton").click(function() {
        location.reload(true);
    })

    var originalPosition;
    // Used to make documentation button stick to top when scrolling down!
    $(window).scroll(function() {
        var button = $('#documentationButton');
        var sticky = button.offset().top;

        if (window.pageYOffset > sticky && !button.hasClass('sticky')) {
            button.addClass("sticky");
            originalPosition = window.pageYOffset;
        } else if (window.pageYOffset <= originalPosition) {
            button.removeClass("sticky");
        }
    });

});