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
    const styleImages = {marginLeft: '20px', height: '6vh', width: '6vh'}   

    return (
        <div style={{background: 'white', borderTop: '1px solid', borderColor: 'rgb(0, 0, 0)', width: '100vw', position: 'fixed', bottom: '0', zIndex: '9999'}}>
            <div style={{display: 'flex'}} className='espacioEquilatero'>
                    <RangeInput id='rangeTime'/>
            </div> 
            <div style={{display: "flex", height: 'min-content', margin: '1vh', flexWrap: 'wrap'}} className='espacioEquilatero'>
                <Imagenes  onClick={() => usarAudio('atras', 2)}     id='botonRepro2'  className={'seleccionable'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1676133407/mias/atras_lfyntg.png' />
                <Imagenes  onClick={() => usarAudio('play', 1)}      id='botonRepro1'  className={'seleccionable'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1656171086/mias/play_qqpavo.png' />
                <Imagenes  onClick={() => usarAudio('adelante', 0)}  id='botonRepro0'  className={'seleccionable'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1676133410/mias/adelante_ztqvpx.png' />
                <Imagenes  onClick={() => usarAudio('tipoUso', 3)}   id='botonRepro3'  className={'seleccionable'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1693363915/flecha_cjzjxx.png' />
                <audio id='audioRep' preload = "metadata" controls   style={{display: 'none'}}>
                    Your browser does not support the <code>audio</code> element.
                </audio>           
            </div> 
            <div style={{display: 'flex'}} className='espacioEquilatero'>
                    <RangeVolumen id='volumenAudio'/> 
            </div>    
        </div>
    );
};

export default editoresReproductor;
