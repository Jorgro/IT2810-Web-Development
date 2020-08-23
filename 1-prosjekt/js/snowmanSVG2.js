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
        console.log('fill', $(this).css("fill"))
        if ($(this).css("fill") == "rgb(255, 0, 0)") {
            $(this).css({
                fill: "white"
            });
        } else {
            $(this).css({
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
// from: https://stackoverflow.com/questions/1484506/random-color-generator
export function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}