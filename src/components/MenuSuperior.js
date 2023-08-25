"use client"

import '../estilos/menu.css'
import Imagenes from "./Img";
import { menuCelular } from '@/funciones/MenuCelular'
import { accionesModal } from "@/funciones/AccionesModal";

export function MenuSuperior(){
    return(
        <div id='menuSuperior' className='menuSuperior'>
            <Imagenes style={{height: 'fit-content'}} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692559936/mias/icon_efg3sf.png'/>
            <Imagenes id={`opciones`} style={{height: 'fit-content'}} onClick={(event) => accionesModal().abrirModal(event, '')} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692979344/mias/opcione_kqa0uz.png'/>
            <Imagenes onClick={() => menuCelular('mostrar')} className="menuCelular" link='https://res.cloudinary.com/dplncudbq/image/upload/v1692414994/mias/menu_quakfw.png'/>
        </div>
    )
}


