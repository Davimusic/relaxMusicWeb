"use client"

import Imagenes from "./Img";
import {usarAudio} from '../funciones/UsarAudio'
import '../estilos/rangeReproductor.css'
import RangeInput from './InputRange'
import { accionesModal } from "@/funciones/AccionesModal";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { audioToast } from "@/funciones/AudioToast";
import RangeVolumen from "./RangeVolumen";

const editoresReproductor = ({id}) => {
    const [meGustasColeccion, setMeGustasColeccion] = useState(false);

    const accionMeGustaColeccion = () => {
        if(meGustasColeccion === true){
            setMeGustasColeccion(false)
        } else {
            setMeGustasColeccion(true)
        }
    };

    useEffect(() => {
        //audioToast(`me gusta la coleccion: ${meGustasColeccion}`)
    }, [meGustasColeccion]);

    const styleImages = {height: '6vh', width: '6vh'}   
    return (
        <div style={{background: 'white', borderTop: '1px solid', borderColor: 'rgb(0, 0, 0)', width: '100vw', position: 'fixed', bottom: '0', zIndex: '998'}}>
            <div style={{display: "flex", height: 'min-content', margin: '0.5vh', flexWrap: 'wrap'}} className='espacioEquilatero'>
                <Imagenes id={`corazonColeccion`} style={styleImages} onClick={(event) => accionMeGustaColeccion()} link={meGustasColeccion ? 'https://res.cloudinary.com/dplncudbq/image/upload/v1692753447/mias/cora_l5a4yp.png' : 'https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/corazon_ccetxa.png'} />
                <Imagenes  onClick={() => usarAudio('atras', 2)}     id='botonRepro2'  className={'seleccionable'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1676133407/mias/atras_lfyntg.png' />
                <Imagenes  onClick={() => usarAudio('play', 1)}      id='botonRepro1'  className={'seleccionable'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/play_qqpavo.png' />
                <Imagenes  onClick={() => usarAudio('adelante', 0)}  id='botonRepro0'  className={'seleccionable'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1676133410/mias/adelante_ztqvpx.png' />
                <Imagenes  onClick={() => usarAudio('tipoUso', 3)}   id='botonRepro3'  className={'seleccionable'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1693363915/flecha_cjzjxx.png' />
                <audio id='audioRep' preload = "metadata" controls   style={{display: 'none'}}>
                    Your browser does not support the <code>audio</code> element.
                </audio>           
            </div> 
            <div style={{display: 'flex', paddingTop: '1.5vh'}} className='espacioEquilatero'>
                <h4 id='tiempoAudio' style={{color: 'black', width: '80px', textAlign: 'center'}}>00:00</h4>
                <RangeInput id='rangeTime'/>
                <h4 id='totalDuracionAudio' style={{color: 'black', width: '80px', textAlign: 'center'}}>00:00</h4>
            </div> 
            <div style={{display: 'none'}} className='espacioEquilatero'>
                    <RangeVolumen id='volumenAudio'/> 
            </div>    
        </div>
    );
};

export default editoresReproductor;
