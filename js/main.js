let valorDigitado;

alert("Verifique se um número é negativo ou positivo");
valorDigitado = parseFloat( prompt("Digite um valor para comparar:") );

if (valorDigitado < 0)
{
    alert(`${valorDigitado} é NEGATIVO!`);
}
else
{
    alert(`${valorDigitado} é POSITIVO!`);
}

location.reload();