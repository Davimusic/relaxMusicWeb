import { audioToast } from "./AudioToast";
import { variablesGlobales } from "./VariablesGlobales";


export function reubicarSeccionAudio() {
    let coorPaso = variablesGlobales().getCoor()
    if(coorPaso == 1){ // con la coor 1 no queda bien en pantalla
        coorPaso = 0
    }
    const contenedor = document.getElementById("contenedorAudios");
    const secAudio = document.getElementById("secAudio" + coorPaso);
    const altura = document.getElementById('menuSuperior')
    const offSetTop = secAudio.getBoundingClientRect().top + altura.clientHeight;
    contenedor.scrollTop = offSetTop;
    contenedor.scrollTop = offSetTop;// està repetido en evaluacion
    //audioToast(offSetTop)
};

