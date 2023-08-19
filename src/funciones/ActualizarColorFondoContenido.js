import {actualizarColorFondo} from './ActualizarColorFondo'
import { variablesGlobales } from './VariablesGlobales';
import { arrePadre } from './RetornarInfoAudios';


export function actulizarColorFondoContenido() {
    let arreAudiosPadre = arrePadre()
    let colorFondoEnUso = '', colorFondoSinUso = '';
    if(variablesGlobales().getModoPantalla() == 'oscuro'){
        colorFondoEnUso = '#ffffff'
        colorFondoSinUso = '#ffffff7c'
    } else {
        colorFondoEnUso = '#00000052'
        colorFondoSinUso = '#083fa78f'
    }
    actualizarColorFondo('secAudio', variablesGlobales().getCoor(), colorFondoEnUso, colorFondoSinUso, arreAudiosPadre.length);
    actualizarColorFondo('botonRepro', variablesGlobales().getCoor(), '#027495', '#ffffff', 5)
    
}