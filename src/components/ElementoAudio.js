import { arrePadre } from '../funciones/RetornarInfoAudios';
import { usarAudio } from '../funciones/UsarAudio';
import Imagenes from './Img';
import React, { useState, useEffect } from "react";
import { audioToast } from '@/funciones/AudioToast';
import { handleFetchDocuments } from "@/funciones/LlamarObjetosBaseDeDatos";
import { variablesGlobales } from '@/funciones/VariablesGlobales';
import { segundosAFormatoHoras } from '@/funciones/SegundosAFormatoHoras';
import { introDB } from '@/funciones/introDB';
import Select from './Select';
import '../estilos/select.css'

export function ElementoAudio() {
    const [arreAudiosPadre, setArreAudiosPadre] = useState([]);
    const [meGustas, setMeGustas] = useState([]);
    const [audioDuracion, setAudioDuracion] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [etiquetas, setEtiquetas] = useState([])

    function buscarInformacionDB(event){
            event.stopPropagation()
            console.log('entra');
            console.log(variablesGlobales().getFiltrarDB());
            setDataLoaded(false)
            // Aquí realizas la llamada para obtener los documentos desde la base de datos
            const fetchDocuments = async () => {
                try {
                    const documents = await handleFetchDocuments();
                    console.log(documents);
                    setArreAudiosPadre(documents);
                    arrePadre().setArrePadre(documents)
                    setMeGustas(Array(documents.map(document => document.meGusta)));
                    setDataLoaded(true)
                    obtenerDuraciones(documents)
                    //console.log(dataLoaded);
                } catch (error) {
                    console.error('Error al obtener documentos:', error);
                }
            };
            fetchDocuments();
    }

    useEffect(() => {
        // Aquí realizas la llamada para obtener los documentos desde la base de datos
        const fetchDocuments = async () => {
            try {
                const documents = await handleFetchDocuments();
                //console.log(documents);
                setArreAudiosPadre(documents);
                arrePadre().setArrePadre(documents)
                setMeGustas(Array(documents.map(document => document.meGusta)));
                setDataLoaded(true)
                obtenerDuraciones(documents)
                const etiquetasUnicas = [...new Set(documents.flatMap(doc => doc.tags))];
                setEtiquetas(etiquetasUnicas)
                //console.log(dataLoaded);
            } catch (error) {
                console.error('Error al obtener documentos:', error);
            }
        };
        fetchDocuments();
    }, []);
    


    async function obtenerDuraciones(documents) {
        let arre = [];
        for (let u = 0; u < documents.length; u++) {
            const audio = new Audio(documents[u].linkAudio);
            const metadataLoaded = new Promise((resolve) => {
                audio.onloadedmetadata = () => resolve();
            });
            await metadataLoaded;  
            //arre.push((audio.duration / 60).toFixed(1));
            arre.push(segundosAFormatoHoras(audio.duration));
        }
        setAudioDuracion(arre)
        //console.log(arre);        
    }

    const accionMeGusta = (event, index) => {
        event.stopPropagation()
        let arrePaso = [...arreAudiosPadre]; 
        //console.log(arrePaso);
        let paso = arrePaso[index]['meGusta'];
        paso = !paso;
        arrePaso[index]['meGusta'] = paso;
        setArreAudiosPadre(arrePaso);
        audioToast(`Actualizado estado me gusta a audio: ${arrePaso[index]['titulo']}`)
    };

    async function mi(value){
        variablesGlobales().setFiltrarDB({'tags': value})
        setDataLoaded(false)
        const arre = await introDB()
        setArreAudiosPadre(arre);
        arrePadre().setArrePadre(arre)
        setMeGustas(Array(arre.map(arr => arre.meGusta)));
        setDataLoaded(true)
        obtenerDuraciones(arre)
    }

    useEffect(() => {
        setMeGustas(arreAudiosPadre.map(document => document.meGusta));
    }, [arreAudiosPadre]);

    
    useEffect(() => {
        //console.log(dataLoaded);
    }, [dataLoaded]);

    

    useEffect(() => {
        setAudioDuracion(audioDuracion);
        variablesGlobales().setDuracionesAudios(audioDuracion)
    }, [audioDuracion]);

    

    return (
        <div id='contenedorAudios' style={{ width: "100%", height: '83vh', paddingBottom: '7vh', overflow: 'auto', scrollBehavior: 'smooth'}} className='scrollVertical color1 colorLetra1'>
            <Select value={variablesGlobales().getFiltrarDB()['tags']} className={'aperecerSuevemente selectFiltro color1'} arre={etiquetas} onChange={(event) => mi(event.target.value)}/>
            {!dataLoaded ? (
                <div className="loading-container aperecerSuevemente color1">
                <div className="loading"></div>
                </div>
            ) : (
                arreAudiosPadre.map((item, index) => (
                    <div id={`secAudio${index}`} onClick={() => usarAudio(index, index)} key={index} style={{ width: "100%", height: '10vh', borderRadius: '0.5em', padding: '0.5vh', marginBottom: '2vh', display: "flex" }} className={`efectoFondoTransparente  ${dataLoaded ? 'aperecerSuevemente' : ''}`} >
                        <Imagenes link={item.imagenAudio} style={{height: '9vh', width: '9vh', marginRight: '10px'}} className={'efectoGirar'} />
                        <div style={{ marginLeft: '20px', height: '9vh', width: '90vw', display: 'flex' }} className='scrollVertical'>
                        <div>
                            <h3>{item.titulo}</h3>
                            <h4>{item.contenido}</h4>
                        </div>
                        <h5 style={{marginLeft: '5vh'}}>{audioDuracion[index]} min.</h5>
                        </div>
                        <Imagenes id={`corazon${index}`} style={{height: '5vh', width: '5vh', marginRight: '10px', marginTop: '10px'}} onClick={(event) => accionMeGusta(event, index)} link={meGustas[index] ? 'https://res.cloudinary.com/dplncudbq/image/upload/v1692753447/mias/cora_l5a4yp.png' : 'https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/corazon_ccetxa.png'} />
                        <button onClick={(event) => buscarInformacionDB(event)}> click</button>
                    </div>
                ))
            )}
        </div>
        );
}

export default ElementoAudio;

