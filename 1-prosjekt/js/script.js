$(document).ready(function() {
    $("#demo").html("Fuck this");
    $("#rect1").bind("mouseover", function(event) {
        $("#rect1").css({ fill: "red" });
    });
});