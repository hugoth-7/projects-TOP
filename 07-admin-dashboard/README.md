<div align="center">

# 📊 Admin Dashboard

**Panel de administración responsive construido con HTML y CSS puro** — proyecto del curso de [The Odin Project](https://www.theodinproject.com/).

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![The Odin Project](https://img.shields.io/badge/The%20Odin%20Project-1F2937?style=for-the-badge&logo=theodinproject&logoColor=white)](https://www.theodinproject.com/)

</div>

---

## ✨ Características

- 🗂️ **Sidebar** fija con navegación completa (Dashboard, Profile, Messages, History, Tasks, Communities, Settings, Support, Privacy)
- 🔍 **Header** con barra de búsqueda, notificaciones y perfil de usuario
- 🟠 Botones de acción (**New**, **Upload**, **Share**) con diseño dorado y efecto hover
- 📋 Grid de **6 tarjetas de proyectos** con borde lateral dorado e iconos de acción
- 📢 Panel lateral con **Announcements** y sección **Trending** con avatares circulares
- 🧱 Layout construido con **CSS Grid** (layout general) y **Flexbox** (componentes)
- 🎨 Paleta de colores clásica (azul `#1992d4`, dorado `#f6ad55`, gris `#e2e8f0`)

---

## 🚀 Cómo ejecutarlo

No requiere instalación ni dependencias. Simplemente:

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/admin-dashboard.git
cd admin-dashboard
```

2. Abre `index.html` en tu navegador (o usa Live Server en VS Code).

---

## 📁 Estructura del proyecto

```
admin-dashboard/
├── 📄 index.html     # Estructura del dashboard
├── 🎨 style.css      # Estilos (CSS Grid + Flexbox)
└── 📂 images/
    ├── 📂 sidebar/   # Iconos de navegación (SVG)
    ├── 📂 header/    # Iconos de búsqueda y notificaciones
    ├── 📂 cards/     # Iconos de acciones de las tarjetas
    └── 📂 logos/     # Avatares de usuarios (PNG)
```

---

## 🧱 Cómo funciona

El layout se divide en tres zonas principales mediante **CSS Grid** en `body`:

| Zona        | Columna | Rol                                                        |
|-------------|---------|------------------------------------------------------------|
| `.sidebar`  | 1       | Navegación lateral azul, ocupa todo el alto (`grid-row: 1 / -1`) |
| `.header`   | 2       | Barra de búsqueda, perfil y botones de acción              |
| `.container`| 2       | Contenido: tarjetas de proyectos + panel lateral           |

La estructura grid del cuerpo:

```css
body {
    display: grid;
    grid-template-columns: 1fr 4fr; /* sidebar + contenido */
    grid-template-rows: auto 1fr;
    min-height: 100vh;
}
```

El contenido principal usa a su vez una grid de **3fr / 1fr** para separar las tarjetas de proyectos del panel de Announcements y Trending.

---

## 🛠️ Tecnologías

- **HTML5** — estructura semántica del dashboard
- **CSS3** — CSS Grid, Flexbox, variables CSS y box-shadows

---

## 📚 Créditos

- Iconos (SVG y logos) obtenidos de [https://iconos8.es/icons](https://iconos8.es/icons)
- Proyecto realizado como parte del curso [Intermediate HTML and CSS](https://www.theodinproject.com/paths/intermediate-html-and-css) de **The Odin Project** — el mejor sitio para aprender desarrollo web de forma gratuita.

---

<div align="center">

⭐ **Si te gusta, dale una estrella al repositorio**

</div>
