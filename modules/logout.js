export default function logout() {
  const sair = document.querySelector("#logout");
  const paginaLogin = document.querySelector("#pagina-login");
  const paginaHome = document.querySelector("#pagina-home");

  sair.addEventListener("click", () => {
    // history.pushState(
    //   null,
    //   "Login - Compass",
    //   "https://bernardobrum.github.io/Projeto_Compass_01/"
    // );
    window.location.reload();
  });
}
