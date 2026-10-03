/*
e) Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. Para verificar
se o número é ímpar, efetuar dentro da malha a verificação lógica desta condição com a instrução
se, perguntando se o número é ímpar; sendo, mostre-o; não sendo, passe para o próximo passo.
*/

import createParagraph from "../functions/createParagraph.js";

const divParagraphs = document.getElementById('manzanoL05E__div--paragraphs');

const updateValues = () =>
{
  divParagraphs.replaceChildren();
  const impares = [];
  for (let i = 0; i < 20; i++)
  {
    if (i % 2 === 1)
    {
      impares.push(i);
    }
  }
  createParagraph(divParagraphs, '[' + Array.from(impares).join(', ') + ']').style.fontFamily = 'monospace';
}
updateValues();