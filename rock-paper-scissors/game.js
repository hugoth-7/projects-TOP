// Variables de estado
let scoreHuman = 0;
let scoreComp = 0;

// Elementos del DOM
const buttons = document.querySelectorAll(".buttons button");
const divResults = document.querySelector(".status");
// soportar tanto las clases usadas antes como los ids actuales en el HTML
const roundNumberP = document.querySelector('.roundNumber, #globalWinner');
const roundWinnerP = document.querySelector('.roundWinner, #roundWinner');

function getComputerChoice() {
    const opciones = ["rock", "paper", "scissors"];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function playRound(humanSelection, computerSelection) {
    if (!humanSelection || !computerSelection) return { winner: 'error', message: 'Selección inválida.' };

    const human = humanSelection.toLowerCase();
    const comp = computerSelection.toLowerCase();

    if (human === comp) return { winner: 'tie', message: `Ambos eligieron ${human}. Empate.` };

    const wins = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };

    if (wins[human] === comp) return { winner: 'human', message: `${human} vence a ${comp}. Ganaste!` };

    return { winner: 'comp', message: `${comp} vence a ${human}. Gana la computadora.` };
}

function triggerConfetti() {
    const colors = ['#ff6b9d', '#ffa726', '#66bb6a', '#42a5f5', '#ab47bc', '#fff'];
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.querySelector('.game-wrap').appendChild(confetti);
        setTimeout(() => confetti.remove(), 1500);
    }
}

function triggerFloatingEmoji(emoji) {
    const wrapper = document.querySelector('.game-wrap');
    const floating = document.createElement('div');
    floating.className = 'floating-emoji';
    floating.textContent = emoji;
    floating.style.left = (50 + (Math.random() - 0.5) * 40) + '%';
    floating.style.top = '60%';
    wrapper.appendChild(floating);
    setTimeout(() => floating.remove(), 1000);
}

// Manejo de clicks
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const humanSelection = e.currentTarget.id; // id: rock | paper | scissors
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        // actualizar marcadores
        if (result.winner === 'human') scoreHuman++;
        else if (result.winner === 'comp') scoreComp++;

        // mostrar resultados
        const round = (window.__rpsRound = (window.__rpsRound || 0) + 1);
        if (roundNumberP) roundNumberP.textContent = `Ronda ${round} — Tú ${scoreHuman} : ${scoreComp} PC`;
        if (roundWinnerP) {
            roundWinnerP.textContent = result.message;
            roundWinnerP.classList.remove('win', 'lose', 'tie', 'celebrate', 'animate');
            void roundWinnerP.offsetWidth; // force reflow
            roundWinnerP.classList.add('animate');
            
            if (result.winner === 'human') {
                roundWinnerP.classList.add('win');
                triggerConfetti();
                triggerFloatingEmoji('🎉');
                setTimeout(() => roundWinnerP.classList.add('celebrate'), 100);
            } else if (result.winner === 'comp') {
                roundWinnerP.classList.add('lose');
                triggerFloatingEmoji('😢');
            } else {
                roundWinnerP.classList.add('tie');
                triggerFloatingEmoji('🤝');
            }
            
            setTimeout(() => roundWinnerP.classList.remove('animate', 'celebrate'), 800);
        }

        // Reiniciar partida si alguno llega a 5 puntos
        if (scoreHuman >= 5 || scoreComp >= 5) {
            const finalMsg = scoreHuman >= 5
                ? `¡Has llegado a 5 puntos! Ganaste la partida.`
                : `La computadora alcanzó 5 puntos. Has perdido la partida.`;
            if (roundWinnerP) {
                roundWinnerP.textContent = finalMsg;
                roundWinnerP.classList.remove('win', 'lose', 'tie', 'celebrate', 'animate');
                void roundWinnerP.offsetWidth;
                roundWinnerP.classList.add('animate');
                if (scoreHuman >= 5) {
                    roundWinnerP.classList.add('win', 'celebrate');
                    triggerConfetti();
                    triggerFloatingEmoji('🏆');
                } else {
                    roundWinnerP.classList.add('lose');
                    triggerFloatingEmoji('😭');
                }
            }
            // reinicio tras mostrar el mensaje final
            setTimeout(() => resetGame(), 2000);
        }
    });
});

function resetGame() {
    scoreHuman = 0;
    scoreComp = 0;
    window.__rpsRound = 0;
    if (roundNumberP) roundNumberP.textContent = `Ronda 0 — Tú 0 : 0 PC`;
    if (roundWinnerP) {
        roundWinnerP.textContent = 'Haz tu jugada para empezar';
        roundWinnerP.classList.remove('win', 'lose', 'tie', 'celebrate', 'animate');
    }
}
