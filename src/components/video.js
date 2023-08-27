"use client"

import Menu from './MenuLateral'
import EditoresReproductor from './EditoresReproductor';
import { ToastContainer } from 'react-toastify';
import { ElementoAudio } from './ElementoAudio';
import { MenuSuperior } from '../components/MenuSuperior';
import  Modal  from '../components/Modal';
import 'react-toastify/dist/ReactToastify.css';

export function Video(){
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




