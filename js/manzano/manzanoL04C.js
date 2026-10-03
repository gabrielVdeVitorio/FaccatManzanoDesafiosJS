/*
c) Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o
número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a
instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o
próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1.
*/

import createTable from "../functions/createTable.js";

const divParagraphs = document.getElementById('manzanoL04C__div--paragraphs');
divParagraphs.innerHTML = '';

const updateValues = () =>
{
  const rows = [];
  let rowSequence = [];
  let i = 1;
  while (i < 200)
  {
    if (i % 4 === 0) rowSequence.push(i);
    if (i % 28 === 0) {rows.push(rowSequence); rowSequence = [];};
    i++;
  }
  rows.push(rowSequence);
  createTable(divParagraphs, [[]], rows);
}
updateValues();