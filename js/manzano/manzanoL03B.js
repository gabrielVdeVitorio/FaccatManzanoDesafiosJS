/*
b) Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).
*/

import createParagraph from "../functions/createParagraph.js";

const divParagraphs = document.getElementById('manzanoL03B__div--paragraphs');
divParagraphs.innerHTML = '';
let soma = 0;
let i = 0;
while (i < 100)
{
  i++;
  soma += i;
}
createParagraph(divParagraphs, `A soma dos números de 1 a 100 é igual a ${soma}`);