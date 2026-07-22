# Kainos Medical — Sistema de diseño "Cinta de puntos 3D"
### Arquitectura de diseño aprobada para la próxima web (julio 2026)

Este documento captura el sistema de diseño desarrollado y aprobado en el laboratorio de diseño
de julio 2026, tras cuatro conceptos en competencia, paneles de jueces con verificación de
navegador, y siete rondas de iteración dirigidas por el cliente. El prototipo de referencia es
`prototipos/organismo-final-cinta-3d.html` (autocontenido: ábrelo en cualquier navegador).

---

## 1. Identidad

- **Lienzo**: blanco hueso cálido (familia `#faf7f2` a `#f5f1ea`). Nunca blanco puro, nunca oscuro.
- **Tinta**: navy de marca `#0a1428` y su familia para texto y puntos de la cinta.
- **Acento**: cian `#4fc3f7`, reservado EXCLUSIVAMENTE para crestas activas de la onda, frentes
  de pulso, y la capa de IA del ultrasonido. Nunca como color decorativo general.
- **Tipografías** (embebidas como woff2 base64 en el prototipo): **Fraunces** (display, con
  ópticas ajustadas; itálica solo para aperturas de sección de una palabra) + **Karla** (cuerpo y UI).
  Fallbacks de sistema siempre presentes.

## 2. La cinta de puntos (el alma de la página)

Superficie de ondas 3D hecha de miles de puntos (halftone) renderizada en un canvas 2D sin
librerías. Referencia visual: banda de puntos ondulante con espacio libre arriba y abajo.

- **Geometría**: filas en profundidad con proyección en perspectiva; los puntos encogen y se
  desvanecen hacia el fondo. Radio y alpha por punto responden a profundidad Y pendiente local
  de la superficie: los pliegues empinados generan bandas densas de moiré; las crestas planas
  quedan dispersas y claras. Columna vertebral densa, bordes superior e inferior desvanecidos.
- **Altura por sección** (keyframes de scroll): baja bajo el hero, media entre las estadísticas,
  serpentea alrededor de la columna de tarjetas en Alethia, sube con envolvente creciente en
  mercado, resuelve calma en contacto.
- **Carácter narrativo por sección**: calma (hero), agitada e irregular (el problema), alineación
  armónica (Alethia), envolvente ascendente (mercado), calma resuelta (cierre).
- **Movimiento**: corriente horizontal de DERECHA A IZQUIERDA. En reposo, deriva sutil (~11 px/s
  coherentes, "fotografía que respira"). El scroll multiplica la velocidad de flujo (hasta ~44x)
  con ataque rápido y liberación lenta; al soltar vuelve a la calma.
- **Parallax**: tres bandas de profundidad a 0.72x / 1.00x / 1.30x, más contra-deriva suave de
  los bloques DOM (`[data-drift]`, clamp con tanh).
- **Interacción**: clic emite un pulso-eco radial (frente con cresta cian y eco de retorno más
  tenue); el cursor levanta amplitud local con caída radial. Ambos se asientan de vuelta.
- **Convivencia con contenido**: halos de exclusión por tarjeta (unión de cajas hermanas para
  canales limpios) y zonas de calma tras el texto (falloff radial smoothstep), escaladas con el
  flujo. La cinta pasa POR DETRÁS de las cajas, nunca a través.
- **Rendimiento**: DPR cap 1.75, tablas de ruido precomputadas, gobernador adaptativo de dos vías
  (desprende puntos con frame >22ms EMA, restaura tras 2.5s sanos; fade invisible, sin rebuild).
- **Accesibilidad**: `prefers-reduced-motion` sirve un fotograma estático grabado.

## 3. El ultrasonido procedural (sección Alethia)

