class Moneda {
  constructor(posX, Vel) {
    this.posX= posX; 
    this.carriles= [200, 300, 400];
    this.posY=random(this.carriles);
    this.vel=Vel;
    this.seRompe=false;
    this.frenar = false;
    this.spriteMoneda=loadImage("images/moneda1.png");
  }
  
  dibujar() {
    if(!this.seRompe){
    image(this.spriteMoneda, this.posX,this.posY,50,50);
        if(!this.frenar){
    this.mover();
    }
  }  
  }
  posMoneda() {
   for (let i=0; i<this.cantMonedas; i++) {
      let posX=random(800, 12000);
      let posY=random(85, 350)
        this.monedas[i]=new Moneda(posX, posY);
    }
  }
  
  mover() {
   this.posX=this.posX-this.vel;
  }
  
  roto(){
   this.seRompe = true;
  }
}
