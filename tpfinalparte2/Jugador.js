class Jugador {
  constructor() {

    this.posX=300;
    this.posY=300;
    this.perdiendo = false;
    this.muerto = false;

    this.spritesCorrer = [];
    this.spritesSaltar = [];
    this.spritesDeslizar = [];
    this.spritesPerder = [];

    for (let i=0; i<6; i++) {
      this.spritesCorrer[i] = loadImage("images/Corriendo_" + i + ".png");
    }

    for (let i=0; i<7; i++) {
      this.spritesSaltar[i] = loadImage("images/Saltando_" + i + ".png");
    }

    for (let i=0; i<6; i++) {
      this.spritesDeslizar[i] = loadImage("images/Deslizando_" + i + ".png");
    }
    
    for (let i=0; i<32; i++) {
      this.spritesPerder[i] = loadImage("images/Perdiendo_" + i + ".png");
    }

    this.accionActual = "correr";
    this.spriteActual = 0;
    this.animVelocidad = 0.15;
    
  }

  correr(){
  this.actualizarSprites();
  this.animar(this.spritesCorrer);
  }
  
  saltar(){
  this.actualizarSprites();
  this.animar(this.spritesSaltar);
  }
  
  deslizar(){
  this.actualizarSprites();
  this.animar(this.spritesDeslizar);
  }
  perder(){
  this.actualizarSprites();
  this.animar(this.spritesPerder);
  }
  
  

  actualizarSprites() {
    this.spriteActual += this.animVelocidad;
    if (this.accionActual == "correr") {
      if (floor(this.spriteActual) >= 6) {
        this.spriteActual = 0;
      }
    }
    if (this.accionActual == "saltar") {
      if (floor(this.spriteActual) >= 6) {
        this.accionActual = "correr";
      }
    }
    if (this.accionActual == "deslizar") {
      if (floor(this.spriteActual) >= 5) {
        this.accionActual = "correr";
      }
    }
        if (this.accionActual == "perder") {
      if (floor(this.spriteActual) >= 31) {
        this.muerto = true;
        this.accionActual = "";
      }
    }
  }
  
  animar(animacion) {
    imageMode(CENTER);
    image(animacion[floor(this.spriteActual)], this.posX, this.posY);
    imageMode(CORNER)
  }

  dibujar() {
    if(!this.muerto){
    rectMode(CORNER);
    if (this.accionActual == "correr") {
      this.correr();
    }
    else if (this.accionActual == "saltar") {
      this.saltar();
    }
    else if (this.accionActual == "deslizar") {
      this.deslizar();
    }
    if (this.accionActual == "perder") {
      this.perder();
    }
    }
  }
  
  perderJuego(){
  this.perdiendo = true;
  if (this.accionActual != "perder"){
  this.spriteActual =0;
  }
  this.accionActual = "perder";
  }

  teclaPres() {
    if (!this.perdiendo){
    if (keyIsDown(UP_ARROW) && this.posY != 200) {
      this.posY= this.posY-100;
    } else if (keyIsDown(DOWN_ARROW) && this.posY != 400) {
      this.posY= this.posY+100;
    }
    
    if (keyIsDown(UP_ARROW) && this.posY == 200 && juego.runner.puntos >= 25 && juego.runner.posX < -312 && juego.runner.posX > -500) {
      this.posY= this.posY-100;
    }
    
    if (keyIsDown(32) && (this.accionActual == "correr" || this.accionActual == "deslizar")) {
      this.accionActual = "saltar";
      this.spriteActual = 0;
    }
    if (keyIsDown(SHIFT) && this.accionActual == "correr") {
      this.accionActual = "deslizar";
      this.spriteActual = 0;
    }
  }
  }
}
