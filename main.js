canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    var mouse_x = e.clientX - canvas.offsetLeft;
    var mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x, mouse_y);
    console.log("x = " + mouse_x + " ,y = " + mouse_y);
}

function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2* Math.PI);
    ctx.stroke();
}

function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}