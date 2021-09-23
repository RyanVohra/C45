var BG;
var player;
var bgImage,playerImage1,playerImage2;
var zombie,zombieImage;


function preload(){

  bgImage = loadImage("assets/bg.jpeg");
  playerImage1 = loadImage("assets/shooter_2.png");
  playerImage2 = loadImage("assets/shooter_3.png");
  zombieImage = loadImage("assets/zombie.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  BG = createSprite(displayWidth-700,displayHeight-300);
  BG.addImage(bgImage);
  BG.scale = 1.1
  
  
  player = createSprite(displayWidth-1200,displayHeight-250);
  player.addImage(playerImage1);
  player.scale=0.5
  
  zombie=createSprite(displayWidth-200,displayHeight-250)
  zombie.addImage(zombieImage);
  zombie.scale = 0.3
  
  
  
 
  
  
}

function draw() {
  
  background(180);

  if(keyWentDown("SPACE")){
    player.addImage(playerImage2);
  }
  
  if(keyWentUp("SPACE")){
    player.addImage(playerImage1);
  }
  
 


  drawSprites();
}

