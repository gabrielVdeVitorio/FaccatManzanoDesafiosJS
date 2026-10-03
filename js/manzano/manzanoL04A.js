/*
a) Apresentar os quadrados dos números inteiros de 15 a 200.
*/

import createTable from "../functions/createTable.js";

const divParagraphs = document.getElementById('manzanoL04A__div--paragraphs');
divParagraphs.innerHTML = '';

const updateValues = () =>
{
  const rows = [];
  let i = 15;
  while (i < 201)
  {
    const quadrado = i * i;
    rows.push([`${i}²:`, quadrado]);
    i++;
  }
  createTable(divParagraphs, [[]], rows);
}
updateValues();