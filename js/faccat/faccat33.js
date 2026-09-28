/*
Ler dois valores e imprimir uma das três mensagens a seguir:
‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
‘Segundo maior’, caso o segundo seja maior que o primeiro.
*/

import createParagraph from "../functions/createParagraph.js";

const valoresInputs =
[
  document.getElementById('faccat33__input--valor01'),
  document.getElementById('faccat33__input--valor02')
];
const divParagraphs = document.getElementById('faccat33__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui será escrita a comparação entre os dois valores';
const updateValues = () =>
{
  let caso;
  const valores = [Number.parseFloat(valoresInputs[0].value), Number.parseFloat(valoresInputs[1].value)];
  if (Number.isNaN(valores[0] + valores[1]))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  switch (true)
  {
    case (valores[0] === valores[1]):
      caso = 'Números iguais';
      break;
    case (valores[0] < valores[1]):
      caso = 'Segundo é maior';
      break;
    default:
      caso = 'Primeiro é maior';
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = caso;
}
updateValues();

valoresInputs[0].addEventListener('input', updateValues);
valoresInputs[1].addEventListener('input', updateValues);