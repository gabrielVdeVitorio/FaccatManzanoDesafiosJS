/*
 Ler um valor e escrever se é positivo, negativo ou zero
 */

import createParagraph from "../functions/createParagraph.js";

const possiveisResultados = ['É POSITIVO', 'É ZERO', 'É NEGATIVO'];
const valorParaCompararInput = document.getElementById('faccat27__input--valorParaComparar');
const divParagraphs = document.getElementById('faccat27__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui será escrita se o valor é negativo, positivo ou zero';

const updateValues = () =>
{
  const valorParaComparar = Number.parseFloat(valorParaCompararInput.value);
  if (Number.isNaN(valorParaComparar))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = possiveisResultados[1 - Math.sign(valorParaComparar)];
}
updateValues();

valorParaCompararInput.addEventListener('input', updateValues);