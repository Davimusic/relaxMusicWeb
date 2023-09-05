import React, { useState, useEffect } from "react";
import Imagenes from "./Img";
import { accionesModal } from "@/funciones/AccionesModal";
import '../estilos/modal.css'
import { variablesGlobales } from "@/funciones/VariablesGlobales";
import { arrePadre } from "@/funciones/RetornarInfoAudios";

const Modal = ({}) => {
    
    return (
        <div id='modal' className="modalPadre">
            {/*<Imagenes
                id='bo'
                className={'fondoImagen'}
                link={lin}
            */}
            <header style={{ display: 'flex' }}>
                <Imagenes className='botonCerrar'
                    link='https://res.cloudinary.com/dplncudbq/image/upload/v1692415538/mias/x_dzlrbc.png'
                    onClick={() => accionesModal().cerrarModal()}
                />
            </header>
            <video id='videoModal' className="videoModal" src="" controls muted></video>
            <div id='contenidoModal' className="color1 contenidoModal colorLetra1"></div>
        </div>
    );
};

export default Modal;

