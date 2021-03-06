const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge;
var stones=[];
var base;
var jointLink;



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  Matter.Composite.add(bridge.Bodies,jointPoint);
  jointLink=new Link(bridge,jointPoint)

  bridge=new bridge(6,{x:245,y:30});
base=new Base(200,200)
}

function draw() {
  background(51);
  Engine.update(engine);
  for(var i=0;i<=8;i++){
    var x=random(width/2-200,width/2+300);
    var y=random(-10,140);
    var stones=new Stones(x,y,80,80)
    stones.push(stones)
  }

}
