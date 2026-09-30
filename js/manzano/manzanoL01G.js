/*
Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na
utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,
devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim
C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de
multiplicação e apresentar doze resultados de saída
*/

import createParagraph from "../functions/createParagraph.js";

const valoresInput =
[
  document.getElementById('manzanoL01G__input--valor01'),
  document.getElementById('manzanoL01G__input--valor02'),
  document.getElementById('manzanoL01G__input--valor03'),
  document.getElementById('manzanoL01G__input--valor04')
];
const divParagraphs = document.getElementById('manzanoL01G__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui será escrito o resultado da multiplição e adição distributivas';

const updateValues = () =>
{
  const valores =
  [
    Number.parseFloat(valoresInput[0].value),
    Number.parseFloat(valoresInput[1].value),
    Number.parseFloat(valoresInput[2].value),
    Number.parseFloat(valoresInput[3].value),
  ];
  const somas = [];
  const produtos = [];
  if (Number.isNaN(valores[0] + valores[1] + valores[2] + valores[3]))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  for (let i = 0; i < valores.length-1; i++)
  {
    const primeiroValor = valores[i];
    for (let j = i+1; j < valores.length; j++)
    {
      const segundoValor = valores[j];
      produtos.push(primeiroValor * segundoValor);
      somas.push(primeiroValor + segundoValor);
    }
  }
  resultParagraph.style.cssText = `color: #000; font-family: monospace;`;
  resultParagraph.innerHTML =
  `
    [${Array.from(produtos).join(', ')}]<br/>
    [${Array.from(somas).join(', ')}]
  `;
}
updateValues();

valoresInput[0].addEventListener('input', updateValues);
valoresInput[1].addEventListener('input', updateValues);
valoresInput[2].addEventListener('input', updateValues);
valoresInput[3].addEventListener('input', updateValues);