/*
Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
compra'.
*/

import createParagraph from "../functions/createParagraph.js";

const possiveisRespostas = ['Não efetuar compra!', 'Efetuar Compra'];
const respostaPadrao = 'Aqui será escrito se é necessário comprar mais ou não.';
const divParagraphs = document.getElementById('faccat26__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const input =
{
  quantidadeAtual: document.getElementById('faccat26__input--quantidadeAtual'),
  quantidadeMinima: document.getElementById('faccat26__input--quantidadeMinima'),
  quantidadeMaxima: document.getElementById('faccat26__input--quantidadeMaxima')
}

const updateValues = () =>
{
  const quantidadeAtual = Number.parseFloat(input.quantidadeAtual.value);
  const quantidadeMinima = Number.parseFloat(input.quantidadeMinima.value);
  const quantidadeMaxima = Number.parseFloat(input.quantidadeMaxima.value);
  const quantidadeMedia = (quantidadeMinima + quantidadeMaxima) /2;
  if (Number.isNaN(quantidadeMinima + quantidadeAtual))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }

  resultParagraph.style.color = '#000';
  resultParagraph.textContent = possiveisRespostas[+(quantidadeAtual < quantidadeMedia)];
}
updateValues();

input.quantidadeAtual.addEventListener('input', updateValues);
input.quantidadeMinima.addEventListener('input', updateValues);
input.quantidadeMaxima.addEventListener('input', updateValues);