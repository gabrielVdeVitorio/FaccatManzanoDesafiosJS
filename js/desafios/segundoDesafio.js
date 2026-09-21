/*
1° Determinar o Trimestre do Ano:
2° Determinar a Estação Astronômica no Hemisfério Sul:

    Verão: 21 de Dezembro a 20 de Março

    Outono: 21 de Março a 20 de Junho

    Inverno: 21 de Junho a 20 de Setembro

    Primavera: 21 de Setembro a 20 de Dezembro
*/

let dia, mes, estacao, trimestre;

alert("Digite dia e mês para saber o trimestre correspondente e a estação do ano");
dia = parseInt(prompt("Digite o dia:"));
mes = parseInt(prompt("Digite o mês:"));

switch (mes) {
    case 1: case 2: case 3:
        trimestre = "Primeiro trimestre";
        break;
    case 4: case 5: case 6:
        trimestre = "Segundo trimestre";
        break;
    case 7: case 8: case 9:
        trimestre = "Terceiro trimestre";
        break;
    case 10: case 11: case 12:
        trimestre = "Quarto trimestre";
        break;
}

switch(true) {
    case (mes == 12 && dia > 20) || (mes == 1) || (mes == 2) || (mes == 3 && dia < 21):
        estacao = "Verão";
        break;
    case (mes == 3 && dia > 20) || (mes == 4) || (mes == 5) || (mes == 6 && dia < 21):
        estacao = "Outono";
        break;
    case (mes == 6 && dia > 20) || (mes == 7) || (mes == 8) || (mes == 9 && dia < 21):
        estacao = "Inverno";
        break;
    case (mes == 9 && dia > 20) || (mes == 10) || (mes == 11) || (mes == 12 && dia < 21):
        estacao = "Primavera";
        break;
}

alert(`O dia e o mês digitado pertence ao ${trimestre} e, conforme o calendário do hemisfério sul, a estação é ${estacao}`);