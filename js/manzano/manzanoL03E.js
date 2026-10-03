/*
e) Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser
considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que
neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).
*/

import createTable from "../functions/createTable.js";

const divParagraphs = document.getElementById('manzanoL03E__div--paragraphs');
divParagraphs.innerHTML = '';

const updateValues = () =>
{
  const rows = [];
  let i = 0;
  while (i < 16)
  {
    let potencia = 1;
    let j = 0;
    while (j < i)
    {
      potencia *= 3;
      j++;
    }
    rows.push([`3 ^ ${i} = `, potencia]);
    i++;
  }
  createTable(divParagraphs, [[]], rows);
}
updateValues();