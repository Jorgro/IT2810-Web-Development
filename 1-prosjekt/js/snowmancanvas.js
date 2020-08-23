var canvas = document.querySelector("#snowmanCanvas");
var ctx = canvas.getContext("2d");

ctx.lineWidth = 5;
//body
const lowerBody = {
    x: 100,
    y: 145,
    radius: 50
}
ctx.arc(100,145,50,(26/15)*Math.PI,(19/15)*Math.PI);
ctx.stroke();
const upperBody = {
    x: 100,
    y: 85,
    radius: 40
}
ctx.moveTo(115,45);
ctx.arc(100,85,40,(24/15)*Math.PI,(21/15)*Math.PI);
ctx.stroke();

//left arm
ctx.moveTo(65,65);
ctx.lineTo(25,45);
ctx.stroke();
ctx.moveTo(25,55);
ctx.lineTo(45,55);;
ctx.lineTo(30,35);
ctx.stroke();

//right arm
ctx.moveTo(135,65);
ctx.lineTo(175,45);
ctx.stroke();
ctx.moveTo(175,55);
ctx.lineTo(155,55);;
ctx.lineTo(170,35);
ctx.stroke();

//head
const head = {
    x: 100,
    y: 30,
    radius: 20
}
ctx.moveTo(120,30);
ctx.arc(head.x, head.y, head.radius,0,2*Math.PI);
ctx.stroke();

ctx.moveTo(97,25);
ctx.arc(95,25,2,0,2*Math.PI);
ctx.stroke();

ctx.moveTo(110,25);
ctx.arc(108,25,2,0,2*Math.PI);
ctx.stroke();

//carrot
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(100,32);
ctx.lineTo(100,42);
ctx.lineTo(112,37);
ctx.closePath();
ctx.fillStyle = "orange";
ctx.fill();

//clickable head function
function intersects(x, y, circle){
    return ((x - circle.x)**2 + (y - circle.y)**2) < circle.radius**2;
}
canvas.addEventListener('click', (e) => {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if(intersects(mouseX, mouseY, lowerBody) || (intersects(mouseX, mouseY, upperBody) && !intersects(mouseX, mouseY, head))){
        //alert("Clicked!");
        drawDot(mouseX, mouseY);
    }
});
function drawDot(x, y){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x,y,4,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
}