
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3, ground;
var paper, bin;
function preload()
{

}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin = new Dustbin(800,600);

	ground = new Ground(500,685,1000,10);

	box1 = new Box(800,675,140,10);
	box2 = new Box(725,600,5,169);
	box3 = new Box(875,600,5,169);
	paper = new Paper(100,500,50,50);
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);

  background(225);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
  bin.display();
 
  keyPressed();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 5,y: -10});
	}
	if(paper.body.position.x > 350){
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 0.1,y: 14.5});
	}
}



