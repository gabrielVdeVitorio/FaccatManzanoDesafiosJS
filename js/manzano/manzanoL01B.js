import createParagraph from "../functions/createParagraph.js";

/*
b) Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus 0Fahrenheit. A fórmula de
conversão é C <- (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em 0Fahrenheit
*/
const divParagraphs = document.getElementById('manzanoL01B__div--paragraphs');
divParagraphs.innerHTML = '';
const grausFahrenheitInput = document.getElementById('manzanoL01B__input--grausFahrenheit');
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'O resultado da conversão será escrito aqui';

const updateValues = () =>
{
  const grausFahrenheit = Number.parseFloat(grausFahrenheitInput.value);
  const grausCelsius = (grausFahrenheit - 32) * 5/9;
  if (Number.isNaN(grausCelsius))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `${grausFahrenheit.toFixed(1)}°C é igual à ${grausCelsius.toFixed(1)}°F.`;
}
updateValues();

grausFahrenheitInput.addEventListener('input', updateValues);