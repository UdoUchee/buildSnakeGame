# *#buildJs*
# Building a simple Snake Game
*2022-01-04*

![Two dice rolling 6's!](/snakeGame.JPG)

**Play by allowing the snake eat all the apples. This allows the snake to grow bigger and move faster.**


**#CodeSteps**

*HTML*

1. Code the frontEnd features of the game


*CSS*

1. Snake is a grid based game, so determine the size of the grid.
 > this game will be a 10 * 10 grid

*JS*

1. Create Grid
 > pseudocode: 
    - //create elements
    - //create 100 of these elements
    - //add styling to these elements
    - //put the element into our grid
    - //push it into a new squares array 
    - //create array of squares
    - //draw snake on the grid

1. Move Snake
  > pseudocode:
    - //remove last element from our currentSnake array
    - //remove styling from last element
    - //add sqaure in direction we are heading
    - //add styling so we can see it

1. Move Snake on a time loop
  > pseudocode:
    - //make snake move across the grid
    - //navigate snake on the grid using keyCodes
        - //39 is right arrow
        - // 38 is for the up arrow
        - // 37 is for the left arrow
        - // 40 is for the down arrow
    - gfgg

1. Ensure that Snake does not continue after hitting any of the 4 walls
  > pseudocode:
    - // Write if statament to check:
      - // if snake has hit bottom
      - // if snake has hit right wall
      - // if snake has hit left wall
      - // if snake has hit top
      - // using Modulus

1. Make Apples appear randomly on the grid
  > pseudocode:
    - //  Generate random numbers

> For more on methods used check : 
 -  [math method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
 -  [classList method](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
 -  [setInterval method](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
 -  [KeyCodes](https://keycode.info/)

## Languages used
	- HTML
	- CSS
	- JavaScript

## Prerequisties
IDE

## Credits
[Ania Kubow](https://scrimba.com/allcourses)

## To DO
  - 
  - 

