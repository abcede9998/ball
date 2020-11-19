class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 250
        }


        this.rope=Matter.Constraint.create(options);

        World.add(world,this.rope);
    }
    display(){
var bodyAa=this.rope.bodyA.position;
var pointBb=this.rope.pointB;

        push();
        strokeWeight(4);
        stroke("white");
        line(bodyAa.x,bodyAa.y,pointBb.x,pointBb.y)
        pop();
    }
}