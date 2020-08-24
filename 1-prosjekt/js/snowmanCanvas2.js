const head = {
    x: 100,
    y: 30,
    radius: 20
}

const upperBody = {
    x: 100,
    y: 85,
    radius: 40
}

const lowerBody = {
    x: 100,
    y: 145,
    radius: 50
}

const crystals = [
    [
        [5, 40],
        [10, 50],
        [15, 40],
        [10, 30]
    ],
    [
        [13, 70],
        [18, 80],
        [23, 70],
        [18, 60]
    ],
    [
        [5, 100],
        [10, 110],
        [15, 100],
        [10, 90]
    ],
    [
        [25, 100],
        [30, 110],
        [35, 100],
        [30, 90]
    ],
    [
        [25, 140],
        [30, 150],
        [35, 140],
        [30, 130]
    ],
    [
        [180, 140],
        [185, 150],
        [190, 140],
        [185, 130]
    ],
    [
        [180, 70],
        [185, 80],
        [190, 70],
        [185, 60]
    ],
    [
        [160, 100],
        [165, 110],
        [170, 100],
        [165, 90]
    ],
]

let alternate = true;

$(document).ready(function() {
    var canvas = $("#snowmanCanvas")[0];

    var ctx = canvas.getContext("2d");

    ctx.lineWidth = 5;


    // Draw the snowman
    drawSnowman();
    drawCrystals(false);




    // Add "buttons" to the snowman on click
    $("#snowmanCanvas").click((e) => {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        if (intersects(mouseX, mouseY, lowerBody) || (intersects(mouseX, mouseY, upperBody) && !intersects(mouseX, mouseY, head))) {
            drawDot(mouseX, mouseY, 4);
        } else if (intersects(mouseX, mouseY, head)) {
            if (alternate) {
                drawHead("red", 3);
                alternate = false;

            } else {
                drawHead("white", 3);
                alternate = true;
            }
        }
    });

    var interval;
    $('#snowmanCanvas').on('mouseenter', function() {
        interval = setInterval(function() {
            drawCrystals(true);
        }, 100);
    }).on('mouseleave', function() {
        clearInterval(interval);
    });







    function drawDot(x, y, size) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
    }

    function drawHead(color, size) {
        // head shape
        ctx.beginPath();
        ctx.moveTo(120, 30);
        ctx.arc(head.x, head.y, head.radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();

        // eyes
        drawDot(95, 25, size);
        drawDot(108, 25, size);

        //carrot
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(100, 32);
        ctx.lineTo(100, 42);
        ctx.lineTo(112, 37);
        ctx.closePath();
        ctx.fillStyle = "orange";
        ctx.fill();

    }

    function drawGround() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 196, 200, 4);
    }

    function drawBody() {
        ctx.arc(lowerBody.x, lowerBody.y, lowerBody.radius, (26 / 15) * Math.PI, (19 / 15) * Math.PI);
        ctx.stroke();

        ctx.moveTo(115, 45);
        ctx.arc(upperBody.x, upperBody.y, upperBody.radius, (24 / 15) * Math.PI, (21 / 15) * Math.PI);
        ctx.stroke();
    }

    function drawArms() {
        //left arm
        ctx.moveTo(65, 65);
        ctx.lineTo(25, 45);
        ctx.stroke();
        ctx.moveTo(25, 55);
        ctx.lineTo(45, 55);;
        ctx.lineTo(30, 35);
        ctx.stroke();

        //right arm
        ctx.moveTo(135, 65);
        ctx.lineTo(175, 45);
        ctx.stroke();
        ctx.moveTo(175, 55);
        ctx.lineTo(155, 55);;
        ctx.lineTo(170, 35);
        ctx.stroke();
    }

    function drawSnowman() {
        drawBody();
        drawArms();
        drawGround();
        drawHead("white", 1);
    }

    function drawCrystals(random) {
        crystals.forEach((crystal) => {
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(crystal[0][0], crystal[0][1]);
            ctx.lineTo(crystal[1][0], crystal[1][1]);
            ctx.lineTo(crystal[2][0], crystal[2][1]);
            ctx.lineTo(crystal[3][0], crystal[3][1]);
            ctx.closePath();
            if (random) {
                ctx.fillStyle = getRandomColor();
            } else {
                ctx.fillStyle = "lightblue";

            }
            ctx.fill();
        })
    }

});

// Checks if a point intersects a circle
function intersects(x, y, circle) {
    return ((x - circle.x) ** 2 + (y - circle.y) ** 2) < circle.radius ** 2;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}