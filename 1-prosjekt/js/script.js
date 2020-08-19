$(document).ready(function() {
    $("#demo").html("Fuck this");
    $("#rect1").bind("mouseover", function(event) {
        $("#rect1").css({ fill: "red" });
    });
    $("#rect1").bind("mouseout", function(event) {
        $("#rect1").css({ fill: "black" });
    });
});