const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint


var engine , world;
var background_img , background1;
var Ghost_img;
var gameState = 0;
var ghostGrp;

function preload(){
  background_img = loadImage('starNight.png');
  Ghost_img=loadImage('catapult.png');
}
function setup() {
  createCanvas(windowWidth , windowHeight);
  engine = Engine.create();
  world = engine.world
 background1 = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  background1.addImage(background_img);
  background1.scale = 1.5
  arrow = new Arrow(110,245);
  sling = new SlingShot(arrow.body , {x:95 , y:265});
  ghost = new Ghost(random(200,370),random(5,100),20);
  ghostGrp= new Group();
}

function draw() {
  background(255);
 
  Engine.update(engine);
   background1.velocityX = -2;
   if(background1.x<100){
       background1.x = background1.width/2;
   }
  drawSprites();
  
  ghost.display();
  arrow.display();
  sling.display();
  
  obstacle();
  for (var i=0;i<ghostGrp.length;i++){
     console.log(arrow.body,ghostGrp.get(i))
    if(collide(arrow.body,ghostGrp.get(i))){  
    ghostGrp.get(i).destroy();
    }
  }
}

 function obstacle(){
  if( frameCount%50==0){
    Ghost = createSprite(random(500,1100),random(100,200),20,20)
     Ghost.addImage(Ghost_img);
     Ghost.velocityY = 3
    Ghost.scale = 0.3;
    Ghost.lifetime = 400;
     ghostGrp.add(Ghost);
   }
  
 }

function mouseDragged(){
  Matter.Body.setPosition(arrow.body , {x:mouseX,y:mouseY})
}

function mouseReleased(){
  gameState = 1
  sling.fly(arrow);
}

 function collide(body,sprite){
   if(body!=null){
     var d=dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
     if(d<=80){ 
     console.log("collided")
     
      return true;
    }
    else {
      return false;
     }
   }
}





