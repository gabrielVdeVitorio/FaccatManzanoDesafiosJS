import createParagraph from "../functions/createParagraph.js";
let grausCelsius;
const fahrenheitInput = document.getElementById('faccat12__input--grausFahrenheit')
const divParagraphs = document.getElementById('faccat12__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');
const respostaPadrao = 'Aqui constará a temperatura em °C';

const updateValues = () =>
{
  const grausFahrenheit = Number.parseFloat(fahrenheitInput.value);
  grausCelsius = (grausFahrenheit-32)/9*5;
  if (grausCelsius)
  {
    resultParagraph.style.color = '#000';
    resultParagraph.textContent = `${grausFahrenheit}°F equivale a ${grausCelsius}°C`;
  }
  else
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
  }
}
updateValues();

fahrenheitInput.addEventListener('input', updateValues);