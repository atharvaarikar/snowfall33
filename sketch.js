var Engine=Matter.Engine
var World=Matter.World
var Bodies=Matter.Bodies
var Events=Matter.Events
var snfall=[]
var i;
var kid;
var wo,engine;

function preload(){
 
  i=loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);



  engine=Engine.create();
  wo=engine.world;

  kid=new boy(500,350,100,100);
//   boy=createSprite(400,350,50,50);

}

function draw() {
  background(i);
    

  Engine.update(engine);
//   drawSprites();

kid.display();
  if(frameCount%20===0){
    snfall.push(new snow(random(0,780),10))
  }

  for(var d=0;d < snfall.length;d++){
    snfall[d].display();
  }


 
}


function keyPressed(){
  if (keyCode === UP_ARROW) {
   
    Matter.Body.applyForce(kid.body,kid.body.position,{x:-20,y:-10})

      
    }
  
}