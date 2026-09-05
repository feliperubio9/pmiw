let bg;
let frameNum = 37;
let estado = "idle";
let teclaDer = false;
let teclaIzq = false;
let teclaArr = false;
let teclaPeg = false;
let tiempo = 0;


function preload() {
  sprites = loadImage("data/spritesheet.png");
  bgedificios = loadImage("data/bgedificios.png");
  camino = loadImage("data/camino.png");
  estructuras = loadImage("data/estructuras.png");
  fog = loadImage("data/fog.png");
  nubes = loadImage("data/nubes.png");
}

function setup() {
  createCanvas(800, 600);
  frameRate(24);
}

function draw() {

  background(213, 244, 255);
  fondo(1);
  tiempo++;
  movimientoX();
  saltar();
  pegar();
  posY = constrain(posY, 450, 570);
  image(sprites, posX - spriteW/2, posY-spriteH, spriteW, spriteH, frames[frameNum][0], frames[frameNum][1], spriteW, spriteH);
  maqEstados("idle", 35, 56, 56, 77);
  maqEstados("caminar", 0, 17, 18, 34);
  maqEstados("saltar", 115, 126, 127, 138, true);
  maqEstados("pegar", 78, 87, 88, 97, true);
  maqEstados("pegarSaltar", 98, 106, 107, 115, true, true);


  //Animacion

  if ((tiempo > 12 && tiempo < 48) ||
    (tiempo > 63 && tiempo < 67) ||
    (tiempo > 94)) {
    teclaDer = true;
  } else {
    teclaDer = false;
  }

  if ((tiempo > 67 && tiempo < 84)) {
    teclaIzq = true;
  } else {
    teclaIzq = false;
  }

  if ((tiempo == 74) || (tiempo == 120)) {
    teclaArr = true;
  } else {
    teclaArr = false;
  }

  if ((tiempo > 47) && (tiempo < 51) ||
    (tiempo > 105) && (tiempo <  109) ||
    (tiempo ==  123)) {
    teclaPeg = true;
  } else {
    teclaPeg = false;
  }
  if (tiempo > 180) {
    restart();
  }
}
