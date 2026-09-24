let anos, meses, dias, totalDeDiasDeIdade;
const divParagraphs = document.getElementById('faccat07__div--paragraphs');
const paragraphElement = document.createElement('p');
divParagraphs.appendChild(paragraphElement);

const input =
{
  forAnos: document.getElementById('faccat07__input--idadeAnos'),
  forMeses: document.getElementById('faccat07__input--idadeMeses'),
  forDias: document.getElementById('faccat07__input--idadeDias')
}

input.forAnos.addEventListener('input', () => { updateCalculo(); });
input.forMeses.addEventListener('input', () => { updateCalculo(); });
input.forDias.addEventListener('input', () => { updateCalculo(); });

const resultIsValid =
{
  true: () => 
  { 
    paragraphElement.style.color = '#000';
    paragraphElement.textContent = `A sua idade expressa em dias é igual a ${totalDeDiasDeIdade}.`;
  },
  false: () => 
  {
    paragraphElement.style.color = '#0003';
    paragraphElement.textContent = `Valor menor do que 0 não são válidos.`;
  }
}

const updateCalculo = () =>
{
  anos = Number.parseInt(input.forAnos.value) || 0;
  meses = Number.parseInt(input.forMeses.value) || 0;
  dias = Number.parseInt(input.forDias.value) || 0;
  let boolComparision = (anos>>31 | meses>>31 | dias>>31);
  totalDeDiasDeIdade = anos*365 + meses*30 + dias;
  resultIsValid[!boolComparision]();
}

updateCalculo();