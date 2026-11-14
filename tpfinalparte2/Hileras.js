class Hilera {
  constructor(posX, vel) {
    this.posX = posX;
    this.vel = vel;

    this.carriles = [200,300, 400];
    this.objetoEnCarril = [];
    this.objetos = [];

    for (let i=0; i<3; i++) {
      this.objetoEnCarril[i] = random(["mesa", "silla", "persona", "vacio"]);
    }

    if (this.objetoEnCarril[0] == "persona" &&
        this.objetoEnCarril[1] == "persona" &&
        this.objetoEnCarril[2] == "persona") {
      this.objetoEnCarril[2] = "vacio";
    }

    for (let i=0; i<3; i++) {

      if (this.objetoEnCarril[i] == "mesa") {
        this.objetos[i] = new Mesa(this.vel);
      }

      if (this.objetoEnCarril[i] == "silla") {
        this.objetos[i] = new Silla(this.vel);
      }

      if (this.objetoEnCarril[i] == "persona") {
        this.objetos[i] = new Persona(this.vel);
      }

      if (this.objetoEnCarril[i] == "vacio") {
        this.objetos[i] = " ";
      }

      if (this.objetos[i] != " ") {
        this.objetos[i].posX = this.posX;
        this.objetos[i].posY = this.carriles[i];
      }
    }
  }
}
