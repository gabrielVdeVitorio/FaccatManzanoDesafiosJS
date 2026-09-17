let numeroBase, finalTabuada, i, resultado;
const form = document.getElementById('fourthExercise--form');

numeroBase = Number.parseInt(prompt('Digite um número base para a tabuada:'));
finalTabuada = Number.parseInt(prompt('Digite o final da tabuada (15, por exemplo):'));

const paragraph = document.createElement('p');
while(i < finalTabuada)
{
    resultado = numeroBase * (i+1);
    paragraph.textContent = `${numeroBase} * ${finalTabuada} = ${resultado}`;
    form.appendChild(paragraph);
    i++;
}