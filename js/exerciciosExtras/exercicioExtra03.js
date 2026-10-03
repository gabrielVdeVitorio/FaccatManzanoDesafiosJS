const buttonAcender = document.getElementById('exerciciosExtras03--buttonAcender');
const buttonApagar = document.getElementById('exerciciosExtras03--buttonApagar');
const lampImg = document.getElementById('exerciciosExtras03__img');
let count = 5;

const quebrarLampada =
{
  0: () => { buttonAcender.disabled = true; buttonApagar.disabled = true; lampImg.alt = 'Lâmpada quebrada'; },
  1: () => { console.log(`A lâmpada só aguenta mais ${count} cliques!`); }
}

buttonAcender.onclick = () => { lampImg.src = './img/exerciciosExtras/exercicioExtra03/bulbon.png'; lampImg.alt = 'Lâmpada acessa'; };
buttonApagar.onclick = () =>
{
  count -= 1;
  lampImg.src = './img/exerciciosExtras/exercicioExtra03/bulboff.png';
  lampImg.alt = 'Lâmpada acessa';
  quebrarLampada[+!!count]();
};