function setup() {
  createCanvas(800,400);
  frect = createSprite(200, 200, 75, 75);
  rect1 = createSprite(100, 180, 50, 50);
  rect2 = createSprite(100, 300, 65, 65);
  rect3 = createSprite(100, 120, 45, 45);
  rect4 = createSprite(100, 50, 75, 75);
  mrect = createSprite(400, 200, 50, 50);
  wall1 = createSprite(500,10,700,10)
  wall2 = createSprite(500,390,700,10)
  box = createSprite(500,30,10,10)
  box.velocityY = 10

  mrect.shapeColor = ("red")
  frect.shapeColor = ("red")
  rect1.shapeColor = ("red")
  rect2.shapeColor = ("red")
  rect3.shapeColor = ("red")
  rect4.shapeColor = ("red")
  mrect.debug = true
  frect.debug = true
  rect2.debug = true
  rect1.debug = true
}

function draw() {

  background(100,76,250); 
  mrect.x = mouseX 
  mrect.y = mouseY

  Bounceoff(wall1,box)
  Bounceoff(wall2,box)

  if(isTouching(frect)||isTouching(rect1)||isTouching(rect2)||isTouching(rect3)||isTouching(rect4)){
    mrect.shapeColor = "yellow"
 }

 else {
   mrect.shapeColor = "red"
 }
  

  
  drawSprites();
}