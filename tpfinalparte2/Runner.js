class Runner {
  constructor() {
    this.fondo=loadImage("images/background.png");
    this.fondo2=loadImage("images/background2.png");
    this.jugador= new Jugador();
    this.secuaz= new Secuaz();
    this.monedas=[];
    this.cantMonedas=50;
    this.mesas=[];
    this.sillas=[];
    this.personas=[];
    this.hileras = [];
    this.cantHileras = 70;
    this.distanciaHileras = 300;
    this.carriles= [200, 300, 400];
    this.posX=0;
    this.vel=4;
    this.interactuar;
    this.puntos=0;
    this.carteleraDePuntos=loadImage("images/carteleraPuntos.png");
    this.finales = new Final();
    this.temporizador = 0;
  }

  iniciarJuego() {

    for (let i=0; i<this.cantHileras; i++) {
      this.hileras[i] = new Hilera(1500 + i * this.distanciaHileras, this.vel);
    }

    for (let i=0; i<this.cantHileras; i++) {

      for (let c=0; c<3; c++) {

        if (this.hileras[i].objetoEnCarril[c] == "mesa") {
          this.mesas.push(this.hileras[i].objetos[c]);
        }

        if (this.hileras[i].objetoEnCarril[c] == "silla") {
          this.sillas.push(this.hileras[i].objetos[c]);
        }

        if (this.hileras[i].objetoEnCarril[c] == "persona") {
          this.personas.push(this.hileras[i].objetos[c]);
        }
      }
    }
    for (let i=0; i< this.cantMonedas; i++) {
      this.monedas[i] = new Moneda((1500 + this.distanciaHileras/2) + i * this.distanciaHileras,this.vel);
    }
  }

  dibujar() {
    if (this.finales.finalMalo) {
      this.finales.dibujarFinalMalo();
    }
   else if(this.jugador.posY < 200){
    this.finales.dibujarFinalBueno();
    }else {
      background(240);
      this.dibujarFondo();
      this.dibujarHud();
      this.secuaz.dibujar();
      this.dibujarObjetos();
      this.jugador.dibujar();
      this.colision();
    }
  }

  colision() {
    for (let i=0; i<this.cantMonedas; i++){
          if (dist(this.monedas[i].posX, this.monedas[i].posY,
        this.jugador.posX, this.jugador.posY)<=20 && !this.monedas[i].seRompe)
      {
        this.monedas[i].roto();
        this.puntos++;
      }
    }
    
    for (let m=0; m<this.mesas.length; m++) {
      if (dist(this.mesas[m].posX, this.mesas[m].posY,
        this.jugador.posX, this.jugador.posY)<=20 && this.jugador.accionActual != "saltar")
      {
        this.perder();
      }
    }
    for (let s=0; s<this.sillas.length; s++) {
      if (dist(this.sillas[s].posX, this.sillas[s].posY,
        this.jugador.posX, this.jugador.posY)<=20 && this.jugador.accionActual != "deslizar")
      {
        this.perder();
      }
    }

    for (let p=0; p<this.personas.length; p++) {
      if (dist(this.personas[p].posX, this.personas[p].posY,
        this.jugador.posX, this.jugador.posY)<=20)
      {
        this.perder();
      }
    }
  }

  dibujarObjetos() {
    for (let i=0; i<this.cantMonedas; i++) {
      this.monedas[i].dibujar();
    }
    for (let m=0; m<this.mesas.length; m++) {
      this.mesas[m].dibujar();
    }
    for (let s=0; s<this.sillas.length; s++) {
      this.sillas[s].dibujar();
    }
    for (let s=0; s<this.personas.length; s++) {
      this.personas[s].dibujar();
    }
  }

  dibujarHud() {
    fill(255);
    textSize(20);
    image(this.carteleraDePuntos,22,-10,145,105);
    text(this.puntos, 95, 50);
  }

  dibujarFondo() {
if(this.puntos >= 25){
    image(this.fondo2, this.posX, 0);
    image(this.fondo2, this.posX+1182, 0);
}else{
    image(this.fondo, this.posX, 0);
    image(this.fondo, this.posX+1182, 0);
}
    this.posX-=this.vel;
    if (this.posX <= -1182) {
      this.posX = 0;
    }
  }
  sumarPuntos() {
    this.puntos= this.puntos +10;
  }

  distribuirObjetos(objeto) {
    for (let i=0; i<50; i++) {
      if (objeto != this.monedas[i]) {
        if (objeto.posX > this.monedas[i].posX - 200 &&
          objeto.posX < this.monedas[i].posX + 200) {
          objeto.posX = random(800, 15000);
          i = -1;
        }
      }
    }

    for (let i=0; i<50; i++) {
      if (objeto != this.mesas[i]) {
        if (objeto.posX > this.mesas[i].posX - 200 &&
          objeto.posX < this.mesas[i].posX + 200) {
          objeto.posX = random(800, 15000);
          i = -1;
        }
      }
    }

    for (let i=0; i<50; i++) {
      if (objeto != this.sillas[i]) {
        if (objeto.posX > this.sillas[i].posX - 200 &&
          objeto.posX < this.sillas[i].posX + 200) {
          objeto.posX = random(800, 15000);
          i = -1;
        }
      }
    }
  }

  perder(){
  this.vel = 0;
  this.jugador.perderJuego();
  
  
  for (let i=0; i<this.cantMonedas; i++){
        this.monedas[i].frenar = true;
      }
    
    for (let m=0; m<this.mesas.length; m++) {
        this.mesas[m].frenar = true;
    }
    for (let s=0; s<this.sillas.length; s++) {
        this.sillas[s].frenar = true;
    }

    for (let p=0; p<this.personas.length; p++) {
        this.personas[p].frenar = true;
    }
    
    this.secuaz.acercarse();
    if(this.jugador.muerto){
     this.finalizar("finalMalo");
    }
  }
  
  finalizar(Final){
    this.temporizador++;
    if(Final == "finalMalo" && this.temporizador >120){
  this.finales.finalMalo = true;
    }
  }

  teclaPres() {
    this.jugador.teclaPres();
    this.secuaz.teclaPres();
  }
}
