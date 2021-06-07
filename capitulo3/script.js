// class Animal{
//     constructor(especie,edad,color){
//         this.especie = especie;
//         this.edad = edad;
//         this.color = color;
//         this.info = `soy ${this.especie} años y de color ${this.color}`;
//         }
//         verinfo(){
//             document.write(this.info)
//         }
// }

// class Perro extends Animal {
//     constructor(especie,edad,color,raza){
//         super(especie,edad);
//         this.raza = raza;
//     }
//     static ladrar(){
//         aletrt ("guau");
//     }
//     set setRaza(newName){
//         this.raza = newName;
//     }
//     get getRaza(){
//         return this.raza;
//     }
// }

// const perro = new Perro("perro",5,"rojo","doberman");
// const gato = new Animal("gato", 4, "negro");
// const pajaro = new Animal("pajaro", 3 , "azul");

// Perro.ladrar();
// gato.ladrar();


class celular {
    constructor(color, peso, rdp, rdc, ram)
    this.color = color;
this.peso = peso;
this.rdp = rdp;
this.rdc = rdc;
this.memoriaRam = ram;
this.encendido = false;
}
presionarBotonEncendido(){
    if (this.encendido == false) {
        alert("celular prendido");
        this.encendido = true;
    } else {
        alert("el celular esta apagado");
    }
}

reiniciar(){
    if (this.encendido == true) {
        alert("reiniciando celular");
        this.encendido = true;
    } else {
        alert("el celular esta apagado");
    }
}

tomarfotos(){
    alert(`foto tomada en resolucion de: ${this.resolucion}`);

}
tomarfotos()) {
    alert(`grabando video en resolucion de: ${this.resolucion})`;
} 
}

celular1 = new Celular("rojo", "150g", "5'", "full hd", "2GB");

celular1.



