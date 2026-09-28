/*
22) A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
(considere que o mês possua 4 semanas exatas).
*/

import createParagraph from "../functions/createParagraph.js";

const input =
{
  salarioPorHora: document.getElementById('faccat22__input--salarioPorHora'),
  horasTrabalhadas: document.getElementById('faccat22__input--horasTrabalhadas')
}
const divParagraphs = document.getElementById('faccat22__div--paragraphs');
divParagraphs.innerHTML = '';
const respostaPadrao = 'O salário total do funcionário, com horas extras e acréscimo, será escrito aqui!';
const resultParagraph = createParagraph(divParagraphs, '');

const updateValues = () =>
{
  let salarioPorHora = Number.parseFloat(input.salarioPorHora.value);
  let horasTrabalhadas = Number.parseInt(input.horasTrabalhadas.value);
  const salarioTotal = (Math.min(horasTrabalhadas, 160) + Math.max(horasTrabalhadas-160, 0)*1.5) * salarioPorHora;
  if ( Number.isNaN(salarioTotal) )
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `O salário total do funcionário neste mês é R$${salarioTotal}.`;
}
updateValues();

input.salarioPorHora.addEventListener('input', updateValues);
input.horasTrabalhadas.addEventListener('input', updateValues);