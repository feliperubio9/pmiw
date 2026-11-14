//https://youtu.be/_iG8v59Mabo

let juego;
let fuentePixel;

function preload(){
fuentePixel = loadFont("data/Bittera-Demo.ttf");
}

function setup() {
  createCanvas(800, 450);
  juego = new Juego();
}

function draw() {
  juego.dibujar();
}

function mousePressed() {
  juego.mousePres();
}

function keyPressed() {
  juego.teclaPres();
}
