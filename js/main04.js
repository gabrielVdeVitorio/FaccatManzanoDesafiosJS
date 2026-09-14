let operacao;
let number = new Array(2);
const operacoes = 
{
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b !== 0 ? a / b : 'Segundo valor deve ser diferente de 0',
    '^': (a, b) => a ^ b
}

number[0] = parseFloat(prompt("Digite o primeiro valor da operação:"));
number[1] = parseFloat(prompt("Digite o segundo valor da operação:"));
operacao = prompt("Digite o simbolo da operação que deseja realizar:");

const calcular = operacoes[operacao];
const resultado = calcular ? calcular(number[0], number[1]) : "Opção inválida";

alert(`${number[0]} ${operacao} ${number[1]} é igual a ${resultado}`);
location.reload();