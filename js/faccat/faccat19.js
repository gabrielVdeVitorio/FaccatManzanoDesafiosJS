import createParagraph from "../functions/createParagraph.js";

/*
Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.
*/
const input =
{
  primeiroValor: document.getElementById('faccat19__input--primeiroValor'),
  segundoValor: document.getElementById('faccat19__input--segundoValor')
}
const respostaPadrao = 'O maior número aparecerá aqui';
const divParagraphs = document.getElementById('faccat19__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');

const updateValues = () =>
{
  const valor = [Number.parseFloat(input.primeiroValor.value), Number.parseFloat(input.segundoValor.value)];
  if (Number.isNaN(valor[0] + valor[1]))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  if (valor[0] > valor[1])
  {
    resultParagraph.textContent = `O maior é ${valor[0]}.`;
    return;
  }
  resultParagraph.textContent = `O maior é ${valor[1]}.`;
}
updateValues();

input.primeiroValor.addEventListener('input', updateValues);
input.segundoValor.addEventListener('input', updateValues);