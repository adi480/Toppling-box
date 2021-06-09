const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4;
var ground;

function setup(){
    var canvas = createCanvas(450,450);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(195,200,50,50);   
    box2=new Box(195,50,70,140);  
    box3=new Box(270,50,30,80);
    box4=new Box(250,1,60,60)
    ground=new Ground(200,390,500,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
}

