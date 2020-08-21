let body = [document.getElementById("svgUpperBody"), document.getElementById("svgLowerBody")]
let svgSnowman = document.getElementById("svgSnowman");
body.forEach(bodyPart => {
    bodyPart.addEventListener("click", (e) => {
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        addDot(mouseX, mouseY);
    });
});
function addDot(x, y){
    let dot = document.createElementNS('http://www.w3.org/2000/svg',"circle");
    dot.setAttribute("cx", x);
    dot.setAttribute("cy", y);
    dot.setAttribute("r", "2");
    dot.setAttribute("stroke", "black");
    dot.setAttribute("stroke-width", "5");
    svgSnowman.append(dot);
}