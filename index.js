function start() {
  let canvas = document.getElementById("myCanvas");
  canvas.style.border = "2px solid black";
  // canvas.style.backgroundColor = "#2a3342";

  let ctx = canvas.getContext("2d");

  let score = 0;
  let background = new Image();
  background.src = "/img/without.png";
  let virusimg = new Image();
  virusimg.src = "/img/red.png";

  function drawbackground() {
    ctx.drawImage(background, 0, 0);
  }

  function drawHoles() {
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
  function drawSpace() {
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(120, 120, 66, 80);
  }
  function drawSpace2() {
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(270, 120, 66, 80);
  }
  function drawSpace3() {
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(420, 120, 66, 80);
  }
  function drawSpace4() {
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(120, 280, 66, 80);
  }
  function drawSpace5() {
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(270, 280, 66, 80);
  }
  function drawSpace6() {
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(420, 280, 66, 80);
  }

  function drawVirus1() {
    ctx.drawImage(virusimg, 120, 120);
  }
  function drawVirus2() {
    ctx.drawImage(virusimg, 270, 120);
  }
  function drawVirus3() {
    ctx.drawImage(virusimg, 420, 120);
  }
  function drawVirus4() {
    ctx.drawImage(virusimg, 120, 280);
  }
  function drawVirus5() {
    ctx.drawImage(virusimg, 270, 280);
  }
  function drawVirus6() {
    ctx.drawImage(virusimg, 420, 280);
  }
  function drawgreenV() {}
  function draw() {
    drawbackground();
    drawHoles();
  }
  let virus1 = false;
  let virus2 = false;
  let virus3 = false;
  let virus4 = false;
  let virus5 = false;
  let virus6 = false;

  document.addEventListener(
    "click",
    (event) => {
      console.log(event);
      if (
        event.clientY > 133 &&
        event.clientY < 207 &&
        event.clientX > 130 &&
        event.clientX < 188
      ) {
        drawSpace();
        score++;
        virus1 = false;
        console.log(virus1);
      }
      if (
        event.clientY > 133 &&
        event.clientY < 207 &&
        event.clientX > 282 &&
        event.clientX < 339
      ) {
        drawSpace2();
        score++;
        virus2 = false;
      }
      if (
        event.clientY > 133 &&
        event.clientY < 207 &&
        event.clientX > 432 &&
        event.clientX < 489
      ) {
        drawSpace3();
        score++;
        virus3 = false;
      }
      if (
        event.clientY > 281 &&
        event.clientY < 358 &&
        event.clientX > 130 &&
        event.clientX < 188
      ) {
        drawSpace4();
        score++;
        virus4 = false;
      }
      if (
        event.clientY > 281 &&
        event.clientY < 358 &&
        event.clientX > 282 &&
        event.clientX < 339
      ) {
        drawSpace5();
        score++;
        virus5 = false;
      }
      if (
        event.clientY > 281 &&
        event.clientY < 358 &&
        event.clientX > 432 &&
        event.clientX < 489
      ) {
        drawSpace6();
        score++;
        virus6 = false;
      }
    },
    50
  );
  let intervalId1 = 0;
  let intervalId2 = 0;
  let intervalId3 = 0;
  let intervalId4 = 0;
  let intervalId5 = 0;
  let intervalId6 = 0;

  function interval() {
    //background
    let intervalId0 = setInterval(function () {
      requestAnimationFrame(draw);
      clearInterval(intervalId0);
    }, 50);
    //top left
    intervalId1 = setInterval(function () {
      requestAnimationFrame(drawVirus1);
      virus1 = true;
      console.log(virus1);
      // clearInterval(intervalId1);
    }, 3000);
    //top middle
    intervalId2 = setInterval(function () {
      requestAnimationFrame(drawVirus2);
      // clearInterval(intervalId2);
      virus2 = true;
    }, 4000);
    //top right
    intervalId3 = setInterval(function () {
      requestAnimationFrame(drawVirus3);
      // clearInterval(intervalId3);
      virus3 = true;
    }, 7000);
    //bottom right
    intervalId4 = setInterval(function () {
      requestAnimationFrame(drawVirus4);
      // clearInterval(intervalId4);
      virus4 = true;
    }, 5000);
    //bottom middle
    intervalId5 = setInterval(function () {
      requestAnimationFrame(drawVirus5);
      // clearInterval(intervalId5);
      virus5 = true;
    }, 13000);
    //bottom left
    intervalId6 = setInterval(function () {
      requestAnimationFrame(drawVirus6);
      // clearInterval(intervalId6);
      virus6 = true;
    }, 9000);
  }
  interval();

  let ending = setTimeout(function () {
    clearInterval(intervalId6);
    clearInterval(intervalId5);
    clearInterval(intervalId4);
    clearInterval(intervalId3);
    clearInterval(intervalId2);
    clearInterval(intervalId1);
    clearInterval(intervalId7);

    //SETTING GAME-OVER SCREEN
    function createGameOverScreen() {
      gameScreen.remove();

      gameOverScreen = buildDom(`
    <main>
        <div class="container">
            <div>
                <h1>You won!!!</h1>
            </div>
            <div>
            <button id="restart-btn" class="button" >RESTART</button>
            </div>
        </div>
    </main>`);

      document.body.appendChild(gameOverScreen);
      var button = gameOverScreen.querySelector("button");
      button.addEventListener("click", () => {
        location.reload();
      });
    }
    function removeGameScreen() {
      gameScreen.remove();
    }
    removeGameScreen();
    createGameOverScreen();
  }, 20000);

  function over() {
    //SETTING GAME-OVER SCREEN
    function createGameOverScreen() {
      gameScreen.remove();

      gameOverScreen = buildDom(`
        <main>
        <div class="container">
            <div>
                <h1>You lost!!!</h1>
            </div>
            <div>
            <button id="restart-btn" class="button" >RESTART</button>
            </div>
        </div>
    </main>`);

      document.body.appendChild(gameOverScreen);
      var button = gameOverScreen.querySelector("button");
      button.addEventListener("click", () => {
        location.reload();
      });
    }
    function removeGameScreen() {
      gameScreen.remove();
    }
    removeGameScreen();
    createGameOverScreen();
  }

  let intervalId7 = setInterval(function () {
    if (
      virus1 == true &&
      virus2 == true &&
      virus3 == true &&
      virus4 == true &&
      virus5 == true &&
      virus6 == true
    ) {
      clearInterval(intervalId7);
      clearInterval(intervalId6);
      clearInterval(intervalId5);
      clearInterval(intervalId4);
      clearInterval(intervalId3);
      clearInterval(intervalId2);
      clearInterval(intervalId1);
      clearTimeout(ending);
      over();
    }
  }, 1000);
}

// let viruses = [{x: 120, y: 120, appears: false}, {x:270, y:120, appears: false},
// {x:420, y:120, appears: false}, {x:120, y:280, appears: false}, {x:270, y:280, appears: false},
// {x:420, y:280, appears: false}]

// let intervalId0 = 0;
// intervalId0 = setInterval(function(){

//update state

// //clear canvas
// clearRect(0, 0, 598, 498);

// //draw background
//draw();

// for each array virus(draw){
//if (virus[].appears == false){
// if appears is false ( 50% of being true)
//}
//}

//draw elements only if they are true
//if (virus[].appears == true){
//ctx.drawImage(virusimg, virus[].x, virus[].y);
//}

// check gameover => if all appears === true with a foreach

//     draw random virus
// }, 500)

//addeventlistener => when click, change virus to false
