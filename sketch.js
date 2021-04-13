const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var stand
var block8,block9,block10,block11,block12,block13,block14,block15,block16
var ground

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
ground= new Ground(width/2,height,width,20)

block8= new Block (330,235,30,40);
block9= new Block (360,235,30,40);
block10= new Block (390,235,30,40);
block11= new Block (420,235,30,40);
block12= new Block (450,235,30,40);
block13= new Block (360,195,30,40);
block14= new Block (390,195,30,40);
block15= new Block (420,195,30,40);
block16= new Block (390,155,30,40);



}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  ground.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
block15.display();
block16.display();
  drawSprites();
}