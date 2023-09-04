"use client"

import { reproducirAudio } from "./ReproducirAudio";
import {arrePadre} from './RetornarInfoAudios'
import { audioToast } from "./AudioToast";
import { variablesGlobales } from "./VariablesGlobales";
import { actulizarColorFondoContenido } from "./ActualizarColorFondoContenido";
import { reubicarSeccionAudio } from './ReubicarSeccionAudio'
import { actualizarColorFondo } from "./ActualizarColorFondo";
//import { actualizarColorFondoBotonesEdicion } from "./ActualizarColorFondoBotonesEdicion";
import { ActualizarModalObjeto } from "./ActualizarModalObjeto";
import { segundosAFormatoHoras } from "./SegundosAFormatoHoras";

export function usarAudio(i, d) {
    const audio = document.getElementById('audioRep');
    const arreAudiosPadre = arrePadre().getArrePadre()
    //console.log(arreAudiosPadre);
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

    } else if (i === 'tipoUso') {
        const ima =  document.getElementById('botonRepro3')
        let estadoPaso = variablesGlobales().getEstado()
        const dicc = {
                0: 'https://res.cloudinary.com/dplncudbq/image/upload/v1693363915/flecha_cjzjxx.png',
                1: 'https://res.cloudinary.com/dplncudbq/image/upload/v1692223037/mias/re_oyr9yt.png',
                2: 'https://res.cloudinary.com/dplncudbq/image/upload/v1692223013/alea_q8jfvg.png'
                };
        let paso = 0         
        switch (estadoPaso) {
            case 'audioActual':
                variablesGlobales().setEstado('repetir')
                paso = 1
                break;
            case 'repetir':
                variablesGlobales().setEstado('aleatorio')
                paso = 2
                break;
            case 'aleatorio':
                variablesGlobales().setEstado('audioActual')
                paso = 0
                break;    
        }
        ima.srcset = dicc[paso]
    } else {
        variablesGlobales().setCoor(i)
        reproducirAudio(variablesGlobales().getCoor());
    }

    audio.addEventListener('loadedmetadata', function() {
        document.getElementById('rangeTime').max = audio.duration;
    });

    clearInterval(variablesGlobales().getIntervaloSubir()); // Detener el intervalo anterior
    variablesGlobales().setIntervaloSubir(setInterval(subir, 250))  // Crear un nuevo intervalo
    
    actulizarColorFondoContenido(d)
    reubicarSeccionAudio()
    
    if(variablesGlobales().getReproducir() === 'si'){
        ActualizarModalObjeto()
    }
    
    function subir(){
        if(variablesGlobales().getReproducir() == 'si'){
            const audio = document.getElementById('audioRep')
            const tiempoAudio = document.getElementById('tiempoAudio')
            //console.log(audio.currentTime)
            document.getElementById('rangeTime').value=audio.currentTime
            tiempoAudio.innerHTML = segundosAFormatoHoras(audio.currentTime.toFixed(1)) + ' min.'
            const tiempoAudio2 =  document.getElementById('tiempoAudio2');
            if(tiempoAudio2 != null){
                tiempoAudio2.innerHTML = segundosAFormatoHoras(audio.currentTime.toFixed(1)) + ' min.'
            }
        }
    }
}

if (typeof window !== "undefined") {
    //window.addEventListener("load", (event) => {
        const audio = document.getElementById('audioRep');
        audio.addEventListener("ended", () => {
            if( variablesGlobales().getEstado() != 'audioActual'&&
                variablesGlobales().getEstado() != 'repetir'&&
                variablesGlobales().getEstado() != 'aleatorio'){
                    variablesGlobales().setEstado('audioActual')
                }
            console.log(variablesGlobales().getEstado());
            if(variablesGlobales().getEstado() == 'audioActual'){
                if(variablesGlobales().getCoor() + 1 < arrePadre().getArrePadre().length){
                    variablesGlobales().setCoor(variablesGlobales().getCoor() + 1)
                } else {
                    variablesGlobales().setCoor(0)
                }
                reproducirAudio(variablesGlobales().getCoor())
            } else if(variablesGlobales().getEstado() == 'repetir'){
                reproducirAudio(variablesGlobales().getCoor())
            } else if(variablesGlobales().getEstado() == 'aleatorio'){
                let numAle = Math.round(Math.random() * ((arrePadre().getArrePadre().length - 1) - 0))
                while (numAle === variablesGlobales().getCoor()) {
                    numAle = Math.round(Math.random() * ((arrePadre().getArrePadre().length - 1) - 0));
                }
                variablesGlobales().setCoor(numAle)
                reproducirAudio(variablesGlobales().getCoor())
            }
            
            reubicarSeccionAudio()
            actulizarColorFondoContenido(variablesGlobales().getCoor())
        });
    //});
}






