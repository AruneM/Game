// to modify the DOM depending on the screen
function buildDom(htmlString) {
    var div = document.createElement("div");
  
    div.innerHTML = htmlString;
  
    return div.children[0];
  }
  
  // main game function for page load
  function main() {
    var game;
    var splashScreen;
    var gameOverScreen;
  
    // SETTING GAME SPLASH SCREEN
    function createSplashScreen() {
      splashScreen = buildDom(`
        <main>
          <div class="container">
            <div id="title-box">
              <h1>Virus Smach</h1>
            </div>
            <div id="instructions-box">
              <h2>Instructions!</h2>
              <p>
              Kill the viruses before all the squares fill up.
              (Kill them by clicking on them)
                </p>
            </div>
            <div class="input-container">
              <button id="start-btn" class ="button">START!</button>
            </div>
          </div>
        </main>`);
  
      document.body.appendChild(splashScreen);
  
      var startButton = splashScreen.querySelector("#start-btn");
  
      startButton.addEventListener("click", function() {
        startGame();
      });
    }
    function removeSplashScreen() {
      splashScreen.remove();
    }
  
    // SETTING GAME SCREEN
    function createGameScreen() {
      var gameScreen = buildDom(`
      <main class="game game-container">
          <canvas id="myCanvas" width="598" height="448"></canvas>
      </main>
      `);
  
      document.body.appendChild(gameScreen);
      return gameScreen;
    }
  
    function removeGameScreen() {
      game.gameScreen.remove();
    }
  
    // SETTING GAME-OVER SCREEN
    function createGameOverScreen() {
  
      gameOverScreen = buildDom(`
      <main>
          <div class="container">
              <div>
                  <h1>You won!!!</h1>
              </div>
              <button id="restart-btn" class="button" >RESTART!</button>
          </div>
      </main>`);
  
      document.body.appendChild(gameOverScreen);
  
      var button = gameOverScreen.querySelector("button");
  
      button.addEventListener("click", startGame);
    }
  
    function removeGameOverScreen() {
      // by checking we avoid an issue when removing this when game starts on the first time
      if (gameOverScreen !== undefined) {
        gameOverScreen.remove();
      }
    }
  
    function startGame() {
  
      removeSplashScreen();
      removeGameOverScreen();
  

  gameScreen = createGameScreen();
        start();
        passGameOverCallback(gameOver);
    }
  
    function gameOver() {
      removeGameScreen();
      createGameOverScreen(this.totalScore);
    }
    createSplashScreen();
  }
  window.addEventListener("load", main);