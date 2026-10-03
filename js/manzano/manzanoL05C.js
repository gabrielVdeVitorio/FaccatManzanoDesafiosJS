/*
c) Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).
*/

const divParagraphs = document.getElementById('manzanoL05C__div--paragraphs');

const updateValues = () =>
{
  let soma = 0;
  for (let i = 1; i < 101; i++)
  {
    soma += i;
  }
  divParagraphs.replaceChildren( document.createElement('p').textContent = 'A soma dos cem primeiros números inteiros é igual a ' + soma + '.' );
}
updateValues();