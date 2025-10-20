/* assets/js/script.js */

// Código aleatorio estilo Matrix
const codeRain = document.getElementById('codeRain');
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>!@#$%^&*()';
let codeContent = '';

for(let i = 0; i < 100; i++) {
    codeContent += letters.charAt(Math.floor(Math.random() * letters.length)) + ' ';
}

function updateCode() {
    let newLine = '';
    for(let i = 0; i < 100; i++) {
        newLine += letters.charAt(Math.floor(Math.random() * letters.length)) + ' ';
    }
    codeContent = codeContent.split('\n').slice(1).join('\n') + '\n' + newLine;
    codeRain.textContent = codeContent;
}

setInterval(updateCode, 100);

