import createParagraph from "../functions/createParagraph.js";

/*
Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso
contrário escrever NÃO É MAIOR QUE 10!
*/
let valorAtual;
const divParagraphs = document.getElementById('faccat14__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui constará o resultado (se é ou não é maior do que 10)';
const valorParaCompararInput = document.getElementById('faccat14__input--valorParaComparar');

const updateValues = () =>
{
  valorAtual = Number.parseFloat(valorParaCompararInput.value);
  if (!valorAtual && valorAtual !== 0)
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  if (valorAtual > 10)
  {
    resultParagraph.textContent = `${valorAtual} é MAIOR do que 10!`;
  }
  else
  {
    resultParagraph.textContent = `${valorAtual} é MENOR do que 10!`;
  }
}
updateValues();

valorParaCompararInput.addEventListener('input', updateValues);