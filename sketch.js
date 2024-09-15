let y = 0;
let speed = 3;
let theFont;

function preload() {
    theFont = loadFont("assets/LOKICOLA.TTF");
}

function setup() {
  createCanvas(1280, 720);
  textFont(theFont);
  textSize(150);
}

function draw() {
  background("#FFFFFF");
  text("CocaCola", width/2,height/2);
}


