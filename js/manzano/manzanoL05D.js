/*
d) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de
1 até 500.
*/

const divParagraphs = document.getElementById('manzanoL05D__div--paragraphs');

const updateValues = () =>
{
  let soma = 0;
  for (let i = 0; i < 501; i += 2)
  {
    soma += i;
  }
  divParagraphs.replaceChildren( document.createElement('p').textContent = 'A soma dos valores pares entre 1 e 500 é igual a ' + soma + '.' );
}
updateValues();