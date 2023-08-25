import React, { useState } from "react";
import Imagenes from "./Img";
import { accionesModal } from "@/funciones/AccionesModal";

const Modal = ({}) => {

    return (
        <div id='modal' 
            style={{
                    height: '0vh',
                    width: '0vh', 
                    background: 'black',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex:'9999', 
                    opacity: '0',
                    visibility: 'hidden', 
                    }}>
            <header style={{display: 'flex'}}> 
                <Imagenes 
                    style={{height: '5vh', width: '5vh', position: 'fixed', top: '10vh', left: '10vh', transform: 'translate(-50%, -50%)', zIndex:'99999', background: 'white'}}  
                    link='https://res.cloudinary.com/dplncudbq/image/upload/v1692415538/mias/x_dzlrbc.png'
                    onClick={() =>accionesModal().cerrarModal()}/>   
            </header>
            <video id='videoModal' className="videoModal"  style = {{width: '100%', height: '100%', objectFit: 'contain', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex:'999' }}   src="" controls muted></video>  
            <div id='contenidoModal' className="color1 colorLetra1" style={{padding: '5vw', width: '100vw', height: '100vh', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center'}}></div>   
        </div>
    );
};

export default Modal;