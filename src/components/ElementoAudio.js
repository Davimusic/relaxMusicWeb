import React, { useState } from "react";
import { arrePadre } from '../funciones/RetornarInfoAudios';
import { usarAudio } from '../funciones/UsarAudio';
import Imagenes from './Img';
import { accionesModal } from "@/funciones/AccionesModal";


export function ElementoAudio() {
    const styleImages = { height: '5vh', width: '5vh', marginRight: '10px' }
    const arreAudiosPadre = arrePadre()
    const [meGustas, setMeGustas] = useState(Array(arreAudiosPadre.length).fill(false));

    const accionMeGusta = (event, index) => {
        event.stopPropagation()
        const newMeGustas = [...meGustas];
        newMeGustas[index] = !newMeGustas[index];
        setMeGustas(newMeGustas);
        arreAudiosPadre[index][`meGusta`] = newMeGustas[index]
        //console.log(JSON.stringify(arreAudiosPadre[index][`meGusta`]));
    };

    return (
        <div id='contenedorAudios' style={{ width: "100%", height: '83vh', overflow: 'auto', scrollBehavior: 'smooth'}} className='scrollVertical color1 colorLetra1'>
            {arreAudiosPadre.map((item, index) => (
                <div id={`secAudio${index}`} onClick={() => usarAudio(index, index)} key={index} style={{ width: "100%", height: '10vh', borderRadius: '0.5em', padding: '15px', marginBottom: '2vh', display: "flex" }} className='efectoFondoTransparente'>
                    <Imagenes link={item.imagenAudio} style={styleImages} className={'efectoGirar'} onClick={(event) => accionesModal().abrirModal(event, item)}/>
                    <div style={{ marginLeft: '20px', height: '9vh', width: '90vw', display: 'flex' }} className='scrollVertical'>
                        <h3>{item.titulo}</h3>
                        <h4>{item.contenido}</h4>
                    </div>
                    <Imagenes id={`corazon${index}`} style={styleImages} onClick={(event) => accionMeGusta(event, index)} link={meGustas[index] ? 'https://res.cloudinary.com/dplncudbq/image/upload/v1692753447/mias/cora_l5a4yp.png' : 'https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/corazon_ccetxa.png'} />
                </div>
            ))}
        </div>
    );
}

export default ElementoAudio;







/*import { arrePadre } from '../funciones/RetornarInfoAudios';

import { usarAudio } from '../funciones/UsarAudio';
import Imagenes from './Img';

export function ElementoAudio(){
    const styleImages = {height: '5vh', width: '5vh'}
    const arreAudiosPadre = arrePadre()

    return(
            <div id='contenedorAudios' style={{ width: "100%", height: '83vh', overflow: 'auto', scrollBehavior: 'smooth'}} className='scrollVertical color1 colorLetra1' >
                {arreAudiosPadre.map((item, index) => (
                    <div id={`secAudio${index}`} onClick={() => usarAudio(index, index)} key={index} style={{ width: "100%", height: '10vh', borderRadius: '0.5em', padding: '15px', marginBottom: '2vh', display: "flex"}} className='efectoFondoTransparente'>
                        
                            <Imagenes link={item.imagenAudio} style={styleImages} className={'efectoGirar'}/>
                            <div style={{ marginLeft: '20px', height: '9vh', width: '90vw', display: 'flex' }} className='scrollVertical'>
                                <h3>{item.titulo}</h3>
                                <h4>{item.contenido}</h4>
                            </div>
                            <Imagenes  onClick={() => accionMeGusta(index)}   id={`corazon${index}`}  className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/corazon_ccetxa.png' />  
                        
                    </div>
                ))}
            </div>
        );
}*/