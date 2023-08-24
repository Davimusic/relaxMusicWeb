"use client"

import { reproducirAudio } from "./ReproducirAudio";
import {arrePadre} from './RetornarInfoAudios'
import { audioToast } from "./AudioToast";
import { variablesGlobales } from "./VariablesGlobales";
import { actulizarColorFondoContenido } from "./ActualizarColorFondoContenido";
import { reubicarSeccionAudio } from './ReubicarSeccionAudio'
import { actualizarColorFondo } from "./ActualizarColorFondo";
import { actualizarColorFondoBotonesEdicion } from "./ActualizarColorFondoBotonesEdicion";


export function usarAudio(i, d) {
    //audioToast('entrA')
    const audio = document.getElementById('audioRep');
    const arreAudiosPadre = arrePadre()
    const botonPlay = document.getElementById('botonRepro1');

    if (i === 'play') {
        if (audio.src === '') {
            audio.src = arreAudiosPadre[0].linkAudio;
        }

        if (variablesGlobales().getReproducir() === 'no') {
            audio.play();
            variablesGlobales().setReproducir('si')
            botonPlay.srcset = 'https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/pause_vae5ou.png';
        } else {
            audio.pause();
            variablesGlobales().setReproducir('no')
            botonPlay.srcset = 'https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/play_qqpavo.png';
        }

    } else if (i === 'adelante' || i === 'atras') {

        variablesGlobales().setCoor(
            (variablesGlobales().getCoor() 
            + 
            (i === 'adelante' ? 1 : -1) 
            + arreAudiosPadre.length) 
            % arreAudiosPadre.length)

        reproducirAudio(variablesGlobales().getCoor());

    } else if (i === 'repetir') {
        if(variablesGlobales().getEstado() == 'repetir'){
            variablesGlobales().setEstado('audioActual')
        } else {
            variablesGlobales().setEstado(i)
        }
    } else if(i === 'aleatorio'){
        if(variablesGlobales().getEstado() == 'aleatorio'){
            variablesGlobales().setEstado('audioActual')
        } else {
            variablesGlobales().setEstado(i)
        }
    } else {
        variablesGlobales().setCoor(i)
        reproducirAudio(variablesGlobales().getCoor());
    }

    audio.addEventListener('loadedmetadata', function() {
        document.getElementById('input').max = audio.duration;
    });

    clearInterval(variablesGlobales().getIntervaloSubir()); // Detener el intervalo anterior
    variablesGlobales().setIntervaloSubir(setInterval(subir, 1000))  // Crear un nuevo intervalo
    
    actulizarColorFondoContenido(d)
    actualizarColorFondoBotonesEdicion()
    reubicarSeccionAudio()
    
    
    function subir(){
        let audio = document.getElementById('audioRep')
        //console.log(audio.currentTime)
        document.getElementById('input').value=audio.currentTime
    }
}

window.addEventListener("load", (event) => {
    const audio = document.getElementById('audioRep');

    audio.addEventListener("ended", () => {
        //console.log("Hola");
        //audioToast(variablesGlobales().getEstado())
        if(variablesGlobales().getEstado() == 'audioActual'){
            if(variablesGlobales().getCoor() + 1 < arrePadre().length){
                variablesGlobales().setCoor(variablesGlobales().getCoor() + 1)
            } else {
                variablesGlobales().setCoor(0)
            }
            reproducirAudio(variablesGlobales().getCoor())
        } else if(variablesGlobales().getEstado() == 'repetir'){
            reproducirAudio(variablesGlobales().getCoor())
        } else if(variablesGlobales().getEstado() == 'aleatorio'){
            let numAle = Math.round(Math.random() * ((arrePadre().length - 1) - 0))
            while (numAle === variablesGlobales().getCoor()) {
                numAle = Math.round(Math.random() * ((arrePadre().length - 1) - 0));
            }
            variablesGlobales().setCoor(numAle)
            reproducirAudio(variablesGlobales().getCoor())
        }
        
        reubicarSeccionAudio()
        actulizarColorFondoContenido(variablesGlobales().getCoor())
        actualizarColorFondoBotonesEdicion()
        
    });
});




/**
function onAudioEnded() {
        audioToast(variablesGlobales().getEstado())
        if(variablesGlobales().getEstado() == 'audioActual'){
            /*if(variablesGlobales().getCoor() + 1 < arrePadre().length){
                variablesGlobales().setCoor(variablesGlobales().getCoor() + 1)
            } else {
                variablesGlobales().setCoor(0)
            }
            reproducirAudio(variablesGlobales().getCoor())//
        } else if(variablesGlobales().getEstado() == 'repetir'){
            reproducirAudio(variablesGlobales().getCoor())
        } else if(variablesGlobales().getEstado() == 'aleatorio'){
            let numAle = Math.round(Math.random() * ((arreAudiosPadre.length - 1) - 0));
            reproducirAudio(numAle)
        }
        

        // Obtener el elemento contenedor
        var contenedor = document.getElementById("contenedorAudios");

        // Obtener el elemento secAudio5
        var secAudio5 = document.getElementById(`secAudio${variablesGlobales().getCoor()}`);

        // Calcular la posición del elemento secAudio5 respecto al contenedor
        var offsetTop = secAudio5.offsetTop;

        // Establecer scrollTop del contenedor para mostrar secAudio5 en la parte superior
        contenedor.scrollTop = offsetTop;

        audio.removeEventListener('ended', onAudioEnded); // Eliminar el oyente
    }
audio.addEventListener('ended', onAudioEnded);
 */
