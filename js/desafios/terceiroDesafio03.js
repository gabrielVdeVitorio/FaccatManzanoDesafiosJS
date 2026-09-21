// Exercise 05
import createParagraph from "../functions/createParagraph.js";
let soma, i;

soma = 0;
i = 0;

const divParagraphs = document.getElementById('terceiroDesafio03--paragraphs');
divParagraphs.innerHTML = '';

const somaSeDivisivelPor5 =
{
    0: () => { soma += i; i++ },
    1: () => { i++; }
}

while(i < 251)
{
    somaSeDivisivelPor5[+!!(i % 5)]();
}

createParagraph(divParagraphs, `A soma de todos os números entre 1 e 250 divisíveis por 5 é ${soma}`);