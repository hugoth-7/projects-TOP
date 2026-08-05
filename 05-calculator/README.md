<div align="center">

# 🧮 TOP Calculator

**Una calculadora básica hecha con HTML, CSS y JavaScript puro** — proyecto del curso de [The Odin Project](https://www.theodinproject.com/).

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-1F2937?style=for-the-badge&logo=theodinproject&logoColor=white)](https://www.theodinproject.com/)

</div>

---

## ✨ Características

- ➕➖✖️➗ Operaciones básicas: **suma, resta, multiplicación y división**
- 🔢 Soporta **operaciones encadenadas** (`2 + 3 + 4 = 9`)
- 🖥️ La pantalla muestra la **operación completa** (`3 + 5`) y el **resultado al pulsar `=`** (`8`)
- 🔄 Pulsar un operador tras el resultado continúa operando con él (`3 + 5 =` → `8 + 2 = 10`)
- ⚠️ Manejo de **división entre cero** (`Cannot divide by 0`)
- 🎯 Resultados redondeados para evitar decimales largos (`0.1 + 0.2 = 0.3`)
- 🗑️ Botón **AC** para limpiar todo el estado de la calculadora
- 🎨 Interfaz con gradiente azul oscuro, botones redondeados y efecto de pulsación

---

## 🚀 Cómo ejecutarlo

No requiere instalación ni dependencias. Simplemente:

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/calculator.git
cd calculator
```

2. Abre `index.html` en tu navegador (o usa Live Server en VS Code).

---

## 📁 Estructura del proyecto

```
calculator/
├── 📄 index.html   # Estructura y botones de la calculadora
├── 🎨 styles.css   # Estilos e interfaz (gradiente, botones, display)
└── ⚙️ script.js    # Lógica de la calculadora (operaciones, display, errores)
```

---

## 🧠 Cómo funciona

El estado se controla con tres variables principales en `script.js`:

| Variable          | Descripción                                                   |
|-------------------|---------------------------------------------------------------|
| `firstNumber`     | Primer operando de la operación                               |
| `secondNumber`    | Segundo operando (se asigna al pulsar `=` o encadenar)         |
| `operator`        | Operador actual (`+`, `-`, `*`, `/`)                          |
| `displayValue`    | Número actual que se está tecleando                           |

La función `operate(n1, n2, operator)` decide qué operación ejecutar según el operador:

```js
function operate(n1, n2, operator) {
    if (operator === "+") return add(n1, n2);
    if (operator === "-") return substract(n1, n2);
    if (operator === "*") return multiply(n1, n2);
    if (operator === "/") return divide(n1, n2);
}
```

Mientras hay un operador activo, `updateDisplay()` muestra la operación completa (`firstNumber + operator + displayValue`). Al pulsar `=`, se ejecuta el cálculo y se muestra solo el resultado.

---

## 🛠️ Tecnologías

- **HTML5** — estructura semántica
- **CSS3** — diseño con flexbox, gradientes y transiciones
- **JavaScript (Vanilla JS)** — lógica y manipulación del DOM

---

## 📚 Créditos

Proyecto realizado como parte del curso [Foundations](https://www.theodinproject.com/paths/foundations) de **The Odin Project** — el mejor sitio para aprender desarrollo web de forma gratuita.

---

<div align="center">

⭐ **Si te gusta, dale una estrella al repositorio**

</div>
