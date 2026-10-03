/*
i) Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do
somatório e a média aritmética dos valores lidos.
*/

import createParagraph from "../functions/createParagraph.js";

const valoresInput = 
[
  document.getElementById('manzanoL03I__input--valor01'),
  document.getElementById('manzanoL03I__input--valor02'),
  document.getElementById('manzanoL03I__input--valor03'),
  document.getElementById('manzanoL03I__input--valor04'),
  document.getElementById('manzanoL03I__input--valor05'),
  document.getElementById('manzanoL03I__input--valor06'),
  document.getElementById('manzanoL03I__input--valor07'),
  document.getElementById('manzanoL03I__input--valor08'),
  document.getElementById('manzanoL03I__input--valor09'),
  document.getElementById('manzanoL03I__input--valor10')
];
const divParagraphs = document.getElementById('manzanoL03I__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');

const updateValues = () =>
{
  const soma = valoresInput.reduce((accumulator, currentValue) => accumulator + currentValue.valueAsNumber, 0);
  if (Number.isNaN(soma))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = 'Aqui será escrita a soma e a média dos valores digitados!';
    return;
  }
  const media = soma / valoresInput.length;
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `Soma: ${soma}, Média: ${media}`;
}
updateValues();

for (const input of valoresInput)
{
  input.addEventListener('input', updateValues);
}