/*
m) Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final o
quadrado da soma dos três valores lidos.
*/

import createParagraph from "../functions/createParagraph.js";

const valoresInput =
[
  document.getElementById('manzanoL01M__input--valor01'),
  document.getElementById('manzanoL01M__input--valor02'),
  document.getElementById('manzanoL01M__input--valor03'),
];
const divParagraphs = document.getElementById('manzanoL01M__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui será escrito o quadrado da soma.';
const updateValues = () =>
{
  const valores =
  [
    Number.parseFloat(valoresInput[0].value),
    Number.parseFloat(valoresInput[1].value),
    Number.parseFloat(valoresInput[2].value)
  ];
  const quadradoDaSoma = Math.pow(valores[0]+valores[1]+valores[2], 2);
  if (Number.isNaN(quadradoDaSoma))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `A soma dos quadrados é igual a ${quadradoDaSoma}.`;
}
updateValues();

valoresInput[0].addEventListener('input', updateValues);
valoresInput[1].addEventListener('input', updateValues);
valoresInput[2].addEventListener('input', updateValues);