import { variablesGlobales } from "./VariablesGlobales";
import { arrePadre } from "./RetornarInfoAudios";
import { accionesModal } from "./AccionesModal";

let coorEnUso = 555// nùmero loco para que inicie sin problemas
export function ActualizarModalObjeto(){
    const coor = variablesGlobales().getCoor()
    if(coor != coorEnUso){
        coorEnUso = coor
        const padre =  arrePadre().getArrePadre()[coor]
        const conte = document.getElementById('contenidoModal')
        accionesModal().abrirModal('', padre); 
        conte.classList.remove('aperecerSuevemente');
        void conte.offsetWidth; // Forzamos un repaint, lo que reinicia la animación
        conte.classList.add('aperecerSuevemente');
    }
}