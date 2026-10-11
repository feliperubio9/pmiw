//https://youtu.be/-hK0PQG6ynU

let ArrPant = [];
let ArrAnim1 = [];
let ArrAnim2 = [];
let ArrAnim3 = [];
let ArrAnim4 = [];
let pantallaActual = 0;
let pantallaSiguiente = 1;
let fade = 0;
let IsTransicionando = false;
let fadeSubiendo;
let Fuente;
let animVel = 0.1;
let animFrame = 0;
let animPosX = -200;
let clickeando;
let clicknormal;
let ambiente;

function preload() {
  for (let i = 0; i < 36; i++) {
    ArrPant[i] = loadImage("images/Pantalla_" + i + ".png");
  }
  for (let i = 0; i < 4; i++) {
    ArrAnim1[i] = loadImage("images/Anim1_" + i + ".png");
    ArrAnim2[i] = loadImage("images/Anim2_" + i + ".png");
    ArrAnim3[i] = loadImage("images/Anim3_" + i + ".png");
  }
  for (let i = 0; i < 8; i++) {
    ArrAnim4[i] = loadImage("images/Anim4_" + i + ".png");
  }
  Fuente = loadFont("data/BadComic-Regular.ttf");

  soundFormats('mp3', 'ogg');

  clickeando= loadSound("data/Clickeando");
  clicknormal= loadSound("data/clicknormal");
  ambiente= loadSound("data/ambiente(1)");
}

function setup() {
  createCanvas(800, 450);
  ambiente.loop();
}

