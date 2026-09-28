import createParagraph from "../functions/createParagraph.js";
let media;
const divParagraphs = document.getElementById('faccat13__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'A media do aluno aparecerá aqui';

const input =
{
  primeiraNota: document.getElementById('faccat13__input--primeiraNota'),
  segundaNota: document.getElementById('faccat13__input--segundaNota'),
  terceiraNota: document.getElementById('faccat13__input--terceiraNota')
}

const updateValues = () =>
{
  media = (Number.parseFloat(input.primeiraNota.value)*2 + Number.parseFloat(input.segundaNota.value)*3 + Number.parseFloat(input.terceiraNota.value)*5) / 10;
  if (media)
  {
    resultParagraph.style.color = '#000';
    resultParagraph.textContent = `A media ponderada é ${media}`;
  }
  else
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
  }
}
updateValues();

input.primeiraNota.addEventListener('input', updateValues);
input.segundaNota.addEventListener('input', updateValues);
input.terceiraNota.addEventListener('input', updateValues);