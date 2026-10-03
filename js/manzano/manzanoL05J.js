/*
j) Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de
10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O
programa deve apresentar os valores das duas temperaturas. A fórmula de conversão
é 5
1609 +
= C
F , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
*/

import createParagraph from "../functions/createParagraph.js";

const divParagraphs = document.getElementById('manzanoL05J__div--paragraphs');
divParagraphs.replaceChildren();

for (let i = 10; i < 101; i += 10)
{
  const grausFahrenheit = (9*i + 160)/5;
  createParagraph(divParagraphs, `${i}°C - ${grausFahrenheit}°F`);
}