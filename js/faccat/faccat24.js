// Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
// ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
// ultrapassar este valor, calcular e escrever o seu salário total.
import createParagraph from "../functions/createParagraph.js";

const input =
{
  salarioFixo: document.getElementById('faccat24__input--salarioFixo'),
  vendasEfetuadas: document.getElementById('faccat24__input--vendasEfetuadas')
}
const divParagraphs = document.getElementById('faccat24__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'O salário total será escrito aqui!';

const updateValues = () =>
{
  const salarioFixo = Number.parseFloat(input.salarioFixo.value);
  const vendasEfetuadas = Number.parseFloat(input.vendasEfetuadas.value);
  if (Number.isNaN(salarioFixo+vendasEfetuadas))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  const salarioTotal = salarioFixo + (+!!Number.parseInt(vendasEfetuadas/1500))*1500*0.03 + (vendasEfetuadas-1500)*(+(vendasEfetuadas > 1500)*0.05);
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `O salário total é R$${salarioTotal}`;
}
updateValues();

input.salarioFixo.addEventListener('input', updateValues);
input.vendasEfetuadas.addEventListener('input', updateValues);