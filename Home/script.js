const btnDocumentacao = document.getElementById("btnDocumentacao");
const btnHome = document.getElementById("btnHome");
const btnSetor = document.getElementById("btnSetor");

btnDocumentacao.addEventListener("click", function () {
    window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSfiAQgsI-pzqheL__LOKvw9bx5hsaVT8fgvL3yj2K7AYbO2nQ/viewform?usp=dialog",
        "_blank"
    );
});

btnHome.addEventListener("click", function () {
    window.location.href = "../Home/home.html";
})

btnSetor.addEventListener("click", function () {
    window.location.href = "../Setor/setor.html";
})
