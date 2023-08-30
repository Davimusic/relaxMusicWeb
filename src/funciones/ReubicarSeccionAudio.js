import { audioToast } from "./AudioToast";
import { variablesGlobales } from "./VariablesGlobales";

export function reubicarSeccionAudio() {
    const coorPaso = variablesGlobales().getCoor()
    const contenedor = document.getElementById("contenedorAudios");
    const secAudio = document.getElementById("secAudio" + coorPaso);
    const altura = document.getElementById('menuSuperior')
    let offSetTop = secAudio.getBoundingClientRect().top + altura.clientHeight;
    if(coorPaso == 1 || coorPaso == 0){ // con la coor 0 y 1 no queda bien en pantalla
        offSetTop = 0
    }
    contenedor.scrollTop = offSetTop;
};

