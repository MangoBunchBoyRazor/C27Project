//Rope class declaration
class Rope{
    //Constructor function taking two bodies and offsets as arguments
    constructor(body1,body2,offset1,offset2){
        this.offset1 = offset1;
        this.offset2 = offset2;
        //creating a constraint with the two bodies and the offset
        this.constraint = Matter.Constraint.create({
            bodyA: body1,
            bodyB: body2,
            stiffness: 1,
            length: 225,
            pointB: this.offset2,
            pointA: this.offset1
        });
        World.add(world,this.constraint);
    }
    display(){
        //Displaying the constraint by drawing a line
        let pos1 = this.constraint.bodyA.position;
        let pos2 = this.constraint.bodyB.position;
        let off1 = this.offset1;
        let off2 = this.offset2;
        push();
        strokeWeight(5);
        line(pos1.x+off1.x,pos1.y+off1.y,pos2.x+off2.x,pos2.y+off2.y);
        pop();
    }
}