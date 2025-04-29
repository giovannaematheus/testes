document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos onde os números devem ser atualizados
    const diasElemento = document.querySelector("#dias .numero");
    const horasElemento = document.querySelector("#horas .numero");
    const minutosElemento = document.querySelector("#minutos .numero");
    const segundosElemento = document.querySelector("#segundos .numero");
    const contadorElemento = document.querySelector("#contador");

    // Função para calcular a contagem regressiva
    function atualizarContagem() {
        const dataAlvo = new Date("2025-07-27T11:30:00"); // Ajuste a data desejada
        const agora = new Date();
        const diferenca = dataAlvo - agora;

        // Calcula dias
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

        // Verifica se a diferença é negativa ou menor que 30 dias
        if (diferenca <= 0) {
            diasElemento.textContent = "0";
            horasElemento.textContent = "0";
            minutosElemento.textContent = "0";
            segundosElemento.textContent = "0";
            // Continua pulsando quando a contagem atinge zero
            contadorElemento.classList.add("pulsar");
            return; // Para a execução da função
        } else if (dias < 7) {
            // Adiciona a classe de pulsar quando faltam menos de 30 dias
            contadorElemento.classList.add("pulsar");
        } else {
            // Remove a classe pulsar se ainda houver mais de 30 dias
            contadorElemento.classList.remove("pulsar");
        }

        // Calcula horas, minutos e segundos
        const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
        const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
        const segundos = Math.floor((diferenca / 1000) % 60);

        // Atualiza apenas os números dentro dos elementos
        diasElemento.textContent = dias;
        horasElemento.textContent = horas;
        minutosElemento.textContent = minutos;
        segundosElemento.textContent = segundos;
    }

    // Atualiza a contagem regressiva a cada segundo
    setInterval(atualizarContagem, 1000);

    // Chama a função pela primeira vez
    atualizarContagem();


    // Galeria de Fotos
    const slides = document.querySelector('.slides');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentIndex = 0;

    function updateGallery(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('active', i === index);
        });
    }

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : thumbnails.length - 1;
        updateGallery(currentIndex);
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex < thumbnails.length - 1) ? currentIndex + 1 : 0;
        updateGallery(currentIndex);
    });

    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            currentIndex = index;
            updateGallery(currentIndex);
        });
    });

    updateGallery(currentIndex); // Inicializa a galeria
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const menuLateral = document.querySelector(".menu-lateral");
    const menuLinks = menuLateral.querySelectorAll("a"); // Seleciona todos os links dentro do menu lateral

    // Alterna o menu lateral ao clicar no ícone
    hamburgerMenu.addEventListener("click", () => {
        menuLateral.classList.toggle("ativo");
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener("click", (event) => {
        if (!menuLateral.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            menuLateral.classList.remove("ativo");
        }
    });

    // Fechar o menu ao clicar em qualquer link
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menuLateral.classList.remove("ativo");
        });
    });

    // Seleciona o contêiner onde o texto será adicionado
    const circleContainer = document.querySelector('.circle-container');

    // Cria o contêiner do texto
    const heroText = document.createElement('div');
    heroText.classList.add('hero-text');

    // Cria o elemento do logo
    const logo = document.createElement('img');
    logo.src = 'logo.png';
    logo.alt = 'Logo do Casamento';
    logo.classList.add('hero-logo');

    // Cria o elemento do nome do casal com quebra de linha
    const coupleText = document.createElement('span');
    coupleText.classList.add('hero-couple');
    coupleText.innerHTML = 'Giovanna<br>e Matheus'; // Adiciona a quebra de linha

    // Cria o elemento da data com ícone
    const dateText = document.createElement('span');
    dateText.classList.add('hero-date');
    
    const calendarIcon = document.createElement('img');
    calendarIcon.src = 'calendar.png'; // Caminho do ícone de calendário
    calendarIcon.alt = 'Ícone de Calendário';

    const dateContent = document.createTextNode('27 de julho de 2025');

    dateText.appendChild(calendarIcon);
    dateText.appendChild(dateContent);

    // Adiciona os elementos ao contêiner do texto
    heroText.appendChild(logo);
    heroText.appendChild(coupleText);
    heroText.appendChild(dateText);

    // Adiciona o contêiner do texto ao círculo
    circleContainer.appendChild(heroText);


});
