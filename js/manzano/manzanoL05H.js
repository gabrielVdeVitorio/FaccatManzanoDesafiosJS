/*
h) Elaborar um programa que apresente como resultado o valor de uma potência de uma base
qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor
do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do
portuguol (^).
*/

import createParagraph from "../functions/createParagraph.js";
import createTable from "../functions/createTable.js";


const baseInput = document.getElementById('manzanoL05H__input--base');
const expoenteInput = document.getElementById('manzanoL05H__input--expoente');
const divParagraphs = document.getElementById('manzanoL05H__div--paragraphs');
divParagraphs.replaceChildren();
const resultParagraph = createParagraph(divParagraphs,'');

const updateValues = () =>
{
  const expoente = expoenteInput.valueAsNumber;
  const base = (baseInput.valueAsNumber < 0) ? 1/baseInput.valueAsNumber : baseInput.valueAsNumber;
  if (Number.isNaN(expoente+base))
  {
    resultParagraph.replaceChildren();
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = 'Aqui constará a potência dos valores apresentados.';
    return;
  }
  let potencia = 1;
  for (let j = 0; j < expoente; j++)
  {
    potencia *= base;
  }
  const sup = document.createElement('sup');
  sup.textContent = expoente;
  sup.style.fontSize = '0.8rem';
  resultParagraph.replaceChildren(base, sup, ': ' + potencia);
  resultParagraph.style.color = '#000';
}
updateValues();

baseInput.addEventListener('input', updateValues);
expoenteInput.addEventListener('input', updateValues);