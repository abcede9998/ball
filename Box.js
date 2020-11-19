class Box{
    constructor(x,y,width,height){
        var box_options ={
            restitution: 1.0,
            friction: 0.1,
            density: 0.04
        }
    this.width=width;
    this.height=height;


       this.body= Bodies.rectangle(x,y,width,height,box_options);

        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
         push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill(200,200,200);
            strokeWeight(4);
            stroke("black");
            rectMode(CENTER);
            rect(0, 0, this.width,this.height);
         pop();
    }
}