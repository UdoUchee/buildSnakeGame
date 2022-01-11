const grid = document.querySelector(".grid")
const startBtn = document.querySelector("#start")
const score = document.querySelector("#score")
let squares = []
let currentSnake = [2, 1, 0]
let direction = 1
const width = 10
let appleIndex = 0



function createGrid() {
  for (let i = 0; i < width*width; i++) { //create 100 of these elements with a for loop
    const square = document.createElement('div') //create element
    square.classList.add('square') //add styling to the element
    grid.appendChild(square) //put the element into our grid
    squares.push(square) //push it into a new squares array
  }
}

createGrid()
currentSnake.forEach(index => squares[index].classList.add('snake')) //draw snake on the grid

function move() {

  if (
    (currentSnake[0] + width >= width*width && direction === width) || //if snake has hit bottom
    (currentSnake[0] % width === width-1 && direction === 1) || //if snake has hit right wall
    (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
    (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
    squares[currentSnake[0] + direction].classList.contains('snake')
  )
    return clearInterval(timerId)


  const tail = currentSnake.pop()//remove last element from our currentSNake array
  squares[tail].classList.remove('snake') //remove styling from last element
  currentSnake.unshift(currentSnake[0] + direction)//add sqaure in direction we are heading
  squares[currentSnake[0]].classList.add('snake') //add styling so we can see it
}
move()

let timerId = setInterval(move, 1000) //make snake move across the grid
function generateApples() {
    do {
        //generate a random number
        appleIndex = Math.floor(Math.random() * squares.length)
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