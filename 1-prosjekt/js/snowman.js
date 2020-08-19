var canvas = document.querySelector("#snowmanCanvas");
var ctx = canvas.getContext("2d");

ctx.lineWidth = 5;
//body
ctx.arc(100,145,50,(26/15)*Math.PI,(19/15)*Math.PI);
ctx.stroke();
ctx.moveTo(115,45);
ctx.arc(100,85,40,(24/15)*Math.PI,(21/15)*Math.PI);
ctx.stroke();

//head
ctx.moveTo(120,30);
ctx.arc(100,30,20,0,2*Math.PI);
ctx.stroke();

ctx.moveTo(97,25);
ctx.arc(95,25,2,0,2*Math.PI);
ctx.stroke();

ctx.moveTo(110,25);
ctx.arc(108,25,2,0,2*Math.PI);
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

//carrot
ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(100,32);
ctx.lineTo(100,42);
ctx.lineTo(112,37);
ctx.closePath();
ctx.fillStyle = "orange";
ctx.fill();