function iniciarTimer()
{
  let tempo = Number(document.getElementById("exercicioExtra02__input--tempo").value);
  const contador = document.getElementById('exercicioExtra02__p--contador');
  let segundos = tempo * 60

  let timer = setInterval(function()
  {
    let minutos = Math.floor(segundos / 60)
    let seg = segundos % 60

    contador.replaceChildren(`${minutos}:${String(seg).padStart(2, "0")}`);

    segundos--;

    if(segundos < 0)
    {
      clearInterval(timer)

      contador.replaceChildren("Tempo Encerrado!");
    }
  }, 1000);
}

document.getElementById('exercicioExtra02__button--iniciar-timer').onclick = iniciarTimer();