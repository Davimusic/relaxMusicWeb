import { audioToast } from "./AudioToast"
import { variablesGlobales } from "./VariablesGlobales"
import { arrePadre } from "./RetornarInfoAudios"


let conteo = 0
export function accionesModal(){

    const modal = document.getElementById('modal')
    modal.style.transition = '2s'
    let linksVideos = ['https://res.cloudinary.com/dplncudbq/video/upload/v1657579454/mias/vi1_e6w4v7.mp4',
                        'https://res.cloudinary.com/dplncudbq/video/upload/v1692931708/mias/v1_yedzgi.mp4',
                        'https://res.cloudinary.com/dplncudbq/video/upload/v1692931684/mias/v2_ceuddl.mp4',
                        'https://res.cloudinary.com/dplncudbq/video/upload/v1692931660/mias/v4_mhcssu.mp4',
                        'https://res.cloudinary.com/dplncudbq/video/upload/v1692931660/mias/v3_qemvau.mp4']

    function abrirModal(event, contenido){
        if(event){
            event.stopPropagation()
        }

        modal.style.width = '100vw'
        modal.style.height = '100Vh'
        modal.style.opacity= '1'; 
        modal.style.visibility= 'visible';
        
        const vide = document.getElementById('videoModal')
        const conte = document.getElementById('contenidoModal')
        const botonAbrirVideo = document.getElementById('botonAbrirVideo')
        
        if (typeof contenido === "object" || contenido === 'subir') {
            botonAbrirVideo.style.display = 'flex'
            let contePaso = arrePadre().getArrePadre()[variablesGlobales().getCoor()]
            vide.style.display= 'none'
            conte.style.display = 'flex'
            modal.style.zIndex = '9999'
            conte.innerHTML = inyecccionHTMLConte(contePaso)
            conte.style.transition = '5s';
            variablesGlobales().setUsoModal('objeto')
        } else {
            botonAbrirVideo.style.display = 'none'
            modal.style.zIndex = '10000'
            vide.style.display= 'block'
            vide.classList.add('aperecerSuevemente')
            conte.style.display = 'none'
            modal.style.top = '50%'
            video()
            variablesGlobales().setUsoModal('video')
        }
    }

    function cerrarModal(){
        botonAbrirVideo.style.display = 'none'
        modal.style.width = '0vh'
        modal.style.height = '0Vh'
        modal.style.opacity= '0'; 
        modal.style.visibility= 'hidden';
        const videoModal = document.getElementById('videoModal')
        videoModal.pause();
    }

    function video() {
        const videoModal = document.getElementById('videoModal')
        videoModal.src=linksVideos[0]
        videoModal.play();

        videoModal.addEventListener("play", () => {
            videoModal.muted = true;
            videoModal.controls = false; 
        });

        videoModal.addEventListener("click", () => {
            videoModal.requestFullscreen();
        });

        videoModal.addEventListener("ended", () => {
            if(conteo + 1 <= linksVideos.length - 1){
                conteo += 1
            } else {
                conteo = 0
            }
            videoModal.src = linksVideos[conteo]
            videoModal.play()
            //audioToast(conteo)
        });        
    }

    return {
        abrirModal,
        cerrarModal,
    };
}

function inyecccionHTMLConte(contenido){
    return `
    <div class='espacioEquilatero' style='display: flex; width: 50vh; flex-wrap: wrap; padding: 4vh;'>
        <h2>${contenido.titulo}</h2>
        <h3 style='marginLeft: 5vh'>${variablesGlobales().getDuracionesAudios()[variablesGlobales().getCoor()]} min.</h3>
    </div>
    <h3>${contenido.contenido}</h3>
    <img alt="" loading="lazy" width="100" height="100" decoding="async" style="width: 50vh; height: 50vh;" srcset="${contenido.imagenAudio}">`
}