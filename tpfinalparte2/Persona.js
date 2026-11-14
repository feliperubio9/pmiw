class Persona {
  constructor(Vel) {
    this.posX; 
    this.posY;
    this.vel=Vel;
    this.frenar = false;
    this.spritePersona= [];
    
    for (let i=0; i<16; i++){
      this.spritePersona[i] = loadImage("images/Persona_" + i + ".png");
    }
    this.spriteActual = random(this.spritePersona);
  }
  
  dibujar() {
    image(this.spriteActual, this.posX-20,this.posY-40);

        if(!this.frenar){
    this.mover();
    }
  }
  
  mover() {
   this.posX=this.posX-this.vel;
  }
}
