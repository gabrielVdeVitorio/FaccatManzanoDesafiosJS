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
const buttonSubmit = document.getElementById('faccat38__button--submit');
const buttonLogoff = document.getElementById('faccat38__button--logoff');
const divTelaDeAcesso = document.getElementById('faccat38__div--telaDeAcesso');
const divTelaLogada = document.getElementById('faccat38__div--telaLogada');
const divParagraphs = document.getElementById('faccat38__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');

const logonoff = (firstState, actualScreen) =>
{
  divParagraphs.style.display = firstState;
  divTelaDeAcesso.style.display = firstState;
  divTelaLogada.style.display = actualScreen;
}

buttonSubmit.addEventListener('click', () =>
{
  console.log('Entering click');
  const accessID = acessoInput.value;
  const password = senhaInput.value;
  if (accessID !== '1234' || password !== '9999')
  {
    resultParagraph.style.cssText =
    `
      background-color: #faa;
      fontWeight: 600;
      color: #fff;
      border: 1px solid #f00;
      border-radius: 1rem;
      padding: 1rem 2rem; 
    `;
    resultParagraph.textContent = 'Senha de acesso incorreta!';
    return;
  }
  logonoff('none', 'flex');
  acessoInput.value = '';
  senhaInput.value = '';
});

buttonLogoff.addEventListener('click', () =>
{
  logonoff('flex', 'none');
});