// DRAW SHAPE FUNCTION
// DRAW MOON
function drawMoon(moon) {
  for (i = 0; i < moon.length; i++) {
    ctx.fillStyle = moon[i][3];
    ctx.beginPath();
    ctx.arc(moon[i][0], moon[i][1], moon[i][2], 0, 2 * Math.PI);
    ctx.fill();
  }
}

// DRAW MOUNTAIN
function drawMountain(mountains) {
  // ctx.fillStyle = `#775AB4`;
  ctx.fillStyle = "#43355F";
  // `#564082`;
  for (i = 0; i < mountains.length; i++) {
    ctx.beginPath();
    ctx.moveTo(mountains[i][0], mountains[i][1]);
    ctx.lineTo(mountains[i][2], mountains[i][3]);
    ctx.lineTo(mountains[i][4], mountains[i][1]);
    ctx.lineTo(mountains[i][0], mountains[i][1]);
    ctx.fill();
  }
}

// DRAW TREES
function drawTree(trunks, trees) {
  //    Tree Trunks
  ctx.fillStyle = trunks[0][4];
  for (r = 0; r < trunks.length; r++) {
    ctx.beginPath();
    ctx.rect(trunks[r][0], trunks[r][1], trunks[r][2], trunks[r][3]);
    ctx.fill();
  }
  // Leaves on Pines
  ctx.fillStyle = trees[0][6];
  for (i = 0; i < trees.length; i++) {
    ctx.beginPath();
    ctx.moveTo(trees[i][0], trees[i][1]);
    ctx.lineTo(trees[i][2], trees[i][3]);
    ctx.lineTo(trees[i][4], trees[i][5]);
    ctx.lineTo(trees[i][0], trees[i][1]);
    ctx.fill();
    //    Down 1
    ctx.beginPath();
    ctx.moveTo(trees[i][0] - 5, trees[i][1] + 60);
    ctx.lineTo(trees[i][2], trees[i][3] + 40);
    ctx.lineTo(trees[i][4] + 5, trees[i][5] + 60);
    ctx.lineTo(trees[i][0] + 5, trees[i][1] + 60);
    ctx.fill();
    //    Down 2
    ctx.beginPath();
    ctx.moveTo(trees[i][0] - 10, trees[i][1] + 120);
    ctx.lineTo(trees[i][2], trees[i][3] + 80);
    ctx.lineTo(trees[i][4] + 10, trees[i][5] + 120);
    ctx.lineTo(trees[i][0] + 10, trees[i][1] + 120);
    ctx.fill();
  }
}

// DRAW FIREFLY
function getFireFly() {
  let aFireFly = {
    x: Math.floor(Math.random() * cnv.width),
    y: Math.floor(Math.random() * 140 + 440),
    radius: Math.floor(Math.random() * 4 + 2),
    colour: "#B9B211",
    xSpeed: Math.floor(Math.random() * 6 - 3),
    ySpeed: Math.random() - 1,
    xMax: 0,
    xMin: 0,
    yMax: 0,
    yMin: 0,
    // RANDOMIZE X-SPEED, add xMax/xMin?
  };
  aFireFly.xMax = aFireFly.x + 75;
  aFireFly.xMin = aFireFly.x - 75;
  aFireFly.yMax = aFireFly.y - 5;
  aFireFly.yMin = aFireFly.y + 5;
  return aFireFly;
}

function drawFly(allFlies) {
  for (i = 0; i < allFlies.length; i++) {
    // Draw Shape
    ctx.fillStyle = allFlies[i].colour;
    ctx.beginPath();
    ctx.arc(allFlies[i].x, allFlies[i].y, allFlies[i].radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

// Lazy fix
function addFlies(newFly) {
  for (i = 0; i < newFly.length; i++) {
    // Draw Shape
    ctx.fillStyle = newFly[i].colour;
    ctx.beginPath();
    ctx.arc(newFly[i].x, newFly[i].y, newFly[i].radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}
