


document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 40) {
          navbar.classList.add("bg-black-transparent");
        } else {
          navbar.classList.remove("bg-black-transparent");
        }
      });
    const carrossel = document.querySelector(".carrossel");
    const clientes = document.querySelectorAll(".cliente");

    let currentIndex = 0;
    const interval = 300; // Tempo de transição entre os slides em milissegundos (3 segundos no exemplo)

    function nextSlide() {
        clientes[currentIndex].classList.remove("ativo");
        currentIndex = (currentIndex + 1) % clientes.length;
        clientes[currentIndex].classList.add("ativo");
    }

    // Inicia o carrossel
    setInterval(nextSlide, interval);
});
