//Module Aliases
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

//The objects for the newton's cradle
var holder1, bobs = [], ropes = [];

function setup() {
	//Canvas
	let Canvas = createCanvas(800, 600);

	//Creating the engine and giving a reference to its world
	engine = Engine.create();
	world = engine.world;

	//The roof object
	holder1 = new roof(width/2,100,360,50);

	//Creating the bobs suspended by ropes
	for(i = holder1.body.vertices[0].x; i < holder1.body.vertices[1].x; i+=80){
		let bob = new Bob(i+18.75,200,40);
		bobs.push(bob);
		ropes.push(new Rope(holder1.body,bob.body,{x: (i+18.75) - holder1.xPos, y: 0},{x: 0, y: -bob.radius}));
	}

	//Giving mouse controls
	let mConstraint = MouseConstraint.create(engine,{
		mouse: Mouse.create(Canvas.elt)
	});
	World.add(world,mConstraint);
}
function draw() {
	//Declaring to draw the rectangle in the CENTER mode
	rectMode(CENTER);

	//Background color
	background(155);

	//Displaying the roof
	holder1.display();

	//Displaying the bobs
	for(i = bobs.length; i > 0; i--){
		bobs[i-1].display();
	}

	//Displaying the ropes
	for(j = ropes.length; j > 0; j--)
		ropes[j-1].display();

	//Updating the engine
	Engine.update(engine);

	//Displaying instructions
	textSize(30);
	textAlign(CENTER);
	text("Press the up arrow key to start",400,50);
}
//Function to handle key pressed
function keyPressed(){
	//If up arrow key is pressed then aply force to the first bob
	if(keyCode === UP_ARROW)
		Body.applyForce(bobs[0].body,bobs[0].position,{x: -0.2, y: 0});
}