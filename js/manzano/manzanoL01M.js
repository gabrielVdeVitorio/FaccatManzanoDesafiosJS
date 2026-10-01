/*
Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de
conversão é F ← (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
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
const respostaPadrao = 'Aqui será escrita a soma dos quadrados';
const updateValues = () =>
{
  const valores =
  [
    Number.parseFloat(valoresInput[0].value),
    Number.parseFloat(valoresInput[1].value),
    Number.parseFloat(valoresInput[2].value)
  ];
  const somaDosQuadrados = Math.pow(valores[0], 2) + Math.pow(valores[1], 2) + Math.pow(valores[2], 2);
  if (Number.isNaN(somaDosQuadrados))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `A soma dos quadrados é igual a ${somaDosQuadrados}`;
}
updateValues();

valoresInput[0].addEventListener('input', updateValues);
valoresInput[1].addEventListener('input', updateValues);
valoresInput[2].addEventListener('input', updateValues);