
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground,paperobj
var basketr,basketl,basketb
var basketimg

function preload()
{
	basketimg=loadImage('dustbingreen.png')
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic:true
	}
	//Create the Bodies Here.
	Ground = Bodies.rectangle(600,680,1200,5,options);
	World.add(world,Ground);
	
	paperobj = new Paper(100,570,60);

	basketr= new Basket (1000,600,20,250)
	basketl= new Basket (800,600,20,250)
	basketb= new Basket (900,650,225,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,216,0);
  image(basketimg,780,450,240,200)
 
  rectMode(CENTER);
  fill("white")
  rect(Ground.position.x,Ground.position.y, 1200, 30);
  paperobj.display();
  
  //basketr.display();
  //basketl.display();
  //basketb.display();
  drawSprites();

}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperobj.paper,paperobj.paper.position,{x:88,y:-88});
	}
}



