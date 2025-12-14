# RCTDR Refactor - QA Checklist

## ✅ Verificación de Funcionalidad

### 1. Navegación (Navbar)
- [ ] Logo clickeable lleva a Home
- [ ] Links de navegación funcionan (todas 6 rutas)
- [ ] Mobile menu abre/cierra correctamente
- [ ] Navbar cambia de estilo al scroll
- [ ] PDF button abre documento en nueva ventana

### 2. Home (/)
- [ ] Hero carga con animaciones
- [ ] Títulos y subtítulos visibles y legibles
- [ ] Botones CTAs funcionan (Veure el Projecte, Explorar Models 3D)
- [ ] Tres pilares se muestran correctamente
- [ ] Sección de especificaciones técnicas visible
- [ ] Status indicator anima

### 3. Projecte (/projecte)
- [ ] Header con título y descripción carga
- [ ] 5 secciones principales visibles:
  - Intenció Principal
  - Criteris Tècnics de Disseny
  - Procés de Desenvolupament
  - Roadmap Futur
  - Limitacions i Consideracions
- [ ] Cajas de información con estilos correctos
- [ ] Animaciones al scroll
- [ ] Timeline V1/V2 clara

### 4. Models (/models)
- [ ] Introducción y descripción visibles
- [ ] Visor 3D V1 carga correctamente
  - [ ] Se puede rotar con mouse
  - [ ] Se puede zoom con scroll
  - [ ] Auto-rotación funciona
- [ ] Visor 3D V2 carga correctamente
- [ ] Comparativa V1/V2 es clara
- [ ] Check/X icons muestran características
- [ ] Layout responsive funciona en mobile

### 5. Muntatge (/muntatge)
- [ ] Header y descripción carga
- [ ] 3 secciones principales:
  - Preparació del Xassís
  - Tren de Rodatge
  - Electrònica i Final
- [ ] 8 pasos numerados visibles
- [ ] Alertas (warning) se muestran correctamente
- [ ] Placeholders de video aparecen
- [ ] Sección de validación final visible
- [ ] Estimación de tiempo legible

### 6. Documentacio (/documentacio)
- [ ] Header y descripción cargan
- [ ] Specs técnicas en sidebar pegajoso (sticky)
- [ ] PDF embed se muestra correctamente
- [ ] Botón de descarga visible
- [ ] Historial de versiones con colores diferenciados
- [ ] Tarjetas de recursos adicionales cargadas
- [ ] Aviso de licencia CC-BY-4.0 visible

### 7. Contacte (/contacte)
- [ ] Header y descripción cargan
- [ ] Información de contacto se muestra
- [ ] Formulario campos aparecen:
  - [ ] Nombre
  - [ ] Email
  - [ ] Asunto (opcional)
  - [ ] Mensaje
- [ ] Validación funciona (sin campos = error)
- [ ] Validación email (formato incorrecto = error)
- [ ] Envío exitoso muestra mensaje verde
- [ ] Form se limpia después del envío

### 8. Responsive Design
- [ ] Desktop (1920px+): Layouts 2-col funcionan
- [ ] Tablet (768px-1920px): Transiciones correctas
- [ ] Mobile (< 768px): Stack vertical correcto
- [ ] Navbar mobile menu funciona
- [ ] Touch interactions en móvil

### 9. Estilos y Animaciones
- [ ] Colores son consistentes (tech-black, tech-accent, etc.)
- [ ] Tipografía jerarquía clara
- [ ] Bordes y boxes coherentes
- [ ] Transiciones smooth (no abruptas)
- [ ] Hover states en botones/links
- [ ] Animaciones scroll (Framer Motion)

### 10. Performance
- [ ] Página carga en < 3 segundos (dev)
- [ ] Preloader inicial funciona
- [ ] Sin console errors
- [ ] Sin console warnings (excepto las esperadas)
- [ ] Images/assets cargan correctamente
- [ ] Visor 3D no consume CPU excesiva

### 11. Accesibilidad
- [ ] Links tienen :focus-visible
- [ ] Inputs tienen labels
- [ ] Contraste de color suficiente
- [ ] Tamaño de fuente legible (base: 16px)
- [ ] Navegación keyboard funciona

### 12. SEO y Meta
- [ ] Title en HTML correcto
- [ ] Meta description presente
- [ ] OG tags (si necesario)
- [ ] Structured data (si aplicable)

## 🐛 Potenciales Issues a Vigilar

1. **Visor 3D**: Si STL no carga, verificar path `/models/chassis.stl`
2. **PDF**: Si no abre, verificar path `/docs/TdR.pdf`
3. **Formulario**: Actualmente simula envío (POST real debe implementarse)
4. **Grid background**: En dispositivos lento puede afectar performance
5. **Sticky sidebar**: En mobile puede no funcionar correctamente

## 📝 Notas Adicionales

- **Idioma**: Toda la UI está en català ✓
- **Stack preservado**: Vite, React, React Router, Tailwind, Framer Motion, Three.js ✓
- **Funcionalidad preservada**: Visor 3D, routing, navegación ✓
- **Componentes nuevos**: SectionHeader, SectionContainer ✓

## ✨ Testing Manual Recomendado

1. Navegar por todas las rutas 5-10 veces
2. Probar con DevTools:
   - Throttle network (Fast 3G)
   - Throttle CPU (6x slowdown)
   - Mobile emulation (iOS/Android)
3. Pruebas en navegadores:
   - Chrome/Edge (Chromium)
   - Firefox
   - Safari (si es posible)
4. Verificar mobile en dispositivo físico
5. Validar formulario con inputs inválidos

## 🎯 Criterios de Aceptación

- ✅ Todas las 6 rutas SPA funcionan
- ✅ Navegación intuitiva
- ✅ Visor 3D interactivo
- ✅ Formulario con validación
- ✅ Responsive en todos los breakpoints
- ✅ Narrativa clara y profesional
- ✅ 100% en català
- ✅ Sin errores en console
- ✅ Performance aceptable

---

**Última actualización:** Diciembre 2025
**Status:** ✅ Listo para testing
