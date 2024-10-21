
let slideIndex = 0; // Variável que armazena o índice do slide atual
showSlides(); // Inicia o slideshow

function showSlides() {
    let slides = document.getElementsByClassName("slide"); // Seleciona todos os elementos com a classe "slide"
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Esconde todos os slides
    }
    
    slideIndex++; // Incrementa o índice do slide
    
    if (slideIndex > slides.length) {
        slideIndex = 1; // Se o índice ultrapassar o número de slides, volta ao primeiro
    }
    
    slides[slideIndex - 1].style.display = "block"; // Exibe o slide atual
    setTimeout(showSlides, 3000); // Chama a função a cada 3 segundos
}