function draw() {
  background(0);
  if (pantallaActual == 0) {
    pantalla(0, "", 300, 340, 200, 40, 1, "", true, 328, 398, 148, 30, 16, "");
  }
  if (pantallaActual == 1) {
    pantalla(3, "Tú y tu madre soltera llevan una vida normal. Ella siempre ha sido un poco reservada con su trabajo, pero no es asunto tuyo. Tu madre te deja en el colegio. En la entrada ves a una chica muy parecida a ti pero de mayor edad.", 520, 106, 133, 319, 2, "Acercarse", false);
  }
  if (pantallaActual == 2) {
    pantalla(5, "La chica te mira fijo. Se acerca a ti y te cuenta que ella es tu hermana perdida de otro universo. Te muestra una foto familiar y te dice de quedar nuevamente para contarte más, ya que estás apurada.", 121, 136, 132, 105, 3, "Ir al laboratorio de tu madre", true, 665, 139, 112, 159, 10, "Esperar al recreo");
  }
  if (pantallaActual == 3) {
    pantalla (8, "A esa hora, el laboratorio de Mamá está vacío, así que tienes la oportunidad de curiosear. Te preguntas si lo que te dijo tu supuesta hermana tiene algo que ver con las investigaciones secretas de tu madre.", 397, 99, 184, 241, 4, "Investigar planta", false);
  }
  if (pantallaActual == 4) {
    pantalla(10, "Te das cuenta de que la maceta tiene un doble fondo. Dentro encuentras un pequeño dispositivo con un gran botón rojo en el centro. Escuchas voces en el pasillo, es Jake, el alumno de tu Mamá y se acerca muy rápido.", 615, 20, 127, 385, 6, "Disimular", true, 99, 233, 99, 139, 5, "Usar el aparato");
  }
  if (pantallaActual == 5) {
    pantalla(13, "La habitación se desvanece en una repentina luz. Te sientes completamente extraña. Viajaste a un universo en el que no hay vida, no queda energía. Solo la muerte térmica del universo… y tú.", 335, 393, 127, 26, 0, "", false);
  }
  if (pantallaActual == 6) {
    pantalla(15, "Jake entra. ''¿Qué estás haciendo aquí?'' pregunta. ''Creo que dejé mi tarea de matemáticas'', respondes. No te cree, y no quieres que sospeche aún más. Empiezas a acercarte hacia la puerta.", 593, 75, 94, 286, 7, "Irte", false);
  }
  if (pantallaActual == 7) {
    pantalla(17, "Al día siguiente, vas a encontrarte con Verónica, tu hermana, en el patio durante el almuerzo, y antes de que ella pueda decir algo, le cuentas que encontraste el dispositivo de Mamá. ''¿Todavía lo tiene? ¿Puedo verlo?''", 380, 21, 307, 318, 8, "Llevarla al laboratorio.", false);
  }
  if (pantallaActual == 8) {
    pantalla(19, "La llevas al laboratorio. Encuentras a tu mamá preocupada. Les cuenta que Jake está desaparecido desde ayer", 55, 29, 220, 396, 9, "Contarle todo", false);
  }
  if (pantallaActual == 9) {
    pantalla(21, "Debe haber usado el dispositivo. ¿Quién sabe a dónde viajó? Mamá las interrumpe. ''Tal vez ustedes dos puedan ayudarme con este trabajo''. Verónica acepta quedarse y pasan el resto de sus vidas tratando de buscar a Jake en el multiverso.", 335, 393, 127, 26, 0, "", false);
  }
  if (pantallaActual == 10) {
    pantalla(23, "El señor Browning te observa. Suena el timbre y quieres irte, pero el señor Browning te dice que te acerques. Pregunta si estás bien, respondes que sí. ''Pareces distraída'' añade él.", 21, 21, 315, 387, 11, "Contarle todo", false);
  }
  if (pantallaActual == 11) {
    pantalla(25, "Le cuentas lo de tu supuesta hermana que apareció ayer. También que siempre pensaste que Mamá escondía algo, y que quizá esto era lo que ocultaba. Después de contarle todo, se queda callado y sales al recreo.", 610, 157, 70, 168, 12, "Ir con tu hermana", false);
  }
  if (pantallaActual == 12) {
    pantalla(27, "''¿Te siguieron?'' pregunta Verónica. Confundida, miras detrás de ti, y ves que el señor Browning sale de la sombra del edificio. Camina hacia ustedes junto a dos tipos. Verónica te pone una especie de aparato en la mano. ''Lleva esto con Mamá, corre.''", 580, 20, 194, 398, 13, "Correr", false);
  }
  if (pantallaActual == 13) {
    pantalla(29, "Corres tan rápido como puedes lejos del señor Browning y de sus matones, apretando en tu mano el extraño aparato y el papel. Cruzas el patio, pero otro de los secuaces aparece de la nada y se planta frente a ti. Tienes que pensar rápido.", 462, 178, 87, 84, 5, "Usar el aparato", true, 599, 21, 153, 386, 14, "Esquivarlo");
  }
  if (pantallaActual == 14) {
    pantalla(32, "Corres hacia la izquierda. La puerta trasera se abre detrás de la escuela. Sigues corriendo, hasta llegar al laboratorio de tu mamá. Le quieres mostrar todo, pero la nota se te cayó en el camino.", 315, 172, 119, 133, 15, "Mostrarle la foto", false);
  }
  if (pantallaActual == 15) {
    pantalla(34, "Te saca la foto de las manos junto con el aparato. ''Estas personas ya no están en nuestra vida por una razón. No importa dónde estén ahora solo estamos tú y yo. Así quiero que sea. No se habla más del tema. Estás castigada''", 335, 393, 127, 26, 0, "", false);
  }
  if (pantallaActual == 16) {
    if (round(animPosX) < 267) {
      animFrame += animVel;
      if (round(animFrame) > 3) {
        animFrame = 0;
      }
      animPosX += animVel*60;
      image(ArrAnim1[round(animFrame)], animPosX, 200, 307/2, 438/2);
      image(ArrAnim2[round(animFrame)], -animPosX+650, 200, 307/2, 438/2);
      fill(255, 12);
    }
    if (round(animPosX) >= 267 && round(animPosX) < 712) {
      animFrame += animVel;
      if (round(animFrame) > 3) {
        animFrame = 0;
      }
      animPosX += animVel*60;
      image(ArrAnim3[round(animFrame)], 305, 148, 307/1.6, 438/1.6);
    }
    if (round(animPosX) >= 712) {
      animFrame += animVel;
      if (round(animFrame) == 4 || round(animFrame) == 6) {
        fill (255, 100);
        rect(0, 0, 800, 450);
      }
      if (round(animFrame) == 5) {
        fill (255, 255);
        rect(0, 0, 800, 450);
      }
      animPosX += animVel*60;
      if (round(animFrame) < 8) {
        image(ArrAnim4[round(animFrame)], 260, 95, 307/1.1, 438/1.1);
      }
    }
    if (round(animPosX) >= 712 && round(animFrame) > 5) {
      fill(255);
      textAlign(CENTER, CENTER);
      textFont(Fuente);
      textSize(22);
      text("Hermana del Multiverso\n\n\Por C.E. Berger\n\n\n\nFelipe Rubio 125682/9\nGuadalupe Gallina 125579/1\n\nPMIW - Comisión 5\nDocente: Leo Garay", 0, 0, 800, 400);
      textSize(26);
      if (mouseX >= 256 && mouseX <= 445 && mouseY>= 392 && mouseY<= 442) {
        fill(255, 68, 255);
        if (mouseIsPressed) {
          pantallaSiguiente=0;
          IsTransicionando=true;
        }
      } else {
        fill(255);
      }
      text("Volver", 0, 392, 800, 30);
    }
  }

  transicionPantalla();
}

function mousePressed () {
  clicknormal.play();
}
