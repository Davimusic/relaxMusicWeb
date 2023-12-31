export function menuCelular(acc){
    const displayMenu = document.querySelectorAll('.displayMenu')
    if(acc === 'mostrar'){
        displayMenu.forEach(function(elemento) {
            elemento.style.height = '83vh'; 
            if(window.innerWidth > 800){
                elemento.style.width = '40vw'; 
            } else {
                elemento.style.width = '100vw'; 
            }
            elemento.style.opacity = '1'; 
            elemento.style.visibility = 'visible'
        });
        const hijos = document.querySelectorAll(".displayMenu > *");
        hijos.forEach((hijo) => {
            hijo.style.display = "block";
        });
    } else {
        
        displayMenu.forEach(function(elemento) {
            elemento.style.height = '0vh'; 
            elemento.style.width = '0vw'; 
            elemento.style.opacity = '0'; 
            elemento.style.visibility = 'visible'
        });
        const hijos = document.querySelectorAll(".displayMenu > *");
        hijos.forEach((hijo) => {
            hijo.style.display = "none";
        });
    }
    const container = document.querySelectorAll(".container");
    container.forEach((hijo) => {
        hijo.style.border = "none";
    });
}