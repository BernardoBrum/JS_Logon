export default function timer() {
  const contador = document.querySelector("#contador");
  let tempo = 600;

  setInterval(() => {
    tempo--;
    contador.textContent = tempo;
    if (tempo == 0) {
      window.location.reload();
    }
  }, 1000);
}
