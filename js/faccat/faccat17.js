import createParagraph from "../functions/createParagraph.js";

/*
Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
aluno é aprovado). Escrever também a média calculada.
*/
let media;
const avaliacaoFinalDoAluno = ['APROVADO', 'REPROVADO'];
const respostaPadrao = 'A avaliação do aluno será escrita aqui!';
const input = 
{
  primeiraNota: document.getElementById('faccat17__input--primeiraNota'),
  segundaNota: document.getElementById('faccat17__input--segundaNota')
}

const divParagraphs = document.getElementById('faccat17__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');

const updateValues = () =>
{
  media = (Number.parseFloat(input.primeiraNota.value) + Number.parseFloat(input.segundaNota.value)) / 2;
  if (Number.isNaN(media) || media < 0)
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `O aluno foi ${avaliacaoFinalDoAluno[+(media < 6)]}, sob a media de ${media}.`;
}
updateValues();


input.primeiraNota.addEventListener('input', updateValues);
input.segundaNota.addEventListener('input', updateValues);