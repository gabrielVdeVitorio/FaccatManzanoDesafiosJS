/*
Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula
PRESTACAO <- VALOR + (VALOR * TAXA/100) * TEMPO)
*/

import createParagraph from "../functions/createParagraph.js";

const input =
{
  valorInicial: document.getElementById('manzanoL01E__input--valorInicial'),
  taxa: document.getElementById('manzanoL01E__input--taxa'),
  tempo: document.getElementById('manzanoL01E__input--tempo')
}
const divParagraphs = document.getElementById('manzanoL01E__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');

const updateValues = () =>
{
  const valorInicial = Number.parseFloat(input.valorInicial.value);
  const taxa = Number.parseFloat(input.taxa.value);
  const tempo = Number.parseInt(input.tempo.value);
  if (Number.isNaN(valorInicial + taxa + tempo))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  const prestacao = valorInicial + (valorInicial * taxa/100) * tempo;
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `O valor atual da prestação em atraso é R$${prestacao}`;
}
updateValues();

input.valorInicial.addEventListener('input', updateValues);
input.taxa.addEventListener('input', updateValues);
input.tempo.addEventListener('input', updateValues);