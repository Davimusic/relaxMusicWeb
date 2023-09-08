let coor = 0;
let reproducir = 'no';
let intervaloSubir;
let estado = 'audioActual';
let modoPantalla = 'oscuro'; 
let usoModal = '';
let duracionesAudios = [] 
let filtrarDB = {'tags': 'estudiar'}

export function variablesGlobales() {

    function getCoor() {
        return coor;
    }

    function setCoor(newCoor) {
        coor = newCoor;
    }

    function getReproducir() {
        return reproducir;
    }

    function setReproducir(newReproducir) {
        reproducir = newReproducir;
    }

    function getIntervaloSubir() {
        return intervaloSubir;
    }

    function setIntervaloSubir(newIntervaloSubir) {
        intervaloSubir = newIntervaloSubir;
    }

    function getEstado() {
        return estado;
    }

    function setEstado(newEstado) {
        estado = newEstado;
    }

    function getModoPantalla() {
        return modoPantalla;
    }

    function setModoPantalla(newModoPantalla) {
        modoPantalla = newModoPantalla;
    }

    function getUsoModal() {
        return usoModal;
    }

    function setUsoModal(newEstado) {
        usoModal = newEstado;
    }

    function getDuracionesAudios() {
        return duracionesAudios;
    }

    function setDuracionesAudios(newArray) {
        duracionesAudios = newArray;
    }

    function getFiltrarDB() {
        return filtrarDB;
    }

    function setFiltrarDB(newValue) {
        filtrarDB = newValue;
    }

    
    return {
        getCoor,
        setCoor,
        getReproducir,
        setReproducir,
        getIntervaloSubir,
        setIntervaloSubir,
        getEstado,
        setEstado,
        getModoPantalla,
        setModoPantalla, 
        getUsoModal, 
        setUsoModal,
        getDuracionesAudios,
        setDuracionesAudios,
        getFiltrarDB, 
        setFiltrarDB
    };
}


