import createParagraph from "../functions/createParagraph.js";

/*
e) Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o
total do somatório da fatorial de cada valor lido.
*/
const valoresInput = [];
let i = 1;
while (i < 16)
{
  valoresInput.push(document.getElementById(`manzanoL04E__input--valor${i}`));
  valoresInput[i - 1].addEventListener('input', updateValues);
  i++;
}
const divParagraphs = document.getElementById('manzanoL04E__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, 'Aqui será escrito o somatório da fatorial dos valores digitados!');

function updateValues()
{
  let somaFatorial = 0;
  let i = 0;
  while (i < valoresInput.length)
  {
    let j = 1;
    let fatorialBase = valoresInput[i].valueAsNumber;
    let fatorial = fatorialBase || 1;
    if (Number.isNaN(fatorialBase))
    {
      resultParagraph.style.color = '#0003';
      resultParagraph.textContent = 'Aqui será escrito o somatório da fatorial dos valores digitados!';
      return;
    }
    while (j < fatorialBase)
    {
      console.log('fatorial: ' + fatorial + ' = ' + fatorialBase + ' - ' + j);
      fatorial *= fatorialBase - j;
      j++;
    }
    somaFatorial += fatorial;
    i++;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `O somatório do fatorial dos valores digitados é: ${somaFatorial}`;
}
updateValues();