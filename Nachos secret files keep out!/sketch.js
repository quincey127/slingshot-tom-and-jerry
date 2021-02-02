const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var jerry
var tom
var bg
var ground1
var ground2
var sling1
var object1
var object2
var sling2


function preload(){
  bg=loadImage("bg.png")
}
function setup() {
  createCanvas(1800,950);
  engine = Engine.create();
    world = engine.world;

    ground1=new Ground(200,830,150,10)
    ground2=new Ground(1500,830,150,10)
    tom=new Tom(200,800)
    jerry=new Jerry(1500,800)
   object1=new Throw1(300,650)
   object2=new Throw1(1600,600)
    sling1=new SlingShot (object1.body,{x:150,y:700})
    sling2=new SlingShot (object2.body,{x:1450,y:700})

}

function draw() {
  background(bg);  
  Engine.update(engine);
tom.display()
jerry.display()
ground1.display()
ground2.display()
object1.display()
sling1.display()
sling2.display()
  object2.display()


}
function mouseDragged(){
  
  
  if(mouseX<250){

   
      Matter.Body.setPosition(object1.body, {x: mouseX , y: mouseY});
  }
  else if(mouseX>1400){
      Matter.Body.setPosition(object2.body, {x: mouseX , y: mouseY});
  }

}


function mouseReleased(){
  if(mouseX<250){



  
  sling1.fly();
 
  }
  else if(mouseX>1400){
 sling2.fly();
 
  }
 
}
