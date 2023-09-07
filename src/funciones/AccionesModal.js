/*import { audioToast } from "./AudioToast"
import { variablesGlobales } from "./VariablesGlobales"
import { arrePadre } from "./RetornarInfoAudios"

let conteo = 0, conteoImagenes = 0
export function accionesModal(){

    const modal = document.getElementById('modal')
    modal.style.transition = '2s'
    let linksVideos = ['https://res.cloudinary.com/dplncudbq/video/upload/v1657579454/mias/vi1_e6w4v7.mp4',
                        'https://res.cloudinary.com/dplncudbq/video/upload/v1692931708/mias/v1_yedzgi.mp4',
                        'https://res.cloudinary.com/dplncudbq/video/upload/v1692931684/mias/v2_ceuddl.mp4',
                        'https://res.cloudinary.com/dplncudbq/video/upload/v1692931660/mias/v4_mhcssu.mp4',
                        'https://res.cloudinary.com/dplncudbq/video/upload/v1692931660/mias/v3_qemvau.mp4']

    let linksImagenes =  ['https://res.cloudinary.com/dplncudbq/image/upload/v1657655365/mias/mirar_h6f8i9.jpg',
                        'https://res.cloudinary.com/dplncudbq/image/upload/v1657579483/mias/m7_r7xsp9.jpg',
                        'https://res.cloudinary.com/dplncudbq/image/upload/v1657579476/mias/m2_s0ekov.jpg',
                        'https://res.cloudinary.com/dplncudbq/image/upload/v1657563375/mias/h9_mjweif.jpg',
                        'https://res.cloudinary.com/dplncudbq/image/upload/v1657563375/mias/h1_j5kvru.jpg']


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
        
        if (typeof contenido === "object" || contenido === 'subir') {
            let contePaso = arrePadre().getArrePadre()[variablesGlobales().getCoor()]
            vide.style.display= 'none'
            conte.style.display = 'flex'
            modal.style.zIndex = '9999'
            conte.innerHTML = inyecccionHTMLConte(contePaso)
            const botonAbrirVideo = document.getElementById('botonAbrirVideo');
            botonAbrirVideo.addEventListener('click', (event) => {
            accionesModal().abrirModal(event, '');
            });
            const botonAbrirImagenes = document.getElementById('botonAbrirImagenes');
            botonAbrirImagenes.addEventListener('click', (event) => {
            accionesModal().abrirModal(event, 'imagenes');
            });
            conte.style.transition = '5s';
            variablesGlobales().setUsoModal('objeto')
        } else if(contenido === 'imagenes'){
            imagen()
            variablesGlobales().setUsoModal('imagen')
        } else {
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
        modal.style.width = '0vh'
        modal.style.height = '0Vh'
        modal.style.opacity= '0'; 
        modal.style.visibility= 'hidden';
        const videoModal = document.getElementById('videoModal')
        videoModal.pause();
        variablesGlobales().setUsoModal('')
        document.getElementById('modal').style.zIndex = '9999';
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function imagen(){
        const contenidoModal = document.getElementById('contenidoModal')
        contenidoModal.addEventListener("click", () => {
            contenidoModal.requestFullscreen();
        });
        document.getElementById('modal').style.zIndex = '10001';
        contenidoModal.innerHTML = `<img id='imagenesDinamicas' class='aperecerSuevemente'  style='height: 100vh; width: 100vw; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);'  srcset='${linksImagenes[conteoImagenes]}'>`
        await sleep(5000);
        if(conteoImagenes + 1 <= linksImagenes.length - 1){
            conteoImagenes += 1
        } else {
            conteoImagenes = 0
        }
        if(variablesGlobales().getUsoModal() === 'imagen'){
            imagen()
            console.log('entra');
        }
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
    const anchoVentana = document.documentElement.clientWidth;
    const altoVentana = document.documentElement.clientHeight;
    const paddingHijos = 'style = "padding-top: 4vh"'
    let medidaImagen = ''
    if(anchoVentana > altoVentana){
        medidaImagen =  'style="width: 80vh; height: 80vh;"'
    } else {
        medidaImagen =  'style="width: 80vw; height: 80vw;"'
    }
    let imagen = `<img alt="" loading="lazy" width="100" height="100" decoding="async" ${medidaImagen} srcset="${contenido.imagenAudio}">`
    let conte = `<div style='display: block; padding: 4vh;'>
                        <h2 ${paddingHijos}>${contenido.titulo}</h2>
                        <h3 ${paddingHijos}>${contenido.contenido}</h3>
                        <div ${paddingHijos}>
                            <img id='corazonModal'    style='marginLeft: 20px; height: 6vh; width: 6vh;'  srcset='https://res.cloudinary.com/dplncudbq/image/upload/v1692753447/mias/cora_l5a4yp.png'>
                        </div>
                        <div ${paddingHijos}>
                            <img id='botonAbrirVideo' style='marginLeft: 20px; height: 6vh; width: 6vh;' srcset='https://res.cloudinary.com/dplncudbq/image/upload/v1693680649/video_u9gl6j.png'>
                        </div>
                        <div ${paddingHijos}>
                            <img id='botonAbrirImagenes' style='marginLeft: 20px; height: 6vh; width: 6vh;' srcset='https://res.cloudinary.com/dplncudbq/image/upload/v1693680649/imagen_fmzeqo.png'>
                        </div>
                    </div>`
    if(anchoVentana > altoVentana){
        return `
            <div style='display: flex; z-index:100001'>
                ${imagen}
                ${conte}
            </div>`
    } else {
        console.log(contenido);
        document.getElementById('modal').style.backgroundImage = `url(${contenido.imagenAudio})`
        return conte
    }                
}*/