
/*
a) Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de
conversão é F <- (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
*/
import createParagraph from "../functions/createParagraph.js";

const divParagraphs = document.getElementById('manzanoL01A__div--paragraphs');
divParagraphs.innerHTML = '';
const grausCelsiusInput = document.getElementById('manzanoL01A__input--grausCelsius');
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'O resultado da conversão será escrito aqui';

const updateValues = () =>
{
  const grausCelsius = Number.parseFloat(grausCelsiusInput.value);
  const grausFahrenheit = (9 * grausCelsius + 160) / 5;
  if (Number.isNaN(grausCelsius))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `${grausCelsius.toFixed(1)}°C é igual à ${grausFahrenheit.toFixed(1)}°F.`;
}
updateValues();

grausCelsiusInput.addEventListener('input', updateValues);