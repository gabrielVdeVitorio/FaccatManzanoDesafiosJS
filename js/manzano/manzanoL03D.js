/*
d) Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar
se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução
se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.
*/

import createParagraph from "../functions/createParagraph.js";

const divParagraphs = document.getElementById('manzanoL03D__div--paragraphs');
divParagraphs.innerHTML = '';
let soma = 0;
let i = 1;
while (i < 20)
{
  if (i % 2 === 0) { continue; }
  soma += i;
  i += 2;
}
createParagraph(divParagraphs, `A soma dos números pares de 0 a 20 é igual a ${soma}`);