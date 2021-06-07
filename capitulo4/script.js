const obtenerInformacion = (materia) => {
    materias = {
        fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
        programacion: ["Dalto", "pedro", "juan", "pepito"],
        logica: ["Hernandez", "pedro", "juan", "pepito", "cofla", "maria"],
        quimica: ["Rodriguez", "pedro", "juan", "pepito", "cofla", "maria"],
    }
    if (materias[materia] !== undifined) {
        return [materias[materia], materia, materias];
    } else {
        return false;
    }
}

const mostrarinformacion = (materia) => {
    let informacion = obtenerInformacion("materia");

    if (informacion !== false) {
        let profesor = obtenerInformacion("materia")[0][0];
        alumnos = obtenerInformacion("materia")[0];
        alumnos.shift();
        console.log(`El profesor de <b>${informacion[1]}</b> <b>${informacion[0]}</b > <br></br>} 
   Los alumnos son: ${alumnos}`)
    }
}

cosnt cantidadDeClases = (alumno) => {
    let info = obtenerInformacion("materia")
    let cantidadTotal = 0;
    for (info in informacion[2]) {
        if (informacion[2][info].includes(alumno)) {
            cantidadTotal++;
        }
    }
    return cantidadTotal;
}

mostrarinformacion("fisica");
mostrarinformacion("quimica");
mostrarinformacion("programacion");
mostrarinformacion("quimica");


//hasta 6:41:18 segundos esta armado el codigo