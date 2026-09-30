/*
Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em
dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares
disponível com o usuário, para que seja apresentado o valor em moeda brasileira.
*/

import createParagraph from "../functions/createParagraph.js";

const input =
{
  cotacao: document.getElementById('manzanoL01J__input--cotacao'),
  quantidadeDeDolares: document.getElementById('manzanoL01J__input--quantidadeDeDolares')
};
const divParagraphs = document.getElementById('manzanoL01J__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui será escrito o resultado da multiplição e adição distributivas';

const updateValues = () =>
{
  const cotacao = Number.parseFloat(input.cotacao.value);
  const quantidadeDeDolares = Number.parseFloat(input.quantidadeDeDolares.value);
  const totalEmReais = cotacao * quantidadeDeDolares;
  if (Number.isNaN(totalEmReais))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `Você tem R$${totalEmReais.toFixed(2)}`;
}
updateValues();

input.cotacao.addEventListener('input', updateValues);
input.quantidadeDeDolares.addEventListener('input', updateValues);