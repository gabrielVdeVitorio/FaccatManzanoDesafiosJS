/*
Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.
*/

import createParagraph from "../functions/createParagraph.js";

const inputs =
[
  document.getElementById('faccat32__input--time01'),
  document.getElementById('faccat32__input--time02'),
  document.getElementById('faccat32__input--gols01'),
  document.getElementById('faccat32__input--gols02')
];
const divParagraphs = document.getElementById('faccat32__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'O time vencedor constará aqui!';

const timeVencedor = (gols, nomesDosTimes) =>
{
  let vencedor;
  switch (true)
  {
    case (gols[0] > gols[1]):
      vencedor = `O time vencedor foi ${nomesDosTimes[0]}`;
      break;
    case (gols[0] === gols[1]):
      vencedor = 'Foi um EMPATE';
      break;
    default:
      vencedor = `O time vencedor foi ${nomesDosTimes[1]}`;
  }    
  return vencedor;
}

const updateValues = () =>
{
  const nomesDosTimes = [inputs[0].value, inputs[1].value];
  const gols = [Number.parseInt(inputs[2].value), Number.parseInt(inputs[3].value)];
  if (Number.isNaN(gols[0] + gols[1]) || nomesDosTimes[0] === '' || nomesDosTimes[1] === '')
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `${timeVencedor(gols, nomesDosTimes)}`;
}
updateValues();

inputs[0].addEventListener('input', updateValues);
inputs[1].addEventListener('input', updateValues);
inputs[2].addEventListener('input', updateValues);
inputs[3].addEventListener('input', updateValues);