/*
Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula
*/

import createParagraph from "../functions/createParagraph.js";

const input =
{
  altura: document.getElementById('manzanoL01C__input--altura'),
  raio: document.getElementById('manzanoL01C__input--raio')
}
const divParagraphs = document.getElementById('manzanoL01C__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'O volume do cilindro será escrito aqui';

const updateValues = () =>
{
  const altura = Number.parseFloat(input.altura.value);
  const raio = Number.parseFloat(input.raio.value);
  if (Number.isNaN(altura + raio))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `O volume do cilindro é ${(Math.PI*Math.pow(raio, 2)*altura).toFixed(2)}.`
}
updateValues();

input.altura.addEventListener('input', updateValues);
input.raio.addEventListener('input', updateValues);