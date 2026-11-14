class Mesa {
  constructor(Vel) {
    this.posX=random(800, 15000); 
    this.carriles= [200, 300, 400];
    this.posY=random(this.carriles);
    this.vel=Vel;
    this.pierde=false;
    this.frenar = false;
    this.spriteMesa = loadImage("images/Mesa.png");
  }
  
  dibujar() {
    image(this.spriteMesa, this.posX,this.posY);
    if(!this.frenar){
    this.mover();
    }
  }
  establecerPosicion() {
   for (let m=0; m<this.cantMesas; m++) {
      let posX=random(800, 12000);
      let posY=random(85, 350)
        this.mesas[m]=new Mesa(posX, posY);
    }
  }
  
  mover() {
   this.posX=this.posX-this.vel;
  }
  
}
