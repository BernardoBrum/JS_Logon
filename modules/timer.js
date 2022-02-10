export default function timer() {
  const contador = document.querySelector("#contador");
  let tempo = 600;

  setInterval(() => {
    tempo--;
    contador.textContent = tempo;
    if (tempo == 0) {
      history.pushState(
        null,
        "Login - Compass",
        "https://bernardobrum.github.io/Projeto_Compass_01/login"
      );
      window.location.reload();
    }
  }, 1000);
}
