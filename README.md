# Virus smack

## Description
Survive the Virus is a game where the player has to click quickly on the appearing virus images, before all squares fills up. The game ends if all squares are full or time is up(2min). Game is cleared/won if the player killed all the viruses.

## MVP (DOM - CANVAS)
1 level; 3 lives; Scores every time hitting the virus; Virus images pop up from 6 holes, which needs to be killed; Avoid killing medicine that pops up; Game over: all 6 holes are full; Losing lives: hitting 3 times green virus; Instruction at the begining. Able to restart the game;

## Backlog
Increase level difficulty.
Make green virus;


## Data structure
### main()
splashScreen()
startGame()
endGame()

### game()
drawCanvas()
addVirus()
addEvents()
updateCanvas()
clearCanvas()

### viruses()
draw()
move()
loop()
interval()

### event()
mouseClick()

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
### Virus
create image;
import images;
add ivents;
### Extra:
music;
extra buttons;
style;
extra virus;
lives;
score;

## Links
### Trello
[Link url](https://trello.com/invite/b/75q4wPf9/9a00544a48e8c5cbcffda32300561dd6/ironhack-1-game)

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/AruneM/Game)
[Link Deploy](https://arunem.GitHub.io/Game)

### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/1pOnBN7Y_OhmQIAU25LWVM6cR_oLMidFKhg8r5FTKRLk/edit?usp=sharing)
