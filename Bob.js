//Bob class declaration
class Bob{
    //Constructor function taking the position and radius as arguments
    constructor(x,y,radius){
        //Creating a circle with the given position and radius
        this.body = Bodies.circle(x,y,radius,{
            restitution: 1.2, 
            //friction: 0, 
            frictionStatic: 10,
           // frictionAir: 0,
        });
        this.radius = radius;
        World.add(world,this.body);
    }
    //Drawing a circle to display the body
    display(){
        let pos = this.body.position;
        push();
        Body.setAngularVelocity(this.body,0);
        translate(pos.x,pos.y);
        fill(100,100,255);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}