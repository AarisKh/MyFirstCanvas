
var canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d");

var color="carmite";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mouse_down);

function my_mouse_down(e){
    mouseX=e.clientX - canvas.offsetLeft;
    mouseY=e.clientY - canvas.offsetTop;

    console.log("x="+mouseX+"Y="+mouseY);
    circle(mouseX, mouseY);

}

function circle(mouseX, mouseY){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=3;
    ctx.arc(mouseX, mouseY, 40, 0, 2*Math.PI);
    ctx.stroke();
}