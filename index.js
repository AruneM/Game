let canvas = document.getElementById('myCanvas');
canvas.style.border = "2px solid black";
// canvas.style.backgroundColor = "#2a3342";

let ctx = canvas.getContext("2d");

let vX = 150;
let vY = 180;
let intervalId = 0;
let score = 0;
let background = new Image();
background.src = "/img/without.png"
let virusimg = new Image();
virusimg.src = "/img/red.png";

function drawbackground(){
    ctx.drawImage(background, 0, 0);
}

function drawHoles(){

    ctx.beginPath(); //top left
    ctx.ellipse(150, 160, 50, 60, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#6d2827";
    ctx.fill();

    ctx.beginPath(); //top left middle
    ctx.ellipse(300, 160, 50, 60, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#6d2827";
    ctx.fill();

    ctx.beginPath(); //top right
    ctx.ellipse(450, 160, 50, 60, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#6d2827";
    ctx.fill();

    ctx.beginPath(); //bottom left
    ctx.ellipse(150, 320, 50, 60, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#6d2827";
    ctx.fill();

    ctx.beginPath(); //middle
    ctx.ellipse(300, 320, 50, 60, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#6d2827";
    ctx.fill();

    ctx.beginPath(); //bottom rigt
    ctx.ellipse(450, 320, 50, 60, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#6d2827";
    ctx.fill();

}
function drawSpace(){
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(120, 120, 66, 80);
}
function drawSpace2(){
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(270, 120, 66, 80);
}
function drawSpace3(){
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(420, 120, 66, 80);
}
function drawSpace4(){
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(120, 280, 66, 80);
}
function drawSpace5(){
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(270, 280, 66, 80);
}
function drawSpace6(){
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(420, 280, 66, 80);
}

function drawVirus1(){
    ctx.drawImage(virusimg, 120, 120);
}
function drawVirus2(){
    ctx.drawImage(virusimg, 270, 120);
}
function drawVirus3(){
    ctx.drawImage(virusimg, 420, 120);
}
function drawVirus4(){
    ctx.drawImage(virusimg, 120, 280);
}
function drawVirus5(){
    ctx.drawImage(virusimg, 270, 280);
}
function drawVirus6(){
    ctx.drawImage(virusimg, 420, 280);
}
function drawMedicine(){

}
function draw(){
    drawbackground();
    drawHoles();
}

document.addEventListener('click', (event) => {
    console.log(event);
    if(event.clientY > 133 && event.clientY < 207 && event.clientX > 130 && event.clientX < 188){
       if (setInterval && event.isTrusted){
        // ctx.clearRect(120, 120, 66, 80);
        drawSpace();
        score ++;
       }
    }
    if(event.clientY > 133 && event.clientY < 207 && event.clientX > 282 && event.clientX < 339){
        // ctx.clearRect(270, 120, 67, 80);
        drawSpace2();
    }
    if(event.clientY > 133 && event.clientY < 207 && event.clientX > 432 && event.clientX < 489){
        // ctx.clearRect(420, 120, 67, 80);
        drawSpace3();
    }
    if(event.clientY > 281 && event.clientY < 358 && event.clientX > 130 && event.clientX < 188){
        // ctx.clearRect(120, 270, 66, 80);
        drawSpace4();
    }
    if(event.clientY > 281 && event.clientY < 358 && event.clientX > 282 && event.clientX < 339){
        // ctx.clearRect(270, 270, 66, 80);
        drawSpace5();
    }
    if(event.clientY > 281 && event.clientY < 358 && event.clientX > 432 && event.clientX < 489){
        // ctx.clearRect(420, 270, 66, 80);
        drawSpace6();
    }
});

function interval(){

// intervalId1 = setInterval(function(){
//     ctx.clearRect(120, 120, 60, 80);
// }, 7003)

//background
let intervalId0 = 0;
intervalId0 = setInterval(function(){
    requestAnimationFrame(draw);
    clearInterval(intervalId0);
}, 500)
// //top left
// let intervalId1 = 0;
// intervalId1 = setInterval(function(){
//     requestAnimationFrame(drawVirus1);
//     // clearInterval(intervalId1);
// }, 3000)
// // // //top middle
// intervalId2 = 0;
// intervalId2 = setInterval(function(){
//     requestAnimationFrame(drawVirus2);
//     // clearInterval(intervalId2);
// }, 4000)
// // // intervalId1 = setInterval(function(){
// // //     ctx.clearRect(270, 120, 60, 80);
// // // }, 4000)
// // // //top right
// intervalId3 = 0;
// intervalId3 = setInterval(function(){
//     requestAnimationFrame(drawVirus3);
//     // clearInterval(intervalId3);
// }, 7000)
// // // // //bottom right
// intervalId4 = 0;
// intervalId4 = setInterval(function(){
//     requestAnimationFrame(drawVirus4);
//     // clearInterval(intervalId4);
// }, 5000)
// // //bottom middle
// intervalId5 = 0;
// intervalId5 = setInterval(function(){
//     requestAnimationFrame(drawVirus5);
//     // clearInterval(intervalId5);
// }, 13000)
// // // //bottom left
// intervalId6 = 0;
// intervalId6 = setInterval(function(){
//     requestAnimationFrame(drawVirus6);
//     // clearInterval(intervalId6);
// }, 7000)

}
interval();
