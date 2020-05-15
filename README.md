# Virus smack/strike

## Description
Survive the Virus is a game where the player has to click quickly on the appearing virus images and avoid hittiing medicine images. The game ends if the player hits medicine image 3 times, misses to hit 4 viruses, or the player clears the game. Game is cleared/won if the player still has at least 1 live. The game difficulty increases(viruses appear faster and/or for shorter time), but the game has a limit and is not a never ending game.

## MVP (DOM - CANVAS)
1 level; 3 lives; Scores every time hitting the virus; Virus images pop up from 5 holes, which needs to be killed; Avoid killing medicine that pops up; Game over: losing 3 lives; Losing lives: hitting 3 times medicine or not missing to hit 4 viruses. Instruction and controls on the side. Able to restart the game;

## Backlog
Increase level difficulty.
Make an instruction button.
Make a spray instead hammer kill the virus.

## Data structure
### main()
splashScreen()
startGame()
endGame()

### game()
drawCanvas()
addVirus()
addMedice()
addHammer()
addEvents()
updateCanvas()
clearCanvas()

### viruses()
draw()
move()
loop()
interval()

### medicine()
draw()
move()
loop()
interval()

### hammer()
draw()
move()

### event()
mouseClick()
moveHammer()

## States y States Transitions
- splashScreen(a simple screen with an image and with start button)
- gameScreen (a table with 5 or 4 holes and a hammer on the right bottom corner)
- gameoverScreen (same as splashScreen just with GAME OVER text)
- winScreen (same as splashScreen just with icon of clapping hands and WIN text or just win text on the game screen)

## Task
### Try out:
Build canvas;
Build simple shapes and try out mechanics;
### Main:
create screens;
create buttons;
event;
### Game:
update canvas;
import images;
### Virus and Medicine
create image;
import images;
add ivents;
### Hammer:
create image;
import image;
add ivents;
### Extra:
add instructions on the side;
music;
extra buttons;
style;

## Links
### Trello
[Link url](https://trello.com/invite/b/75q4wPf9/9a00544a48e8c5cbcffda32300561dd6/ironhack-1-game)

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/AruneM/Game)
[Link Deploy](https://arunem.GitHub.io/Game)

### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/1dL5AXsfgqCh9p8Cbacxw0vaJAvQEJTPtEmuENbr_5Jw/edit?usp=sharing)
