/*
i) Escreva um programa que apresente a série de Fibonacci até o décimo quinto termo. A série de
Fibonacci é formada pela seqüência: 1, 1, 2, 3, 5, 8, 13, 21, 34, ..., etc. Esta série se caracteriza
pela soma de um termo atual com o seu anterior subseqüente, para que seja formado o próximo
valor da seqüência. Portanto começando com os números 1, 1 o próximo termo é 1+1=2, o próximo
é 1+2=3, o próximo é 2+3=5, o próximo 3+5=8, etc.
*/

import createParagraph from "../functions/createParagraph.js";

const divParagraphs = document.getElementById('manzanoL05I__div--paragraphs');
divParagraphs.replaceChildren();
const sequencia = [];
let atual = 1;
let anterior = 0;
for (let i = 0; i < 15; i++)
{
  sequencia.push(atual);
  let proximo = atual + anterior;
  anterior = atual;
  atual = proximo;
  
}
createParagraph(divParagraphs, '[' + Array.from(sequencia).join(', ') + ']').style.fontFamily = 'monospace';