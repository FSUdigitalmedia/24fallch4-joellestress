let bottle;
let y = 750;
let speed = 0;
let theFont;
let backround;

function preload() {
    theFont = loadFont("assets/LOKICOLA.TTF");
    bottle = loadImage("assets/bottle.png")
    backround = loadImage("assets/backround.jpg")
}

function setup() {
  createCanvas(1280, 720);
  textFont(theFont);
  textSize(150);
}

function draw() {
  
image(backround,0,0);

image(bottle, mouseX, mouseY);

  fill("red");
  text("CocaCola", width/2, height/2);


  y = y + speed;
  
  if (y > height || y < 0) {
    speed = speed * -1;
  }


 fill("white");
 circle(50,y,40);
 circle(100, y, 40);
 circle(150,y,40);
 circle(200,y,40);
 circle(250,y,40);
 circle(300,y,40);
 circle(350,y,40);
 circle(400,y,40);
 circle(450,y,40);
 circle(500,y,40);
 circle(550,y,40);
 circle(600,y,40);
 circle(650,y,40);
 circle(700,y,40);
 circle(750,y,40);
 circle(800,y,40);
 circle(850,y,40);
 circle(900,y,40);
 circle(950,y,40);
 circle(1000,y,40);
 circle(1050,y,40);
 circle(1100,y,40);
 circle(1150,y,40);
 circle(1200,y,40);

}

function keyPressed() {
  if (key === "c") {
    speed = -5;
  }
}