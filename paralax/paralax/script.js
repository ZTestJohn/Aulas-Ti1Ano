// Adiciona um evento de escuta para o evento de rolagem da janela
window.addEventListener('scroll', function() {
    
    // Seleciona todos os elementos que possuem a classe 'parallax'
    const parallaxElements = document.querySelectorAll('.parallax');
    
    // Obtém a posição atual de rolagem vertical da janela
    let scrollPosition = window.pageYOffset;

    // Itera sobre cada elemento com a classe 'parallax'
    parallaxElements.forEach(function(el) {
        
        // Obtém o valor do atributo 'data-speed' do elemento
        let speed = el.getAttribute('data-speed');
        
        // Ajusta a posição de fundo vertical do elemento com base na posição de rolagem e na velocidade
        el.style.backgroundPositionY = (scrollPosition * speed) + 'px';
    });
});

