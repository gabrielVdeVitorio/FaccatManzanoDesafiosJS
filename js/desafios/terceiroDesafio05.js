// Exercise 07
import createParagraph from "../createParagraph.js";
let numero = -1, fatorial = 1, i = 0;
const divParagraphs = document.getElementById('terceiroDesafio05--paragraphs');
divParagraphs.innerHTML = "";

alert('Calcule o fatorial de um número');
while(numero >> 31 === 1)
{
    numero = Number.parseInt(prompt('Digite um número inteiro não negativo')) || -1;
}
while(i < numero-1)
{
    fatorial = fatorial * (numero-i);
    i++;
}

createParagraph(divParagraphs, `O fatorial de ${numero} é ${fatorial}.`);