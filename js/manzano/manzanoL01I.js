/*
Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo
segundo.
*/

import createParagraph from "../functions/createParagraph.js";

const valoresInput =
[
  document.getElementById('manzanoL01I__input--valor01'),
  document.getElementById('manzanoL01I__input--valor02'),
];
const divParagraphs = document.getElementById('manzanoL01I__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui será escrito o resultado da multiplição e adição distributivas';

const updateValues = () =>
{
  const valores =
  [
    Number.parseFloat(valoresInput[0].value),
    Number.parseFloat(valoresInput[1].value)
  ];
  const quadradoDaDiferenca = Math.pow(valores[0] - valores[1], 2);
  if (Number.isNaN(quadradoDaDiferenca))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `O quadrado da diferença, do primeiro pelo segundo, é ${quadradoDaDiferenca}`;
}
updateValues();

valoresInput[0].addEventListener('input', updateValues);
valoresInput[1].addEventListener('input', updateValues);