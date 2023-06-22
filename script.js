const button = document.getElementById("up-nav");
let fontSizeChanged = false;

button.addEventListener('click', () => {
    if (fontSizeChanged) {
        button.style.fontSize = '16px'; // Restablece el tamaño de fuente original
    } else {
        button.style.fontSize = '20px'; // Cambia el tamaño de fuente a 20px
    }
    
    fontSizeChanged = !fontSizeChanged; // Cambia el estado de la variable
    
    console.log("Esto funciona");
});
console.log("Esto funciona");