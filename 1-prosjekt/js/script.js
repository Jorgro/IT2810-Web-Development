$(document).ready(function() {
    $("#demo").html("Fuck this");
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
        console.log("Clicked");
        if ($("#documentation").css("display") == "none") {
            console.log("None");

            $("#documentation").css({
                display: "block"
            });
        } else {
            console.log("Display");

            $("#documentation").css({
                display: "none"
            });
        }
    });
});