import { arrePadre } from '../funciones/RetornarInfoAudios';
import { usarAudio } from '../funciones/UsarAudio';
import Imagenes from './Img';

export function ElementoAudio(){
    const styleImages = {height: '5vh', width: '5vh'}
    const arreAudiosPadre = arrePadre()

    return(
            <div id='contenedorAudios' style={{ width: "100%", height: '83vh'}} className='scrollVertical color1 colorLetra1' >
                {arreAudiosPadre.map((item, index) => (
                    <div id={`secAudio${index}`} onClick={() => usarAudio(index, index)} key={index} style={{ width: "100%", height: '10vh', borderRadius: '0.5em', marginBottom:'10px', padding: '10px' }} className='efectoFondoTransparente'>
                        <div style={{display: "flex"}}>
                            <Imagenes link={item.imagenAudio} style={styleImages} className={'efectoGirar'}/>
                            <div style={{ marginLeft: '20px', height: '10.5vh', width: '90vw', display: 'flex' }} className='scrollVertical'>
                                <h3>{item.titulo}</h3>
                                <h4>{item.contenido}</h4>
                            </div>
                            <Imagenes  onClick={() => alert('corazon')}   id={`corazon${index}`}  className={'efectoFondoColor'} style={styleImages} link='https://res.cloudinary.com/dplncudbq/image/upload/v1692318586/mias/corazon_ccetxa.png' />
                        </div>
                    </div>
                ))}
            </div>
        );
}