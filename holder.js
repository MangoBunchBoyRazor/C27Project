//Roof class declaration
class roof{
    //contructor function taking the position and dimensions as arguments 
    constructor(x,y,width,height){
        this.xPos = x;
        this.yPos = y;
        //Creating a static retangular body with the given position and diameter
        this.body = Bodies.rectangle(x,y,width,height,{isStatic: true});
        World.add(world,this.body);
        this.height = height;
        this.width = width;
    }
    //Drawing a rectangle to display the body
    display(){
        let pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rect(0,0,this.width,this.height);
        pop();
    }
}