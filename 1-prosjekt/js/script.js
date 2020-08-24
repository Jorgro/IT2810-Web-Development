$(document).ready(function() {
    $("#demo").html("Mr snowman");

    $("#container").css({
        height: $("body").css("height") + '%',
        width: $("body").css("width") + '%'

    });
    $("#documentationButton").click(function() {
        if ($("#documentation").css("display") == "none") {

            $("#documentation").show();
            $("body,html").animate({
                    scrollTop: $("#documentationButton").offset().top
                },
                500);
            $("#documentationButton").html('Hide documentation');

        } else {
            $("body,html").animate({
                    scrollTop: 0
                },
                500);
            setTimeout(() => {
                $("#documentation").hide();
            }, 500);
            $("#documentationButton").html('Show documentation');

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

        if (window.pageYOffset > sticky && !button.hasClass('sticky')) {
            button.addClass("sticky");
            originalPosition = window.pageYOffset;
        } else if (window.pageYOffset <= originalPosition) {
            button.removeClass("sticky");
        }
    });

});