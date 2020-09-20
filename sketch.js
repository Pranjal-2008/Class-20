var movingR,fixedR;



function setup() {
  createCanvas(800,400);
  movingR = createSprite(200,200,30,40);
  movingR.shapeColor="pink";

  fixedR = createSprite(300,100,50,50);
  fixedR.shapeColor = "black";
}

function draw() {
  background("red");  

  movingR.x = mouseX;
  movingR.y = mouseY;

  if (movingR.x - fixedR.x < movingR.width/2 + fixedR.width/2 && 
    fixedR.x - movingR.x < movingR.width/2 + fixedR.width/2 &&
    movingR.y - fixedR.y < movingR.height/2 + fixedR.height/2 &&
    fixedR.y - movingR.y < movingR.height/2 + fixedR.height/2){
    movingR.shapeColor = "blue";
    fixedR.shapeColor = "white";
  }

  else {
    movingR.shapeColor = "pink";
    fixedR.shapeColor = "black";
  }

  
  drawSprites();
}