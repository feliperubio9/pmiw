

function pantalla (PNum, PString, x1, y1, ancho1, alto1, siguiente1, descrp1, IsDecision, x2, y2, ancho2, alto2, siguiente2, descrp2) {
  if (IsDecision && mouseX >= x2 && mouseX <= x2+ancho2 && mouseY>= y2 && mouseY<= y2+ alto2) {
    image(ArrPant[PNum+2], 0, 0, 800, 450);
    textConfig();
    text(descrp2, mouseX, mouseY-20);
  } else if (mouseX >= x1 && mouseX <= x1+ancho1 && mouseY>= y1 && mouseY<= y1+ alto1) {
    image(ArrPant[PNum+1], 0, 0, 800, 450);
    textConfig();
    text(descrp1, mouseX, mouseY-20);
  } else {
    image(ArrPant[PNum], 0, 0, 800, 450);
  }
  if (PString != "") {
    fill(253, 121, 188, 140);
    stroke(251, 23, 155, 150);
    strokeWeight(10);
    rect(125, 270, 550, 110, 15);
    textConfig();
    text(PString, 135, 275, 530, 100);
  }
  interaccion(x1, y1, ancho1, alto1, siguiente1, IsDecision, x2, y2, ancho2, alto2, siguiente2);
}

function textConfig() {
  stroke(255);
  strokeWeight(4);
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(18);
  textFont(Fuente);
}

function interaccion(x1, y1, ancho1, alto1, siguiente1, IsDecision, x2, y2, ancho2, alto2, siguiente2) {
  if (mouseIsPressed && mouseX >= x1 && mouseX <= x1+ancho1 && mouseY>= y1 && mouseY<= y1+ alto1 && !IsTransicionando) {
    pantallaSiguiente=siguiente1;
    clickeando.play();
    IsTransicionando=true;
    animFrame = 0;
    animPosX = -200;
  }
  if (IsDecision) {
    if (mouseIsPressed && mouseX >= x2 && mouseX <= x2+ancho2 && mouseY>= y2 && mouseY<= y2+ alto2 && !IsTransicionando) {
      pantallaSiguiente=siguiente2;
      clickeando.play();
      IsTransicionando=true;
      animFrame = 0;
      animPosX = -200;
    }
  }
}
function transicionPantalla() {
  if (IsTransicionando) {
    if (fadeSubiendo) {
      fade += 5;

      if (fade >= 255) {
        fade = 255;
        pantallaActual = pantallaSiguiente;
        fadeSubiendo = false;
      }
    } else {
      fade -= 5;
      if (fade <= 0) {
        fade = 0;
        IsTransicionando = false;
        fadeSubiendo = true;
      }
    }
  }
  noStroke();
  fill(0, fade);
  rect(0, 0, 800, 450);
}
