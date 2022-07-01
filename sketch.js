var sea, seaImg;
var ship, shipImg;
var invisibleGround;

function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);

sea = createSprite(200,180,200,20);
sea.addImage("sea", seaImg);
sea.x = sea.widht /2;
sea.velocityX = 4;

ship = createSprite(120,150,20,50);
ship.addAnimation("running", shipImg);
ship.scale = 0.25;
  
}

function draw() {
  background("220");

  if(sea.x < 0){
    sea.x = sea.widht / 2;
  }

  
  drawSprites();

 
}
