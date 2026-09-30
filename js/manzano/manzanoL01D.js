/*
Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um
automóvel que faz 12 Km por litro. Para obter o cálculo,
o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem.
Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA <- TEMPO * VELOCIDADE. Possuindo o valor da
distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula
LITROS_USADOS <- DISTANCIA / 12.
Ao final, o programa deve apresentar os valores da velocidade
média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a
quantidade de litros (LITROS_USADOS) utilizada na viagem.
*/

import createParagraph from "../functions/createParagraph.js";

const input =
{
  tempo: document.getElementById('manzanoL01D__input--tempo'),
  velocidade: document.getElementById('manzanoL01D__input--velocidade')
}
const divParagraphs = document.getElementById('manzanoL01D__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Os dados da viagem estarão aqui!'

const updateValues = () =>
{
  const tempo = Number.parseFloat(input.tempo.value);
  const velocidade = Number.parseFloat(input.velocidade.value);
  if (Number.isNaN(tempo+velocidade))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  const distancia = velocidade*tempo;
  const litros = distancia/12;
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `O tempo de viagem foi ${tempo} horas, a uma velocidade média de ${velocidade}Km/h, foram percorridos ${distancia}Km, com um total de ${litros.toFixed(2)}L de combustível gastos (para um carro que consome 12Km/L).`;
}
updateValues();

input.tempo.addEventListener('input', updateValues);
input.velocidade.addEventListener('input', updateValues);