/*
Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a
senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.
*/

import createParagraph from "../functions/createParagraph.js";

const acessoInput = document.getElementById('faccat38__input--acesso');
const senhaInput = document.getElementById('faccat38__input--senha');
const form = document.getElementById('faccat38__form');
const buttonSubmit = document.getElementById('faccat38__button--submit');
const buttonLogoff = document.getElementById('faccat38__button--logoff');
const divTelaDeAcesso = document.getElementById('faccat38__div--telaDeAcesso');
const divTelaLogada = document.getElementById('faccat38__div--telaLogada');
const divParagraphs = document.getElementById('faccat38__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');

const logonoff = (bool) =>
{
  divParagraphs.hidden = bool;
  divTelaDeAcesso.hidden = bool;
  divTelaLogada.hidden = !bool;
}

buttonSubmit.addEventListener('click', () =>
{
  console.log('Entering click');
  const accessID = acessoInput.value;
  const password = senhaInput.value;
  if (accessID !== '1234' || password !== '9999')
  {
    resultParagraph.style.backgroundColor = '#f00';
    resultParagraph.style.fontWeight = '600';
    resultParagraph.style.color = '#fff';
    resultParagraph.textContent = 'Senha de acesso incorreta!';
    return;
  }
  logonoff(false);
});

buttonLogoff.addEventListener('click', () =>
{
  logonoff(true);
});