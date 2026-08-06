<div align="center">

# 📚 My Library

**Biblioteca personal de libros con HTML, CSS y JavaScript puro** — proyecto del curso de [The Odin Project](https://www.theodinproject.com/).

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-1F2937?style=for-the-badge&logo=theodinproject&logoColor=white)](https://www.theodinproject.com/)

</div>

---

## ✨ Características

- 📖 **Añade libros** mediante un modal (`<dialog>`) con título, autor, páginas y estado
- ✅ Campos de **título y páginas obligatorios** con validación nativa del navegador
- 🗂️ Tres secciones por estado: **Finished**, **Reading** y **Wishlist**
- 🔄 Botón **Toggle Read** que cicla el estado: `wishlist → reading → finished`
- 🗑️ Botón de **eliminar** con icono que cambia al pasar el ratón (hover)
- 🎨 Tema oscuro con acento verde (`#1DB954`), tarjetas redondeadas y gradientes
- 🧱 Todo se renderiza dinámicamente desde un array `library` en JavaScript
- 🔡 Tipografía **Libertinus Serif** con header *sticky* al hacer scroll

---

## 🚀 Cómo ejecutarlo

No requiere instalación ni dependencias. Simplemente:

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/library.git
cd library
```

2. Abre `index.html` en tu navegador (o usa Live Server en VS Code).

---

## 📁 Estructura del proyecto

```
library/
├── 📄 index.html     # Estructura: header, diálogo y secciones de libros
├── 🎨 style.css      # Estilos (tema oscuro, tarjetas, modal)
├── ⚙️ script.js      # Lógica (clase Book, array library, render dinámico)
└── 📂 images/
    └── 📂 delete/    # Iconos del botón eliminar (SVG normal y hover)
```

---

## 🧠 Cómo funciona

La lógica principal vive en `script.js`, con una clase y un array centrales:

| Elemento           | Descripción                                          |
|--------------------|------------------------------------------------------|
| `Book`             | Clase con `title`, `author`, `pages` y `status`      |
| `library`          | Array que almacena todos los libros (empieza vacío)  |
| `renderLibrary()`  | Borra las tarjetas y las vuelve a dibujar por estado |
| `createBookCard()` | Construye la tarjeta DOM de cada libro               |

Al enviar el formulario se crea una instancia y se añade al array:

```js
const newBook = new Book(
    formData.get("bookTitle")?.toString().trim() || "Untitled",
    formData.get("bookAuthor")?.toString().trim() || "Unknown",
    Number(formData.get("bookPages")) || 0,
    formData.get("bookStatus")?.toString() || "wishlist",
);

library.push(newBook);
renderLibrary();
```

`renderLibrary()` reparte cada libro en su sección según el estado y vuelve a generar las tarjetas desde cero, lo que mantiene siempre la interfaz sincronizada con el array.

---

## 🛠️ Tecnologías

- **HTML5** — estructura semántica y `<dialog>` para el modal
- **CSS3** — flexbox, gradientes, `::backdrop`, transiciones y box-shadows
- **JavaScript (Vanilla JS)** — clases, `FormData`, eventos y manipulación del DOM

---

## 📚 Créditos

- Iconos (SVG) obtenidos de [Material Design Icons](https://pictogrammers.com/library/mdi/)
- Tipografía **Libertinus Serif** desde Google Fonts
- Proyecto realizado como parte del curso [Foundations](https://www.theodinproject.com/paths/foundations) de **The Odin Project** — el mejor sitio para aprender desarrollo web de forma gratuita.

---

<div align="center">

⭐ **Si te gusta, dale una estrella al repositorio**

</div>
