// GRAPHICS LIBRARY

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 600;
// tracktime
var frame = 0;

//***************************************************
// mouse movement listener
// cnv.addEventListener("mousemove", mousemoveHandler);

// // Math Helper Functions
// function mousemoveHandler(event) {
//   let rect = cnv.getBoundingClientRect();
//   mouseX = event.clientX - rect.left;
//   mouseY = event.clientY - rect.top;
//   console.log("X: " + mouseX.toFixed(0) + "  Y: " + mouseY.toFixed(0));
// }
// // ***************************************************

// Animation
requestAnimationFrame(draw);

// ========== MOON =============
// Array setup: x, y, radius, colour
let moon = [
  [500, 150, 75, "#F5F5C9"],
  [540, 125, 15, "#C2C29D"],
  [450, 165, 10, "#C2C29D"],
  [500, 175, 10, "#C2C29D"],
  [475, 100, 12, "#C2C29D"],
  [535, 193, 8, "#C2C29D"],
  [485, 135, 8, "#C2C29D"],
  [466, 195, 12, "#C2C29D"],
  [550, 163, 8, "#C2C29D"],
];

//======= MOUNTAINS =============
// Array setup: startX, startY, firstLineToX, firstLineToY
let mountains = [
  [0, cnv.height, 200, 200, 800],
  [225, cnv.height, 800, 150, 1500],
  [-700, cnv.height, 200, 200, 110],
];
//========== TREES ==============
// Background Tree Line
let bgTrees = [
  [112, 425, 150, 340, 180, 425, "#342948"],
  [250, 430, 300, 300, 350, 430],
  [640, 425, 700, 340, 760, 425],
  [900, 440, 950, 290, 1000, 440],
  [400, 450, 450, 340, 500, 450],
];

let bgTrunks = [
  [130, 500, 30, 100, `#342948`],
  [280, 500, 30, 100],
  [680, 475, 40, 150],
  [929, 475, 40, 150],
  [420, 475, 40, 150],
];
// Background Tree Line
let midTrees = [
  [-50, 425, 0, 340, 50, 425, "#262031"],
  [130, 430, 180, 300, 230, 430],
  [300, 425, 350, 340, 400, 425],
  [550, 440, 600, 290, 650, 440],
  [680, 450, 740, 340, 780, 450],
  [860, 450, 890, 340, 930, 450],
];

let midTrunks = [
  [-10, 500, 30, 100, `#262031`],
  [170, 500, 30, 100],
  [330, 475, 40, 150],
  [580, 475, 40, 150],
  [710, 475, 40, 150],
  [878, 475, 27, 150],
];
drawTree(midTrunks, midTrees);
// Trees type 1
let trees = [
  [15, 425, 60, 340, 105, 425, "#203120"],
  [200, 430, 250, 300, 300, 430],
  [350, 390, 400, 300, 450, 390],
  [490, 425, 540, 340, 590, 425],
  [775, 440, 825, 290, 875, 440],
  [950, 425, 1000, 340, 1050, 425],
];

let trunks = [
  [38, 500, 40, 100, `#312B20`],
  [228, 500, 40, 100],
  [380, 475, 40, 150],
  [520, 475, 40, 150],
  [800, 475, 40, 150],
  [985, 475, 40, 150],
];

drawTree(trunks, trees);

// YOU WOULD NOT BELIEVE YOUR EYES
var allFlies = [];
for (i = 0; i < 100; i++) {
  allFlies.push(getFireFly());
}
function draw() {
  frame++;
  // Draw Forest
  // Background
  ctx.fillStyle = `#160A2E`;
  ctx.beginPath();
  ctx.rect(0, 0, cnv.width, cnv.height);
  ctx.fill();
  drawMoon(moon);
  drawMountain(mountains);
  drawTree(bgTrunks, bgTrees);
  drawTree(midTrunks, midTrees);
  drawTree(trunks, trees);
  drawFly(allFlies);

  // ANIMATION
  for (let i = 0; i < allFlies.length; i++) {
    allFlies[i].x += allFlies[i].xSpeed;
    allFlies[i].y += -allFlies[i].ySpeed;
  }
  for (let i = 0; i < allFlies.length; i++) {
    if (allFlies[i].radius < 1) {
      allFlies[i].radius = 1;
    }
    if (allFlies[i].x + allFlies[i].radius >= allFlies[i].xMax) {
      // aCircle.xSpeed += randSpeed;
      allFlies[i].xSpeed *= -1;
    } else if (allFlies[i].x - allFlies[i].radius <= allFlies[i].xMin) {
      // aCircle.xSpeed += randSpeed;
      allFlies[i].xSpeed *= -1;
    }
    // HOVER
    if (allFlies[i].y <= allFlies[i].yMax) {
      allFlies[i].ySpeed *= -1;
    } else if (allFlies[i].y >= allFlies[i].yMin) {
      allFlies[i].ySpeed *= -1;
    }
  }
  requestAnimationFrame(draw);
}

// KEYPRESSING

document.addEventListener("keydown", keyDownHandler);

function keyDownHandler() {
  console.log(event.code);
  let newFlies = [];
  // Increase
  if (event.code == "ArrowRight") {
    for (i = 0; i < 10; i++) {
      allFlies.push(getFireFly());
    }
    addFlies(allFlies);
  }
  // Decrease
  if (event.code == "ArrowLeft") {
    for (i = 0; i < 10; i++) {
      allFlies.pop();
    }
  }
  // Fast Forward
  if (event.code == "ArrowUp") {
    for (i = 0; i < allFlies.length; i++) {
      allFlies[i].xSpeed += 0.3;
      allFlies[i].ySpeed += 0.3;
    }
  }
  if (event.code == "ArrowDown") {
    for (i = 0; i < allFlies.length; i++) {
      allFlies[i].xSpeed /= 1.1;
      allFlies[i].ySpeed /= 1.1;
    }
  }
}
