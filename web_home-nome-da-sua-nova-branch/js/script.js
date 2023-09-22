function startCounting(elementId, limit) {
  const element = document.getElementById(elementId);
  let i = 0;

  const interval = setInterval(() => {
      if (i <= limit) {
          element.innerText = i;
          i++;
      } else {
          clearInterval(interval);
      }
  }, 8);  // Ajuste a velocidade da contagem conforme necessário
}

const obrasRealizadasSection = document.getElementById('obras-realizadas');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          startCounting('obras-contagem', 110); // Número desejado de obras
          startCounting('clientes-contagem', 120); // Número desejado de clientes
          startCounting('casas-contagem', 109); // Número desejado de casas construídas
          observer.unobserve(entry.target);
      }
  });
}, { threshold: 0.5 });  // Ajuste o threshold conforme necessário

observer.observe(obrasRealizadasSection);

document.addEventListener("DOMContentLoaded", function () {
  
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 40) {
          navbar.classList.add("bg-black-transparent");
        } else {
          navbar.classList.remove("bg-black-transparent");
        }
      });
    
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
const projetoCarousel = document.getElementById('projeto-carousel');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let scrollAmount = 200;  // Adjust scroll amount as needed

prevButton.addEventListener('click', () => {
    projetoCarousel.scrollLeft -= scrollAmount;
});

nextButton.addEventListener('click', () => {
    projetoCarousel.scrollLeft += scrollAmount;
});
