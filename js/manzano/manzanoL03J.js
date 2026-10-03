/*
Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores
pares situados na faixa numérica de 50 a 70.
*/

import createParagraph from "../functions/createParagraph.js";

const divParagraphs = document.getElementById('manzanoL03J__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');

const updateValues = () =>
{
  let soma = 0;
  let i = 50;
  while (i < 71)
  {
    soma += i;
    i += 2;
  }
  const media = soma / 10;
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `Soma: ${soma}, Média: ${media}`;
}
updateValues();