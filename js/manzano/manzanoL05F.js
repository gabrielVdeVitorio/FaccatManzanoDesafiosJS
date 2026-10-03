/*
f) Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o
número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a
instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o
próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1.
*/


import createParagraph from "../functions/createParagraph.js";

const divParagraphs = document.getElementById('manzanoL05F__div--paragraphs');

const updateValues = () =>
{
  divParagraphs.replaceChildren();
  const numeros = Array.from({length: 200/40}, () => Array(0));
  console.log(numeros);
  for (let i = 0; i < 200; i++)
  {
    if (i % 4 === 0)
    {
      numeros[Math.trunc(i/40)].push(i);
      console.log(Math.trunc(i/41) + ': Math.trunc – ' + numeros[Math.trunc(i/40)] + ': numeros[Math.trunc(i/41)]');
    }
  }
  numeros.forEach( (array) => createParagraph(divParagraphs,'[' + Array.from(array).join(', ') + ']').style.fontFamily = 'monospace' );
}
updateValues();