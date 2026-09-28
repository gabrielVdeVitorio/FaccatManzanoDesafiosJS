/*
Uma fruteira está vendendo frutas com a seguinte tabela de preços:
Até 5 Kg Acima de 5 Kg
Morango R$ 2,50 por Kg R$ 2,20 por Kg
Maçã R$ 1,80 por Kg R$ 1,50 por Kg
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.
*/

import createParagraph from "../functions/createParagraph.js";

const precos = [ [ 1.80, 1.50], [ 2.50, 2.20 ] ];
const inputs =
[
  document.getElementById('faccat37__input--quantidadeDeMacas'),
  document.getElementById('faccat37__input--quantidadeDeMorangos')
]
const divParagraphs = document.getElementById('faccat37__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'O valor final da sua compra será escrito aqui';

const updateValues = () => 
{
  let subtotal = 0;
  const quilosDeMacas = Number.parseFloat(inputs[0].value);
  const quilosDeMorangos = Number.parseFloat(inputs[1].value);

  if (Number.isNaN(quilosDeMacas + quilosDeMorangos))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  subtotal += quilosDeMacas*precos[0][+(quilosDeMacas > 5)];
  subtotal += quilosDeMorangos*precos[1][+(quilosDeMorangos > 5)];
  
  if (quilosDeMacas + quilosDeMorangos > 8 || subtotal > 25) subtotal *= 0.9;
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `O total da sua compra é R$${subtotal}`;
}
updateValues();
inputs[0].addEventListener('input', updateValues);
inputs[1].addEventListener('input', updateValues);