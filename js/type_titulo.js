const texts = [
    "¡Hola Mundo!",
    "Bienvenid@s",
    "Yo soy Marco"
]; // Textos que se alternarán
const speed = 100; // Velocidad de escritura (en milisegundos)
const pauseBetweenTexts = 2000; // Pausa entre textos (en milisegundos)
let index = 0;
let charIndex = 0;
const titleElement = document.getElementById('animated-title');

function typeWriter() {
    if (charIndex < texts[index].length) {
        // Escribe el texto caracter por caracter
        titleElement.innerHTML += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        // Espera un momento y luego borra el texto
        setTimeout(eraseText, pauseBetweenTexts);
    }
}

function eraseText() {
    if (charIndex > 0) {
        // Borra el texto caracter por caracter
        titleElement.innerHTML = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, speed / 2);
    } else {
        // Cambia al siguiente texto
        index = (index + 1) % texts.length;
        setTimeout(typeWriter, speed);
    }
}

// Inicia la animación
typeWriter();

