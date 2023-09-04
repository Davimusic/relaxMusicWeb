"use client"

import '../estilos/menu.css'
import Imagenes from "./Img";
import { menuCelular } from '@/funciones/MenuCelular'
import { accionesModal } from "@/funciones/AccionesModal";
import React, { useState, useEffect } from "react";
import { audioToast } from '@/funciones/AudioToast';

export function MenuSuperior(){
    const [meGustasColeccion, setMeGustasColeccion] = useState([]);

    const accionMeGustaColeccion = () => {
        if(meGustasColeccion === true){
            setMeGustasColeccion(false)
        } else {
            setMeGustasColeccion(true)
        }
    };

    useEffect(() => {
        setMeGustasColeccion(meGustasColeccion);
        audioToast(`me gusta la coleccion: ${meGustasColeccion}`)
    }, [meGustasColeccion]);

    const styleImages = {marginLeft: '20px', height: '6vh', width: '6vh'}   
    return(
        <div id='menuSuperior' className='menuSuperior'>
            {/*<Imagenes style={{height: 'fit-content'}} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692559936/mias/icon_efg3sf.png'/>*/}
            
            <Imagenes  onClick={(event) => accionesModal().abrirModal(event, 'subir')}   id='botonRepro4'  className={'seleccionable'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1693583167/subir_pinj91.png' />
            <Imagenes id={`corazonColeccion`} style={styleImages} onClick={(event) => accionMeGustaColeccion()} link={meGustasColeccion ? 'https://res.cloudinary.com/dplncudbq/image/upload/v1692753447/mias/cora_l5a4yp.png' : 'https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/corazon_ccetxa.png'} />
            <h4 id='tiempoAudio' style={{color: 'black', width: '9vw', paddingTop: '1vh'}}>00:00 min</h4>
    
            <Imagenes onClick={() => menuCelular('mostrar')} className="menuCelular" link='https://res.cloudinary.com/dplncudbq/image/upload/v1692414994/mias/menu_quakfw.png'/>
        </div>
    )
}


