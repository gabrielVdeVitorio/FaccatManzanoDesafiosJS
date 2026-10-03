/*
k) Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha,
banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do
nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área
do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar
calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor
total acumulado da área residencial.
*/
import createParagraph from '../functions/createParagraph.js';

const lastHr = document.getElementById('manzanoL03K__hr--lastHrElement');
const inputs = [];
const buttons =
{
  removerComodo: document.getElementById('manzanoL03K__button--removerComodo'),
  adicionarComodo: document.getElementById('manzanoL03K__button--adicionarComodo')
};
const divParagraphs = document.getElementById('manzanoL03K__div--paragraphs');
divParagraphs.innerHTML = '';
const resultParagraph = createParagraph(divParagraphs, '');

const updateValues = () =>
{
  const area = [];
  let soma = 0;
  let i = 0;
  while (i < inputs.length)
  {
    const largura = inputs[i].largura.valueAsNumber;
    const comprimento = inputs[i].comprimento.valueAsNumber;
    area.push(largura * comprimento);
    soma += area[i];
    i++;
  }
  if (Number.isNaN(soma))
  {
    resultParagraph.style.color = '#0003';
    resultParagraph.textContent = 'Aqui será escrita a área total da residência!';
    return;
  }
  const areaTotal = area.reduce((accumulator, currentValues) => accumulator + currentValues, 0);
  resultParagraph.style.color = '#000';
  resultParagraph.textContent = `Área total da residência: ${areaTotal} m², com ${inputs.length} cômodos.`;
}
let i = 0;
while (i < inputs.length)
{
  inputs[i].largura.oninput = updateValues;
  inputs[i].comprimento.oninput = updateValues;
  i++;
}

buttons.removerComodo.onclick = removerComodo;
buttons.adicionarComodo.onclick = adicionarComodo;

function removerComodo()
{
  if (inputs.length > 1)
  {
    inputs.pop();
    document.querySelector('#manzanoL03K .div--inputs.comprimento:not(:has(~ .div--inputs.comprimento))')?.remove();
    document.querySelector('#manzanoL03K .div--inputs.largura:not(:has(~ .div--inputs.largura))')?.remove();
    document.querySelector('#manzanoL03K .hr--lastHrElement.enumeration:not(:has(~ .hr--lastHrElement.enumeration))')?.remove();
    updateValues();
  }
}

function adicionarComodo()
{
  const enumeration = inputs.length + 1;
  
  lastHr.insertAdjacentHTML('beforebegin',
  `
    <hr class="hr--lastHrElement enumeration"/>
    <div class="div--inputs largura">
      <label for="manzanoL03K__input--largura${enumeration}">Digite a largura do cômodo (em metros):</label>
      <input id="manzanoL03K__input--largura${enumeration}" title="Largura do Cômodo" min="0" placeholder="5" type='number'/>
    </div>
    <div class="div--inputs comprimento">
      <label for="manzanoL03K__input--comprimento${enumeration}">Digite o comprimento do cômodo (em metros):</label>
      <input id="manzanoL03K__input--comprimento${enumeration}" title="Comprimento do Cômodo" min="0" placeholder="5" type='number'/>
    </div>
  `);
  inputs.push
  (
    {
      largura: document.getElementById(`manzanoL03K__input--largura${enumeration}`),
      comprimento: document.getElementById(`manzanoL03K__input--comprimento${enumeration}`)
    }
  );
  inputs[enumeration - 1].largura.oninput = updateValues;
  inputs[enumeration - 1].comprimento.oninput = updateValues;
  updateValues();
}
/*
function cadastrarInputs()
{
  const inputsLargura = document.querySelectorAll('#manzanoL03K .div--inputs.largura input');
  const inputsComprimento = document.querySelectorAll('#manzanoL03K .div--inputs.comprimento input');
  let i = 0;
  while (i < inputsLargura.length)
  {
    inputs[i] = {largura: inputsLargura[i], comprimento: inputsComprimento[i]};
    i++;
  }
}
*/

adicionarComodo();
while(inputs.length > 1)
{
  removerComodo();
}