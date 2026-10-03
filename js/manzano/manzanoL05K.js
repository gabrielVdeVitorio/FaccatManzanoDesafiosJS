/*
k) Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
situados na faixa numérica de 1 a 10.
*/

import createParagraph from "../functions/createParagraph.js";

const divParagraphs = document.getElementById('manzanoL05K__div--paragraphs');
divParagraphs.replaceChildren();

for (let i = 1; i < 10; i += 2)
{
  let fatorial = i;
  for (let j = 1; j < i; j++)
  {
    fatorial *= i-j;
  }
  createParagraph(divParagraphs, 'Fatorial de ' + i + ': ' + fatorial);
}