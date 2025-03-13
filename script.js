let attemptCount = 0;
const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');

// Função para gerar uma posição aleatória, garantindo que o botão fique visível
function getRandomPosition() {
    const buttonWidth = 150; // Largura do botão "Não"
    const buttonHeight = 50; // Altura do botão "Não"

    const x = Math.random() * (window.innerWidth - buttonWidth); // A largura total menos o tamanho do botão
    const y = Math.random() * (window.innerHeight - buttonHeight); // A altura total menos o tamanho do botão

    return { x, y };
}

// Evento de mouseover no botão "Não"
noButton.addEventListener('mouseover', () => {
    if (attemptCount < 8) { // Agora o botão se move por 8 tentativas
        // Mover o botão "Não" para uma posição aleatória durante as primeiras 8 tentativas
        const { x, y } = getRandomPosition();
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
        noButton.textContent = "Não"; // Aqui é onde a palavra "Não" é mantida durante as tentativas
        attemptCount++;
    } else if (attemptCount === 8) {
        // Na 9ª tentativa, ele não se move mais e se torna o botão "Sim"
        noButton.textContent = "Sim";
        noButton.classList.add('success');
        yesButton.classList.add('failure');
    }
});

// Evento de clique no botão "Não"
noButton.addEventListener('click', () => {
    if (attemptCount >= 8) {
        alert("Você venceu! Agora, pode continuar.");
    } else {
        alert("Tente novamente! O botão 'Não' está se movendo.");
    }
});

// Evento de clique no botão "Sim"
yesButton.addEventListener('click', () => {
    alert("Você clicou em Sim!");
});
