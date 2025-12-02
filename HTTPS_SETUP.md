# 🔐 HTTPS Configuration - RCTDR

## Configuración HTTPS Completada

Se ha configurado **HTTPS automático** para el servidor de desarrollo de RCTDR usando `@vitejs/plugin-basic-ssl`.

---

## 🚀 Cómo Usar HTTPS Ahora

### 1. Inicia el servidor de desarrollo
```bash
npm run dev
```

**Resultado esperado:**
```
  HTTPS: https://localhost:5173
```

### 2. Abre en el navegador
```
https://localhost:5173
```

**Nota:** Es normal que el navegador muestre una advertencia de certificado no confiable. Es un certificado autofirmado de desarrollo, perfectamente seguro en local.

---

## ⚙️ Qué Se Hizo

### 1. Instalación de Plugin SSL
```bash
npm install --save-dev @vitejs/plugin-basic-ssl@1
```

Este plugin genera automáticamente certificados SSL/TLS para desarrollo.

### 2. Actualización de vite.config.js
```javascript
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
    plugins: [react(), basicSsl()],
    server: {
        port: 5173,
    },
})
```

**Cambios:**
- ✅ Importa plugin `basicSsl`
- ✅ Añade a plugins array
- ✅ Automáticamente genera certificados en primer inicio
- ✅ HTTPS se activa sin configuración manual

---

## 🔒 Certificados Autofirmados

### Ubicación
Los certificados se generan automáticamente en:
```
node_modules/.vite/
```

### Duración
Los certificados se regeneran automáticamente cada vez que se inicia Vite.

### En el Navegador
Es normal ver advertencias como:
```
"Su conexión no es privada"
"ADVERTENCIA: Sitio no verificado"
```

Esto es esperado para certificados autofirmados locales. Para continuar:
- **Chrome:** Click en "Avanzado" → "Proceder a localhost"
- **Firefox:** Click en "Aceptar riesgo y continuar"
- **Safari:** Click en "Visitar sitio web"

---

## ✅ Ventajas de HTTPS en Desarrollo

1. **Testing Real** → Prueba comportamiento HTTPS antes de producción
2. **Service Workers** → Algunos APIs requieren HTTPS
3. **Cookies Seguras** → Test de `secure` flag en cookies
4. **APIs Modernas** → Geolocation, camera, microphone requieren HTTPS
5. **Producción Realista** → Simula entorno de producción más cercano

---

## 🚀 Para Producción

En producción, **necesitarás certificados HTTPS reales**:

### Opciones:
1. **Netlify** (recomendado)
   ```bash
   npm run build
   # Deploy folder "dist" a Netlify
   # HTTPS automático incluido ✓
   ```

2. **Vercel**
   ```bash
   npm run build
   # Deploy con Vercel CLI
   # HTTPS automático incluido ✓
   ```

3. **Servidor Propio**
   - Usa **Let's Encrypt** (gratuito)
   - O compra certificado de proveedor SSL
   - Configura en nginx/Apache

---

## 📝 Notas Importantes

✅ **Desarrollo:** HTTPS automático con certificados autofirmados
✅ **Producción:** Usa certificados reales (Netlify/Vercel incluyen)
✅ **Seguridad:** Los certificados autofirmados son seguros en local
✅ **Performance:** No hay impacto negativo en desarrollo
✅ **Compatibilidad:** Funciona en Chrome, Firefox, Safari, Edge

---

## 🔧 Troubleshooting

### "No se puede acceder a https://localhost:5173"
1. Verifica que Vite está corriendo (`npm run dev`)
2. Abre en navegador con HTTPS (no HTTP)
3. Acepta el certificado autofirmado

### "Certificado inválido"
Esto es normal. El certificado es autofirmado para desarrollo local.
- Chrome: "Avanzado" → "Proceder a localhost"
- Firefox: "Aceptar el riesgo"

### "CORS errors"
Si ves errores CORS:
1. Verifica que las APIs están configuradas para HTTPS
2. En desarrollo local, los CORS suelen permisivos

---

## 📊 Resumen de Cambios

| Archivo | Cambio |
|---------|--------|
| `vite.config.js` | Añadido plugin `basicSsl` |
| `package.json` | Instalado `@vitejs/plugin-basic-ssl@1` |
| Servidor | Ahora corre en HTTPS automáticamente |

---

## ✨ Comandos

```bash
# Desarrollo con HTTPS (automático)
npm run dev

# Build para producción
npm run build

# Preview de build
npm run preview
```

---

**Configuración completada:** ✅ Diciembre 2025
**HTTPS Status:** ✅ ACTIVO EN DESARROLLO
**Certificados:** ✅ Autofirmados (seguro en local)
**Producción:** ⏳ Usa Netlify/Vercel/Let's Encrypt
