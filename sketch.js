var ship , floating_ship;
var seaimg;
var sea;

function preload(){
seaimg = loadImage("sea.png");
floating_ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png");
}

function setup(){
  createCanvas(1200,600);
  sea=createSprite(600,300,2400,400);
  sea.addImage("sea",seaimg);
  

  ship=createSprite(100,400,200,200);
  ship.addAnimation("floating",floating_ship);
  ship.scale=0.2;
  
}

function draw() {
  background("purple");
  
  sea.velocityX=-3;

if(sea.x<0){
  sea.x=sea.width/2;

}
 drawSprites();
}