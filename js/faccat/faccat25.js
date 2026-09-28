import createParagraph from "../functions/createParagraph.js";

/*
Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.
*/
const divParagraphs = document.getElementById('faccat25__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'O saldo atual da sua conta será escrito aqui';
const input =
{
  numeroDaConta: document.getElementById('faccat25__input--numeroDaConta'),
  saldo: document.getElementById('faccat25__input--saldo'),
  debitos: document.getElementById('faccat25__input--debitos'),
  creditos: document.getElementById('faccat25__input--creditos')
}

const updateValues = () =>
{
  const saldoAtual = Number.parseFloat(input.saldo.value) - Number.parseFloat(input.debitos.value) + Number.parseFloat(input.creditos.value);
  if (Number.isNaN(saldoAtual))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `O saldo atual da sua conta é R$${saldoAtual}`;
}
updateValues();

input.saldo.addEventListener('input', updateValues);
input.debitos.addEventListener('input', updateValues);
input.creditos.addEventListener('input', updateValues);