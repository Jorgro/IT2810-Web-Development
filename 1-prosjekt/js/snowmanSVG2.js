import {
    getRandomColor
} from "./helpers";

$(document).ready(function() {
    let body = [$("#svgUpperBody"), $("#svgLowerBody")]
    let svgSnowman = $("#svgSnowman");
    body.forEach(bodyPart => {
        bodyPart.click(function(e) {
            let mouseX = e.offsetX;
            let mouseY = e.offsetY;
            addDot(mouseX, mouseY);
        });
    });

    function addDot(x, y) {
        let dot = document.createElementNS('http://www.w3.org/2000/svg', "circle");
        dot.setAttribute("cx", x);
        dot.setAttribute("cy", y);
        dot.setAttribute("r", "2");
        dot.setAttribute("stroke", "black");
        dot.setAttribute("stroke-width", "5");
        svgSnowman.append(dot);
    }

    $("#svgHead").click(function(e) {
        if ($(this).css("fill") == "rgb(255, 0, 0)") {
            $("#svgHead").css({
                fill: "white"
            });
        } else {
            $("#svgHead").css({
                fill: "red"
            });
        }
    });

    $(".crystal").bind("mouseover", function(event) {
        $(".crystal").css({
            fill: getRandomColor()
        });
    });
    //$('#someid').attr('name', 'value');
    var interval;
    // Changes color of the crystals
    $('#svgSnowman').on('mouseenter', function() {
        interval = setInterval(function() {
            for (var i = 1; i <= 8; i++) {
                var crystal = "#crystal-" + i
                $(crystal).css({
                    fill: getRandomColor()
                });
            }
        }, 100);
    }).on('mouseleave', function() {
        clearInterval(interval);
    });
});