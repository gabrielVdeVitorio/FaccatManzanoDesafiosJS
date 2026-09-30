/*
l) Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à
soma dos quadrados dos três valores lidos.
*/

import createParagraph from "../functions/createParagraph.js";

const valoresInput =
[
  document.getElementById('manzanoL01L__input--valor01'),
  document.getElementById('manzanoL01L__input--valor02'),
  document.getElementById('manzanoL01L__input--valor03'),
];
const divParagraphs = document.getElementById('manzanoL01L__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui será escrita a quantidade de dólares correspondentes aos seus reais';
const updateValues = () =>
{
  const valores =
  [
    Number.parseFloat(valoresInput[0].value),
    Number.parseFloat(valoresInput[1].value),
    Number.parseFloat(valoresInput[2].value),
  ];
  const somaDosQuadrados = Math.pow(valores[0], 2) + Math.pow(valores[1], 2) + Math.pow(valores[2], 2);
  if (Number.isNaN(somaDosQuadrados))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = ``;
}
updateValues();

valoresInput