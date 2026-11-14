class Final {
  constructor() {
    this.fondoFinalMalo=loadImage("images/background3.png");
    this.personajeVarado=loadImage("images/Varada.png");
    this.fondosFinalBueno = [loadImage("images/finalBueno2.png"), loadImage("images/finalBueno4.png")];
    this.posX = -30;
    this.rotacion = 0;
    this.habilitarReinicio = false;
    this.frame=0;
    this.contador=0;
  }

  dibujarFinalMalo() {
    image(this.fondoFinalMalo, 0, 0);
    this.posX += 1;
    this.rotacion += 0.01;
    push();
    translate(this.posX, 225);
    rotate(this.rotacion);
    imageMode(CENTER);
    image(this.personajeVarado, 0, 0);
    imageMode(CORNER);
    pop();
    fill(206,221,227);
    stroke(54,0,57);
    textFont(fuentePixel);
    textSize(40);
    textAlign(CENTER);
    text("PERDISTE", 400, 225);
    if (this.posX >= 300) {
      this.habilitarReinicio = true;
    }
  }

  dibujarFinalBueno() {
    background(0);
    this.contador++;

    if (this.contador >= 15) {
      this.frame = 1 - this.frame;
      this.contador = 0;
    }
    image(this.fondosFinalBueno[this.frame], 0, 0,width,height);
    textFont(fuentePixel);
    stroke(111,26,57);
    fill(206,221,227);
    textSize(40);
    text("ESCAPASTE!!", 400, 200);
  }
}
