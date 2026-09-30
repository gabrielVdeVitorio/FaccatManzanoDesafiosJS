/*
Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula
VOLUME <- COMPRIMENTO * LARGURA * ALTURA.
*/

import createParagraph from "../functions/createParagraph.js";

const valoresInput =
[
  document.getElementById('manzanoL01H__input--comprimento'),
  document.getElementById('manzanoL01H__input--largura'),
  document.getElementById('manzanoL01H__input--altura')
];
const divParagraphs = document.getElementById('manzanoL01H__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui será escrito o volume do prisma de base retangular.';

const updateValues = () =>
{
  const valores =
  [
    Number.parseFloat(valoresInput[0].value),
    Number.parseFloat(valoresInput[1].value),
    Number.parseFloat(valoresInput[2].value)
  ];
  const volume = valores[0] * valores[1] * valores[2];
  if (Number.isNaN(volume))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `O volume do prisma de base retangular é ${volume}.`;
}
updateValues();

valoresInput[0].addEventListener('input', updateValues);
valoresInput[1].addEventListener('input', updateValues);
valoresInput[2].addEventListener('input', updateValues);