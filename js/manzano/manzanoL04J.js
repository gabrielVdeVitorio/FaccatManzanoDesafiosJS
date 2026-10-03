/*
Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer.
Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético
DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve
apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.
*/

import createParagraph from "../functions/createParagraph.js";

const divParagraphs = document.getElementById('manzanoL04J__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, 'Aqui será escrito o maior e o menor valor digitado!');
const button = document.getElementById('manzanoL04J__button--digitarValores');

resultParagraph.style.color = '#0003';
button.addEventListener('click', () =>
{
  let quociente = 0;
  let numero01 = NaN;
  let numero02 = NaN;
  while (Number.isNaN(numero01)) { numero01 = Number.parseFloat(prompt('Digite o primeiro valor:')); }
  while (Number.isNaN(numero02) || numero02 === 0) { numero02 = Number.parseFloat(prompt('Digite o segundo valor:')); }
  if (numero01 < numero02)
  {
    resultParagraph.style.color = '#000';
    resultParagraph.textContent = `O maior quociente inteiro é ${quociente}`;
    return;
  }
  const signals = [Math.sign(numero01), Math.sign(numero02)];
  numero01 = Math.abs(numero01);
  numero02 = Math.abs(numero02);
  do
  {
    numero01 -= numero02;
    quociente++;
    console.log('numero01: ' + numero01);
    console.log('numero02: ' + numero02);
    console.log('quociente: ' + quociente);
  } while (!(numero01 < numero02));
  quociente *= signals[0]*signals[1];
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `O maior quociente inteiro é ${quociente}`;
});