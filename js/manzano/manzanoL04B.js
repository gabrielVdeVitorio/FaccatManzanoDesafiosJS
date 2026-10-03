/*
b) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
1 até 500.
*/

import createParagraph from "../functions/createParagraph.js";
const divParagraphs = document.getElementById('manzanoL04B__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
let i = 2;
let soma = 0;
while (i < 500)
{
  soma += i;
  i += 2;
}
resultParagraph.textContent = `O somatório dos valores pares de 1 a 500 é: ${soma}`;