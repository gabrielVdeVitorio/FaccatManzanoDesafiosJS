import createParagraph from '../functions/createParagraph.js';
/*
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra
*/
let qtdDeMacas, valorFinal;
const preco = [1.30, 1.00] // [varejo, atacado];
const qtdDeMacasInput = document.getElementById('faccat16__input--qtdDeMacas');
const divParagraphs = document.getElementById('faccat16__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'O valor final da compra constará aqui';

const updateValues = () =>
{
  qtdDeMacas = Number.parseInt(qtdDeMacasInput.value) || null;
  if (qtdDeMacas === null || qtdDeMacas < 0)
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  qtdDeMacas = Number.parseInt(qtdDeMacasInput.value);
  let varejoOuAtacado = qtdDeMacas < 12; // If true, the reference will be '0' (varejo), else it will be '1' (atacado);
  console.log(`Varejo ou atacado é: ${varejoOuAtacado}`);
  valorFinal = qtdDeMacas*preco[+!varejoOuAtacado]; // If greater than or equal to 12, multiplies 'qtdDeMacas' by 'atacado' value (R$1,00), else multiplies it by 'varejo' (R$1.30);
  resultParagraph.textContent = `O resultado da compra é: R$${valorFinal.toFixed(2)}`;
}
updateValues();
qtdDeMacasInput.addEventListener('input', updateValues);