/*
Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
maiores.
*/

import createParagraph from "../functions/createParagraph.js";

const valoresInput =
[
  document.getElementById('faccat29__input--valor01'),
  document.getElementById('faccat29__input--valor02'),
  document.getElementById('faccat29__input--valor03'),
]
const divParagraphs = document.getElementById('faccat29__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui será escrita a soma dos 2 maiores.';

const updateValues = () =>
{
  const valores =
  [
    Number.parseFloat(valoresInput[0].value),
    Number.parseFloat(valoresInput[1].value),
    Number.parseFloat(valoresInput[2].value)
  ];

  if (Number.isNaN(valores[0] + valores[1] + valores[2]))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  valores.sort((a, b) => b - a);
  resultParagraph.textContent = `A soma dos dois maiores é: ${valores[1]+valores[0]}`;
}
updateValues();

valoresInput[0].addEventListener('input', updateValues);
valoresInput[1].addEventListener('input', updateValues);
valoresInput[2].addEventListener('input', updateValues);