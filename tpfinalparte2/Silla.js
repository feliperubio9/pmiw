class Silla {
  constructor(Vel) {
    this.posX=random(800, 15000); 
    this.carriles= [200, 300, 400];
    this.posY=random(this.carriles);
    this.vel=Vel;
        this.frenar = false;
    this.seRompe=false;
    this.spriteSilla = [];
    for (let i=0; i<3; i++){
    this.spriteSilla[i] = loadImage("images/Silla_" + i + ".png")
    }
    this.spriteActual = random(this.spriteSilla);
  }
  
  dibujar() {
    image(this.spriteActual, this.posX,this.posY-25);
        if(!this.frenar){
    this.mover();
    }
  }
  posSilla() {
   for (let s=0; s<this.cantSillas; s++) {
      let posX=random(800, 12000);
      let posY=random(85, 350)
        this.silla[s]=new Silla(posX, posY);
    }
  }
  
  mover() {
   this.posX=this.posX-this.vel;
  }
  
}
