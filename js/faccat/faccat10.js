import createParagraph from "../functions/createParagraph.js";

let valorFinal = 0;
const divParagraphs = document.getElementById('faccat10__div--paragraphs');
const valorDeFabricaInput = document.getElementById('faccat10__input--valorDeFabrica');
divParagraphs.innerHTML = '';
const taxas = [0.28, 0.45];
const respostaPadrao = 'Digite um valor válido e aqui constará o valor final do carro';
const paragraph = createParagraph(divParagraphs, respostaPadrao);

const updateValues = () =>
{
  valorFinal = Number.parseFloat(valorDeFabricaInput.value) * (1 + taxas[0] + taxas[1]);
  if (valorFinal)
  {
    paragraph.style.color = '#000';
    paragraph.textContent = `O preço final do carro é R$${valorFinal.toFixed(2)}`;
  }
  else
  {
    paragraph.style.color = '#0003';
    paragraph.textContent = respostaPadrao;
  }
}
updateValues();

valorDeFabricaInput.addEventListener('input', updateValues);