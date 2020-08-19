var canvas = document.querySelector("#snowmanCanvas");
var ctx = canvas.getContext("2d");

ctx.lineWidth = 5;
ctx.arc(100,200,50,(26/15)*Math.PI,(19/15)*Math.PI);
ctx.stroke();
ctx.moveTo(115,100);
ctx.arc(100,140,40,(24/15)*Math.PI,(21/15)*Math.PI);
ctx.stroke();
ctx.moveTo(120,85);
ctx.arc(100,85,20,0,2*Math.PI);
ctx.stroke();

ctx.moveTo(97,80);
ctx.arc(95,80,2,0,2*Math.PI);
ctx.stroke();

ctx.moveTo(110,80);
ctx.arc(108,80,2,0,2*Math.PI);
ctx.stroke();

ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(100,87);
ctx.lineTo(100,97);
ctx.lineTo(112,93);
ctx.closePath();
ctx.fillStyle = "orange";
ctx.fill();