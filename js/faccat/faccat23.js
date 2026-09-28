import createParagraph from "../functions/createParagraph.js";

/*
Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contém
erros, identifique os erros no algoritmo apresentado abaixo:
Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule
e mostre seu peso ideal, utilizando as seguintes fórmulas:
- para sexo masculino: peso ideal = (72.7 * altura) - 58
- para sexo feminino: peso ideal = (62.1 * altura) - 44.7
inicio
ler nome
ler sexo
se sexo = M então
peso_ideal <- (72.7 * altura) - 58
senão
peso_ideal <- (62.1 * altura) – 44.7
fim_se
escrever peso_ideal
fim
*/
const input = 
{
  altura: document.getElementById('faccat23__input--altura'),
  nome: document.getElementById('faccat23__input--nome'),
  masculino: document.getElementById('faccat23__input--masculino'),
  feminino: document.getElementById('faccat23__input--feminino')
}
const divParagraphs = document.getElementById('faccat23__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');

const calcularPesoIdeal =
{
  masculino: (altura) => (72.7 * altura) - 58,
  feminino: (altura) => (62.1 * altura) - 44.7
}

const updateValues = () =>
{
  const altura = Number.parseFloat(input.altura.value);
  const nome = input.nome.value;
  const sexoSelecionado = document.getElementById('faccat23').querySelector('input[name="sexo"]:checked');
  
  if (!sexoSelecionado)
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = respostaPadrao;
    return;
  }
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `O peso ideal para ${nome} é ${calcularPesoIdeal[sexoSelecionado.value](altura).toFixed(2)}`;
}
updateValues();

input.altura.addEventListener('input', updateValues);
input.nome.addEventListener('input', updateValues);
input.masculino.addEventListener('change', updateValues);
input.feminino.addEventListener('change', updateValues);

const testFunction = () =>
{
  console.log('testing');
}