/*
Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo
seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo
usuário.
*/

import createParagraph from "../functions/createParagraph.js";

const divParagraphs = document.getElementById('manzanoL04I__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, 'Aqui será escrito o maior e o menor valor digitado!');
const button = document.getElementById('manzanoL04I__button--digitarValores');

resultParagraph.style.color = '#0003';
button.addEventListener('click', () =>
{
  const valorDigitado = [];
  let soma = 0;
  let i = 0;
  do
  {
    valorDigitado[i] = Number.parseInt(prompt('Digite um valor positivo inteiro, ou um valor negativo para encerrar.'));
    if (Number.isNaN(valorDigitado[i]) || valorDigitado[i] === 0) { valorDigitado[i] = 1; continue; }
    if (valorDigitado[i] < 0) break;
    soma += valorDigitado[i];
    i++;
    console.log('valorDigitado[i - 1]:' + valorDigitado[i - 1]);
  } 
  while (valorDigitado[valorDigitado.length-1] > 0);
  if (valorDigitado.length > 0)
  {
    const media = soma/i;
    resultParagraph.style.color = '#000';
    resultParagraph.textContent = `A soma é ${soma} e a média é ${media} (com ${i} número(s) contado(s)).`;
    return;
  }
  resultParagraph.style.color = '#0003';
  resultParagraph.textContent = 'Aqui será escrito o maior e o menor valor digitado!';
});