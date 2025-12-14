# 🗺️ RCTDR - Mapa Visual del Proyecto

```
╔════════════════════════════════════════════════════════════════════════════╗
║                     RCTDR - ESTRUCTURA VISUAL FINAL                       ║
╚════════════════════════════════════════════════════════════════════════════╝

┌──────────────────────────────────────────────────────────────────────────┐
│                          NAVBAR (FIXED)                                  │
│  Logo "RCTDR.dev" │ Home │ Projecte │ Models │ Muntatge │ Docs │ Contact│
└──────────────────────────────────────────────────────────────────────────┘
                                    ↓

        ╔════════════════════════════════════════════════════════════╗
        ║          MAIN CONTENT (SPA - 6 PAGES)                     ║
        ╠════════════════════════════════════════════════════════════╣


        PATH: /
        ┌────────────────────────────────────────────────────────────┐
        │ HOME - Narrativa Clara                                     │
        ├────────────────────────────────────────────────────────────┤
        │                                                            │
        │  HERO SECTION (60vh)                                       │
        │  ─────────────────────                                     │
        │  "Disseny i validació d'un xassís RC imprès en 3D"        │
        │  Subtítol explicativo (2 línies)                          │
        │  [Descarregar Memòria] [Veure Projecte]                  │
        │                                                            │
        │  TRES PILARS (py-40)                                       │
        │  ──────────────────                                        │
        │  [ Optimització ]  [ Desenvolupament ]  [ Comunitat ]      │
        │   Topològica         Iteratiu            Oberta            │
        │                                                            │
        │  ESPECIFICACIONS (py-40)                                   │
        │  ──────────────────────                                    │
        │  Taula amb dades tècniques (V2.1)                         │
        │                                                            │
        │  CTA FINAL (py-48)                                         │
        │  ───────────────                                           │
        │  "Explorat el projecte en detall"                         │
        │  [Veure Projecte] [Models 3D]                            │
        │                                                            │
        └────────────────────────────────────────────────────────────┘


        PATH: /projecte
        ┌────────────────────────────────────────────────────────────┐
        │ PROJECTE - Filosofia de Disseny                           │
        ├────────────────────────────────────────────────────────────┤
        │                                                            │
        │  HEADER (py-24)                                            │
        │  ──────────────                                            │
        │  Label: "Filosofia de Disseny"                            │
        │  H1: "Objectius del Projecte"                            │
        │  Subtítol explicativo                                     │
        │                                                            │
        │  SECCIONS (space-y-32, max-w-5xl)                         │
        │  ──────────────────────────────                           │
        │  1. Intenció Principal                                    │
        │     [Icona TARGET]  Texto + Párrafos                      │
        │                                                            │
        │  2. Criteris Tècnics                                      │
        │     [Icona GRID]    Cajas info con border-left            │
        │     • Orientació de capes                                 │
        │     • Modularitat universal                               │
        │     • Geometria de suspensió                              │
        │                                                            │
        │  3. Procés de Desenvolupament                            │
        │     [Icona LIGHTBULB]  Timeline V1/V2                     │
        │     V1 (red)  → V2 (blue)                                 │
        │                                                            │
        │  4. Roadmap Futur                                         │
        │     [Icona TRENDING]  Bullets con próximos pasos          │
        │                                                            │
        │  5. Limitacions                                           │
        │     [Icona ALERT]   Warnings diferenciados                │
        │                                                            │
        └────────────────────────────────────────────────────────────┘


        PATH: /models
        ┌────────────────────────────────────────────────────────────┐
        │ MODELS - Visor 3D Interactivo                             │
        ├────────────────────────────────────────────────────────────┤
        │                                                            │
        │  HEADER (py-20)                                            │
        │  ──────────────                                            │
        │  Label: "Visor 3D Interactiu"                             │
        │  H1: "Models CAD"                                         │
        │  Descripció: "Explora les versions..."                    │
        │                                                            │
        │  COMPARATIVA V1 (grid 2-col, gap-16)                      │
        │  ──────────────────────────────────                       │
        │  [Texto V1]              [Visor 3D V1]                    │
        │  • Título H2                │                             │
        │  • Descripción              │ Canvas Three.js             │
        │  • Cajas características    │ Rotación: ✓                 │
        │  (Check/X icons)            │ Zoom: ✓                     │
        │                             │                             │
        │                                                            │
        │  COMPARATIVA V2 (grid 2-col, gap-16)                      │
        │  ──────────────────────────────────                       │
        │  [Visor 3D V2]           [Texto V2]                       │
        │  Canvas Three.js         • Título H2                      │
        │  Color: azul             • Descripción                    │
        │                          • Mejoras (Check icons)          │
        │                          • Warning (AlertCircle)          │
        │                                                            │
        └────────────────────────────────────────────────────────────┘


        PATH: /muntatge
        ┌────────────────────────────────────────────────────────────┐
        │ MUNTATGE - Guia Pas a Pas                                 │
        ├────────────────────────────────────────────────────────────┤
        │                                                            │
        │  HEADER (py-24)                                            │
        │  ──────────────                                            │
        │  Label: "Guia Pas a Pas"                                  │
        │  H1: "Com Muntar el Xassís"                              │
        │  Subtítol descriptivo                                     │
        │                                                            │
        │  SECCIONS NUMERADAS (space-y-32, border-t)                │
        │  ─────────────────────────────────────                    │
        │  01. Preparació del Xassís                                │
        │  ├─ [Placeholder Video] [Step 1: Inserts]                │
        │  ├─ [Step 2: Neteja]                                     │
        │  └─ [Step 3: Ensamblatge] with WARNING                   │
        │                                                            │
        │  02. Tren de Rodatge                                      │
        │  ├─ [Placeholder Video] [Step 4: Trapezis]               │
        │  ├─ [Step 5: Instal·lació]                               │
        │  └─ [Step 6: Muntatge rodaments] with WARNING             │
        │                                                            │
        │  03. Electrònica i Final                                  │
        │  ├─ [Step 7: Motor i transmissió]                        │
        │  └─ [Step 8: Verificació final]                          │
        │     [Sección VALIDACIÓ - 5 checks amb CheckCircle]       │
        │                                                            │
        │  [Card Final]                                             │
        │  "Certificació de Muntatge" + Shield icon                │
        │                                                            │
        └────────────────────────────────────────────────────────────┘


        PATH: /documentacio
        ┌────────────────────────────────────────────────────────────┐
        │ DOCUMENTACIO - Recursos Técnics                           │
        ├────────────────────────────────────────────────────────────┤
        │                                                            │
        │  HEADER (py-24)                                            │
        │  ──────────────                                            │
        │  Label: "Recursos Tècnics"                                │
        │  H1: "Documentació Completa"                             │
        │  Subtítol descriptivo                                     │
        │                                                            │
        │  MAIN GRID (grid 3-col)                                   │
        │  ──────────────────────                                   │
        │  [Sticky Sidebar]        [Content Area - 2 columns]       │
        │  Specs Técniques         • Memòria del Projecte           │
        │  • Escala                  PDF embed + Download           │
        │  • Batalla                                                │
        │  • Amplada               • Historial Versions             │
        │  • Pes                     v2.1.0 (green border-l)        │
        │  • Material                v2.0.0 (blue border-l)         │
        │  • Tracció                 v1.0.0 (gray border-l)         │
        │  • Versió                                                 │
        │                                                            │
        │  ADDITIONAL RESOURCES (grid 2-col, mt-24)                │
        │  ───────────────────────────────────────                 │
        │  [DocCard] CAD STL         [DocCard] BOM                  │
        │  [icon CODE] → Descarregar [icon GRID] → Spreadsheet     │
        │                                                            │
        │  [DocCard] Paràmetres     [DocCard] Manual                │
        │  [icon FILE] → PDF         [icon FILE] → Guia             │
        │                                                            │
        │  [License Notice]                                         │
        │  CC-BY-4.0                                                │
        │                                                            │
        └────────────────────────────────────────────────────────────┘


        PATH: /contacte
        ┌────────────────────────────────────────────────────────────┐
        │ CONTACTE - Formulari de Contacte                          │
        ├────────────────────────────────────────────────────────────┤
        │                                                            │
        │  HEADER (centered)                                         │
        │  ───────────────                                          │
        │  Label: "Comunicació"                                     │
        │  H1: "Contacta amb Nosaltres"                            │
        │  Subtítol                                                 │
        │                                                            │
        │  GRID 2-COL (gap-16)                                      │
        │  ───────────────────                                      │
        │  [LEFT COLUMN]               [RIGHT COLUMN]               │
        │  Contact Info                Form                         │
        │  ─────────────                ────                        │
        │  [Mail Icon]                 [Success msg]                │
        │  Correu Electrònic           ├─ Nom *                     │
        │  • adria@example.com         ├─ Email *                   │
        │  • Resposta 24-48h           ├─ Asunto                    │
        │                              ├─ Mensaje * (textarea)      │
        │  [Message Icon]              └─ [Enviar] (full-width)    │
        │  Ubicació                                                 │
        │  • Barcelona                 [Error msg]                  │
        │  • Institut...               Validació feedback           │
        │                                                            │
        │  Temes que Tractem                                        │
        │  ─────────────────                                        │
        │  → Preguntes tècniques                                    │
        │  → Suport de muntatge                                     │
        │  → Collaboracions                                         │
        │  → Feedback i millores                                    │
        │                                                            │
        └────────────────────────────────────────────────────────────┘


        ╚════════════════════════════════════════════════════════════╝

┌──────────────────────────────────────────────────────────────────────────┐
│                           FOOTER (GLOBAL)                               │
│         © 2025 RCTDR │ Social Links │ Privacy │ License CC-BY           │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 🎨 Sistema de Colores

```
┌─────────────────────────────────────────────┐
│ PRIMARY COLORS                              │
├─────────────────────────────────────────────┤
│ tech-black    #0a0a0a  (Background)        │
│ tech-dark     #121212  (Cajas oscuras)     │
│ tech-gray     #1e1e1e  (Acentos grises)    │
│ white         #ffffff  (Textos / CTAs)     │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ ACCENT COLORS                               │
├─────────────────────────────────────────────┤
│ tech-accent   #3b82f6  (Énfasis principal) │
│ tech-success  #10b981  (Confirmación)      │
│ tech-warning  #f59e0b  (Advertencias)      │
│ tech-error    #ef4444  (Errores)           │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ SEMANTIC USAGE                              │
├─────────────────────────────────────────────┤
│ Buttons           → white                   │
│ Títulos           → white                   │
│ Subtítulos        → gray-400                │
│ Descripción       → gray-400                │
│ Labels            → gray-500                │
│ Accent elements   → tech-accent (#3b82f6)  │
│ Borders focus     → tech-accent             │
│ Success feedback  → tech-success (#10b981) │
│ Warnings          → tech-warning (#f59e0b) │
│ Errors            → tech-error (#ef4444)   │
└─────────────────────────────────────────────┘
```

---

## 📐 Espaciado y Layout

```
┌─────────────────────────────────────────────┐
│ VERTICAL SPACING (Padding Y)                │
├─────────────────────────────────────────────┤
│ py-40   = 10rem (160px)  ← Secciones gdes  │
│ py-48   = 12rem (192px)  ← Separación gran │
│ py-24   = 6rem  (96px)   ← Headers         │
│ py-12   = 3rem  (48px)   ← Elementos       │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ HORIZONTAL SPACING (Gap)                    │
├─────────────────────────────────────────────┤
│ gap-16  = 4rem  (64px)   ← Grid 2-col      │
│ gap-12  = 3rem  (48px)   ← Grid elementos  │
│ gap-6   = 1.5rem (24px)  ← Flex items      │
│ gap-3   = 0.75rem (12px) ← Icons/text      │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ BREAKPOINTS (Tailwind responsive)           │
├─────────────────────────────────────────────┤
│ xs   : 0px          (Mobile)                │
│ sm   : 640px        (Small devices)         │
│ md   : 768px        (Tablets)               │
│ lg   : 1024px       (Desktops)              │
│ xl   : 1280px       (Large desktops)        │
│ 2xl  : 1536px       (Extra large)           │
└─────────────────────────────────────────────┘
```

---

## 📊 Componentes Reutilizables

```
SectionHeader.jsx
├─ Props:
│  ├─ title (required)
│  ├─ subtitle (optional)
│  ├─ label (optional)
│  ├─ centered (boolean)
│  └─ animated (boolean)
└─ Uso: Todos los títulos principales

SectionContainer.jsx
├─ Props:
│  ├─ bg (transparent|dark|gray|black)
│  ├─ border (boolean)
│  ├─ fullWidth (boolean)
│  ├─ py (class string)
│  └─ animated (boolean)
└─ Uso: Envolver secciones principales
```

---

## 🔗 Conexiones y Navegación

```
Home (/) 
├─ CTA: "Veure el Projecte" → /projecte
├─ CTA: "Veure els models 3D" → /models
└─ Navbar: Links a todas las rutas

Projecte (/projecte)
├─ Navbar: Links a todas las rutas
└─ Relacionado con: /models (evolución V1→V2)

Models (/models)
├─ Comparativa V1 y V2
└─ Navbar: Links a todas las rutas

Muntatge (/muntatge)
├─ Guía para construir el proyecto
└─ Navbar: Links a todas las rutas

Documentacio (/documentacio)
├─ Links a PDFs y recursos
└─ Navbar: Links a todas las rutas

Contacte (/contacte)
├─ Formulario para contactar
└─ Navbar: Links a todas las rutas
```

---

## 🎯 Jerarquía Visual

```
NIVEL 1 - MÁS PROMINENTE
├─ Títulos H1 (60-96px, white, bold)
├─ Botones CTA primarios (white bg)
└─ Visor 3D principal (canvas grande)

NIVEL 2 - IMPORTANTE
├─ Títulos H2 (36-56px, white, bold)
├─ Subtítulos (20px, gray-400)
└─ Botones secundarios (border)

NIVEL 3 - REFERENCIA
├─ Títulos H3 (20-24px, white)
├─ Descripción (18px, gray-400)
└─ Labels (12px, gray-500)

NIVEL 4 - SUPLEMENTARIO
├─ Hints/Labels (10-12px, gray-500, mono)
├─ Metadata (small, muted)
└─ Decoración (icons, lines)
```

---

## ✨ Principios de Diseño

```
1. ESPACIO BLANCO (Aire visual)
   └─ py-40, py-48, gap-16 → Respiro entre secciones

2. CLARIDAD (Comunicación directa)
   └─ Títulos contundentes, subtítulos explicativos

3. JERARQUÍA (Orden visual)
   └─ H1 → H2 → H3 → Body con tamaños diferenciados

4. CONSISTENCIA (Reutilización)
   └─ SectionHeader, SectionContainer en todas partes

5. MINIMALISMO (Menos es más)
   └─ Sin decoración innecesaria, enfoque en contenido

6. PROFESIONALISMO (Seriedad)
   └─ Colores tech, borders cuadrados, fonts sans-serif
```

---

**Este es el mapa visual del RCTDR refactorizado. Cada sección está diseñada para comunicar claramente y mantener coherencia visual en toda la aplicación.**

✅ Marzo 2025 - Refactor Completado
