document.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = -(scrollPosition * 0.5) + 'px';
});


function formatTelefone(event) {
    let input = event.target;
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos (exemplo brasileiro)

    if (value.length > 6) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 2) {
        value = value.replace(/(\d{2})(\d+)/, '($1) $2');
    }

    input.value = value;
}

const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.item');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let index = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 650}px)`;
}

rightArrow.addEventListener('click', () => {
    index = (index + 1) % items.length;
    updateCarousel();
});

leftArrow.addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
});