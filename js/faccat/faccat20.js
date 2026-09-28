/*
Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.
*/

import createParagraph from "../functions/createParagraph.js";

const input =
{
  primeiroValor: document.getElementById('faccat20__input--primeiroValor'),
  segundoValor: document.getElementById('faccat20__input--segundoValor')
}
const respostaPadrao = 'A sequência dos números em ordem decrescente aparecerá aqui';
const divParagraphs = document.getElementById('faccat20__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');

const updateValues = () =>
{
  const valor = [Number.parseFloat(input.primeiroValor.value), Number.parseFloat(input.segundoValor.value)];
  if (Number.isNaN(valor[0] + valor[1]))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  if (valor[0] > valor[1])
  {
    resultParagraph.textContent = `A sequência é ${valor.sort((a, b) => a - b).join(', ')}`;
    return;
  }
  resultParagraph.textContent = `A sequência é ${Array.from(valor).join(', ')}`;
}
updateValues();

input.primeiroValor.addEventListener('input', updateValues);
input.segundoValor.addEventListener('input', updateValues);