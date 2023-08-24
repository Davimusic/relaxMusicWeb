import { variablesGlobales } from "./VariablesGlobales";

export function actualizarColorFondoBotonesEdicion(){
    if(variablesGlobales().getEstado() === 'aleatorio'){
        document.getElementById('botonRepro3').style.background = '#027495'
    } else if(variablesGlobales().getEstado() === 'repetir'){
        document.getElementById('botonRepro4').style.background = '#027495'
    } else if(variablesGlobales().getEstado() === 'audioActual'){
        document.getElementById('botonRepro3').style.background = '#ffffff'
        document.getElementById('botonRepro4').style.background = '#ffffff'
    }
}