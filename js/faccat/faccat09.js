import createParagraph from "../functions/createParagraph.js";

let resultado, resultParagraph;
const divParagraphs = document.getElementById('faccat09__div--paragraphs');
divParagraphs.innerHTML = '';
resultParagraph = createParagraph(divParagraphs, '');

const input =
{
  reajuste: document.getElementById('faccat09__input--reajuste'),
  salarioAtual: document.getElementById('faccat09__input--salarioAtual')
}

const updateValues = () =>
{
  resultado = Number.parseFloat(input.salarioAtual.value)*(1+Number.parseFloat(input.reajuste.value)/100);
  if (resultado)
  {
    resultParagraph.style.color = '#000';
    resultParagraph.textContent = `O salário final do funcionário é R$${resultado.toFixed(2)}`;
  }
  else
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = `Aqui constará o resultado final.`;
  }
}
updateValues();

input.reajuste.addEventListener('input', updateValues);
input.salarioAtual.addEventListener('input', updateValues);
