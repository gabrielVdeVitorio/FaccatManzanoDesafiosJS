let opcaoMoeda, real;
const conversao =
[   
    { cotacao: 1/5.14, simbolo: '$' },
    { cotacao: 1/5.95, simbolo: '€'},
    { cotacao: 1/6.94, simbolo: '£' }
];

alert('Converta Reais (R$) para diversas outras moedas');
real = parseFloat( prompt("Digite o valor a ser convertido (em R$):") );
opcaoMoeda = parseInt(prompt
(
    `Digite o número correspondente à qual moeda deseja converter:
    1 - Dólar;
    2 - Euro;
    3 - Libra.`
))-1;

resultado = conversao[opcaoMoeda].cotacao*real;
alert(`R$${real.toFixed(2)} equivale à ${conversao[opcaoMoeda].simbolo}${resultado}!`);