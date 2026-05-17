document.addEventListener("DOMContentLoaded", () => {
    // Gerar mensagem de copyright
    const element = document.getElementById("copyright");
    const year = new Date().getFullYear();
    const name = "Davi Millan Alves";
    const copyright = "©";
    element.textContent = `@${year} ${name}`;

     // Restaurar índice do carrossel
    const indiceSalvo = localStorage.getItem("carouselIndex");
    if (indiceSalvo !== null) {
        const carrossel = new bootstrap.Carousel("#projectsCarousel");
        carrossel.to(parseInt(indiceSalvo, 10));
    }

    // Salvar índice ativo antes de trocar de idioma
    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", () => {
            const carrossel = document.querySelector("#projectsCarousel");
            if (carrossel) {
                const indiceAtivo = Array.from(carrossel.querySelectorAll(".carousel-item"))
                    .findIndex(el => el.classList.contains("active"));
                localStorage.setItem("carouselIndex", indiceAtivo);
            }
        });
    });
});