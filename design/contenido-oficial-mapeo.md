# Contenido de la web oficial de Kainos Medical
### Extracción completa y mapeo hacia el diseño nuevo (cinta de puntos 3D)

Fuente: `site/src/lib/i18n/dictionaries.ts` en la rama `main` (lo que hoy sirve producción). La web oficial es bilingüe: cada texto existe en inglés y español. Abajo va el español como texto principal, con notas donde el inglés aporta algo distinto.

Leyenda del estado en el prototipo nuevo:
- **YA ESTÁ**: el texto vive en el prototipo tal cual o con la reescritura anti-IA acordada
- **ADAPTADO**: el dato está pero la redacción cambió en el prototipo (se indica cómo)
- **FALTA**: no existe en el prototipo y hay que decidir dónde entra

---

## 1. Navegación

| Oficial (ES) | Oficial (EN) | Estado en el prototipo |
|---|---|---|
| El problema | Problem | YA ESTÁ |
| El puente | The Bridge | FALTA (la sección se fusionó en "Alethia") |
| Cómo funciona | How it works | ADAPTADO (es el CTA secundario del hero) |
| Capacidades | Capabilities | FALTA |
| Alethia Kit | Alethia Kit | ADAPTADO (link "Alethia") |
| Impacto | Impact | FALTA como sección propia |
| Oportunidad | Opportunity | ADAPTADO (link "Mercado") |
| Modelo | Business Model | FALTA como link |
| Contacto | Contact | YA ESTÁ (bloque final) |
| Para inversores | For investors | YA ESTÁ (CTA del nav) |

Propuesta: el prototipo usa un nav mínimo de 3 links + CTA, correcto para no saturar. Al pasar a la web real sugiero 5 links: El problema, Alethia, Capacidades, Mercado, Contacto.

## 2. Hero

**Oficial ES**: "El ultrasonido renace con la IA." + "Alethia convierte los ultrasonidos que los hospitales ya tienen en asistentes diagnósticos en tiempo real. Una tableta, una capturadora de video y una IA médica fine-tuned, diseñada para el médico que ve al paciente primero." + píldora "En desarrollo · Primeros pilotos 2026" + CTAs "Solicitar deck para inversores" / "Cómo funciona".

**Oficial EN**: "The old ultrasound, reborn with AI." (nota: en inglés el matiz es "el ultrasonido *viejo*").

**Estado**: YA ESTÁ, con la reescritura acordada (el título quedó "El ultrasonido renace con la inteligencia artificial." y el cuerpo se volvió el argumento inversor: quien recibe al paciente no es radiólogo, lectura nivel especialista en menos de 100 ms, pilotos 2026). La píldora con "·" se eliminó por regla anti-IA y su dato vive dentro del cuerpo.

## 3. El problema

**Oficial ES**: título "El médico correcto rara vez es el primero." + cuerpo sobre urgencias y clínicas rurales + 4 estadísticas:

1. **2/3** — de la población mundial no tiene acceso a imagenología médica (OMS)
2. **1.9M** — bebés nacen muertos cada año, la mayoría por condiciones que un ultrasonido pudo haber detectado (OMS / The Lancet Stillbirths Series)
3. **30–40%** — de la mortalidad por trauma es por hemorragia no controlada (NIH)
4. **94%** — precisión de nivel especialista lograda por IA en imágenes médicas, sin restricción geográfica (Lancet Digital Health, 2021)

Más la nota al pie de fuentes completas: WHO Maternal Mortality Fact Sheet (2023); Trends in Maternal Mortality 2000–2023 (WHO, UNFPA, UNICEF, World Bank); NIH StatPearls sobre Control de Hemorragias; Stengel et al. sobre el examen FAST.

**Estado**: YA ESTÁ (título y cuerpo intactos; las cifras reescritas por las reglas: "66%" con "Dos de cada tres personas", "hasta 40%", "OMS y The Lancet"). **FALTA la nota al pie de fuentes completas** — recomiendo añadirla en letra pequeña bajo la grilla de estadísticas: para un inversor que hace diligencia, las fuentes citables suman.

