let bg;
let circleCol;
let x=0;
let y=0;
let d=45;
let margin=290;
let speed=0.08;
let aura;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  background(30,16,10);
  bg = color(30,16,10,0.04);
  frameRate(15);
}

function draw() {
  background(bg);
  
  x+=speed*0.8;
  y+=speed*0.6
  
  let sinX=sin(x);
  let cosY=cos(y);


  let radiusX=(width-margin)/2;
  let radiusY=(height-margin)/2;
  
  let x2=width/2 + sinX * radiusX;
  let y2=height/2 + cosY * radiusY;
  let d2=(sinX*cosY)*2;
  
  //draw circle
    
  let aura= map(cosY,-1,1,250,500);
  circleCol = color(aura,30,75);
  
  noFill();
  circle(x2,y2,d*d2);
  stroke(circleCol);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}