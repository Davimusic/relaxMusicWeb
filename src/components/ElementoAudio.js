import { arrePadre } from '../funciones/RetornarInfoAudios';
import { usarAudio } from '../funciones/UsarAudio';
import Imagenes from './Img';
import { accionesModal } from "@/funciones/AccionesModal";
import React, { useState, useEffect } from "react";
import { handleFetchDocuments } from "@/funciones/LlamarObjetosBaseDeDatos";

export function ElementoAudio() {
    const [arreAudiosPadre, setArreAudiosPadre] = useState([]);
    const [meGustas, setMeGustas] = useState([]);

    useEffect(() => {
        // Aquí realizas la llamada para obtener los documentos desde la base de datos
        const fetchDocuments = async () => {
            try {
                const documents = await handleFetchDocuments();
                //console.log(documents);
                setArreAudiosPadre(documents);
                arrePadre().setArrePadre(documents)
                setMeGustas(Array(documents.map(document => document.meGusta)));
            } catch (error) {
                console.error('Error al obtener documentos:', error);
            }
        };
        fetchDocuments();
    }, []);

    const accionMeGusta = (event, index) => {
        event.stopPropagation()
        let arrePaso = [...arreAudiosPadre]; 
        let paso = arrePaso[index]['meGusta'];
        paso = !paso;
        arrePaso[index]['meGusta'] = paso;
        setArreAudiosPadre(arrePaso);
    };

    useEffect(() => {
        setMeGustas(arreAudiosPadre.map(document => document.meGusta));
    }, [arreAudiosPadre]);

    return (
        <div id='contenedorAudios' style={{ width: "100%", height: '83vh', paddingBottom: '7vh', overflow: 'auto', scrollBehavior: 'smooth'}} className='scrollVertical color1 colorLetra1'>
            {arreAudiosPadre.map((item, index) => (
                <div id={`secAudio${index}`} onClick={() => usarAudio(index, index)} key={index} style={{ width: "100%", height: '10vh', borderRadius: '0.5em', padding: '0.5vh', marginBottom: '2vh', display: "flex" }} className='efectoFondoTransparente'>
                    <Imagenes link={item.imagenAudio} style={{height: '9vh', width: '9vh', marginRight: '10px'}} className={'efectoGirar'} onClick={(event) => accionesModal().abrirModal(event, item)}/>
                    <div style={{ marginLeft: '20px', height: '9vh', width: '90vw', display: 'flex' }} className='scrollVertical'>
                        <h3>{item.titulo}</h3>
                        <h4>{item.contenido}</h4>
                    </div>
                    <Imagenes id={`corazon${index}`} style={{height: '5vh', width: '5vh', marginRight: '10px', marginTop: '10px'}} onClick={(event) => accionMeGusta(event, index)} link={meGustas[index] ? 'https://res.cloudinary.com/dplncudbq/image/upload/v1692753447/mias/cora_l5a4yp.png' : 'https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/corazon_ccetxa.png'} />
                </div>
            ))}
        </div>
    );
}

export default ElementoAudio;

