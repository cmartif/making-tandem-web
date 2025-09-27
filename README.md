# Making Tandem - Sitio Web

Sitio web oficial de Making Tandem, una empresa que crea herramientas de comunicación visual para familias adoptivas y niños con necesidades especiales.

## 📁 Estructura del Proyecto

```
web/
├── index.html                 # Página principal
├── assets/                    # Recursos estáticos
│   ├── css/
│   │   ├── styles.css        # Estilos principales
│   │   └── product-page.css  # Estilos para páginas de productos
│   ├── js/
│   │   ├── main.js          # JavaScript principal
│   │   └── product-page.js  # JavaScript para páginas de productos
│   └── images/              # Imágenes
│       └── products/        # Imágenes de productos
├── productos/               # Páginas de productos
│   ├── rutinas.html
│   ├── acciones.html
│   ├── emociones.html
│   ├── pack-completo.html
│   ├── primeras-palabras.html
│   └── complementos.html
└── pages/                   # Páginas adicionales
    ├── politica-privacidad.html
    └── terminos-condiciones.html
```

## 🚀 Características

### Diseño Responsivo
- Diseño móvil-first
- Compatible con todos los dispositivos
- Navegación adaptativa

### Funcionalidades
- **Carrito de compras** con localStorage
- **Sistema de notificaciones** personalizado
- **Galería de imágenes** interactiva
- **Formulario de contacto** funcional
- **Sistema de reseñas** (modal)
- **Animaciones suaves** y efectos de scroll

### SEO Optimizado
- Meta tags optimizados
- Open Graph para redes sociales
- Estructura semántica HTML5
- URLs amigables

### Performance
- Imágenes optimizadas
- CSS y JS minificados (listo para producción)
- Lazy loading para imágenes
- Service Worker preparado para PWA

## 🛠 Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con variables CSS
- **JavaScript ES6+** - Funcionalidad interactiva
- **Font Awesome** - Iconografía
- **Google Fonts** - Tipografía (Poppins)

## 📋 Productos Incluidos

1. **Pictogramas: Rutinas** (25€)
   - Más de 40 pictogramas para rutinas diarias

2. **Pictogramas: Acciones** (35€)
   - Más de 50 acciones del día a día

3. **Pictogramas: Emociones** (45€)
   - Más de 70 pictogramas para gestión emocional

4. **Pack Completo** (85€)
   - Los tres packs anteriores con descuento

5. **Primeras Palabras** (95€)
   - Más de 300 tarjetas de vocabulario

6. **Complementos**
   - Recomendaciones de materiales

## 🎨 Paleta de Colores

```css
--primary-color: #fbbf24     /* Amarillo corporativo */
--primary-dark: #f59e0b      /* Amarillo oscuro */
--secondary-color: #111827   /* Negro */
--accent-color: #fbbf24      /* Amarillo */
--gray-scales: #fafafa to #171717
```

## 📱 Funcionalidades del Carrito

- Añadir productos al carrito
- Persistencia con localStorage
- Contador de productos
- Vista del carrito
- Envío por email para pedidos

## 🔧 Instalación y Uso

1. **Clonar o descargar** este directorio
2. **Abrir index.html** en un navegador web
3. **Para desarrollo local**, usar un servidor HTTP simple:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx live-server
   ```

## 📧 Configuración del Formulario

El formulario de contacto está configurado para enviar emails a:
- **Email principal**: hola@makingtandem.com
- **Email privacidad**: privacidad@makingtandem.com

## 🌐 Despliegue

### Railway
1. Conectar repositorio de GitHub
2. Railway detectará automáticamente el sitio estático
3. Configurar dominio personalizado

### Netlify
1. Arrastrar la carpeta `web/` a Netlify
2. Configurar dominio personalizado

### GitHub Pages
1. Subir archivos al repositorio
2. Activar GitHub Pages en configuración
3. Seleccionar la carpeta principal

## 📈 Analytics y Tracking

El sitio está preparado para Google Analytics:
- Tracking de productos
- Eventos de carrito
- Seguimiento de conversiones

## 🔒 Seguridad y Privacidad

- Cumple con RGPD
- Política de privacidad incluida
- No utiliza cookies de terceros sin consentimiento
- Enlaces seguros (HTTPS ready)

## 🎯 Optimizaciones Implementadas

### CSS
- Variables CSS para mantenimiento fácil
- Sistema de diseño coherente
- Animaciones performantes
- Media queries optimizadas

### JavaScript
- Eventos delegados
- Debounce/throttle para scroll
- Lazy loading
- Error handling

### HTML
- Estructura semántica
- Accesibilidad (ARIA labels)
- Meta tags optimizados
- Open Graph tags

## 📞 Contacto y Soporte

Para consultas sobre el desarrollo del sitio web:
- Email: desarrollo@makingtandem.com

Para consultas sobre productos:
- Email: hola@makingtandem.com
- Teléfono: +34 XXX XXX XXX

## 📝 Notas de Desarrollo

### Próximas Mejoras
- [ ] Sistema de pago integrado
- [ ] Panel de administración
- [ ] Blog/recursos
- [ ] Testimonios de clientes
- [ ] Chat en vivo
- [ ] Multiidioma

### Mantenimiento
- Actualizar precios en variables CSS
- Revisar enlaces periódicamente
- Optimizar imágenes regularmente
- Actualizar dependencias

---

**Making Tandem** - Construyendo puentes de comunicación entre familias 💜