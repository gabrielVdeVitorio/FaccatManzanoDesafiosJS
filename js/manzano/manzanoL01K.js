/*
Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em
real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível
com o usuário, para que seja apresentado o valor em moeda americana.
*/

import createParagraph from "../functions/createParagraph.js";

const input =
{
  cotacao: document.getElementById('manzanoL01K__input--cotacao'),
  quantidadeDeReais: document.getElementById('manzanoL01K__input--quantidadeDeReais')
};
const divParagraphs = document.getElementById('manzanoL01K__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui será escrita a quantidade de dólares correspondentes aos seus reais';
const updateValues = () =>
{
  const cotacao = Number.parseFloat(input.cotacao.value);
  const quantidadeDeReais = Number.parseFloat(input.quantidadeDeReais.value);
  const totalEmDolares = 1/cotacao * quantidadeDeReais;
  if (Number.isNaN(totalEmDolares))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `Você tem $${totalEmDolares.toFixed(2)}.`;
}
updateValues();

input.cotacao.addEventListener('input', updateValues);
input.quantidadeDeReais.addEventListener('input', updateValues);