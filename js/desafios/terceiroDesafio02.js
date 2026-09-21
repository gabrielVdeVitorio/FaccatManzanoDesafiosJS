import createParagraph from "../functions/createParagraph.js";

let numeroBase, finalTabuada, i, resultado;
const divParagraphs = document.getElementById('terceiroDesafio02__div--paragraphs');
// Erase terceiroDesafio02 paragraph div contents before executing (to avoid multiple executions showing at same time):
divParagraphs.innerHTML = "";

numeroBase = Number.parseInt(prompt('Digite um número base para a tabuada:'));
finalTabuada = Number.parseInt(prompt('Digite o multiplicador final da tabuada (15, por exemplo):'));

i = 0;

const numbersAreValid = () =>
{
    if (Number.isNaN(numeroBase) || Number.isNaN(finalTabuada)) { createParagraph(divParagraphs, `The numbers typed aren't valid!`); return; }
    while(i < finalTabuada+1)
    {
            resultado = numeroBase * i;
            createParagraph(divParagraphs, `${numeroBase} * ${i} = ${resultado}`);
            i++;
    }
}

numbersAreValid();