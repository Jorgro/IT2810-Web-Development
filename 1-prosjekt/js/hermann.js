var canvas = document.querySelector("#hermannCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(10,70);
ctx.moveTo(10,40);
ctx.lineTo(40,40);
ctx.moveTo(40,10);
ctx.lineTo(40,70);

ctx.moveTo(50,10);
ctx.lineTo(50,70);
ctx.moveTo(50,10);
ctx.lineTo(80,10);
ctx.moveTo(50,40);
ctx.lineTo(80,40);
ctx.moveTo(50,70);
ctx.lineTo(80,70);

ctx.moveTo(90,10);
ctx.lineTo(90,70);
ctx.moveTo(90,25);
ctx.arc(90,25,15,3*Math.PI/2,Math.PI/2);
ctx.moveTo(90,40);
ctx.lineTo(120,70);

ctx.moveTo(130,10);
ctx.lineTo(130,70);
ctx.moveTo(160,10);
ctx.lineTo(160,70);
ctx.moveTo(130,10);
ctx.lineTo(145,40);
ctx.lineTo(160,10);

ctx.moveTo(170,70);
ctx.lineTo(185,10);
ctx.lineTo(200,70);
ctx.moveTo(177.5,40);
ctx.lineTo(192.5,40);

ctx.moveTo(210,70);
ctx.lineTo(210,10);
ctx.lineTo(240,70);
ctx.lineTo(240,10);

ctx.moveTo(250,70);
ctx.lineTo(250,10);
ctx.lineTo(280,70);
ctx.lineTo(280,10);

ctx.stroke();