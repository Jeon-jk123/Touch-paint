Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");
var width_of_the_line=1
var last_position_of_x,last_position_of_y;
var color="black";
var width=screen.width;
new_width=screen.width-25;
new_height=screen.height-200;
if (width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

Canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e) {
    console.log(touchstart);
    color=document.getElementById("color").value;
    width=document.getElementById("width_of_the_line").value;
    last_position_of_x=e.touches[0].clientX-Canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-Canvas.offsetTop;
}

Canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) {
     current_position_of_mouse_x= e.touches[0].clientX - Canvas.offsetLeft;
     current_position_of_mouse_y= e.touches[0].clientY - Canvas.offsetTop;

    ctx.beginPath();
    ctx.lineWidth=width;
    ctx.strokeStyle=color;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);

    ctx.stroke();

last_position_of_x=current_position_of_mouse_x;
last_position_of_y=current_position_of_mouse_y;

}

function clean() {
    ctx.clearRect(0,0,ctx.Canvas.width,ctx.Canvas.height);
}