const grid = document.querySelector(".grid")
const startButton = document.querySelector("#start")
const scoreDisplay = document.querySelector("#score")
let squares = []
let currentSnake = [2, 1, 0]
let direction = 1
const width = 10
let appleIndex = 0
let score = 0
let intervalTime = 1000
let speed = 0.9
let timerId = 0


function createGrid() {
  for (let i = 0; i < width * width; i++) { //create 100 of these elements with a for loop
    const square = document.createElement('div') //create element
    square.classList.add('square') //add styling to the element
    grid.appendChild(square) //put the element into our grid
    squares.push(square) //push it into a new squares array
  }
}
createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake')) //draw snake on the grid

function startGame() {
  currentSnake.forEach(index => squares[index].classList.remove('snake'))// remove the snake
  squares[appleIndex].classList.remove('apple')// remove the apple
  clearInterval(timerId)
  currentSnake = [2, 1, 0]
  scoreDisplay.textContent = score//re-add new score to the browser
  score = 0
  intervalTime = 1000
  generateApples()
  currentSnake.forEach(index => squares[index].classList.add('snake'))// re-add class of snake to currentSnake
  timerId = setInterval(move, intervalTime) //make snake move across the grid

}

function move() {

  if (
    (currentSnake[0] + width >= width * width && direction === width) || //if snake has hit bottom
    (currentSnake[0] % width === width - 1 && direction === 1) || //if snake has hit right wall
    (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
    (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
    squares[currentSnake[0] + direction].classList.contains('snake')
  )
    return clearInterval(timerId)


  const tail = currentSnake.pop()//remove last element from our currentSNake array
  squares[tail].classList.remove('snake') //remove styling from last element
  currentSnake.unshift(currentSnake[0] + direction)//add sqaure in direction we are heading

  //deal with snake head getting the apple
  if (squares[currentSnake[0]].classList.contains('apple')) {
    (squares[currentSnake[0]].classList.remove('apple'))//remove the class of apple
    squares[tail].classList.add('snake')//grow our snake by adding class of snake to it
    currentSnake.push(tail)//grow our snake array
    generateApples()//generate a new apple
    score++ //add one to the score
    scoreDisplay.textContent = score//display score
    clearInterval(timerId)
    intervalTime = intervalTime * speed
    timerId = setInterval(move, intervalTime) //speed up our snake
  }

  squares[currentSnake[0]].classList.add('snake') //add styling so we can see it
}
// move()

// let timerId = setInterval(move, intervalTime) //make snake move across the grid



function generateApples() {
  do {
    //generate a random number
    appleIndex = Math.floor(Math.random() * squares.length)
    // generate a apple (randome #) anywhere the snake is not.
  } while (squares[appleIndex].classList.contains('snake'))
  squares[appleIndex].classList.add('apple')
}
generateApples()


function control(e) { // e = event
  if (e.keyCode === 39) { // 39 is right arrow
    console.log('right pressed')
    direction = 1
  } else if (e.keyCode === 38) { // 38 is for the up arrow
    console.log('up pressed')
    direction = -width
  } else if (e.keyCode === 37) { // 37 is for the left arrow
    console.log('left pressed')
    direction = -1
  } else if (e.keyCode === 40) { // 40 is for the down arrow
    console.log('down pressed')
    direction = +width
  }
}

document.addEventListener('keyup', control) // addEventListener to the keypad
startButton.addEventListener('click', startGame) // Start game