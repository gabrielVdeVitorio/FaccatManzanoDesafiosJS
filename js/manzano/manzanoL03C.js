/*
c) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
1 até 500.
*/

import createParagraph from "../functions/createParagraph.js";

const divParagraphs = document.getElementById('manzanoL03C__div--paragraphs');
divParagraphs.innerHTML = '';
let soma = 0;
let i = 0;
while (i < 500)
{
  i += 2;
  soma += i;
}
createParagraph(divParagraphs, `A soma dos números pares de 1 a 500 é igual a ${soma}`);