const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1,rect2,rect3;
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  rect1= new Rectangle(400,300,200,200);
  rect2= new Rectangle(250,300,100,350);
  rect3= new Rectangle(550,300,100,350);
  rect4= new Rectangle(150,300,100,500);
  
}

function draw() {
  background(166,211,145); 
  Engine.update(engine);
  rect1.display();
  rect2.display(); 
  rect3.display();
  fill (247,186,68); 
  triangle(300,125,250,50,200,125);
  triangle(600,125,550,50,500,125);
  fill(181,40,36);
  triangle(300,200,400,40,500,200);
  fill(255);
  circle(100,300,200);
  circle(700,300,200);
  drawSprites();
}