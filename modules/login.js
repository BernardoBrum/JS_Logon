import timer from "./timer.js";
export default function login() {
  const btn = document.querySelector("#botao-continuar");
  const usuario = document.querySelector("#usuario");
  const senha = document.querySelector("#senha");
  const erro = document.querySelector("#mensagem-erro");
  const cxusuario = document.querySelector("#caixa-usuario");
  const cxsenha = document.querySelector("#caixa-senha");
  const login = document.querySelector("#pagina-login");
  const home = document.querySelector("#pagina-home");
  const simbolo = document.querySelector("senha");

  btn.addEventListener("click", () => {
    if (usuario.value === "admin" && senha.value === "admin") {
      login.style.display = "none";
      home.style.display = "block";
      document.title = "Home - Compass";
      // history.pushState(
      //   null,
      //   "Home - Compass",
      //   "https://bernardobrum.github.io/Projeto_Compass_01/home"
      // );
      timer();
    } else {
      erro.style.visibility = "visible";
      cxusuario.style.border = "1px solid #E9B425";
      cxsenha.style.border = "1px solid #E9B425";
      senha.style.letterSpacing = "0";
      senha.value = "";
    }
  });
}
