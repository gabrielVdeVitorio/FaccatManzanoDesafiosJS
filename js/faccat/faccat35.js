/*
Um posto está vendendo combustíveis com a seguinte tabela de descontos:
até 20 litros, desconto de 3% por litro
Álcool acima de 20 litros, desconto de 5% por litro
até 20 litros, desconto de 4% por litro
Gasolina acima de 20 litros, desconto de 6% por litro
Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.
*/

import createParagraph from "../functions/createParagraph.js";

const litrosDeCombustivelInput = document.getElementById('faccat35__input--litrosDeCombustivel');
const tipoDeCombustivelSelect = document.getElementById('faccat35__select--tipoDeCombustivel');
const divParagraphs = document.getElementById('faccat35__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui será escrito o custo da quantidade do combustível solicitado.';

const updateValues = () =>
{
  const desconto = [ [0.96, 0.94], [0.97, 0.95] ];
  let precoDoCombustivel;
  const litrosDeCombustivel = Number.parseFloat(litrosDeCombustivelInput.value);
  const tipoDeCombustivel = tipoDeCombustivelSelect.value;

  if (Number.isNaN(litrosDeCombustivel))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }

  tipoDeCombustivel.toLowerCase() === 'gasolina' ? precoDoCombustivel = 3.30*desconto[0][+(litrosDeCombustivel > 20)] : precoDoCombustivel = 2.90*desconto[1][+(litrosDeCombustivel > 20)];
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `O custo de ${litrosDeCombustivel}L de ${tipoDeCombustivel} é R$${(litrosDeCombustivel*precoDoCombustivel).toFixed(2)}.`;

}
updateValues();

tipoDeCombustivelSelect.addEventListener('change', updateValues);
litrosDeCombustivelInput.addEventListener('input', updateValues);