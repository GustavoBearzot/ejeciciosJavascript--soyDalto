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


/* --------------------------------
class Celular {
    constructor(color, peso, rdp, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido() {
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true;
        } else {
            alert("el celular esta apagado");
        }
    }

    reiniciar() {
        if (this.encendido == true) {
            alert("reiniciando celular");
            this.encendido = true;
        } else {
            alert("el celular esta apagado");
            this.encendido = false;
        }
    }

    tomarfotos() {
        alert(`foto tomada en resolucion de: ${this.resolucion}`);
    }
    grabarVideo() {
        alert(`grabando video en resolucion de: ${this.resolucion}`);
    }
    mobileinfo() {
        return `
    color: <b>${this.color}</b><br></br>
    Peso: <b>${this.peso}</b><br></br>
Resolucion de pantalla: <b>${this.rdp}</b><br></br>
Tamaño: <b>${this.tamaño}</b><br></br>
Resolucion de video: <b>${this.rdp}</b><br></br>
Memoria Ram: <b>${this.memoriaRam}</b><br></br>
`
    }
}


class CelularAltaGama extends Celular {
    constructor(color, peso, tamaño, rdc, ram, rdce) {
        super(color, peso, tamaño, rdc, ram)
        this.resolucionDeCamaraExtra = rdce;
    }
    GrabarVideoLento() {
        alert("estas grabando en camara lenta");
    }
    reconocimientoFacial() {
        alert("inicio reconocimento facial");
    }
    infoAltaGama() {
        return this.mobileInfo() + `Resolucion de Camara Extra:${this.resolucionDeCamaraExtra}`
    }
}

celular1 = new Celular("rojo", "150g", "5'", "full hd", "2GB");

celular2 = new Celular("negro", "146g", "5.4'", " hd", "1GB");

celular3 = new Celular("azul", "180g", "5.9'", "full hd", "2GB");

celularIPhone = new CelularAltaGama("gris", "120g", "7", "full hd++", "3GB");

document.write(`
${celular1.mobileInfo()}<br>
${celular2.mobileInfo()}<br>
${celular3.mobileInfo()}<br>
${celularIPhone.mobileInfo()}<br>
${celularIPhone.mobileInfo()}<br>
`);

--------------- ----*/

class App {
    constructor(descargas, puntuacion, peso) {
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;
    }
    abrir() {
        if (this.iniciada == false) {
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar() {
        if (this.iniciada == true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    instalar() {
        if (this.instalada == false) {
            this.instalada = true;
            alert("app instalada");
        }
    }
    desinstalar() {
        if (this.iniciada == true) {
            this.iniciada = false;
            alert("app desinstalada");
        }
    }

    abrir() {
        if (this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar() {
        if (this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    appInfo() {
        return `
        Descargas: <b>${this.descargas}</b></br>
        Puntuacion: <b>${this.puntuacion}</b></br>
        Peso: <b>${this.peso}</b></br>
        `
    }

}

app = new App("16000", "5 estrellas", "900mb");

app.instalar();
app.desinstalar();
app.abrir();
app.appInfo();

document.write(`${app.appInfo()}`)
