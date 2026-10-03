/*
g) Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).
*/

import createTable from "../functions/createTable.js";

const divParagraphs = document.getElementById('manzanoL05G__div--paragraphs');
divParagraphs.innerHTML = '';
const tableElement = document.createElement('table');

const updateValues = () =>
{
  const rows = [];
  for (let i = 0; i < 16; i++)
  {
    let potencia = 1;
    for (let j = 0; j < i; j++)
    {
      potencia *= 3;
    }
    rows.push([`3 ^ ${i}: `, potencia]);
  }
  createTable(divParagraphs, [['Operação', 'Potências']], rows, tableElement);
}
updateValues();
