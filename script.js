function apostar() {
  const aposta = parseFloat(document.getElementById("aposta").value);
  const palpite = parseInt(document.getElementById("palpite").value);
  const numeroSorteado = Math.floor(Math.random() * 10) + 1;
  const mensagem = document.getElementById("mensagem");

  if (isNaN(aposta) || aposta <= 0) {
    mensagem.textContent = "Digite um valor de aposta válido.";
    mensagem.style.color = "orange";
    return;
  }

  if (isNaN(palpite) || palpite < 1 || palpite > 10) {
    mensagem.textContent = "Digite um número entre 1 e 10.";
    mensagem.style.color = "orange";
    return;
  }

  if (palpite === numeroSorteado) {
    mensagem.textContent = `Parabéns! Você acertou e ganhou R$ ${(aposta * 2).toFixed(2)}! 🎉`;
    mensagem.style.color = "lime";
  } else {
    mensagem.textContent = `Você errou. O número era ${numeroSorteado}. Você perdeu R$ ${aposta.toFixed(2)}. 😢`;
    mensagem.style.color = "red";
  }
}
