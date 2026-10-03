/*
g) Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares
situados na faixa numérica de 1 a 10.
*/
import createTable from "../functions/createTable.js";

const valoresInput = [];
const divParagraphs = document.getElementById('manzanoL04G__div--paragraphs');
divParagraphs.innerHTML = '';

function updateValues()
{
  const rows = [];
  let somaFatorial = 0;
  let i = 1;
  do
  {
    let j = 1;;
    let fatorial = i;
    do
    {
      fatorial *= i - j;
      j++;
    } while (j < i);
    rows.push([`${i}!:`, fatorial]);
    i += 2;
  } while (i < 10);
  createTable(divParagraphs, [['Valor', 'Fatorial']], rows);
}
updateValues();