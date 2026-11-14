
class Juego {
  constructor() {
    this.estado = "menu";
    this.runner;
    this.fondoMenu = loadImage("images/fondoMenu.png");
    this.posYFondoMenu = 0;
    this.velFondoMenu = 1;
  }

  dibujar() {
    if (this.estado == "menu") {
      background(0);
      this.dibujarFondoMenu();
      fill(255);
      textFont(fuentePixel);
      stroke(82, 0, 39);
      textSize(40);
      textAlign(CENTER);
      text("HERMANAS MULTIVERSO", 400, 130);

      crearBoton("COMENZAR  ", 300, 200, 200, 60);
      crearBoton("INSTRUCCIONES", 300, 280, 200, 60);
      crearBoton("CREDITOS", 300, 360, 200, 60);
    }

    if (this.estado == "runner") {
      this.runner.dibujar();
      if (this.runner.finales.habilitarReinicio) {
        crearBoton("VOLVER AL MENU", 300, 300, 200, 60);
      }

      if (this.runner.jugador.posY < 200) {
        crearBoton("VOLVER AL MENU", 300, 300, 200, 60);
      }
    }

    if (this.estado == "creditos") {
      background(0);
      fill(255);
      textAlign(CENTER);

      textSize(35);
      text("CREDITOS", 400, 80);

      textSize(20);
      text("Felipe Rubio", 400, 200);
      text("Guadalupe Gallina", 400, 240);

      crearBoton("VOLVER AL MENU", 290, 350, 200, 60);
    }

    if (this.estado == "instrucciones") {
      background(0);

      fill(255);
      textAlign(CENTER);
      textSize(35);
      text("INSTRUCCIONES", 400, 80);
      textSize(20);
      text("Para pasar sobre las mesas", 400, 140);
      text("presiona ESPACIO", 400, 180);
      text("Para deslizarte debajo de las sillas", 400, 220);
      text("presiona SHIFT", 400, 260);
      text("Agarra todas las monedas posibles y escapa! ", 400, 295);
      crearBoton("VOLVER AL MENU", 300, 350, 200, 60);
    }
  }

  dibujarFondoMenu() {
    this.posYFondoMenu += this.velFondoMenu;
    if (this.posYFondoMenu >= 1200) {
      this.posYFondoMenu = 0;
    }
    image(this.fondoMenu, 0, this.posYFondoMenu, 800, 1880);
    image(this.fondoMenu, 0, this.posYFondoMenu - 1200, 800, 1880);
  }

  iniciar() {
    this.runner = new Runner();
    this.runner.iniciarJuego();
    this.estado = "runner";
  }

  volverMenu() {
    this.estado = "menu";
    this.runner = " ";
  }

  mousePres() {
    if (this.estado == "menu") {
      if (mouseX > 300 && mouseX < 500) {

        if (mouseY > 200 && mouseY < 260) {
          this.iniciar();
        }

        if (mouseY > 280 && mouseY < 340) {
          this.estado = "instrucciones";
        }

        if (mouseY > 360 && mouseY < 420) {
          this.estado = "creditos";
        }
      }
    } else if (this.estado == "creditos" || this.estado == "instrucciones") {
      if (mouseX > 300 && mouseX < 500 && mouseY > 350 && mouseY < 410) {
        this.volverMenu();
      }
    }

    if (this.estado == "runner") {
      if (this.runner.finales.habilitarReinicio && mouseX > 300 && mouseX < 500 && mouseY > 300 && mouseY < 360) {
        this.volverMenu();
      }

      if (this.runner.jugador.posY < 200 && mouseX > 300 && mouseX < 500 && mouseY > 300 && mouseY < 360) {
        this.volverMenu();
      }
    }
  }

  teclaPres() {
    if (this.estado == "runner") {
      this.runner.teclaPres();
    }
  }
}

function crearBoton(textoBoton, x, y, ancho, alto) {
  rectMode(CORNER);

  if (mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto) {
    fill(100, 17, 97);
    stroke(70, 2, 66);
  } else {
    fill(151, 37, 157);
    stroke(126, 13, 121);
  }

  strokeWeight(3);
  rect(x, y, ancho, alto, 12);
  noStroke();

  fill(255);
  textAlign(CENTER, CENTER);
  textFont(fuentePixel);
  textSize(20);
  strokeWeight(4);
  stroke(82, 0, 39);
  text(textoBoton, x + ancho / 2, y + alto / 2);
  noStroke();
}
