# TechToJob — Landing Page

> Plataforma web moderna de alto rendimiento que conecta talento tecnológico con empresas mediante retos técnicos en vivo, torneos colaborativos y comunidad activa, superando los filtros tradicionales de CV.

![Next.js 16](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)
![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript 5](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)
![next-intl](https://img.shields.io/badge/next--intl-v4-FF5722?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Production_Ready-brightgreen?style=for-the-badge)

---

## 📋 Tabla de Contenidos

- [Visión General](#-visión-general)
- [Stack Tecnológico](#-stack-tecnológico)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Estructura de Directorios](#-estructura-de-directorios)
- [Módulos e Implementaciones Clave](#-módulos-e-implementaciones-clave)
  - [Internacionalización (i18n)](#1-sistema-de-internacionalización-i18n)
  - [Motor Gráfico en HTML5 Canvas](#2-motor-gráfico-en-html5-canvas)
  - [Componentes Interactivos y UX](#3-componentes-interactivos-y-ux)
  - [Design System & Estilos (Tailwind CSS v4)](#4-design-system--estilos-tailwind-css-v4)
- [SEO, Metadatos y Accesibilidad](#-seo-metadatos-y-accesibilidad)
- [Guía de Inicio Rápido](#-guía-de-inicio-rápido)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación y Ejecución](#instalación-y-ejecución)
  - [Scripts Disponibles](#scripts-disponibles)
- [Variables de Entorno](#-variables-de-entorno)
- [Convenciones de Código y Buenas Prácticas](#-convenciones-de-código-y-buenas-prácticas)

---

## 🎯 Visión General

**TechToJob** es una landing page interactiva desarrollada con **Next.js (App Router)** y **React 19**, orientada a transformar la selección de talento IT. Su diseño combina una estética visual oscura y limpia inspirada en la identidad de marca (*Dark #2f3436* y *Teal #84c0bf*), micro-interacciones fluidas, animaciones en canvas de alto rendimiento a 60 FPS y una arquitectura completamente tipada con soporte multi-idioma (Español / Inglés).

---

## 🛠 Stack Tecnológico

| Tecnología / Herramienta | Versión | Propósito en el Proyecto |
| :--- | :--- | :--- |
| **[Next.js](https://nextjs.org/)** | `16.3.5` | Framework React con App Router, Server Components y optimización estática. |
| **[React](https://react.dev/)** | `19.2.8` | Biblioteca base de interfaz de usuario con concurrencia y hooks modernos. |
| **[TypeScript](https://www.typescriptlang.org/)** | `^5.x` | Tipado estático estricto end-to-end para estabilidad y mantenibilidad. |
| **[Tailwind CSS](https://tailwindcss.com/)** | `v4.x` | Motor de estilos de última generación con configuración `@theme inline` y cero dependencias CSS heredadas. |
| **[next-intl](https://next-intl-docs.vercel.app/)** | `^4.14.5` | Gestión de internacionalización (i18n), subrutas dinámicas `/[locale]` y tipado de mensajes. |
| **[Lucide React](https://lucide.dev/)** | `^1.47.0` | Set de iconos vectoriales SVG limpios, consistentes y de carga diferida. |
| **[next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)** | Nativo | Carga auto-optimizada con subset latino de la tipografía **Sora** de Google Fonts. |

---

## 🏗 Arquitectura del Proyecto

El proyecto sigue una arquitectura **Server-First** apalancada en Next.js App Router:

1. **Rutas dinámicas por Locale (`src/app/[locale]/`)**: Todas las rutas residen bajo el segmento `[locale]` gestionado por el middleware de `next-intl`.
2. **Generación Estática Previa (`generateStaticParams`)**: Se pre-renderizan los idiomas configurados (`es` y `en`) en tiempo de compilación.
3. **División de Responsabilidades (Server vs Client Components)**:
   - **Server Components**: Las páginas estructurales (`layout.tsx`, `page.tsx`, `robots.ts`) se ejecutan en el servidor, generando HTML puro, metadatos SEO y JSON-LD sin enviar JavaScript innecesario al cliente.
   - **Client Components (`"use client"`)**: Se reservan estrictamente para componentes interactivos que manipulan eventos del DOM, estados locales o APIs del navegador (como `Header`, `Community`, `Tournaments`, `Newsletter`, `HowItWorks` y `CodeParticlesBackground`).

---

## 📂 Estructura de Directorios

```plaintext
techtojob-landing/
├── messages/                       # Diccionarios de traducción estructurados
│   ├── es.json                     # Textos en Español (idioma por defecto)
│   └── en.json                     # Textos en Inglés
├── public/                         # Assets estáticos y logos vectoriales
│   ├── SimboloPositivo.svg         # Isotipo SVG TechToJob positivo
│   ├── v1Negativo.svg              # Logo horizontal TechToJob negativo
│   ├── v2Degradado.svg             # Logo completo TechToJob con degradado
│   └── v2Negativo.svg              # Logo completo TechToJob negativo
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx          # Layout raíz con font Sora, SEO, JSON-LD e i18n Provider
│   │   │   └── page.tsx            # Página principal que ensambla las secciones
│   │   ├── favicon.ico             # Favicon institucional
│   │   ├── globals.css             # Directivas Tailwind v4, variables de tema y animaciones
│   │   └── robots.ts               # Generación dinámica del archivo robots.txt
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Barra de navegación sticky, language switcher y menú móvil
│   │   │   └── Footer.tsx          # Pie de página institucional, enlaces y redes sociales
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Sección principal de bienvenida y llamado a la acción
│   │   │   ├── HowItWorks.tsx      # Paso a paso interactivo con revelado por scroll
│   │   │   ├── TalentAndCompanies.tsx # Comparativa de propuesta de valor (Talento vs Empresas)
│   │   │   ├── Tournaments.tsx     # Sección de torneos con timeline interactivo y slider automático
│   │   │   ├── Community.tsx       # Red interactiva de talento en Canvas 2D y canales de Discord
│   │   │   ├── Testimonials.tsx    # Casos de éxito y testimonios de la comunidad
│   │   │   ├── News.tsx            # Novedades, actualizaciones y anuncios destacados
│   │   │   ├── Newsletter.tsx      # Formulario reactivo de suscripción con micro-animaciones
│   │   │   └── FinalCta.tsx        # Cierre persuasivo con fondo de partículas de código
│   │   └── ui/
│   │       └── CodeParticlesBackground.tsx # Canvas interactivo con sintaxis de código flotante
│   ├── i18n/
│   │   ├── navigation.ts           # Hooks y componentes de navegación tipados para i18n
│   │   ├── request.ts              # Configuración de carga de mensajes por request en servidor
│   │   └── routing.ts              # Definición de idiomas soportados y locale por defecto
│   ├── lib/
│   │   └── constants.ts            # Enlaces de navegación, redes sociales y utilitarios globales
│   └── middleware.ts               # Middleware Next.js de redirección y resolución de idiomas
├── .gitignore                      # Archivos y artefactos ignorados por Git
├── next.config.ts                  # Configuración de Next.js envuelta con plugin next-intl
├── package.json                    # Dependencias y scripts del proyecto
├── postcss.config.mjs              # Configuración de PostCSS para Tailwind CSS v4
└── tsconfig.json                   # Configuración del compilador TypeScript
```

---

## ⚡ Módulos e Implementaciones Clave

### 1. Sistema de Internacionalización (i18n)

Implementado con `@next-intl/plugin` y arquitectura basada en subrutas:

- **Detección Automática y Fallback**: Gestionado a través de `src/middleware.ts` interceptando las rutas `/(es|en)/:path*`.
- **Diccionarios Namespace**: Los archivos `messages/es.json` y `messages/en.json` separan los textos por componentes (`metadata`, `nav`, `hero`, `howItWorks`, `talentAndCompanies`, `tournaments`, `community`, `testimonials`, `news`, `newsletter`, `finalCta`, `footer`).
- **Navegación Preservada**: El componente `Header` incluye un conmutador de idioma dinámico (`ES` / `EN`) que preserva la ruta y el estado utilizando el wrapper `Link` de `src/i18n/navigation.ts`.

### 2. Motor Gráfico en HTML5 Canvas

El proyecto implementa animaciones de renderizado procedural optimizadas en Canvas 2D nativo mediante `requestAnimationFrame`, diseñadas para consumir mínimos recursos de CPU/GPU:

#### A. Red de Nodos de Talento (`Community.tsx`)
- **Densidad de Nodos Adaptativa**: Se calcula dinámicamente mediante `getNodeCount(width)`:
  - Móviles (`< 640px`): 6 a 8 nodos.
  - Tablets (`640px - 1024px`): 12 a 18 nodos.
  - Monitores (`> 1024px`): 28 a 36 nodos.
- **Física de Partículas y Repulsión**: Los nodos se desplazan mediante un modelo armónico sinusoidal (`Math.sin` y `Math.cos`) y reaccionan al puntero del mouse repeliéndose elásticamente con amortiguación tipo resorte (spring damping `0.92`).
- **Prevención de Colisiones**: Algoritmo de separación estricta (`MIN_SEPARATION`) que resuelve solapamientos vectoriales entre nodos.
- **Topología de Red Conexa**: Garantiza que el 100% de los nodos pertenezcan a un grafo conexo continuo mediante enlaces de cadena horizontal y triangulaciones complementarias.
- **Renderizado de Siluetas**: Cada nodo renderiza un avatar procedural vectorial y anillos pulsantes con los colores corporativos.

#### B. Partículas de Código Flotante (`CodeParticlesBackground.tsx`)
- Renderiza fragmentos sintácticos reales de desarrollo (`const [state, setState] = useState()`, `<TechToJob />`, `npm run build`, `git commit -m "feat"`, etc.) flotando con efecto de paralaje y respuesta sutil al cursor.

### 3. Componentes Interactivos y UX

- **`HowItWorks.tsx`**: Contenedor sticky en pantallas de escritorio con revelado progresivo calculado mediante la posición del scroll respecto al viewport, y activación por `IntersectionObserver` en dispositivos móviles.
- **`Tournaments.tsx`**: Timeline de 4 fases con rotación automatizada por temporizador, soporte para pausar la animación al posicionar el cursor (`hover`), selección manual por pestañas y barra de progreso animada.
- **`Newsletter.tsx`**: Validación de sintaxis de correo electrónico en tiempo real, estados de carga y confirmación de suscripción, complementado con las animaciones CSS personalizadas `animate-border-beam` y `animate-card-glow`.
- **`Community.tsx` (Canales por Especialidad)**: Cuadrícula organizada con 8 áreas tecnológicas clave: Backend, Frontend, Mobile, UX/UI, QA, DevOps, Data e IA, y Ciberseguridad.

### 4. Design System & Estilos (Tailwind CSS v4)

Configurado a través de `@import "tailwindcss";` y `@theme inline` en `src/app/globals.css`, eliminando la necesidad de archivos de configuración JS legados:

```css
@theme inline {
  --color-dark: #2f3436;        /* Fondo y textos de alto contraste */
  --color-dark-light: #3d4446;  /* Superficies elevadas oscuras */
  --color-dark-muted: #6b7280;  /* Textos secundarios atenuados */
  --color-teal: #84c0bf;        /* Color primario de marca */
  --color-teal-light: #a3d4d3;  /* Variación luminosa para acentos */
  --color-teal-dark: #6aadac;   /* Variación de contraste */
  --color-white: #ffffff;       /* Fondo claro y superficies */
  --font-sans: var(--font-sora), ui-sans-serif, system-ui, sans-serif;
}
```

---

## 🔍 SEO, Metadatos y Accesibilidad

- **Metadatos Dinámicos**: Implementados en `src/app/[locale]/layout.tsx` mediante `generateMetadata`, generando títulos con plantilla (`%s | TechToJob`), descripciones traducidas, URLs canónicas e imágenes OpenGraph y Twitter Card (`summary_large_image`).
- **Datos Estructurados (JSON-LD)**: Inyección directa en el `<head>` del esquema Schema.org tipo `Organization`, asociando el nombre oficial, logotipo y perfiles sociales (LinkedIn, X / Twitter e Instagram).
- **Robots.txt Automatizado**: Generado mediante la función nativa `src/app/robots.ts`.
- **HTML Semántico y Accesibilidad (A11y)**:
  - Estructura jerárquica de encabezados (`h1` a `h3`).
  - Atributos `aria-label` en enlaces de navegación, conmutador de idiomas y campos de formulario.
  - Elementos decorativos señalizados con `aria-hidden="true"`.
  - Contrastes de color diseñados bajo estándares WCAG AA.

---

## 🚀 Guía de Inicio Rápido

### Requisitos Previos

- **Node.js**: Versión `20.x` o superior recomendada.
- **npm**: Versión `10.x` o superior (también compatible con `pnpm`, `yarn` o `bun`).
- **Git**: Sistema de control de versiones.

### Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/paumf23/TechToJob-Landing.git
   cd techtojob-landing
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Acceder a la aplicación:**
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador. La aplicación redirigirá automáticamente a `/es` o `/en` según las preferencias del navegador.

### Scripts Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el entorno local de desarrollo con Hot Module Replacement (HMR). |
| `npm run build` | Compila la aplicación optimizada para producción con validaciones de tipos. |
| `npm run start` | Arranca el servidor productivo de Next.js tras compilar. |
| `npm run lint` | Ejecuta ESLint para analizar la calidad y estilo del código. |
| `npx tsc --noEmit` | Ejecuta la verificación estricta de tipos de TypeScript sin generar archivos. |

---

## 🌐 Variables de Entorno

Puedes configurar un archivo `.env.local` en la raíz del proyecto para definir variables de entorno personalizadas:

```env
# URL canónica del sitio en producción o entornos de staging
NEXT_PUBLIC_SITE_URL=https://techtojob.vercel.app
```

*(Si no se define, el sistema adopta automáticamente `http://localhost:3000` en entorno de desarrollo).*

---

## 📐 Convenciones de Código y Buenas Prácticas

1. **Traducciones Uniformes**: Al añadir o modificar cualquier clave en `messages/es.json`, debe replicarse la estructura exacta en `messages/en.json`.
2. **Optimización de Medios**: Todos los iconos e isotipos deben importarse en formato SVG vectorial sin caracteres diacríticos o tildes en sus nombres de archivo dentro de `public/`.
3. **Validación Pre-Commit**: Verificar que `npx tsc --noEmit` y `npm run lint` finalicen con código de salida `0` antes de enviar cambios al repositorio.

---

<div align="center">
  <sub>Desarrollado para <strong>TechToJob</strong>. Todos los derechos reservados © 2026.</sub>
</div>
