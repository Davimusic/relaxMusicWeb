import {arrePadre} from './RetornarInfoAudios'
import {variablesGlobales} from './VariablesGlobales'
import { ActualizarModalObjeto } from './ActualizarModalObjeto';
import { Modal } from '@/components/Modal';


export function reproducirAudio(coor) {
    const arreAudiosPadre = arrePadre().getArrePadre()
    const audio = document.getElementById('audioRep');
    const contenedorAudios = document.getElementById('contenedorAudios');
    const botonPlay = document.getElementById('botonRepro1');

    audio.src = arreAudiosPadre[coor].linkAudio;
    contenedorAudios.style.backgroundImage = `url(${arreAudiosPadre[coor].imagenAudio})`;
    contenedorAudios.style.backgroundRepeat = 'no-repeat';
    contenedorAudios.style.backgroundSize = 'cover';
    
    audio.play();
    variablesGlobales().setReproducir('si')
    //ActualizarModalObjeto()
    if(variablesGlobales().getUsoModal() != ''){
        const botonRepro4 = document.getElementById('botonRepro4');
        botonRepro4.click()
    }

    botonPlay.srcset = 'https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/pause_vae5ou.png';
}