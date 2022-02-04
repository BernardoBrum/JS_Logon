export default function login() {
    const btn = document.querySelector("#botao-continuar");
    const usuario = document.querySelector("#usuario");
    const senha = document.querySelector("#senha");
    const erro = document.querySelector("#mensagem-erro");
    const cxusuario = document.querySelector("#caixa-usuario");
    const cxsenha = document.querySelector("#caixa-senha");
    const login = document.querySelector("#pagina-login");
    const home = document.querySelector("#pagina-home");

    btn.addEventListener("click", () => {
        if (usuario.value === "admin" && senha.value === "admin") {
            login.style.display = "none";
            home.style.display = "flex";
        } else {
            erro.style.visibility = "visible";
            cxusuario.style.border = "1px solid #E9B425";
            cxsenha.style.border = "1px solid #E9B425";
        }
    });
}
