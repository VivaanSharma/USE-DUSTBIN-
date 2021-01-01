
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbin1, dustbin2,dustbin3;
var ground1;
var Paper1;

function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


dustbin1 = new dustbin(500,600,20,100);
dustbin2 = new dustbin(700,600,20,100);
dustbin3 = new dustbin(600,570,200,20);

Paper1 = new paper(100,500,50,50);
 ground1 = new ground(400,650,10,800);





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  Paper1.display();

//dustbin1.display();
//dustbin2.display();
dustbin3.display();
  ground1.display();

  

  




}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:115,y:-115});
  }
}

