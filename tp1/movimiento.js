let posX = -170;
let posY = 570;
let direccion = "derecha";
let aceleracion = 0;


//Al principio interpreté que el trabajo tenía que ser interactivo,
//así que originalmente estas funciones de movimiento se controlaban
//mediante el teclado y el mouse, pero después lo cambié para que se
//controlen mediante booleans (teclaDer, teclaIzq, etc) que se
//activan o desactivan en un momento especifico (la ultima parte del
//draw)

function movimientoX() {
  if (estado != "pegar") {
    if (estado != "pegarSaltar") {
      posX += aceleracion;
      if (teclaIzq) {
        if (!estoySaltando) {
          estado = "caminar";
        }
        direccion = "izquierda";
        aceleracion -= 5;
        aceleracion = constrain(aceleracion, -16, 0);
      } else {
        if ((!estoySaltando) && (estado != "pegar") && (direccion == "izquierda")) {
          desacelerar();
          estado = "idle";
        }
      }
    }
    if (teclaDer) {
      if (!estoySaltando) {
        estado = "caminar";
      }
      direccion = "derecha";
      aceleracion += 5;
      aceleracion = constrain(aceleracion, 0, 15);
    } else {
      desacelerar();
      if ((!estoySaltando) && (estado != "pegar") && (direccion == "derecha")) {
        estado = "idle";
        desacelerar();
      }
    }
  }
}


function desacelerar() {
  if (aceleracion > 0) {
    aceleracion -= 1
      aceleracion = constrain(aceleracion, 0, 15);
  }
  if (aceleracion < 0) {
    aceleracion += 1
      aceleracion = constrain(aceleracion, -15, 0);
  }
}

let estoySaltando = false;
let velocidadY = 0;
let gravedad = 8;

function saltar() {
  if (teclaArr && !estoySaltando) {
    gravedad = 8;
    estoySaltando = true;
    estado = "saltar";
    velocidadY = -40;
  }
  if ((estoySaltando) && (estado == "saltar")) {
    posY += velocidadY;
    velocidadY += gravedad;
  }

  if ((posY == 570) && (estoySaltando == true)) {
    estado = "idle";
    velocidadY = 0;
    estoySaltando = false;
  }
}

function pegar() {
  if (teclaPeg) {
    if (!estoySaltando) {
      estado = "pegar"
        aceleracion = 0;
    } else {
      if (posY < 470) {
        estado = "pegarSaltar"
          gravedad = 0;
        velocidadY = 0;
      }
    }
  }
}

function maqEstados(est, inicioDer, finDer, inicioIzq, finIzq, noLoopear, esSaltarpegar) {
  if (estado == est && !esSaltarpegar) {
    if (direccion == "derecha") {
      if (frameNum >= finDer || frameNum <= inicioDer) {
        frameNum = inicioDer
      }
frameNum++;
    }
    if (direccion == "izquierda") {
      if (frameNum >= finIzq || frameNum <= inicioIzq) {
        frameNum = inicioIzq;
      }
frameNum++;
    }
    if (noLoopear) {
      if (frameNum == finIzq || frameNum == finDer) {
        estado = "idle"
      }
    }
  }


  if (estado == est && esSaltarpegar) {
    if (direccion == "derecha") {
      if (frameNum >= finDer || frameNum <= inicioDer) {
        frameNum = inicioDer
      }
frameNum++;
      if (frameNum == finDer) {
        posY = 471;
        frameNum = 120;
        velocidadY = 0;
        gravedad = 8;
        estoySaltando = true;
        estado = "saltar"
      }
    }
    if (direccion == "izquierda") {
      if (frameNum >= finIzq || frameNum <= inicioIzq) {
        frameNum = inicioIzq;
      }
frameNum++;
      if (frameNum == 115) {
        posY = 471;
        frameNum = 132;
        velocidadY = 0;
        gravedad = 8;
        estoySaltando = true;
        estado = "saltar"
      }
    }
  }
}


function restart() {
  fill(213, 244, 255);
  textAlign(CENTER)
    textSize(24)
    text("''R'' para reiniciar.", width/2, 570, );
  if ((keyIsPressed) && (key == 'r' || key == 'R')) {
    tiempo = 0;
    posX = -170;
    velFondo1 = 0;
    velFondo2 = 0;
    velFondo3 = 0;
  }
}
