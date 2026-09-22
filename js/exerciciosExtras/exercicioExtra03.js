const buttonAcender = document.getElementById('lampchallenge--buttonAcender');
const buttonApagar = document.getElementById('lampchallenge--buttonApagar');
const lampImg = document.getElementById('lampchallenge--img');
let count = 5;

const quebrarLampada =
{
  0: () => { buttonAcender.disabled = true; buttonApagar.disabled = true; lampImg.alt = 'Lâmpada quebrada'; },
  1: () => { console.log(`A lâmpada só aguenta mais ${count} cliques!`); }
}

buttonAcender.addEventListener('click', () => { lampImg.src = './img/bulbon.png'; lampImg.alt = 'Lâmpada acessa'; });
buttonApagar.addEventListener('click', () => { count -= 1; lampImg.src = './img/bulboff.png'; lampImg.alt = 'Lâmpada acessa'; quebrarLampada[+!!count](); });