## 4. El puente (sección completa FALTA en el prototipo)

**Oficial ES**: título "La misma máquina. Potenciada con la IA." (EN: "Same machine. Different eyes.") + cuerpo sobre la capturadora que lee la salida RGB + 3 pasos numerados:

- **01 Conéctalo a lo que ya tienes** — módulo de captura VGA, DVI o compuesta, sin firmware, sin depender del fabricante
- **02 Alethia lee la señal** — modelo en el dispositivo, sin latencia de nube, ningún dato del paciente sale de la tableta
- **03 El clínico ve estructura** — órganos, patologías, mediciones fetales, líquido libre, con indicadores de confianza

**Estado**: ADAPTADO parcialmente — el prototipo tiene estos 3 pasos casi idénticos dentro de la sección "Alethia" (Tres capas que caben en una mochila). Lo que se perdió: el titular "La misma máquina." (potente para inversores) y el detalle "indicadores de confianza". Propuesta: usar "La misma máquina. Potenciada con la IA." como titular de la sección Alethia del diseño nuevo, y devolver "indicadores de confianza" al paso 03.

## 5. Cómo funciona / Tres capas (fusionada en el prototipo)

**Oficial ES**: "Tres capas. Un dispositivo." + tarjetas Captura (ingesta RGB universal, 60 fps sobre hardware USB común), Procesamiento (inferencia en el dispositivo, menos de 100 ms por frame), Asistencia (overlays, alertas, notas estructuradas automáticas; se integra al flujo del clínico, nunca lo reemplaza).

**Estado**: ADAPTADO — el prototipo dice "Tres capas que caben en una mochila" y cubre captura e inferencia. **FALTA el dato de 60 fps y la frase "se integra al flujo del clínico, nunca lo reemplaza"** — esa frase es oro para la audiencia médica e inversora (desactiva el miedo a "IA reemplaza médicos"). Recomiendo recuperarla textual.

## 6. Capacidades (sección completa FALTA)

**Oficial ES**: "Lo que Alethia ve." + "No es un modelo general, es uno focalizado." + 3 grupos con etiquetas:

- **Abdominal — Órganos abdominales**: Ecogenicidad hepática, Morfología renal, Volumen vesical, Hidronefrosis, Líquido libre (Morison)
- **Obstetricia — Desarrollo fetal**: Edad gestacional, DBP · CC · CA · LF, Frecuencia cardíaca, Curvas de crecimiento, Presentación
- **Emergencia — FAST y Patología**: Ventana pericárdica, Perihepático · periesplénico, Líquido pélvico libre, Alertas de patología, Alerta a especialista

Y 6 ítems descriptivos (Hígado, Riñones, Vejiga, Desarrollo fetal, Líquido libre/sangrado, Alertas de patología) con detalle clínico cada uno.

**Estado**: FALTA por completo. Es la sección que da credibilidad clínica (demuestra foco, no generalidad). Propuesta para el diseño nuevo: una grilla rectangular elevada de 3 columnas (los grupos) con las etiquetas como texto plano en filas — ojo: las etiquetas oficiales usan "·" (DBP · CC · CA · LF); por la regla anti-IA se convertirían a comas ("DBP, CC, CA y LF"). Nota: "no es un modelo general, es uno focalizado" tiene estructura "no es X, es Y" — reescribir (p. ej. "un modelo entrenado solo para las anatomías que importan en urgencias").

## 7. Alethia Kit

**Oficial ES**: "Alethia Kit." + "Una caja. Todo lo que el hospital necesita." + cuerpo (tableta Windows ruggedizada, capturadora USB de grado médico, set universal de cables VGA, DVI, S-Video y compuestas; desplegada, calibrada y soportada de extremo a extremo) + 3 partes: Tableta (grado médico, respaldo de batería, runtime preconfigurado), Captura (lee prácticamente cualquier ultrasonido fabricado desde 1995), Modelo (fine-tuned, actualizaciones over-the-air, inferencia en el dispositivo).

