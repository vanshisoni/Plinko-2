const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particle
var divisions = []
var plinkos = []
var score = 0
var count = 0
var gameState = "play"

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,800,800,20)

  for (var x = 0;x <= 800; x = x + 80){
    division = new Division(x,650,10,300)
    divisions.push(division)
  }

  for (var x = 50; x <= 790; x = x + 50){
    plinko = new Plinko(x,75,10)
    plinkos.push(plinko)
  }

  for (var x = 75; x <= 800; x = x + 50){
    plinko = new Plinko(x,175,10)
    plinkos.push(plinko)
  }

  for (var x = 50; x <= 790; x = x + 50){
    plinko = new Plinko(x,275,10)
    plinkos.push(plinko)
  }

  for (var x = 75; x <= 800; x = x + 50){
    plinko = new Plinko(x,375,10)
    plinkos.push(plinko)
  }


}

function draw() {
  background(0);

  textSize(35);
  fill("white");
  text("Score: " + score, 20, 40)
  text("500", 10, 550)
  text("500", 90, 550)
  text("500", 170, 550)
  text("500", 250, 550)
  text("100", 330, 550)
  text("100", 410, 550)
  text("100", 490, 550)
  text("200", 570, 550)
  text("200", 650, 550)
  text("200", 730, 550)


  Engine.update(engine);

  ground.display();

  for (var i in divisions){
    divisions[i].display();
  }

  for (var i in plinkos){
    plinkos[i].display();
  }

  if (particle != null){
    particle.display();

    if (particle.body.position.y >750){
      if (particle.body.position.x <300){
        score = score + 500
        particle = null
        if (count >= 5) gameState = "end"
      }
      else if (particle.body.position.x <600 && particle.body.position.x > 301){
        score = score + 100
        particle = null
        if (count >= 5) gameState = "end"
      }
      else if (particle.body.position.x <900 && particle.body.position.x > 601){
        score = score + 200
        particle = null
        if (count >= 5) gameState = "end"
      }
    }
  }
  if (gameState === "end"){
    textSize(100)
    text("Game Over", 150, 250)
  }
    
}

function keyPressed(){
  if (gameState === "play" && keyCode === DOWN_ARROW){
    particle = new Particle(random(100,700),0,10)
    count++
  }
}