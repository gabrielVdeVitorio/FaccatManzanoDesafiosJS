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
  document.getElementById('manzanoL01L__input--valor04')
];
const divParagraphs = document.getElementById('manzanoL01L__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui será escrita a soma e a multilicação distributiva';
const updateValues = () =>
{
  const valores =
  [
    Number.parseFloat(valoresInput[0].value),
    Number.parseFloat(valoresInput[1].value),
    Number.parseFloat(valoresInput[2].value),
    Number.parseFloat(valoresInput[3].value)
  ];
  if (Number.isNaN(somaDosQuadrados))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  const somas = [];
  const multilicacoes = [];
  for (let i = 0; i < valores.length-1; i++)
  {
    const primeiroValor = valores[i];
    for (let j = i+1; j < valores.length; j++)
    {
      const segundoValor = valores[j];
      somas.push(primeiroValor + segundoValor);
      multilicacoes.push(primeiroValor * segundoValor);
    }
  }
  resultParagraph.style.color = '#000';
  resultParagraph.innerHTML =
  `${Array.from(somas).join(', ')}<br/>
  ${Array.from(multilicacoes.join(', '))}`;
}
updateValues();

valoresInput[0].addEventListener('input', updateValues);
valoresInput[1].addEventListener('input', updateValues);
valoresInput[2].addEventListener('input', updateValues);