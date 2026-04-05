document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const senha = document.getElementById("senha").value;

        if (usuario === "admin" && senha === "muriaco123") {
            window.location.href = "../Home/home.html";
        } else {
            alert("Usuário ou senha incorretos!");
        }
    });
});