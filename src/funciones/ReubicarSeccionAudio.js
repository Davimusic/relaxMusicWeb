import { audioToast } from "./AudioToast";
import { variablesGlobales } from "./VariablesGlobales";


export function reubicarSeccionAudio() {
    const contenedor = document.getElementById("contenedorAudios");
    const secAudio = document.getElementById("secAudio" + variablesGlobales().getCoor());
    const altura = document.getElementById('menuSuperior')
    const offSetTop = secAudio.getBoundingClientRect().top + altura.clientHeight;
    contenedor.scrollTop = offSetTop;
    contenedor.scrollTop = offSetTop;// està repetido en evaluacion
    //audioToast(offSetTop)
};

