var speed,weight
var wall,car
var form


function setup() {
  createCanvas(800,400);

  car = createSprite(50,200,15,15)
  wall = createSprite(700,200,15,height/2)
  wall.shapeColor = "black"

  speed = random(55,90)
  weight = random(400,1500)

  car.velocityX = speed/10

   


}

function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0
    form = 0.5*weight*speed*speed/22509

    if(form>180){
      car.shapeColor = "lime"
    }
    if(form>180&&form<100){
      car.shapeColor = "orange"
    }
    if(form<100){
      car.shapeColor = "red"
    }
  }

  drawSprites();
}