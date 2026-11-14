class Secuaz {
  constructor() {

    this.posX=30;
    this.posY=300;

    this.spritesCorrer = [];
    this.spritesCaminar = [];
    this.spriteAsombrado = loadImage("images/SecuazAsombro.png");

    for (let i=0; i<6; i++) {
      this.spritesCorrer[i] = loadImage("images/SecuazCorrer_" + i + ".png");
    }
    for (let i=0; i<6; i++) {
      this.spritesCaminar[i] = loadImage("images/SecuazCaminando_" + i + ".png");
    }

    this.accionActual = "correr";
    this.spriteActual = 0;
    this.animVelocidad = 0.15;
    
  }

  correr(){
  this.actualizarSprites();
  this.animar(this.spritesCorrer);
  }
  caminar(){
  this.actualizarSprites();
  this.animar(this.spritesCaminar);
  }
  asombrar(){
    imageMode(CENTER);
    image(this.spriteAsombrado, this.posX, this.posY);
    imageMode(CORNER)
  }

  actualizarSprites() {
    this.spriteActual += this.animVelocidad;
    if (this.accionActual == "correr" || this.accionActual == "caminar" ) {
      if (floor(this.spriteActual) >= 6) {
        this.spriteActual = 0;
      }
    }
  }
  
  animar(animacion) {
    imageMode(CENTER);
    image(animacion[floor(this.spriteActual)], this.posX, this.posY);
    imageMode(CORNER)
  }

  dibujar() {
    if (this.accionActual == "correr") {
      this.correr();
    }
    else if (this.accionActual == "caminar") {
      this.caminar();
    }
    else if (this.accionActual == "asombrar") {
    this.asombrar();
    }
  }
  
  acercarse(){
    if(this.posX < 176){
  this.accionActual = "caminar";
  this.posX += 0.7;
    }else{
        this.accionActual = "asombrar";
    }
  }

  teclaPres() {
    if (this.accionActual == "correr"){
    if (keyIsDown(UP_ARROW) && this.posY != 200) {
      this.posY= this.posY-100;
    } else if (keyIsDown(DOWN_ARROW) && this.posY != 400) {
      this.posY= this.posY+100;
    }
  }
  }
}
