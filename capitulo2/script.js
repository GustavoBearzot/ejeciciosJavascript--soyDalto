class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.especie} años y de color ${this.color}`;

        }
}

let perro = new animal("perro",5,"rojo");
let gato = new animal("gato", 4, "negro");
document.write(perro.color);
document.write(gato.color);
