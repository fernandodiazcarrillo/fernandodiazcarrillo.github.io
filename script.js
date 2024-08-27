const texts = ["Desarrollador Full Stack", "Desarrollador en Inteligencia Artificial", "Desarrollador Android"];
let textIndex = 0;
let charIndex = 0;
const textContainer = document.querySelector('.vertical-bar');

function type() {
    if (charIndex < texts[textIndex].length) {
        textContainer.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Velocidad de escritura
    } else {
        setTimeout(erase, 2000); // Pausa antes de borrar el texto
    }
}

function erase() {
    if (charIndex > 0) {
        textContainer.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Velocidad de borrado
    } else {
        textIndex = (textIndex + 1) % texts.length; // Cambia al siguiente texto
        setTimeout(type, 500); // Pausa antes de empezar a escribir el siguiente texto
    }
}

type(); // Inicia la animación