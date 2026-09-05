let frames = [144];
let spriteW = 265;
let spriteH = 247;

let i = 0;
for (let y = 0; y < 12; y++) {
  for (let x = 0; x < 12; x++) {
    frames[i] = [spriteW*x, spriteH*y];
    i++;
  }
}


let velFondo1 = 0;
let velFondo2 = 0;
let velFondo3 = 0;
function fondo(controlVel) {
  velFondo1 = velFondo1 - 1* controlVel*2;
  velFondo2 = velFondo2 - 0.5* controlVel*2;
  velFondo3 = velFondo3 - 0.25* controlVel*2;
  if (velFondo1 <= -1600) {
    velFondo1 = 0;
  }
  if (velFondo2 <= -1600) {
    velFondo2 = 0;
  }
  if (velFondo3 <= -1600) {
    velFondo3 = 0;
  }
  image(nubes, velFondo3, 0);
  image(nubes, velFondo3+1600, 0);
  image(bgedificios, velFondo2, 0);
  image(bgedificios, velFondo2+1600, 0);
  image(fog, 0, 0);
  image(estructuras, velFondo1, 0);
  image(estructuras, velFondo1+1600, 0);
  image(camino, 0, 0);
}
