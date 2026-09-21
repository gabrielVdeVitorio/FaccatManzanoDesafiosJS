// Exercise 09
import createParagraph from "../createParagraph.js";
let soma = 0, media, numero, qtdDeNumeros = -1  ;
const divParagraphs = document.getElementById('terceiroDesafio07__div--paragraphs');
divParagraphs.innerHTML = '';

alert('Calcule a media aritmetica da de quantos números você digitar');

while(numero !== 0)
{
    numero = Number.parseFloat(prompt('Digite um numero para adicionar à soma:')) || 0;
    soma += numero;
    qtdDeNumeros++;
}

media = soma/qtdDeNumeros;
createParagraph(divParagraphs, `A média de ${soma} é ${media}.`);