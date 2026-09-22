let resultado, sinalDeOperacao, numero;
numero = new Array(2);

const operacaoInput = document.getElementById('div__input--sinal-de-operacao');
const numeroInput = [document.getElementById('div__input--valor01'), document.getElementById('div__input--valor02')];
const resultadoField = document.getElementById('div__p--calculo-resultado');

const operacoes = 
{
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b !== 0 ? a / b : 'Segundo valor deve ser diferente de 0',
    '^': (a, b) => Math.pow(a, b)
}

const calcular = (sinalDeOperacao, numero01, numero02) =>
{
    console.log('> Entering calcular function;');
    const operacao = operacoes[sinalDeOperacao];
    if (!operacao || !numero01 || !numero02)
    {
        console.warn(`> Exiting calcular function due to invalid values; ${operacao}, ${numero[0]} ${numero[1]}`);
        resultadoField.style.color = '#0003';
        resultadoField.textContent = `Digite valor válidos para retornar o resultado aqui (operações possíveis: +, -, *, /, ^).`;
        return;
    }
    resultadoField.style.color = '#000';
    resultado = operacao(numero01, numero02);

    resultadoField.textContent = `${numero01} ${sinalDeOperacao} ${numero02} equivale à ${resultado}`;
    console.log('> Exiting calcular function;');
}

operacaoInput.addEventListener('input', (event) => { sinalDeOperacao = event.target.value; calcular(sinalDeOperacao, numero[0], numero[1]); });
numeroInput[0].addEventListener('input', (event) => { numero[0] = event.target.value; calcular(sinalDeOperacao, numero[0], numero[1]); });
numeroInput[1].addEventListener('input', (event) => { numero[1] = event.target.value; calcular(sinalDeOperacao, numero[0], numero[1]); });