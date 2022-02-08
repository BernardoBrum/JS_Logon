export default function password() {
  const senha = document.querySelector("#senha");

  senha.addEventListener("input", () => {
    if (senha.value != "") {
      senha.style.letterSpacing = "5px";
    } else {
      senha.style.letterSpacing = "0";
    }
  });
}
