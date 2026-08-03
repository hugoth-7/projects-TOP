<div align="center">

# 📝 Sign-Up Form

**Formulario de registro con validación en vivo — proyecto del currículo de [The Odin Project](https://www.theodinproject.com/).**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-1F2937?style=for-the-badge&logo=theodinproject&logoColor=white)](https://www.theodinproject.com/)

</div>

---

## ✨ Características

- 📋 Formulario de registro con **6 campos**: nombre, apellido, email, teléfono, contraseña y confirmación
- ✅ Validación nativa del navegador con campos **obligatorios** (`required`)
- 🟦 Resalta en **azul** el campo enfocado y en **rojo** los campos con datos inválidos (`input:user-invalid`)
- 🎨 Diseño en dos paneles: imagen de fondo con logo **ODIN** superpuesto a la izquierda y formulario a la derecha
- 🪶 Tipografía personalizada **Norse** incluida localmente para el logotipo
- 📱 Formulario con `flexbox`, campos en dos columnas y scroll independiente en el panel derecho

---

## 🚀 Cómo ejecutarlo

No requiere instalación ni dependencias. Simplemente:

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/sign-up-form.git
cd sign-up-form
```

2. Abre `index.html` en tu navegador (o usa Live Server en VS Code).

---

## 📁 Estructura del proyecto

```
sign-up-form/
├── 📄 index.html          # Estructura del formulario y panel lateral
├── 🎨 styles.css          # Estilos, tipografía y validación visual
├── 📂 images/
│   ├── 🖼️ background.jpg  # Imagen de fondo (photo by Halie West / Unsplash)
│   └── 🦉 odin-lined.png   # Logotipo de Odin
└── 📂 fonts/
    └── 🪶 Norse/           # Tipografía Norse (woff + woff2)
```

---

## 🎯 Cómo funciona

El formulario se apoya en la **validación nativa del navegador** mediante los atributos HTML:

- `required` marca todos los campos como obligatorios.
- `type="email"` y `type="tel"` validan el formato de correo y teléfono.
- `type="password"` oculta las contraseñas en los campos de contraseña y confirmación.

Los estilos refuerzan la validación con pseudoclases modernas en `styles.css`:

```css
input:focus {
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.316);
    border: 1px solid rgb(25, 101, 255); /* campo enfocado */
}

input:user-invalid {
    border: 1px solid rgb(255, 25, 25); /* dato inválido */
}
```

El botón **Create Account** está vinculado al formulario con el atributo `form="signUpForm"`, por lo que dispara el envío y la validación desde fuera del `<form>`.

---

## 🛠️ Tecnologías

- **HTML5** — estructura semántica y atributos de validación
- **CSS3** — flexbox, `@font-face`, box-shadows y pseudoclases de validación

---

## 📚 Créditos

- Foto de fondo de **Halie West** en **Unsplash**
- Tipografía **Norse** incluida localmente
- Proyecto realizado como parte del curso [Foundations](https://www.theodinproject.com/paths/foundations) de **The Odin Project** — el mejor sitio para aprender desarrollo web de forma gratuita.

---

<div align="center">

⭐ **Si te gusta, dale una estrella al repositorio**

</div>
