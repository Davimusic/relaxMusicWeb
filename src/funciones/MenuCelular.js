export function menuCelular(acc){
    let contenedorMenu = document.querySelectorAll('.displayMenu')
    if(acc === 'mostrar'){
        contenedorMenu.forEach(function(elemento) {
            elemento.style.height = '100vh'; 
            elemento.style.width = '100vw';  
        });
    } else {
        contenedorMenu.forEach(function(elemento) {
            elemento.style.height = '0vh'; 
            elemento.style.width = '0vw';  
        });
    }
    
}