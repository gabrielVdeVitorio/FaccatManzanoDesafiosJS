let numero;

alert("Dia da semana correspondente.");
numero = parseInt(prompt("Digite o número correspondente a um dia da semana:"));

switch(numero)
{
case 1:
    alert("O dia correspondente é Domingo");
    break;
case 2:
    alert("O dia correspondente é Segunda-feira");
    break;
case 3:
    alert("O dia correspondente é Terça-feira");
    break;
case 4:
    alert("O dia correspondente é Quarta-feira");
    break;
case 5:
    alert("O dia correspondente é Quinta-feira");
    break;
case 6:
    alert("O dia correspondente é Sexta-feira");
    break;
case 7:
    alert("O dia correspondente é Sábado");
    break;
default:
    alert("Não há dia da semana correspondente!");
}

location.reload();