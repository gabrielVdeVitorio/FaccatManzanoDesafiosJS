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
const divParagraphs = document.getElementById('faccat38__div--paragraph');
divParagraphs.innerHTML = '';

const logonoff = (bool) =>
{
  form.hidden = bool;
  divParagraphs.hidden = !bool;
}
  
buttonSubmit.addEventListener('click', (event) =>
{
  event.preventDefault();
  if (accessID !== '1234' || password !== '9999') { form.reset(); return; }
  logonoff(false);
});

buttonLogoff.addEventListener('click', () => { form.reset(); logonoff(true); });