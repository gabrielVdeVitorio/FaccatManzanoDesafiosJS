/*
Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de
forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da
variável A. Apresentar os valores trocados
*/

import createParagraph from "../functions/createParagraph.js";

const input = 
{
  valorA: document.getElementById('manzanoL01F__input--valorA'),
  valorB: document.getElementById('manzanoL01F__input--valorB')
}
const divParagraphs = document.getElementById('manzanoL01F__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'O valor das variáveis será escrito aqui, A com o valor de B e B com o valor de A.';

const updateVaues = () =>
{
  let valorA = input.valorA.value;
  let valorB = input.valorB.value;
  if (!valorA || !valorB)
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  const intermediaria = valorA;
  valorA = valorB;
  valorB = intermediaria;
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `A é igual a '${valorA}' e B é igual a '${valorB}'.`;

}
updateVaues();

input.valorA.addEventListener('input', updateVaues);
input.valorB.addEventListener('input', updateVaues);