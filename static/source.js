document.addEventListener("DOMContentLoaded", () => {
    // Generate copyright message
    const element = document.getElementById("copyright");
    const year = new Date().getFullYear();
    const copyright = "©";
    element.textContent = `@${year} | Davi Millan Alves`;

    // Restore the carousel active index
    const indiceSalvo = sessionStorage.getItem("carouselIndex");
    if (indiceSalvo !== null) {
        const carrossel = new bootstrap.Carousel("#projectsCarousel");
        carrossel.to(parseInt(indiceSalvo, 10));
    } else {
        // If user is in first access
        const primeiroSlide = document.querySelector("#projectsCarousel .carousel-item");
        if (primeiroSlide) {
            primeiroSlide.classList.add("active");
        }
    }

    // Save active index for when language changes
    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", () => {
            const carrossel = document.querySelector("#projectsCarousel");
            if (carrossel) {
                const indiceAtivo = Array.from(carrossel.querySelectorAll(".carousel-item"))
                    .findIndex(el => el.classList.contains("active"));
                sessionStorage.setItem("carouselIndex", indiceAtivo);
            }
        });
    });
});