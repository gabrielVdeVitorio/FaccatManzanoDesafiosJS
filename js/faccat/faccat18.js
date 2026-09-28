import createParagraph from "../functions/createParagraph.js";

/*
Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
*/
let idade;
const anoDeNascimentoInput = document.getElementById('faccat18__input--anoDeNascimento');
const respostaPadrao = 'Aqui estará escrito se você pode votar';
const possiveisRespostas = ['PODE VOTAR!', 'NÃO PODE VOTAR!'];
const divParagraphs = document.getElementById('faccat18__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');

const updateValues = () =>
{
  idade = (new Date().getFullYear()) - Number.parseInt(anoDeNascimentoInput.value);
  if (Number.isNaN(idade) || idade > 110 || idade < 0)
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `Você tem ${idade} anos, ${possiveisRespostas[+(idade < 16)]}`;
}
updateValues();

anoDeNascimentoInput.addEventListener('input', updateValues);