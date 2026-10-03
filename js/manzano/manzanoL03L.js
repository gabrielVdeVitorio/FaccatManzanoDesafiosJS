/*
l) Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
usuário
*/

import createParagraph from "../functions/createParagraph.js";
const divParagraphs = document.getElementById('manzanoL03L__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, 'Aqui será escrito o maior e o menor valor digitado!');
const button = document.getElementById('manzanoL03L__button--digitarValores');

resultParagraph.style.color = '#0003';
button.addEventListener('click', () =>
{
  let valorDigitado = [];
  let i = 0;
  let maior = Number.NEGATIVE_INFINITY;
  let menor = Number.POSITIVE_INFINITY;
  [maior, menor] = callIfGreaterThanZero(i, maior, menor, valorDigitado);
  if (valorDigitado.length > 1)
  {
    resultParagraph.style.color = '#000';
    resultParagraph.textContent = `Maior valor digitado: ${maior}; Menor valor digitado: ${menor}.`;
  }
})

function callIfGreaterThanZero(i, maior, menor, valorDigitado)
{
  valorDigitado.push(Number.parseInt(prompt('Digite um valor positivo inteiro (ou um valor negativo para encerrar):')));
  if (valorDigitado[i] < 0) return [maior, menor];
  if (valorDigitado[i] > maior) maior = valorDigitado[i];
  if (valorDigitado[i] < menor) menor = valorDigitado[i];
  i++;
  return callIfGreaterThanZero(i, maior, menor, valorDigitado);
}