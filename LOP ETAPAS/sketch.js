/* 
    Equipe: 
        Luiza Bastos Moreno - Subturma A (Líder) 
        Adalgisa Onofre de Araújo Neta - Subturma A 
        Etapas 1, 2, 3 e 4
*/

var x= 200;
var y= 350;
var y1=50;
var xd= 0;
var yd= 0;
var estadoDisparo= false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(25);
  
  /* Etapas 1 e 2 - Movimentação com as teclas de setas */
  
   if (keyIsDown(LEFT_ARROW)) {
    x=x-2;
  }
   if (keyIsDown(RIGHT_ARROW)) {
    x=x+2;
  }
   if (keyIsDown(DOWN_ARROW)) {
    y1= y1+2;
  }
   if (keyIsDown(UP_ARROW)) {
    y1= y1-2;
  }
  
  ellipse(x, y, 50, 50)
  
  square(175, y1, 50, 20);
  
  /* Etapas 3 e 4 - Objeto aparecer tempos depois e fazer disparos */
  
  if(x>500){
    x = - random(1000)
    console.log(x)
  }
  if(y1>500){
    y1 = - random(1000)
    console.log(y1)
  }
  if(keyIsDown(CONTROL) && estadoDisparo== false){
    xd= x;
    yd= y;
    estadoDisparo= true
  }
  if(estadoDisparo== true){
    ellipse(xd, yd, 3, 3)
    yd= yd - 10
    
    if(yd<0){
      estadoDisparo== false
    }
  }
  
}