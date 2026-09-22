/* const myButtonResize = document.getElementById('exercicioExtra04__button--resize');
const myButtonDisappear = document.getElementById('exercicioExtra04__button--hide');
const myResizeableParagraph = document.getElementById('exercicioExtra04__p--resize');
const myHideableParagraph = document.getElementById('exercicioExtra04__p--hide');
let actualSize = 0;
let isHidden = 0;
let cssAttributes = window.getComputedStyle(myResizeableParagraph);
const originalcssAttributes =
{
  fontSize: cssAttributes.fontSize,
  display: cssAttributes.display
}

const resize =
{
  0: () => { myResizeableParagraph.style.fontSize = '5em'; },
  1: () => { myResizeableParagraph.style.fontSize = originalcssAttributes.fontSize; }
}

const hidden =
{
  0: () => { myHideableParagraph.style.display = "none"; },
  1: () => { myHideableParagraph.style.display = originalcssAttributes.display; }
}

myButtonResize.addEventListener('click', () => { resize[actualSize](); actualSize += 1; actualSize &= 1; });
myButtonDisappear.addEventListener('click', () => { hidden[isHidden](); isHidden = (isHidden + 1) & 1; });*/
let resultado;
const numero =
[
  { id: document.getElementById('exercicioExtra04__input--primeiro-valor'), valor: 0 },
  { id: document.getElementById('exercicioExtra04__input--segundo-valor'), valor: 0 }
]

const button =
{
  adicao:         { id: document.getElementById('exercicioExtra05__button--adicao'),        funcao: (a, b) => { return a + b; }},
  subtracao:      { id: document.getElementById('exercicioExtra05__button--subtracao'),     funcao: (a, b) => { return a - b; }},
  multiplicacao:  { id: document.getElementById('exercicioExtra05__button--multiplicacao'), funcao: (a, b) => { return a * b; }},
  divisao:        { id: document.getElementById('exercicioExtra05__button--divisao'),       funcao: (a, b) => { return a / b; }}
}

numero[0].id.addEventListener('input', (event) => { numero[0].valor = event.target.value; console.log(`${event.target.value}`); });
numero[1].id.addEventListener('input', (event) => { numero[1].valor = event.target.value; console.log(`${event.target.value}`); });

button.adicao.id.addEventListener('click', () =>
{
  console.log(`A comparação está resultando em: ${numero[0].value}`);
  console.log(`A comparação está resultando em: ${numero[1].value}`);
  console.log(`A comparação está resultando em: ${resultado}`);
  resultado = button.adicao.funcao(numero[0].valor, numero[1].valor);
});
button.subtracao.id.addEventListener('click', () => {});
button.multiplicacao.id.addEventListener('click', () => {});
button.divisao.id.addEventListener('click', () => {});