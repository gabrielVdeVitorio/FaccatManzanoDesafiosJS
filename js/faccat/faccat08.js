let votosBrancos, votosNulos, votosValidos, totalDeVotos;
const divParagraphs = document.getElementById('faccat08__div--paragraphs');
const paragraph = document.createElement('p');
divParagraphs.appendChild(paragraph);

const input =
{
  votosBrancos: document.getElementById('faccat08__input--votosBrancos'),
  votosNulos: document.getElementById('faccat08__input--votosNulos'),
  votosValidos: document.getElementById('faccat08__input--votosValidos')
}

input.votosBrancos.addEventListener('input', () => {updateVotos();});
input.votosNulos.addEventListener('input', () => {updateVotos();});
input.votosValidos.addEventListener('input', () => {updateVotos();});

const updateVotos = () =>
{
  votosBrancos = Number.parseInt(input.votosBrancos.value) || 0;
  votosNulos = Number.parseInt(input.votosNulos.value) || 0;
  votosValidos = Number.parseInt(input.votosValidos.value) || 0;
  totalDeVotos = votosBrancos + votosNulos + votosValidos;
  if (totalDeVotos)
  { 
    paragraph.style.color = '#000';
    paragraph.textContent =
    `Os percentuais de votos válidos são:
    Branco: ${(votosBrancos/totalDeVotos*100).toFixed(2)}%,
    Nulos: ${(votosNulos/totalDeVotos*100).toFixed(2)}%,
    Válidos: ${(votosValidos/totalDeVotos*100).toFixed(2)}%.`;
  }
  else
  {
    paragraph.style.color = '#0003';
    paragraph.textContent = 'Os votos não podem conter números negativos.';
  }
}

updateVotos();