**Estado**: ADAPTADO parcial — el prototipo cubre tableta + capturadora + modelo instalado. **FALTAN tres datos vendedores**: "cualquier ultrasonido fabricado desde 1995", "actualizaciones over-the-air" y "grado médico con respaldo de batería". Recomiendo sumarlos a las tarjetas 01-03 de la sección Alethia.

## 8. Impacto / modelo Mobileye (sección completa FALTA)

**Oficial ES**: "El modelo Mobileye, para la medicina." + cuerpo: "Mobileye no reemplazó el vehículo. Le añadió visión de IA al que ya tenías. Alethia hace lo mismo..." + 3 cifras:

- **30x** — más económico que un ultrasonido nuevo con IA (GE Healthcare · Siemens Healthineers)
- **500K+** — ultrasonidos legacy globalmente elegibles para Alethia (WFUMB · OMS)
- **10M** — trabajadores de salud que le faltarán al mundo para 2030; la asistencia de IA no es opcional, es estructural (OMS, 2023)

**Estado**: el 30x YA ESTÁ (tabla USD 135,000 frente a USD 4,500). **FALTAN la analogía Mobileye, el 500K+ y el 10M.** La analogía Mobileye es probablemente el texto más persuasivo de toda la web oficial para un inversor (comparable conocido, tesis en dos frases). Propuesta: incluirla como un bloque de cita destacada antes del mercado, y sumar 500K+ y 10M a la grilla de mercado. Ojo: "la asistencia de IA no es opcional, es estructural" es estructura "no es X, es Y" — reescribir conservando la idea (p. ej. "la asistencia de IA se vuelve estructural").

## 9. Oportunidad / Mercado

**Oficial ES**: "En el umbral del mercado generacional." + 3 métricas:

- **$22.6B** — mercado de IA en ultrasonido a 2034 (26.6% CAGR, Fortune Business Insights)
- **$10.7B** — mercado global de ultrasonido para 2030 (~5.4% CAGR, Grand View Research)
- **37%** — CAGR del mercado de IA en salud hasta 2030 (Grand View Research)

+ "Por qué ahora" con 4 puntos (base instalada ya pagada; brecha diagnóstica crece más rápido que la formación de sonografistas; IA en dispositivo por fin rápida y barata; marcos regulatorios madurando) + bloque "Hablemos." con "Deck disponible bajo NDA mutuo".

**Estado**: el $22.6B YA ESTÁ como "USD 22,600 millones". **FALTAN $10.7B, 37%, los 4 puntos de "Por qué ahora" y la nota "Deck disponible bajo NDA mutuo".** Los 4 puntos son argumentos de timing que un VC busca explícitamente; en el diseño nuevo irían como filas rectangulares (prosa corrida, sin viñetas, según la regla). La nota del NDA va junto al CTA del deck.

## 10. Modelo de negocio (6 segmentos oficiales frente a 3 canales del prototipo)

**Oficial ES**: "Seis vías al mercado." con 6 segmentos: Validación (red de 50+ radiólogos, Alethia gratis de por vida a cambio de casos validados), Ingreso principal (clínicas: kit $4,500 + $199/mes), Educación (escuelas de medicina, licencias institucionales anuales), Gobierno (ministerios de salud, despliegue masivo), Premium (plataformas petroleras, militares, emergencias; precios premium), Plataforma (telerradiología integrada, cobro por lectura, cada kit un nodo de referencia).

**Estado**: ADAPTADO a 3 canales (Clínicas privadas, Red de radiólogos, Sistemas públicos) por decisión del juez-VC del prototipo ("seis puertas diluyen el foco"). **FALTAN Educación, Premium y Telerradiología.** Decisión tuya: mantener los 3 priorizados (recomendación del panel para el pitch) y mover los otros 3 a una línea secundaria ("más adelante: educación médica, entornos remotos premium y telerradiología por lectura"), o restaurar los 6. El detalle "50+ radiólogos gratis de por vida a cambio de casos validados" es concreto y creíble — recomiendo recuperarlo textual en el Canal 02.

