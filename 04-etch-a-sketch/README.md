<div align="center">

# ✏️ Etch a Sketch

**Un sketchpad interactivo al estilo clásico hecho con HTML, CSS y JavaScript puro** — proyecto del curso de [The Odin Project](https://www.theodinproject.com/).

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-1F2937?style=for-the-badge&logo=theodinproject&logoColor=white)](https://www.theodinproject.com/)

</div>

---

## ✨ Características

- 🎨 Dibuja pasando el ratón sobre la cuadrícula: cada celda se rellena con un **color aleatorio**
- 🌑 Efecto de **oscurecimiento progresivo**: cada pasada sobre una celda incrementa su opacidad hasta volverse negra
- 🔢 Cuadrícula **personalizable** de 1 a 100 celdas por lado (por defecto `16x16`)
- 🗑️ Botón **Reset** para limpiar el lienzo y volver a empezar
- 📏 Tamaño de celdas calculado automáticamente para ajustarse al lienzo (`490x490` px)
- 🖱️ Interfaz sencilla con botones con gradiente y efectos hover

---

## 🚀 Cómo ejecutarlo

No requiere instalación ni dependencias. Simplemente:

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/etch-a-sketch.git
cd etch-a-sketch
```

2. Abre `index.html` en tu navegador (o usa Live Server en VS Code).

---

## 📁 Estructura del proyecto

```
etch-a-sketch/
├── 📄 index.html   # Estructura de la página y controles
├── 🎨 styles.css   # Estilos e interfaz (lienzo, botones, tipografía)
└── ⚙️ script.js    # Lógica del lienzo (grid, colores, reset)
```

---

## 🧠 Cómo funciona

La cuadrícula se genera dinámicamente en `script.js` con la función `gridFill(numSquares)`, que crea tantos `div` con clase `.square` como `numSquares²` y calcula su tamaño para que llenen el lienzo:

```js
function gridFill(numSquares){
    const squareDim = 490 / numSquares;
    for(let i = 0; i<numSquares * numSquares; i++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareDim}px`;
        square.style.height = `${squareDim}px`;
        container.appendChild(square);
    }
}
```

Al pasar el ratón por encima, un único *event listener* delegado detecta la celda (`e.target`) y le aplica un **color aleatorio** y una capa extra de oscuridad (opacidad + `0.1` por pasada):

```js
container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains("square")) {
        e.target.style.backgroundColor = randomColor();

        const currentOpacity = Number(e.target.style.opacity) || 0;
        e.target.style.opacity = Math.min(currentOpacity + 0.1, 1);
    }
});
```

El botón **Change grid** pide el nuevo tamaño con `prompt()` y regenera el lienzo, mientras que **Reset** devuelve el color y la opacidad de todas las celdas a sus valores iniciales.

---

## 🛠️ Tecnologías

- **HTML5** — estructura semántica
- **CSS3** — flexbox, gradientes, transiciones y sombras
- **JavaScript (Vanilla JS)** — generación del grid, delegación de eventos y manipulación del DOM

---

## 📚 Créditos

Proyecto realizado como parte del curso [Foundations](https://www.theodinproject.com/paths/foundations) de **The Odin Project** — el mejor sitio para aprender desarrollo web de forma gratuita.

---

<div align="center">

⭐ **Si te gusta, dale una estrella al repositorio**

</div>
