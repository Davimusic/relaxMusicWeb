import React, { useState } from "react";
import Imagenes from "./Img";
import { accionesModal } from "@/funciones/AccionesModal";
import '../estilos/modal.css'

const Modal = ({}) => {

    return (
        <div id='modal' className="modalPadre">
            <header style={{display: 'flex'}}> 
                <Imagenes className='botonCerrar'   
                    link='https://res.cloudinary.com/dplncudbq/image/upload/v1692415538/mias/x_dzlrbc.png'
                    onClick={() =>accionesModal().cerrarModal()}
                /> 
                <Imagenes id='botonAbrirVideo'
                    className='botonVideos'
                    link="https://res.cloudinary.com/dplncudbq/image/upload/v1692415538/mias/x_dzlrbc.png"
                    onClick={(event) =>accionesModal().abrirModal(event, '')}/>
            </header>
            <video id='videoModal' className="videoModal"  src="" controls muted></video>  
            <div id='contenidoModal' className="color1 contenidoModal colorLetra1 centrar"></div>   
        </div>
    );
};

export default Modal;
