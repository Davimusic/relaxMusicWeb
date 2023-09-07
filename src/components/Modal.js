import React, { useState, useEffect } from "react";
import Imagenes from "./Img";
//import { accionesModal } from "@/funciones/AccionesModal";
import '../estilos/modal.css'
import '../app/globals.css'
import { variablesGlobales } from "@/funciones/VariablesGlobales";
import { arrePadre } from "@/funciones/RetornarInfoAudios";

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

let conteo = 0, conteoImagenes = 0
let paso = 'cerrar'
export function Modal(){
    const [estadoModal, setEstadoModal] = useState('');
    const [imgFondo, setImgFondo] = useState('https://res.cloudinary.com/dplncudbq/image/upload/v1692753447/mias/cora_l5a4yp.png');
    const [animar, setAnimar] = useState(false);

    function mostrar(event, contenido){
        if((contenido === 'cerrar' && paso === 'subir') || (contenido === 'cerrar' && paso === 'cerrar')){
            setEstadoModal('')
        } else {
            setEstadoModal(contenido)
        }
        paso = contenido
        setImgFondo(arrePadre().getArrePadre()[variablesGlobales().getCoor()].imagenAudio)
        setAnimar(true);

        setTimeout(() => {
            setAnimar(false);
        }, 2000); 

        if(event){
            event.stopPropagation()
        }
    }

    useEffect(() => {
        console.log(estadoModal);
        variablesGlobales().setUsoModal(estadoModal)
        if(estadoModal === 'video'){
            video()
        } else if(estadoModal === 'imagen'){
            imagen()
        } 
    }, [estadoModal]);
    
    const styleImages = {height: '6vh', width: '6vh'}
    const espacio = {padding: '2vh'}
    return (
        <div className= {`${estadoModal != '' ? 'contenedorAbsolutoModal' : ''}`}>
            
                <div className={`botonAbrirModalFlotante ${estadoModal != '' ? 'esconderBotonAbrirModalFlotante' : 'aperecerSuevemente'}`}>
                    <Imagenes 
                    onClick={(event) => mostrar(event, 'subir')}
                    id='botonRepro4'
                    className={'seleccionable'}
                    style={{height: '6vh', width: '6vh'} }
                    link='https://res.cloudinary.com/dplncudbq/image/upload/v1693583167/subir_pinj91.png'
                    />
                </div>
            
            {estadoModal != '' && (
            <div id='modal' className={`modalPadre color1 ${animar ? 'aperecerSuevemente' : ''}`}>
                <header>
                    <Imagenes className='botonCerrar'
                        link='https://res.cloudinary.com/dplncudbq/image/upload/v1692415538/mias/x_dzlrbc.png'
                        onClick={(event) => mostrar(event, 'cerrar')}
                    />
                </header>
                {estadoModal != 'video' && estadoModal != 'imagen' &&(
                    <div className={`objetoAudio`}>
                        <Imagenes id='fondoModalObjeto'  className='fondoImagen'  link={imgFondo}/>
                        <div className='hijosObjetoAudio'>
                            <Imagenes id='corazonMo'  className='imagAudio'  link={imgFondo}/>
                        </div>
                        <div className='hijosObjetoAudio'>
                            <h2 style={espacio}>titulo titulo titulo titulo titulo</h2>
                            <h3 style={espacio}>conte conte conte conte</h3>
                            <div style={espacio}>
                                <Imagenes id='corazonModal'  style={styleImages}  link='https://res.cloudinary.com/dplncudbq/image/upload/v1692753447/mias/cora_l5a4yp.png'/>
                            </div>
                            <div style={espacio}>
                                <Imagenes id='botonAbrirVideo' style={styleImages} onClick={(event) => mostrar(event, 'video')} link='https://res.cloudinary.com/dplncudbq/image/upload/v1693680649/video_u9gl6j.png'/>
                            </div>
                            <div style={espacio}>
                                <Imagenes id='botonAbrirImagenes' style={styleImages} onClick={(event) => mostrar(event, 'imagen')} link='https://res.cloudinary.com/dplncudbq/image/upload/v1693680649/imagen_fmzeqo.png'/>
                            </div>
                        </div>
                    </div>
                )} 
                {estadoModal === 'video' && (
                    <video id='videoModal' className="videoModal " src="" controls muted></video>
                )}
                {estadoModal === 'imagen' && (
                    <div id='contenidoModal' className={`color1 contenidoModal colorLetra1`} ></div>
                )}
            </div>
            )}
        </div>
    );
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function imagen(){
    const contenidoModal = document.getElementById('contenidoModal')
    contenidoModal.addEventListener("click", () => {
        contenidoModal.requestFullscreen();
    });
    //document.getElementById('modal').style.zIndex = '10001';
    
    contenidoModal.innerHTML = `<img id='imagenesDinamicas' class=''  style='height: 100vh; width: 100vw; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);'  srcset='${linksImagenes[conteoImagenes]}'>`
    contenidoModal.classList.add('aperecerSuevemente')
    await sleep(2000);
    contenidoModal.classList.remove('aperecerSuevemente')
    await sleep(3000);
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


