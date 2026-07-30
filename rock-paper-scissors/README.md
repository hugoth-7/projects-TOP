# Rock Paper Scissors

<p align="center">
	<strong>Juego clásico en el navegador con JavaScript vanilla y una interfaz divertida e infantil.</strong><br>
	Practica funciones, condicionales, eventos del DOM y manipulación de la interfaz de usuario.
</p>

<p align="center">
	<img alt="Rock Paper Scissors" src="https://img.shields.io/badge/JavaScript-vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000">
	<img alt="Learning project" src="https://img.shields.io/badge/Project-Odin%20Project-0F172A?style=for-the-badge">
	<img alt="UI/UX" src="https://img.shields.io/badge/UI-kid%20friendly-FF6B9D?style=for-the-badge">
</p>

---

## Vista General

Este proyecto implementa una versión visual y jugable de **piedra, papel, tijera** donde:

- La computadora elige una opción al azar.
- **El jugador elige haciendo clic en botones** (sin `prompt()`).
- Cada ronda compara ambas respuestas y actualiza la UI en tiempo real.
- El juego termina cuando alguien llega a **5 puntos** y muestra celebración visual.

---

## Cambios Principales: De `prompt()` a Botones + DOM

### Antes (versión inicial)

```javascript
function getHumanChoice() {
    return prompt("Elige: rock, paper o scissors");
}
```

**Problemas:**
- Bloquea el hilo principal del navegador.
- No accesible en móviles (teclado virtual cubre el prompt).
- Interfaz fea y no personalizable.
- Difícil de testear y depurar.

### Después (versión actual) — Botones + Event Listeners

```html
<!-- index.html -->
<section class="buttons">
    <button id="rock" class="rock">Rock</button>
    <button id="paper" class="paper">Paper</button>
    <button id="scissors" class="scissors">Scissors</button>
</section>
```

```javascript
// game.js
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const humanSelection = e.currentTarget.id; // "rock" | "paper" | "scissors"
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        
        // Actualizar UI via DOM
        updateScoreboard(result);
        showResultMessage(result);
        checkGameEnd();
    });
});
```

**Ventajas:**
- **No bloqueante**: la UI sigue respondiendo.
- **Accesible**: funciona en móvil, tablet, desktop, teclado, screen readers.
- **Estilable**: CSS completo, animaciones, estados hover/focus/active.
- **Testeable**: se pueden simular clicks programáticamente.
- **UX fluida**: feedback visual instantáneo (animaciones, confeti, emojis flotantes).

---

## Flujo del Juego

```mermaid
flowchart TD
    A[Carga la página] --> B[Jugador hace clic en un botón]
    B --> C[Event listener captura el click]
    C --> D[getComputerChoice() genera elección aleatoria]
    D --> E[playRound() compara y decide ganador]
    E --> F{¿Quién gana la ronda?}
    F -->|Jugador| G[scoreHuman++ + animación win + confeti]
    F -->|Computadora| H[scoreComp++ + animación lose]
    F -->|Empate| I[animación tie]
    G --> J[Actualiza DOM: puntuación + mensaje]
    H --> J
    I --> J
    J --> K{¿Alguien llegó a 5?}
    K -->|No| B
    K -->|Sí| L[Mensaje final + celebración + reset automático]
```

---

## Funciones Principales

| Función | Qué hace |
| --- | --- |
| `getComputerChoice()` | Genera una elección aleatoria entre `rock`, `paper`, `scissors`. |
| `playRound(human, computer)` | Compara elecciones y devuelve `{ winner: 'human'|'comp'|'tie', message }`. |
| `triggerConfetti()` | Crea 30 partículas de colores que caen con animación CSS. |
| `triggerFloatingEmoji(emoji)` | Hace flotar un emoji (🎉 😢 🤝 🏆 😭) y lo elimina tras 1s. |
| Event listeners en botones | Capturan click, llaman a la lógica, actualizan el DOM. |
| `resetGame()` | Reinicia puntuaciones, ronda y mensajes. |

