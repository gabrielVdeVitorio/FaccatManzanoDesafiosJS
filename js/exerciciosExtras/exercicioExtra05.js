import createParagraph from '../functions/createParagraph.js';

const divParagraphs = document.getElementById('exercicioExtra05__div--paragraphs');
divParagraphs.innerHTML = '';

class Operacoes
{
  constructor(arrayDeValores)
  {
    this.valores = arrayDeValores;
  }
  soma()
  {
    let soma = 0;
    for (const parcela of this.valores)
    {
      soma += parcela;
    }
    return soma;
  }
  subtracao()
  {
    let diferenca = this.valores[0];
    for (const subtraendo of this.valores.slice(1))
    {
      diferenca -= subtraendo;
    }
    return diferenca;
  }
  multiplicacao()
  {
    let produto = 1;
    for (const fator of this.valores)
    {
      produto *= fator;
    }
    return produto;
  }
  divisao()
  {
    let quociente = this.valores[0];
    for (const divisor of this.valores.slice(1))
    {
      if(divisor) {quociente = quociente/divisor;}
    }
    return quociente;
  }
}
const arrReferencia = [20, 100, 200, 500, 2, 0.1, 0.07];
const conjuntoDeValores01 = new Operacoes(arrReferencia);

createParagraph(divParagraphs, `A soma do conjunto de valores 01 (${arrReferencia}): ${conjuntoDeValores01.soma()}`);
createParagraph(divParagraphs, `A diferença do conjunto de valores 01 (${arrReferencia}): ${conjuntoDeValores01.subtracao()}`);
createParagraph(divParagraphs, `O produto do conjunto de valores 01 (${arrReferencia}): ${conjuntoDeValores01.multiplicacao()}`);
createParagraph(divParagraphs, `O quociente do conjunto de valores 01 (${arrReferencia}): ${conjuntoDeValores01.divisao()}`);