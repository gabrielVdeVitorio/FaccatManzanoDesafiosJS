import createParagraph from "../functions/createParagraph.js";
/*
Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).
*/

let valorParaComparar;
const valorParaCompararInput = document.getElementById('faccat15__input--valorParaComparar');
const divParagraphs = document.getElementById('faccat15__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Digite um valor para comparar.';

const updateValues = () =>
{
    valorParaComparar = Number.parseFloat(valorParaCompararInput.value);
    if (!valorParaComparar && valorParaComparar !== 0)
    {
        resultParagraph.style.color = '#0003';
        resultParagraph.textContent = respostaPadrao;
        return;
    }
    resultParagraph.style.color = '#000';
    if (valorParaComparar < 0)
    {
        resultParagraph.textContent = `${valorParaComparar} é NEGATIVO`;
    }
    else
    {
        resultParagraph.textContent = `${valorParaComparar} é POSITIVO`;
    }
}
updateValues();

valorParaCompararInput.addEventListener('input', updateValues);