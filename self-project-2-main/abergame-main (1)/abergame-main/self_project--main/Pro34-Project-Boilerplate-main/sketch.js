
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundd
var helicopters
var medicine
var helicopter;
var medicines;
//medicine.velocityY=0;
function preload (){

  city = loadImage("background.webp");
 
  helicopters = loadImage("heliheli.png");
  medicines = loadImage("medicine.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight-50);
 cityimg=createSprite(0,0,2*windowWidth,2*windowHeight);
 cityimg.addImage(city);
cityimg.scale=3.5;
//cityimg.velocityX=-3;
cityimg.addSpeed (3,180);
  medicine = createSprite(420,120,50,50);
 console.log(medicine);
  medicine.addImage(medicines);
  medicine.scale=0.5;
  medicine.velocityY=0;
  console.log(medicine.velocityY)
  //medicine.velocityX=0;
 // medicine.visible=false ;
 
 helicopter = createSprite(400,100,50,50);
 helicopter.addImage(helicopters);
 helicopter.scale=0.9;




}


function draw() 
{
background("white");
//city.resize(windowWidth,windowHeight);
console.log(cityimg.position.x);
if(cityimg.position.x<20){
  cityimg.position.x=windowWidth;
}
if(keyDown("space")){
  medicine.velocityY= 13;
 
}

planeMovement();
//drop();
drawSprites();
}
function planeMovement(){

  if(keyDown("UP_ARROW")){

      helicopter.position.x= helicopter.position.x+5;
      medicine.position.x=medicine.position.x+5;


  }
}

// function drop (){


//     if(keyDown("space")){
//       medicine.velocityY= 13;
     
//   }

    
//    // medicine.visible=true  
//   }
