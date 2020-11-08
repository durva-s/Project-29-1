const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, ball, ground;
var ground1, ground2, slingshot1;
var polygon1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  polygon1 = new polygon();

  ground = new Ground(400, 390, 800, 20);
  ground1 = new Ground (350, 290, 240, 20);
  ground2 = new Ground (630, 190, 200, 20);

 //level 1 - 1st P
  block = new Box(260,265,25,25);
  block1 = new Box(280, 265,25,25);
  block2 = new Box(310, 265,25,25);
  block3 = new Box(340, 265,25,25);
  block4 = new Box(370, 265,25,25);
  block5 = new Box(400, 265,25,25);
  block6 = new Box(430,265,25,25); 

 //level 2 - 1st P
  block7 = new Box(290,230,25,25);
  block8 = new Box(320, 230,25,25);
  block9 = new Box(350, 230,25,25);
  block10 = new Box(380, 230,25,25);
  block11 = new Box(410,230,25,25);

 //level 3 - 1st P
  block12 = new Box(320,195,25,25);
  block13 = new Box(350, 195,25,25);
  block14 = new Box(380,195,25,25);
 //level 4 - 1st P
  block15 = new Box(350,160,25,25);

 //level 1 - 2nd P
  Box1= new Box(570, 160,25,25);
  Box2= new Box(600, 160,25,25);
  Box3= new Box(630, 160,25,25);
  Box4= new Box(660, 160,25,25);
  Box5= new Box(690, 160,25,25);

//level 2 - 2nd P
  Box6 = new Box(600, 125,25,25);
  Box7 = new Box(630, 125,25,25);
  Box8 = new Box(660, 125,25,25);
//level 3 - 2nd P
  Box9 = new Box(630, 90,25,25);

  slingshot1 = new SlingShot(polygon1.body,{x:130, y:170});

}

function draw() {
  rectMode(CENTER);
  background(255,255,255); 
  Engine.update(engine);

  polygon1.display();
  slingshot1.display();
  
  fill("green");
  block.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();

  fill("black");
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  fill("red");
  block12.display();
  block13.display();
  block14.display();

  fill("darkblue");
  block15.display();

  fill("orange");
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();

  fill("yellow");
  Box6.display();
  Box7.display();
  Box8.display();

  fill("purple");
  Box9.display();

  ground.display();
  ground1.display();
  ground2.display();
  drawSprites();
  textSize(20);
  fill("black");
  text("Press Space to reattatch",280,50);
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}



function mouseReleased(){
  slingshot1.fly();
}

