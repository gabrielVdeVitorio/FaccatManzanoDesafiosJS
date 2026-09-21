const buttonAcender = document.getElementById('lampchallenge--buttonAcender');
const buttonApagar = document.getElementById('lampchallenge--buttonApagar');
const lampImg = document.getElementById('lampchallenge--img');
let count = 5;

const quebrarLampada =
{
  0: () => { buttonAcender.disabled = true; buttonApagar.disabled = true; },
  1: () => { console.log(`A lâmpada só aguenta mais ${count} cliques!`); }
}

buttonAcender.addEventListener('click', () => { lampImg.src = './img/bulbon.png'; });
buttonApagar.addEventListener('click', () => { count -= 1; lampImg.src = './img/bulboff.png'; quebrarLampada[+!!count](); });