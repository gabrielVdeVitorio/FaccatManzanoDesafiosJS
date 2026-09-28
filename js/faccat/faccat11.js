/*
Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor.
*/
import createParagraph from '../functions/createParagraph.js';
let salarioFinal, salarioFixo, qtdDeCarrosVendidos, comissaoFixa, subtotalVendas, comissaoProporcionalPorTotalDeVendas = 5/100;
const respostaPadrao = 'Aqui constará o salário final do seu funcionário';
const input =
{
  salarioFixo: document.getElementById('faccat10__input--salarioFixo'),
  qtdDeCarrosVendidos: document.getElementById('faccat10__input--qtdDeCarrosVendidos'),
  comissaoFixa: document.getElementById('faccat10__input--comissaoFixa'),
  subtotalVendas: document.getElementById('faccat10__input--subtotalVendas')
}
const divParagraphs = document.getElementById('faccat11__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');

const updateValues = () =>
{
  salarioFixo = Number.parseFloat(input.salarioFixo.value);
  qtdDeCarrosVendidos = Number.parseInt(input.qtdDeCarrosVendidos.value);
  comissaoFixa = Number.parseFloat(input.comissaoFixa.value);
  subtotalVendas = Number.parseFloat(input.subtotalVendas.value);

  salarioFinal = salarioFixo + qtdDeCarrosVendidos*comissaoFixa + subtotalVendas*comissaoProporcionalPorTotalDeVendas;

  if (salarioFinal)
  {
    resultParagraph.style.color = '#000';
    resultParagraph.textContent = `O salário final do funcionário é R$${salarioFinal.toFixed(2)}`;
  }
  else
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
  }
}

updateValues();

input.salarioFixo.addEventListener('input', updateValues);
input.qtdDeCarrosVendidos.addEventListener('input', updateValues);
input.comissaoFixa.addEventListener('input', updateValues);
input.subtotalVendas.addEventListener('input', updateValues);