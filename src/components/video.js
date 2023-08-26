"use client"

import Menu from './MenuLateral'
import EditoresReproductor from './EditoresReproductor';
import { ToastContainer } from 'react-toastify';
import { ElementoAudio } from './ElementoAudio';
import { MenuSuperior } from '../components/MenuSuperior';
import  Modal  from '../components/Modal';
import 'react-toastify/dist/ReactToastify.css';

export function Video(){
    // Verificamos si el navegador admite la propiedad 'screen.orientation' y el método 'lock'
if (screen.orientation && screen.orientation.lock) {
    // Intentamos bloquear la orientación en landscape
    screen.orientation.lock('landscape')
      .then(function() {
        console.log('La orientación se ha bloqueado en landscape');
      })
      .catch(function(error) {
        console.error('Error al intentar bloquear la orientación:', error);
      });
  } else {
    console.warn('La API de orientación no es compatible en este navegador.');
  }
    return(
        <div>
            <Modal/>
            <MenuSuperior />
            <ToastContainer />
            <div style={{display: 'flex'}}>
                <Menu />
                <ElementoAudio/>
            </div>
            <div> 
                <EditoresReproductor/>
            </div>
        </div>
    )
}