---

## Nueva UI/UX: Modo Infantil Colorido

### Paleta de Colores
- **Rosa chicle** `#ff6b9d` — Acción principal / victoria
- **Naranja divertido** `#ffa726` — Puntuación / advertencia
- **Verde menta** `#66bb6a` — Tijeras / éxito
- **Azul cielo** `#42a5f5` — Papel / información
- **Lila soñador** `#ab47bc` — Texto destacado

### Tipografía
- **Bubblegum Sans** — Título principal (burbujas divertidas)
- **Comic Neue** — UI general (legible, redondeada, amigable)

### Animaciones y Micro-interacciones
| Elemento | Animación |
| --- | --- |
| Título | Rebote suave continuo (`titleBounce`) |
| Botones | Slide-in escalonado al cargar + hover `translateY(-6px) scale(1.05)` + tap `scale(0.98)` |
| Mensaje resultado | Pop-in (`popIn`) + pulso (`pulseSoft`) |
| Victoria | Confeti (30 partículas) + emoji 🎉 flotante + shake (`celebrate`) |
| Derrota | Emoji 😢 flotante |
| Empate | Emoji 🤝 flotante |
| Victoria final | Confeti + 🏆 + celebración extendida |
| Derrota final | 😭 |

### Efectos Visuales de Fondo
- Gradiente animado de 3 tonos pastel (`gradientShift` 15s)
- Burbujas de color flotando tras la carta (`float` 20s)
- Glassmorphism en la carta de juego con `backdrop-filter: blur(12px)`

### Responsive
- **Desktop**: 3 botones en fila
- **Móvil (<480px)**: Botones apilados verticalmente, 100% ancho, fuente adaptada

---

## Cómo Ejecutarlo

1. Abre `index.html` en cualquier navegador moderno (Chrome, Firefox, Safari, Edge).
2. ¡Juega haciendo clic en los botones! 🎮

> No requiere servidor local, build tools ni Node.js. Es HTML/CSS/JS puro.

---

## Estructura del Proyecto

```text
rock-paper-scissors/
├── index.html      # Estructura semántica + botones + contenedores de resultado
├── style.css       # Tema infantil: colores, fuentes, animaciones, confeti, responsive
├── game.js         # Lógica + event listeners + manipulación DOM + efectos visuales
└── README.md       # Este archivo
```

---

## Objetivos de Aprendizaje Cubiertos

- **Funciones** puras y con efectos laterales (DOM)
- **Condicionales** `if / else` para lógica de juego
- **Event Listeners** (`click`, `focus`) — patrón Observer
- **Manipulación del DOM**: `querySelector`, `textContent`, `classList`, `createElement`, `appendChild`, `remove`
- **Template literals** para mensajes dinámicos
- **Operador ternario** y cortocircuito lógico
- **CSS Animations** + `@keyframes` + `cubic-bezier` para easing elástico
- **Diseño responsive** con media queries
- **Accesibilidad**: `focus-visible`, semántica HTML, contraste
- **Separación de responsabilidades**: HTML (estructura), CSS (presentación), JS (comportamiento)

---

## Posibles Mejoras Futuras

- [ ] Sonidos (Web Audio API) para click, win, lose
- [ ] Modo "best of 3 / 5 / 7" seleccionable
- [ ] Historial de partidas guardado en `localStorage`
- [ ] Animación de la elección de la computadora (mostrar "pensando...")
- [ ] Tema oscuro/claro toggle
- [ ] Multiplayer local (2 jugadores en el mismo dispositivo)
- [ ] PWA: instalable, offline-capable

---

## Estado

✅ **Completado** — Versión jugable con UI infantil, botones, DOM, animaciones y celebrativas.

Proyecto desarrollado como parte del currículo de **The Odin Project** (Foundations → JavaScript Basics).