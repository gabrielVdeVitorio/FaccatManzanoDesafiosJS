/*
Seja o seguinte algoritmo:
início
ler x
ler y
z <- (x*y) + 5
se z <= 0 então
resposta <- ‘A’
senão
se z <= 100 então
resposta <- ‘B’
senão
resposta <- ‘C’
fim_se
fim_se
escrever z, resposta
fim
*/

import createTable from "../functions/createTable.js";

const divParagraphs = document.getElementById('faccat34__div--paragraphs');
divParagraphs.innerHTML;
const tableContent =
[
  [3, 2],
  [150, 3],
  [7, -1],
  [-2, 5],
  [50, 3]
];

for (let i = 0; i < tableContent.length; i++)
{
  let z = tableContent[i][0]*tableContent[i][1] + 5;
  tableContent[i].push(z);
  tableContent[i].push(testarZ(z));
}

createTable(divParagraphs, [['X', 'Y', 'Z','Resposta']], tableContent);

function testarZ(z)
{
  if (z <= 0)
  {
    return 'A';
  }
  if (z <= 100)
  {
    return 'B';
  }
  return 'C';
}