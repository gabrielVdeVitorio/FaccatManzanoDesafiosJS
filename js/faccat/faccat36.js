import createParagraph from "../functions/createParagraph.js";

/*
Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
novo com a mulher mais velha
*/
const inputs =
[
  document.getElementById('faccat36__input--idadeHomem01'),
  document.getElementById('faccat36__input--idadeHomem02'),
  document.getElementById('faccat36__input--idadeMulher01'),
  document.getElementById('faccat36__input--idadeMulher02')
];
const divParagraphs = document.getElementById('faccat36__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'A soma das idades do mais velho e da mais nova será escrita aqui.';

const updateValues = () =>
{
  const idades = 
  [
    Number.parseInt(inputs[0].value),
    Number.parseInt(inputs[1].value),
    Number.parseInt(inputs[2].value),
    Number.parseInt(inputs[3].value)
  ];

  if (Number.isNaN(idades[0] + idades[1] + idades[2] + idades[3]))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `A soma é ${Math.max(idades[0], idades[1]) + Math.min(idades[2], idades[3])}`;
}
updateValues();

inputs[0].addEventListener('input', updateValues);
inputs[1].addEventListener('input', updateValues);
inputs[2].addEventListener('input', updateValues);
inputs[3].addEventListener('input', updateValues);