## 11. Contacto

**Oficial ES**: "Habla con Kainos Medical." + "Respondemos cada consulta seria en menos de 72 horas." + formulario (Nombre, Rol con opciones Inversor/Clínico/Socio-Sistema de salud/Otro, Correo, Mensaje) + estados (Enviando…, "Gracias. Te contactaremos pronto.", errores por campo).

**Estado**: ADAPTADO — el prototipo tiene el bloque de contacto simple. **FALTA el formulario completo con roles y validación** (existe en la web oficial y en el rediseño editorial del PR #1). Al construir la web real, el formulario entra con el estilo rectangular elevado. Recordatorio pendiente de la revisión original: el formulario oficial no envía a ningún backend — hay que conectar Formspree/Resend/API propia.

## 12. Footer

**Oficial ES**: tagline "Puente entre la imagenología antigua y el diagnóstico inteligente." + © 2026 Kainos Medical + descargo regulatorio ("Alethia es un sistema de apoyo a la decisión clínica en desarrollo. Aún no cuenta con autorización regulatoria. No apto para uso diagnóstico fuera de programas piloto controlados.") + columnas de navegación.

**Estado**: el descargo YA ESTÁ (obligatorio, intacto). **FALTAN el tagline y el copyright** — triviales de añadir.

---

## ⚠ Textos del prototipo que NO existen en tu web oficial (inventados durante el diseño — confirmar o corregir antes de publicar)

1. **"Ronda semilla de entre USD 1.5 y 2.5 millones: la mitad fabrica los primeros kits, un tercio financia los pilotos clínicos y el resto avanza el registro sanitario."** — cifra y uso de fondos inventados por el juez-VC del prototipo. Confirma o da la cifra real.
2. **"Pilotos 2026 con radiólogos en ejercicio que auditan cada lectura del modelo contra la suya"** — el mecanismo de auditoría es plausible pero no está en tu web. Confirmar.
3. **"empezando por Centroamérica"** (Canal 03) — tu web oficial dice Latinoamérica y África como región objetivo, no Centroamérica específicamente. Confirmar.
4. **"USD 135,000" como precio de un ultrasonido nuevo con IA** — tu web oficial solo dice "30x más económico" sin monto absoluto. El monto es una inferencia (4,500 × 30). Confirmar o citar fuente.
5. **"instalación en menos de una mañana y retorno visible desde el primer estudio"** (Canal 01) — inventado. Confirmar.
6. La web oficial dice **"En desarrollo · Primeros pilotos 2026"**; el prototipo afirma "Los primeros pilotos clínicos llegan en 2026" — consistente, pero verifica que siga siendo la fecha real.

## Resumen de faltantes prioritarios (en orden de valor para inversores)

1. La analogía **Mobileye** (bloque de cita destacada)
2. **"Por qué ahora"** (4 argumentos de timing)
3. **Capacidades** (credibilidad clínica: los 3 grupos con sus etiquetas)
4. Cifras **500K+**, **10M**, **$10.7B** y **37%**
5. La frase **"se integra al flujo del clínico, nunca lo reemplaza"**
6. **Formulario de contacto** completo con roles
7. Nota al pie de **fuentes** y "Deck disponible bajo **NDA** mutuo"
8. Detalles del Kit: **desde 1995**, **over-the-air**, **grado médico**
9. Tagline y copyright del footer
10. Decisión sobre los **6 segmentos frente a 3 canales**

Todo lo anterior entraría al diseño nuevo respetando las reglas vigentes: rectángulos elevados, cero viñetas ni guiones ni barras ni puntos medios en el texto visible, prosa natural, y la cinta de puntos componiendo por detrás.
