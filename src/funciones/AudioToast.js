import { toast } from 'react-toastify';

export function audioToast(mensaje) {
    toast(mensaje,{
        theme: 'light', 
        autoClose: 2000
    })
}