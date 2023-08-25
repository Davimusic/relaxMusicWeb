/*export function Modal(){
    return(
        <div style={{height: '50vh', background: 'blue', diplay}}>
            
        </div>
    )
} */

import React, { useState } from "react";
import Imagenes from "./Img";
import { accionesModal } from "@/funciones/AccionesModal";

const Modal = ({}) => {

    return (
        <div id='modal' 
            style={{
                    height: '0vh',
                    width: '0vh', 
                    backdropFilter: 'blur(5px)',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex:'9999', 
                    opacity: '0',
                    visibility: 'invisible', 
                    }}>
            <header style={{display: 'flex', paddingBottom: '5vh'}}> 
                <Imagenes 
                    style={{height: '5vh',
                            width: '5vh', position: 'fixed', top: '10vh', left: '10vh', transform: 'translate(-50%, -50%)', zIndex:'99999'
                            }}  
                    link='https://res.cloudinary.com/dplncudbq/image/upload/v1692415538/mias/x_dzlrbc.png'
                    onClick={() =>accionesModal().cerrarModal()}/>   
            </header>
            
                
            <video id='videoModal' className="videoModal"  style = {{width: '100%', height: '100%', objectFit: 'contain', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex:'999' }}   src="" controls muted></video>     
        </div>
    );
};

export default Modal;