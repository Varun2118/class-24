const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1,pig2  
var log1,log2,log3,log4

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,750,50,50);
    box2 = new Box(1000,750,50,50);
    ground = new Ground(600,780,1200,20)
    topBorder = new Ground(600,20,1200,20) 
    leftBorder= new Ground(20,400,20,800)
    rightBorder= new Ground(1180,400,20,800)
   pig1= new Pig(900,750,50,50)
   log1= new Log (900,700,300,PI/2)
   box3 = new Box(800,650,50,50)
   box4 = new Box(1000,650,50,50)
   pig2= new Pig(900,650,50,50)
   log2= new Log(900,600,300,PI/2)
   box5= new Box(900,550,50,50)
   log3= new Log(820,500,120,PI/4)
   log4= new Log(980,500,120,PI/-4)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    topBorder.display();
   leftBorder.display();
   rightBorder.display();
   pig1.display();
   log1.display();
   box3.display();
   box4.display();
   pig2.display();
   log2.display();
   box5.display();
   log3.display();
   log4.display();
}