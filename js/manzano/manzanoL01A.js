import createParagraph from "../functions/createParagraph.js";

/*
Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de
conversão é F ← (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
*/
const divParagraphs = document.getElementById('manzanoL01A__div--paragraphs');
divParagraphs.innerHTML = '';
const grausCelsiusInput = document.getElementById('manzanoL01A__input--grausCelsius');
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'O resultado da conversão será escrito aqui';

const updateValues = () =>
{
  const grausCelsius = Number.parseFloat(grausCelsiusInput.value);
  const grausFahrenheit = (9 * grausCelsius + 160)/5;
  if (Number.isNaN(grausFahrenheit))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `${grausCelsius}°C é igual à ${grausFahrenheit}°F.`;
}
updateValues();

grausCelsiusInput.addEventListener('input', updateValues);