import createParagraph from "../functions/createParagraph.js";
let area;
const lados = new Array(2);
const divParagraphs = document.getElementById('faccat02__div--paragraphs');
const divRectangle = document.getElementById('faccat02__div--rectangleDrawing');
const paragraphResult = document.createElement('p');
divParagraphs.innerHTML = '';
divParagraphs.appendChild(paragraphResult);

const inputs =
{
  comprimento: document.getElementById('faccat02__input--comprimento'),
  altura: document.getElementById('faccat02__input--altura')
}

const drawRectangle = (lado01, lado02, hideBool) =>
{
  divRectangle.hidden = !hideBool;
  divRectangle.style.width = lado01*10 + 'px';
  divRectangle.style.height = lado02*10 + 'px';
}

const updateRectangleDimensions = () =>
{
  const falseOrTrue =
  {
    true: () =>
    {
      drawRectangle(lados[0], lados[1], true);
      area = lados[0]*lados[1];
      paragraphResult.style.color = '#000';
      paragraphResult.textContent = `A área do retângulo de dimensões ${lados[0]}x${lados[1]} é ${area}`;
    },
    false: () =>
    {
      drawRectangle(0, 0, false);
      paragraphResult.style.color = '#0003';
      paragraphResult.textContent = `A área do retângulo aparecerá aqui!`;
    }
  }
  lados[0] = Math.abs(Number.parseFloat(inputs.comprimento.value));
  lados[1] = Math.abs(Number.parseFloat(inputs.altura.value));
  falseOrTrue[!!(lados[0]*lados[1])]();

  
}
inputs.comprimento.addEventListener('input', () =>
{
  updateRectangleDimensions();
});

inputs.altura.addEventListener('input', () =>
{
  updateRectangleDimensions();
});

updateRectangleDimensions();