/*
a) Apresentar os quadrados dos números inteiros de 15 a 200.
*/

import createTable from "../functions/createTable.js";

const divParagraphs = document.getElementById('manzanoL05A__div--paragraphs');
divParagraphs.innerHTML = '';
const tableElement = document.createElement('table');

const updateValues = () =>
{
  const rows = [];
  for (let i = 15; i < 201; i++)
  {
    rows.push([`${i}²: `, i*i]);
  }
  createTable(divParagraphs, [[]], rows, tableElement);
}
updateValues();