/*
 Para A = V, B = V e C = F, qual o resultado da avaliação das seguintes expressões: 
a) (A e B) ou (A xou B) 
b) (A ou B) e (A e C) 
c) A ou C e B xou A e não B 
*/

import createParagraph from "../functions/createParagraph.js";

const divParagraphs = document.getElementById('faccat39__div--paragraphs');
divParagraphs.innerHTML = '';
createParagraph(divParagraphs, `a) ${(true && true) || (xor(true, true))}`);
createParagraph(divParagraphs, `b) ${(true || true) && (true && false)}`);
createParagraph(divParagraphs, `c) ${xor(true || false && true, true) && !true}`);

function xor(a, b)
{
  if (a === b) return false;
  return a || b;
}