// Exercise 08
import createParagraph from "../functions/createParagraph.js";
let quilometros = 5, milhas;
const divParagraphs = document.getElementById('terceiroDesafio06__div--paragraphs');
divParagraphs.innerHTML = "";

while (quilometros < 51)
{
    milhas = quilometros*0.621371;
    createParagraph(divParagraphs, `${quilometros}Km são ${milhas.toFixed(2)} milhas.`);
    quilometros += 5;
}