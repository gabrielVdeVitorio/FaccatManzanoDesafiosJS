let resultado, calcular, operacao, numero;
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


const calcularIfIsAfunction = () =>
    {
        calcular = operacoes[operacao];
        try
    {
        const handlers =
        {
            true: () => calcular(numero[0], numero[1]),
            false: () => null
        }
        resultado = handlers[Boolean(numero[0] && numero[1])];
        resultadoField.style.color = '#000';
        resultadoField.textContent = `A operação de ${numero[0]} ${operacao} ${numero[1]} é igual a ${resultado}`;
    }
    catch(error)
    {
        resultadoField.style.color = '#0003';
        resultadoField.textContent = `Digite valores válidos e aqui constará o resultado!`;
        console.error(`Operação digitada '${operacao}' não correponde à nenhuma operação: ${Object.keys(operacoes)} .`);
    }
    
};

operacaoInput.addEventListener( 'input', (event) => { operacao = event.target.value; calcularIfIsAfunction(); } );
numeroInput[0].addEventListener( 'input', (event) => { numero[0] = event.target.value; calcularIfIsAfunction(); } );
numeroInput[1].addEventListener( 'input', (event) => { numero[1] = event.target.value; calcularIfIsAfunction(); } );
