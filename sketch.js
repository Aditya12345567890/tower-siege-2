const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, ground, polygon;


function setup() {
  createCanvas(1600,800);
  engine = Engine.create();
  world = engine.world;


  ball = new Polygon(100, 300, 30);
  sling = new Sling(ball.body,{x:250, y:280});

  
  ground = new Ground(620,550,220,10);

  block1 = new Box(540,517,20,50);
  block2 = new Box(560,517,20,50);
  block3 = new Box(580,517,20,50);
  block4 = new Box(600,517,20,50);
  block5 = new Box(620,517,20,50);
  block6 = new Box(640,517,20,50);
  block7 = new Box(660,517,20,50);  

  block10 = new Box(560,465,20,50);
  block11 = new Box(580,465,20,50);
  block12 = new Box(600,465,20,50);
  block13 = new Box(620,465,20,50);
  block14 = new Box(640,465,20,50);
  
  block17 = new Box(580,413,20,50);
  block18 = new Box(600,413,20,50);
  block19 = new Box(620,413,20,50);
  
  block22 = new Box(600,360,20,50);

  
  ground1 = new Ground(950,400,200,10);
  
  block26 = new Box(890,360,20,50);
  block27 = new Box(910,360,20,50);
  block28 = new Box(930,360,20,50);
  block29 = new Box(950,360,20,50);
  block30 = new Box(970,360,20,50);
  
  block31 = new Box(910,320,20,50);
  block32 = new Box(930,320,20,50);
  block33 = new Box(950,320,20,50);

  block34 = new Box(930,290,20,50);

}

function draw() {
  background(255,255,255);    
  Engine.update(engine);

  ball.display();
  sling.display();

  fill("black");
  textSize(20);
  text("Drag the hexagonal stone and release it, to launch it towards the blocks", 430,100);

  ground.display();
  block1.display("red","black");
  block2.display("red","black");
  block3.display("red","black");
  block4.display("red","black");
  block5.display("red","black");
  block6.display("red","black");
  block7.display("red","black");
  block10.display("orange","black");
  block11.display("orange","black");
  block12.display("orange","black");
  block13.display("orange","black");
  block14.display("orange","black");
  block17.display("yellow","black");
  block18.display("yellow","black");
  block19.display("yellow","black");
  block22.display("pink","black");

  ground1.display();
  block26.display("darkblue","black");
  block27.display("darkblue","black");
  block28.display("darkblue","black");
  block29.display("darkblue","black");
  block30.display("darkblue","black");
  block31.display("Turquoise","black");
  block32.display("Turquoise","black");
  block33.display("Turquoise","black");
  block34.display("cyan","black");
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      sling.attach(ball.body);
  }
}