function preload() {
poster=loadImage("images/Haunted mansion.png");


}
function setup() {
  createCanvas(1200,600);
  Poster=createSprite(600,290,20,20);
  Poster.addImage(poster);
  Poster.scale=0.46;
  Poster.visible=true;
  Button1=createButton('PLAY');
  Button1.position(570,230);
  Button1.style('width','200px');
  Button1.style('height','70px');
  Button1.style('font-size','40px');
  Button1.style('font-family','cursive');
  Button1.mousePressed(()=>{
   Button1.hide();
   
  });
  Button2=createButton('CONTROLS');
  Button2.position(560,350);
  Button2.style('width','300px');
  Button2.style('height','70px');
  Button2.style('font-size','40px');
  Button2.style('font-family','cursive');
  Button1.mousePressed(()=>{
   
  });
}

function draw() {
  background(30,30,30);  
  drawSprites();
}