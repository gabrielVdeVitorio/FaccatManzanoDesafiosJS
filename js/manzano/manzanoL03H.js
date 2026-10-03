/*
Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
programa deve apresentar os valores das duas temperaturas. A fórmula de conversão
é 5
1609 +
= C
F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
*/

import createTable from "../functions/createTable.js";

const divParagraphs = document.getElementById('manzanoL03H__div--paragraphs');
divParagraphs.innerHTML = '';

const updateValues = () =>
{
  const rows = [];
  let i = 0;
  while (i < 10)
  {
    const celsius = (i + 1) * 10;
    const fahrenheit = (9 * celsius + 160) / 5;
    rows.push([`${celsius}°C:`, `${fahrenheit}°F`]);
    i++;
  }
  createTable(divParagraphs, [[]], rows);
}
updateValues();