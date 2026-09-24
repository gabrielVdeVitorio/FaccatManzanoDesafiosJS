import createParagraph from '../functions/createParagraph.js';

const divParagraphs = document.getElementById('faccat01__div--paragraphs');
divParagraphs.innerHTML = '';
alert('Calcule o antecessor de um número');

let numero = Number.parseInt(prompt('Digite um número:'));

createParagraph(divParagraphs, `O antecessor de ${numero} é ${numero-1}`);