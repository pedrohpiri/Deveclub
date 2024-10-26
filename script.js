// script.js

// Variável para armazenar o índice atual do carrossel.
let currentSlide = 0;

// Seleciona todos os itens do carrossel.
const slides = document.querySelectorAll('.carousel-item');

// Função para mostrar o próximo slide.
function nextSlide() {
    slides[currentSlide].style.display = 'none'; // Esconde o slide atual.
    currentSlide = (currentSlide + 1) % slides.length; // Avança para o próximo slide.
    slides[currentSlide].style.display = 'block'; // Mostra o novo slide.
}

// Função para mostrar o slide anterior.
function prevSlide() {
    slides[currentSlide].style.display = 'none'; // Esconde o slide atual.
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Volta para o slide anterior.
    slides[currentSlide].style.display = 'block'; // Mostra o novo slide.
}

// Inicializa o carrossel mostrando o primeiro slide.
slides[currentSlide].style.display = 'block';

// Seleciona todas as imagens do catálogo
const images = document.querySelectorAll('.catalog-image');
const modal = document.createElement('div'); // Cria o modal
modal.classList.add('modal');
document.body.appendChild(modal); // Adiciona o modal ao body

// Função para abrir o modal com a imagem clicada
images.forEach(image => {
    image.addEventListener('click', () => {
        const modalImage = document.createElement('img');
        modalImage.src = image.src; // Define o mesmo src da imagem clicada
        modal.innerHTML = ''; // Limpa o conteúdo do modal antes de adicionar a nova imagem
        modal.appendChild(modalImage);

        // Adiciona um botão de fechar ao modal
        const closeButton = document.createElement('button');
        closeButton.classList.add('modal-close');
        closeButton.innerText = 'Fechar';
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none'; // Fecha o modal ao clicar no botão
        });
        modal.appendChild(closeButton);

        modal.style.display = 'flex'; // Exibe o modal
    });
});

// Fecha o modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'; // Fecha o modal apenas se clicar fora da imagem
    }
});
