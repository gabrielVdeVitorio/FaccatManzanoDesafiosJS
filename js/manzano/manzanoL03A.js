/*
a) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.
*/

import createTable from "../functions/createTable.js";
import createParagraph from "../functions/createParagraph.js";

const valorInput = document.getElementById('manzanoL03A__input--valor01');
const divParagraphs = document.getElementById('manzanoL03A__div--paragraphs');
const respostaPadrao = 'Aqui será escrita a tabuada.';
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
resultParagraph.style.color = '#0003';
const tableElement = document.createElement('table');

const updateValues = () =>
{
  const valor = Number.parseInt(valorInput.value);
  if (Number.isNaN(valor))
  { 
    tableElement.innerHTML = '';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.textContent = ``;
  const rows = [];
  let i = 1;
  while (i < 11)
  {
    rows.push([`${valor} * ${i}: `, valor*i]);
    i++;
  }
  createTable(divParagraphs, [[]], rows, tableElement);
}
updateValues();

valorInput.addEventListener('input', updateValues);