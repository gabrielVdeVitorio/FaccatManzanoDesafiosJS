/*
Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
dos outros 2 lados.
*/

import createParagraph from "../functions/createParagraph.js";

const valoresInput =
[
  document.getElementById('faccat31__input--valor01'),
  document.getElementById('faccat31__input--valor02'),
  document.getElementById('faccat31__input--valor03'),
];
const divParagraphs = document.getElementById('faccat31__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui será dito ser é ou não um triângulo';

const verificarTriangulo = (arrayDeValores) =>
{
  const testes = [];
  testes.push(arrayDeValores[0] < arrayDeValores[1] + arrayDeValores[2]);
  testes.push(arrayDeValores[1] < arrayDeValores[2] + arrayDeValores[0]);
  testes.push(arrayDeValores[2] < arrayDeValores[0] + arrayDeValores[1]);
  if (!testes[0] || !testes[1] || !testes[2])
  {
    return 'NÃO É UM TRIÂNGULO!';
  }
  return 'É UM TRIÂNGULO!';
}

const updateValues = () =>
{
  const valores =
  [
    Number.parseFloat(valoresInput[0].value),
    Number.parseFloat(valoresInput[1].value),
    Number.parseFloat(valoresInput[2].value)
  ];
  if (Number.isNaN(valores[0] + valores[1] + valores[2]))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = verificarTriangulo(valores);
}
updateValues();

valoresInput[0].addEventListener('input', updateValues);
valoresInput[1].addEventListener('input', updateValues);
valoresInput[2].addEventListener('input', updateValues);