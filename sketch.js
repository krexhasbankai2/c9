
function setup() {
  createCanvas(400,400);

  btn_red=createButton("RED");
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);


  btn_greeen=createButton("GREEN");
  btn_greeen.position(250,50);
  btn_greeen.mousePressed(green_bg);
}

function red_bg()
{
  r=255;
  g=0;
  b=0;
}
function green_bg()
  {
    r=0;
    g=255;
    b=0;
  }


function draw(){

  background("red");




  drawSprites();
}




