const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;
var engine, world;
var ground, ball, rope;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(width/2,770,1200,45);

    ball=new Ball(200,200,40);

    rope=new Rope(ball.body,{x:500, y:50})

    b1=new Box(1000,500,70,70);
    b2=new Box(900,500,70,70);
    b3=new Box(1000,600,70,70);
    b4=new Box(900,600,70,70);
    b5=new Box(1000,700,70,70);
    b6=new Box(900,700,70,70);
    b7=new Box(1000,400,70,70);
    b8=new Box(900,400,70,70);
    b9=new Box(1000,300,70,70);
    b10=new Box(900,300,70,70);
    b11=new Box(1000,200,70,70);
    b12=new Box(900,200,70,70);
    b13=new Box(1000,100,70,70);
    b14=new Box(900,100,70,70);
    b15=new Box(1000,0,70,70);
    b16=new Box(900,0,70,70);
    b17=new Box(1000,-100,70,70);
    b18=new Box(900,-100,70,70);
    b19=new Box(1000,-200,70,70);
    b20=new Box(900,-200,70,70);

   
   

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);


    ground.display();

    ball.display();
    
    rope.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    
}






function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}