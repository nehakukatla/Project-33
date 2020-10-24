var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
//var particles;
var turn;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
    
   if(particles.position.x<320 && particles.position.y>500){
      score = score+200;
    }
    if(particles.position.x<480 && particles.position.x>320 && particles.position.positiony>500){
     score = score+100;
   }
   if(particles.position.x>480 && particles.position.y>500){
     score = score+500;
   }
}
 


function draw() {
  background("black");
  textSize(20)
  Engine.update(engine);
  text("Score:"+score,600,50);
  text("200",25,525);
  text("200",105,525);
  text("200",185,525);
  text("200",265,525);
  text("100",345,525);
  text("100",425,525);
  text("500",505,525);
  text("500",585,525);
  text("500",665,525);
  text("500",745,525);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
//scores
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}