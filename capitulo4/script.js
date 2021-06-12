const obtenerInformacion = (materia) => {
    const materias = {
        fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
        programacion: ["Dalto", "pedro", "juan", "pepito"],
        logica: ["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
        quimica: ["Rodriguez", "pedro", "juan", "pepito", "cofla", "maria"],
    }
    if (materias[materia] !== undifined) {
        return [materias[materia], materia, materias];
    } else {
        return materias;
    }
}

const mostrarinformacion = (materia) => {
    let informacion = obtenerInformacion(materia);

    if (informacion !== false) {
        let profesor = informacion(materia)[0][0];
        alumnos = informacion(materia)[0];
        alumnos.shift();
        console.log(`El profesor de <b>${informacion[1]}</b> <b>${informacion[0]}</b > <br></br>} 
   Los alumnos son: <b style="color:blue" ${alumnos}`)
    }
}

const cantidadDeClases = (alumno) => {
    let informacion = obtenerInformacion(materia);
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion) {
        if (informacion[info].includes(alumno)) {
            cantidadTotal++;
            clasesPresentes.push[" " + info];
        }
    }
    return alumno + cantidadTotal + clasesPresentes
        ;
}

mostrarinformacion("fisica");
mostrarinformacion("quimica");
mostrarinformacion("programacion");
mostrarinformacion("quimica");

document.write(cantidadDeClases("cofla"));


//hasta 6:41:18 segundos esta armado el codigo