export default function logout() {
  const sair = document.querySelector("#logout");
  const paginaLogin = document.querySelector("#pagina-login");

  const paginaHome = document.querySelector("#pagina-home");

  sair.addEventListener("click", () => {
    window.location.reload();
  });
}
