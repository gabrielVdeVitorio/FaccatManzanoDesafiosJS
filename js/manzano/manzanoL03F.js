/*
Elaborar um programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
portuguol (^).
*/

import createParagraph from "../functions/createParagraph.js";
import createTable from "../functions/createTable.js";

const baseInput = document.getElementById('manzanoL03F__input--base');
const expoenteInput = document.getElementById('manzanoL03F__input--expoente');
const divParagraphs = document.getElementById('manzanoL03F__div--paragraphs');
divParagraphs.innerHTML = '';
const table = document.createElement('table');
const respostaPadraoParagraph = createParagraph(divParagraphs, '');
respostaPadraoParagraph.style.color = '#0003';
const respostaPadrao = 'Aqui será escrita a potência da base elevada ao expoente!';

const updateValues = () =>
{
  const base = Number.parseInt(baseInput.value);
  const expoente = Number.parseInt(expoenteInput.value);
  if (Number.isNaN(base+expoente))
  {
    table.innerHTML = '';
    respostaPadraoParagraph.textContent = respostaPadrao;
    return;
  }
  respostaPadraoParagraph.textContent = '';
  const rows = [];
  let i = 0;
  while (i < expoente)
  {
    let potencia = 1;
    let j = 0;
    while (j < i)
    {
      potencia *= base;
      j++;
    }
    rows.push([`${base} ^ ${i} = `, potencia]);
    i++;
  }
  createTable(divParagraphs, [[]], rows, table);
}
updateValues();

baseInput.addEventListener('input', updateValues);
expoenteInput.addEventListener('input', updateValues);