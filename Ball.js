class Ball{
    constructor(x,y,width){
        var options ={
            frictionAir:0.05,
            density: 1
        }
    this.width=width;
    this.height=width;


       this.body= Bodies.circle(x,y,width,options);

        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
         push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill(200,100,100);
            strokeWeight(4);
            stroke("black");
            ellipseMode(RADIUS);
            ellipse(0, 0, this.width,this.height);
         pop();
    }
}