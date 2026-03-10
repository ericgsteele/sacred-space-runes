let bg;
let circleCol;
let x = 0;
let y = 0;
let d = 45;
let margin = 90;

let numberX, numberY;
let speedX, speedY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  background(30, 16, 10);
  bg = color(30, 16, 10, 0.05);
  frameRate(15);
  pickNumber(); // pick number between 1 and 9 on refresh
}

function draw() {
  background(bg);
  
  x += speedX*0.1;
  y += speedY*0.1;
  
  let sinX = sin(x);
  let cosY = cos(y);

  let radiusX = (width - margin) / 2;
  let radiusY = (height - margin) / 2;
  
  let x2 = width/2 + sinX * radiusX;
  let y2 = height/2 + cosY * radiusY;
  let d2 = (sinX * cosY) * 2;
  
  // draw circle
  let aura = map(cosY, -1, 1, 250, 500);
  circleCol = color(aura, 30, 75);
  
  noFill();
  stroke(circleCol);
  circle(x2, y2, d * d2);

  textSize(32);
  textAlign(CENTER, CENTER);
  fill(aura,10,40,);
  noStroke();
  text(numberX + " : " + numberY, width / 2, height / 2);
}

// Pick numbers 1-9 and update speeds
function pickNumber() {
  numberX = Math.floor(Math.random() * 9) + 1;
  numberY = Math.floor(Math.random() * 9) + 1;
  speedX = numberX * 0.1;
  speedY = numberY * 0.1;
}

function mousePressed() {
  pickNumber();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}