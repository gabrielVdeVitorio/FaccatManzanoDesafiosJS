function iniciarTimer()
{
  var tempo = Number(document.getElementById("tempo").value);

  var segundos = tempo * 60

  var timer = setInterval(function()
  {
    var minutos = Math.floor(segundos / 60)
    var seg = segundos % 60

    document.getElementById("contador").innerHTML = `${minutos}:${String(seg).padStart(2, "0")}`;

    segundos--;

    if(segundos < 0)
    {
      clearInterval(timer)

      document.getElementById("contador").innerHTML = "Tempo Encerrado!"
    }
  }, 1000);
}