Simulación B-mode generada píxel a píxel en canvas (sin imágenes): vista FAST del cuadrante
superior derecho. Speckle anisotrópico en coordenadas del haz (veteado radial, granos que se
alargan lateralmente con la profundidad), atenuación con banda TGC, parénquima hepático con
vasos (portal con pared ecogénica), arco especular del diafragma, riñón encapsulado con seno
brillante, y el hallazgo: franja anecoica irregular de líquido libre en el receso de Morison con
refuerzo acústico posterior. Chrome de máquina diegético (SIMULACION, 3.5 MHZ, GAN 62 DB,
PROF 14 CM, CONGELADO, regla de profundidad, barra de grises). Capa de IA en cian: contorno que
abraza el borde anecoico (geometría analítica compartida con el render), placa LIQUIDO LIBRE
0.94, calibrador honesto (lee la distancia real contra la escala), contorno punteado HIGADO 0.98.
Se traza una vez al entrar en vista (~1.2s) y queda quieto; el clic barre una línea de escaneo y
captura un frame re-sembrado.

## 4. Cajas y elevación

Rectángulos de esquinas vivas (0-2px) con borde hairline de 1px, flotando sobre el papel:
sombra de contacto ajustada (1-2px) + ambiental suave (16-32px) teñidas de navy (0.06-0.17),
una sola fuente de luz superior, borde superior apenas más claro. Hover: -2px con sombra
profundizada, con easing. Sin glows, sin halos de color.

## 5. Reglas anti-IA (mandatos del cliente, tolerancia cero)

**En el diseño**: cero formas orgánicas en la UI (sin blobs, cápsulas, costuras onduladas,
bordes ondulantes), cero subrayados de cualquier implementación (links = peso/color + flecha;
el outline de foco visible se conserva por accesibilidad), cero estilo dibujado a mano o lápiz
(sin flechas esbozadas, captions manuscritos, precios tachados), cero elementos rotados o
desalineados a propósito, cero glow uniforme, cero fade-in clonado (cada familia de elementos
tiene su propia entrada).

**En el texto visible**: cero rayas largas o guiones medios como conectores, cero puntos medios
(·), cero barras (/) en cifras o fuentes ("El 66%", "OMS y The Lancet", "USD 199 al mes",
"hasta un 40%"), cero listas con viñetas (prosa corrida), cero cejillas numeradas con puntos
(aperturas de sección = una palabra en serif itálica o nada), cero construcciones "no es solo X,
es Y" ni tríadas robóticas. Español editorial cálido con ritmo variado; todos los datos intactos.

## 6. Contenido y estructura de página aprobada

Orden: Nav (5 links + CTA "Para inversores") → Hero (tesis inversora + invitación a hacer clic
en las ondas) → El problema (4 estadísticas + fuentes) → Alethia ("La misma máquina. Potenciada
con la IA." + 3 pasos + ultrasonido) → Capacidades (3 grupos clínicos) → Impacto (cita Mobileye
+ 500K+ + 10M) → Mercado (22.6B, 10.7B, 37%, Por qué ahora, tabla 30x) → Camino al mercado +
Dónde está Kainos hoy → Contacto (formulario con roles) → Footer (tagline, descargo regulatorio,
copyright). Detalle completo y textos pendientes de confirmar: ver `contenido-oficial-mapeo.md`.

⚠ Datos del prototipo INVENTADOS durante el diseño, pendientes de confirmación del cliente antes
de publicar: cifra de la ronda semilla (USD 1.5-2.5M), mecanismo de pilotos con radiólogos
auditando, "empezando por Centroamérica", precio USD 135,000 del equipo nuevo, "instalación en
una mañana".

## 7. Archivos de este laboratorio

- `prototipos/organismo-final-cinta-3d.html` — **el prototipo aprobado** (cinta + ultrasonido)
- `prototipos/organismo-etapa-manta-puntos.html` — etapa previa: manta de puntos scroll-only
- `prototipos/organismo-etapa-humo.html` — etapa previa: sistema de humo curl-noise
- `prototipos/concepto-brutalismo-clinico.html` — subcampeón del concurso (2º, 7.8/10)
- `prototipos/concepto-kinetico-editorial.html` — ganador original del concurso (8.0/10)
- `prototipos/concepto-cine-diagnostico.html` — concepto cinematográfico (7.0/10)
- `capturas/` — capturas finales de referencia (desktop, móvil, zoom del ultrasonido)
- `contenido-oficial-mapeo.md` — extracción del contenido oficial y mapeo al diseño nuevo
