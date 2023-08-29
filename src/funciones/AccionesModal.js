import { audioToast } from "./AudioToast"
import { variablesGlobales } from "./VariablesGlobales"

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
        event.stopPropagation()
        modal.style.width = '100vw'
        modal.style.height = '100Vh'
        modal.style.opacity= '1'; 
        modal.style.visibility= 'visible';
        
        const vide = document.getElementById('videoModal')
        const conte = document.getElementById('contenidoModal')
        
        if (typeof contenido === "object") {
            vide.style.display= 'none'
            conte.style.display = 'flex'
            modal.style.width = '100vw'
            modal.style.height = '100vh'
            modal.style.background = 'none'
            conte.style.height = '90.3vh'
            conte.style.top = '0%'
            conte.innerHTML = `<h2>${contenido.titulo}</h2><h3>${contenido.contenido}</h3><img alt="" loading="lazy" width="100" height="100" decoding="async" style="width: 50vw; height: fit-content" srcset="${contenido.imagenAudio}">`
        } else {
            vide.style.display= 'block'
            conte.style.display = 'none'
            modal.style.top = '50%'
            video()
        }
    }

    function cerrarModal(){
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