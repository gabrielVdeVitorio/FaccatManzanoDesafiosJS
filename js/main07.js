let numeroBase, finalTabuada, i, resultado;
const form = document.getElementById('fourthExercise--form');
// Erase form contents before executing (to avoid multiple executions showing at same time):
form.innerHTML = "";

numeroBase = Number.parseInt(prompt('Digite um número base para a tabuada:'));
finalTabuada = Number.parseInt(prompt('Digite o final da tabuada (15, por exemplo):'));

i = 0;
const createParagraph = (paragraphContent) =>
{
    const paragraph = document.createElement('p');
    paragraph.textContent = paragraphContent;
    form.appendChild(paragraph);
}

const numbersAreValid = () =>
{
    if (Number.isNaN(numeroBase) || Number.isNaN(finalTabuada)) { createParagraph(`The numbers typed aren't valid!`); return; }
    while(i < finalTabuada+1)
    {
            resultado = numeroBase * i;
            createParagraph(`${numeroBase} * ${i} = ${resultado}`);
            i++;
    }
}

numbersAreValid();