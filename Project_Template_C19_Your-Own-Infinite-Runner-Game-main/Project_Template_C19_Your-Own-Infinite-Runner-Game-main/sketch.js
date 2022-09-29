var barrier, car, rocks, coin,road;


function preload(){
    car = loadImage ("car.png");
    rocks = loadImage ("rocks.png");
    barrier = loadImage ("barrier.png");
    coin = loadImage ("coin.png");
    road = loadImage ("road.jpg")
}

function setup() {
  createCanvas (400,400);
 

 road=createSprite(200,200);
 road.addImage(road);
 road.velocityY = 4;
 road.scale=1.2;

 car = createSprite(180,340,30,30);
 car.scale=0.08;
 car.addAnimation(car);
}

function draw() {

 drawSprites ()
}