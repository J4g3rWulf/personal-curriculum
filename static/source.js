document.addEventListener("DOMContentLoaded", () => {
    const element = document.getElementById("copyright");
    const year = new Date().getFullYear();
    const name = "Davi Millan Alves";
    const copyright = "©";
    element.textContent = `@${year} ${name}`;
});