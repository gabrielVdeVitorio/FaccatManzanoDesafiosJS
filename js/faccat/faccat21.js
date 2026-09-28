import createParagraph from "../functions/createParagraph.js";

/*
21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.
*/
const respostaPadrao = 'Aqui aparecerá a quantidade de horas jogadas.';
const hora =
{
  inicio: document.getElementById('faccat21__input--horaInicio'),
  fim: document.getElementById('faccat21__input--horaFim')
}
const divParagraphs = document.getElementById('faccat21__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const updateValues = () =>
{
  const momento =
  [
    Number.parseInt(hora.inicio.value),
    Number.parseInt(hora.fim.value)+24
  ];
  let qtdDeHoras = (momento[1] - momento[0]) % 24 || 24;
  if (Number.isNaN(momento[0] + momento[1]))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `A quantidade de horas jogadas foi ${qtdDeHoras}`;

}
updateValues();

hora.inicio.addEventListener('input', updateValues);
hora.fim.addEventListener('input', updateValues);