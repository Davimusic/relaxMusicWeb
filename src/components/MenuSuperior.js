"use client"

import '../estilos/menu.css'
import Imagenes from "./Img";
import { menuCelular } from '@/funciones/MenuCelular'
import React, { useState, useEffect } from "react";
import { audioToast } from '@/funciones/AudioToast';

export function MenuSuperior(){
    const styleImages = {marginLeft: '20px', height: '6vh', width: '6vh'}   
    return(
        <div id='menuSuperior' className='menuSuperior'>
            <Imagenes style={{height: 'fit-content'}} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692559936/mias/icon_efg3sf.png'/>
            <Imagenes onClick={() => menuCelular('mostrar')} className="menuCelular" link='https://res.cloudinary.com/dplncudbq/image/upload/v1692414994/mias/menu_quakfw.png'/>
        </div>
    )
}


