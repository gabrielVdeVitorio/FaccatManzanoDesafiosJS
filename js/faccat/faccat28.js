/*
Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.
*/

import createParagraph from "../functions/createParagraph.js";

const valoresInputs =
[
  document.getElementById('faccat28__input--valor01'),
  document.getElementById('faccat28__input--valor02'),
  document.getElementById('faccat28__input--valor03')
];
const divParagraphs = document.getElementById('faccat28__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'O maior dos três valores será escrito aqui!';
console.log('first moment');

const updateValues = () =>
{
  const valores = 
  [
    Number.parseFloat(valoresInputs[0].value),
    Number.parseFloat(valoresInputs[1].value),
    Number.parseFloat(valoresInputs[2].value)
  ];
  if (Number.isNaN(valores[0] + valores[1] + valores[2]))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  valores.sort((a, b) => a - b);
  resultParagraph.textContent = `O maior valor é: ${valores[2]}`;
}
updateValues();

valoresInputs[0].addEventListener('input', updateValues);
valoresInputs[1].addEventListener('input', updateValues);
valoresInputs[2].addEventListener('input', updateValues);