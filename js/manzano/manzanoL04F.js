/*
f) Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o
total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras
dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve
parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar
como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da
média.
*/

import createParagraph from "../functions/createParagraph.js";
const divParagraphs = document.getElementById('manzanoL04F__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, 'Aqui será escrito o maior e o menor valor digitado!');
const button = document.getElementById('manzanoL04F__button--digitarValores');

resultParagraph.style.color = '#0003';
button.addEventListener('click', () =>
{
  let valorDigitado = [];
  const [i, soma, media] = callIfGreaterThanZero(0, 0, valorDigitado);
  if (valorDigitado.length > 1)
  {
    resultParagraph.style.color = '#000';
    resultParagraph.textContent = `A soma é ${soma} e a média é ${media} (com ${i} números contados).`;
  }
})

function callIfGreaterThanZero(i, soma, valorDigitado)
{
  valorDigitado.push(Number.parseInt(prompt('Digite um valor positivo inteiro (ou um valor negativo para encerrar):')));
  if (valorDigitado[i] < 0) return [i, soma, soma/(i+1)];
  if (Number.isNaN(valorDigitado[i])) callIfGreaterThanZero(i, soma, valorDigitado);
  soma += valorDigitado[i];
  i++;
  return callIfGreaterThanZero(i, soma, valorDigitado);
}