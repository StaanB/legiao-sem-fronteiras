// Função do timer para substituir na seção de eventos
export function timer() {
  let data = new Date("jan 1 2023 00:00:00");

  function atualizar() {
    // Diferença da data do evento e da data atual (em segundos)
    let atual = new Date(),
      diferenca = data - atual,
      dias = Math.floor(diferenca / 1000 / 60 / 60 / 24),
      horas = Math.floor(diferenca / 1000 / 60 / 60) % 24,
      minutos = Math.floor(diferenca / 1000 / 60) % 60,
      segundos = Math.floor(diferenca / 1000) % 60;

    try {
      document.querySelector(
        "#timer-dias"
      ).innerHTML = `<li id="timer-dias">${dias}<span>dias</span></li>`;

      document.querySelector(
        "#timer-horas"
      ).innerHTML = `<li id="timer-horas">${horas}<span>horas</span></li>`;

      document.querySelector(
        "#timer-minutos"
      ).innerHTML = `<li id="timer-minutos">${minutos}<span>minutos</span></li>`;

      document.querySelector(
        "#timer-segundos"
      ).innerHTML = `<li id="timer-segundos">${segundos}<span>segundos</span></li>`;
    } catch (err) {}
  }

  let intervalo = setInterval(atualizar, 1000);
}
