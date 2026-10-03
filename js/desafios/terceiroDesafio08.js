// Exercise 10
import createParagraph from '../functions/createParagraph.js';
import createTable from '../functions/createTable.js';

let adicionarProduto = true, soma = 0, nomeDoProduto, valorUnitario, i; 
const listaDeCompras = [];
const divParagraphs = document.getElementById('terceiroDesafio08__div--paragraphs');
const tableDivBlock = document.getElementById('terceiroDesafio08__div--table');

divParagraphs.replaceChildren();
tableDivBlock.replaceChildren();

i = 0;
while(adicionarProduto)
{
    valorUnitario = NaN;

    nomeDoProduto = prompt('Digite o nome do produto:');
    while(Number.isNaN(valorUnitario)) { valorUnitario = Number.parseFloat(prompt('Digite o valor unitário do produto:')); }
    soma += valorUnitario;

    listaDeCompras[i] = [ '1x', nomeDoProduto, `R$${valorUnitario.toFixed(2)}`, `R$${valorUnitario.toFixed(2)}` ];

    adicionarProduto = prompt('Deseja adicionar mais um produto? (SIM / NAO)').toUpperCase();
    adicionarProduto = Boolean( adicionarProduto === 'SIM' || adicionarProduto === 'S' );

    i++;
}
const table01 = createTable(tableDivBlock, [[]], listaDeCompras);

createParagraph(divParagraphs, `SUBTOTAL ${soma}`);