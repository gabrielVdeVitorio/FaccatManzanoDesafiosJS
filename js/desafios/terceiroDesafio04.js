// Execise 06
import createParagraph from "../functions/createParagraph.js";

let impares, pares, i = 1;
impares = pares = 0;

const divParagraphs = document.getElementById('terceiroDesafio04__div--paragraphs');

const incrementarImparOuPar =
{
    0: () => pares++,
    1: () => impares++
}

while (i < 101)
{
    incrementarImparOuPar[i % 2]();
    i++;
}

createParagraph(divParagraphs, `A quantidade de números pares é ${pares}`);
createParagraph(divParagraphs, `A quantidade de números ímpares é ${impares}`);