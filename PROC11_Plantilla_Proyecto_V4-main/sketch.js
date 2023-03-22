var sea, seaimg;
var ship, shipAnimation;
function preload()
{
  //imagen del mar
  seaimg=loadImage("sea.png");
  //animacion barco
  shipAnimation=loadAnimation("ship1.png","ship2.png","ship3.png", "ship4.png");
}

function setup(){
  createCanvas(400,400);

  sea=createSprite(200,200);
  sea.addImage("sea", seaimg);
  sea.velocityX=-3;

  ship = createSprite(180,250,50,50);
  ship.scale=0.3;
  ship.addAnimation("ship",shipAnimation);
}

function draw() {
  background("blue");
  
  if (sea.x < 0){
    sea.x = sea.width/2;
  }

  drawSprites();
}
