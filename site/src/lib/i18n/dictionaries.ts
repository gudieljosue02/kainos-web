export const LOCALES = ["en", "es"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const dict = {
  en: {
    nav: {
      problem: "Problem",
      bridge: "The Bridge",
      how: "How it works",
      capabilities: "Capabilities",
      kit: "Alethia Kit",
      impact: "Impact",
      opportunity: "Opportunity",
      contact: "Contact",
      primaryCta: "For investors",
    },

    hero: {
      eyebrow: "Kainos Medical · Alethia",
      titleA: "The old ultrasound,",
      titleB: "reborn with AI.",
      body: "Alethia turns the ultrasound machines hospitals already own into real-time diagnostic assistants. A tablet, a capture device, and a fine-tuned medical AI — built for the doctor who sees the patient first.",
      primary: "Request investor deck",
      secondary: "See how it works",
      pill: "In development · First pilots 2026",
    },

    problem: {
      eyebrow: "The gap",
      title: "The first doctor rarely has the right eyes.",
      titleLead: "The right doctor is rarely ",
      titleTail: "the first doctor.",
      body: "In emergency rooms and rural clinics across the world, the doctor on call is often a generalist — not a radiologist or sonographer. The equipment exists. The expertise does not.",
      stats: [
        {
          value: "2/3",
          label: "of the global population lacks access to medical imaging",
          source: "WHO",
        },
        {
          value: "1.9M",
          label: "stillbirths occur every year — most from conditions an ultrasound could have detected",
          source: "WHO / The Lancet Stillbirths Series",
        },
        {
          value: "30–40%",
          label: "of trauma mortality is caused by uncontrolled hemorrhage",
          source: "NIH",
        },
        {
          value: "94%",
          label: "specialist-level accuracy achieved by AI in medical imaging — without the geographic constraint",
          source: "Lancet Digital Health, 2021",
        },
      ],
      footnote:
        "Sources: WHO Maternal Mortality Fact Sheet (2023); Trends in Maternal Mortality 2000–2023 (WHO, UNFPA, UNICEF, World Bank); NIH StatPearls on Hemorrhage Control; Stengel et al. on FAST exam performance.",
    },

    bridge: {
      eyebrow: "The bridge",
      title: "Same machine.",
      titleHighlight: "Different eyes.",
      body: "Alethia Kit sits between your existing ultrasound machine and the clinician. A video capture device reads the RGB output of any legacy ultrasound, streams it into a tablet running Alethia, and returns annotated imagery — live, on-screen, as the probe moves.",
      steps: [
        {
          number: "01",
          title: "Plug into what you have",
          body: "The capture module connects to the VGA, DVI, or composite output of any ultrasound — no firmware integration, no manufacturer lock-in.",
        },
        {
          number: "02",
          title: "Alethia reads the signal",
          body: "Frames stream into the fine-tuned model on-device. No cloud latency. No patient data leaves the tablet.",
        },
        {
          number: "03",
          title: "The clinician sees structure",
          body: "Organs, pathology, fetal measurements, free fluid — rendered live over the scan with confidence indicators.",
        },
      ],
    },

    how: {
      eyebrow: "How it works",
      title: "Three layers. One device.",
      titleLead: "Three layers. ",
      titleTail: "One device.",
      body: "Alethia Kit is a single integrated product: Windows tablet, video capture, and the Alethia model — preinstalled, calibrated, and ready on arrival.",
      cards: [
        {
          title: "Capture",
          body: "Universal RGB ingest from any ultrasound output. Runs at 60 fps on commodity USB capture hardware.",
          meta: "Hardware",
        },
        {
          title: "Process",
          body: "On-device inference. Segmentation, classification, and structured measurement in under 100 ms per frame.",
          meta: "Model",
        },
        {
          title: "Assist",
          body: "Overlays, alerts, auto-generated structured notes. Integrates with the clinician's workflow, never replaces it.",
          meta: "Interface",
        },
      ],
    },

    capabilities: {
      eyebrow: "Alethia · Capabilities",
      title: "What Alethia sees.",
      titleLead: "What ",
      titleTail: "Alethia sees.",
      body: "Trained and fine-tuned for the anatomies that matter in emergency and primary care. Not a general-purpose model — a focused one.",
      items: [
        {
          title: "Liver",
          body: "Size, echogenicity, lesions, free fluid in Morison's pouch.",
        },
        {
          title: "Kidneys",
          body: "Bilateral morphology, hydronephrosis grading, perinephric fluid.",
        },
        {
          title: "Bladder",
          body: "Volume estimation, wall thickness, retention flags.",
        },
        {
          title: "Fetal development",
          body: "Gestational age, biometry (BPD, HC, AC, FL), heart rate, growth curves.",
        },
        {
          title: "Free fluid / bleeding",
          body: "FAST protocol automation: pericardial, perihepatic, perisplenic, pelvic windows.",
        },
        {
          title: "Pathology flags",
          body: "Structured alerts for findings that warrant specialist referral.",
        },
      ],
    },

    kit: {
      eyebrow: "The product",
      title: "Alethia Kit.",
      subtitle: "One box. Everything the hospital needs.",
      body: "A ruggedized Windows tablet with Alethia preinstalled, a medical-grade USB capture device, and the universal cable set for VGA, DVI, S-Video, and composite ultrasound outputs. Deployed, calibrated, and supported end-to-end.",
      parts: [
        {
          label: "Tablet",
          title: "Rugged Windows tablet",
          body: "Medical-grade, battery-backed, preconfigured with Alethia runtime.",
        },
        {
          label: "Capture",
          title: "Universal video capture",
          body: "Reads the output of virtually any ultrasound built since 1995.",
        },
        {
          label: "Model",
          title: "Alethia — preinstalled",
          body: "Fine-tuned medical vision model. Updates over the air. On-device inference.",
        },
      ],
    },

    impact: {
      eyebrow: "Impact",
      title: "Built for where it matters most.",
      titleLead: "Built for where it ",
      titleTail: "matters most.",
      body: "Kainos Medical is designed, from day one, for Latin America and Africa — regions where the diagnostic gap is widest and the lives saved per device are highest.",
      markets: [
        {
          region: "Latin America",
          stat: "16.8%",
          label: "Smallest reduction in maternal mortality of any region, 2000–2023.",
          source: "WHO · UNFPA · World Bank",
        },
        {
          region: "Sub-Saharan Africa",
          stat: "182,000",
          label: "Maternal deaths in 2023 — roughly 70% of the global total.",
          source: "WHO, 2023",
        },
        {
          region: "Training gap",
          stat: "60%",
          label: "of clinicians in LMICs cite lack of ultrasound training as the primary barrier.",
          source: "Ultrasound Journal, 2015",
        },
      ],
    },

    opportunity: {
      eyebrow: "Opportunity",
      title: "A hardware-enabled software business at the edge of a generational market.",
      titleLead: "At the edge of a ",
      titleTail: "generational market.",
      body: "Point-of-care ultrasound and AI-enabled imaging are converging. Alethia Kit ships with both.",
      metrics: [
        {
          value: "$22.6B",
          label: "AI in ultrasound imaging market by 2034",
          sub: "26.6% CAGR · Fortune Business Insights",
        },
        {
          value: "$8.4B",
          label: "Global POCUS market by 2035",
          sub: "7.2% CAGR · GMI Research",
        },
        {
          value: "2×",
          label: "FDA AI device submissions doubled 2020 → 2024",
          sub: "Approaching 300 in 2025",
        },
      ],
      pitchTitle: "Why now",
      pitchPoints: [
        "Legacy ultrasound is everywhere — the install base is already paid for.",
        "The diagnostic gap is widening faster than new sonographers can be trained.",
        "On-device medical AI is finally fast enough and cheap enough for commodity tablets.",
        "Regulatory frameworks for AI-assisted diagnostic devices are maturing in 2025.",
      ],
      cta: "Request investor deck",
    },

    contact: {
      eyebrow: "Contact",
      title: "Talk to Kainos Medical.",
      titleLead: "Talk to ",
      titleTail: "Kainos Medical.",
      body: "Investors, health systems, and clinical partners — drop a line. We reply to every serious inquiry within 72 hours.",
      fields: {
        name: "Your name",
        role: "Role",
        email: "Email",
        message: "Message",
      },
      roles: {
        investor: "Investor",
        clinician: "Clinician",
        partner: "Partner / Health system",
        other: "Other",
      },
      submit: "Send message",
      submitting: "Sending…",
      success:
        "Thank you. We'll be in touch shortly.",
      errorRequired: "This field is required.",
      errorEmail: "Please enter a valid email.",
    },

    footer: {
      tagline: "Bridging legacy imaging with intelligent diagnosis.",
      copy: "© 2026 Kainos Medical. All rights reserved.",
      disclaimer:
        "Alethia is a clinical decision-support system under development. Not yet cleared by any regulatory authority. Not for diagnostic use outside controlled pilot programs.",
    },

    lang: {
      toggle: "ES",
      label: "Language",
    },
  },

  // ---------------------------------------------------------------

  es: {
    nav: {
      problem: "El problema",
      bridge: "El puente",
      how: "Cómo funciona",
      capabilities: "Capacidades",
      kit: "Alethia Kit",
      impact: "Impacto",
      opportunity: "Oportunidad",
      contact: "Contacto",
      primaryCta: "Para inversores",
    },

    hero: {
      eyebrow: "Kainos Medical · Alethia",
      titleA: "El ultrasonido",
      titleB: "renace con la IA.",
      body: "Alethia convierte los ultrasonidos que los hospitales ya tienen en asistentes diagnósticos en tiempo real. Una tableta, una capturadora de video y una IA médica fine-tuned — diseñada para el médico que ve al paciente primero.",
      primary: "Solicitar deck para inversores",
      secondary: "Cómo funciona",
      pill: "En desarrollo · Primeros pilotos 2026",
    },

    problem: {
      eyebrow: "La brecha",
      title: "El médico correcto rara vez es el primero.",
      titleLead: "El médico correcto rara vez es ",
      titleTail: "el primero.",
      body: "En urgencias y clínicas rurales alrededor del mundo, quien recibe al paciente suele ser un médico general — no un radiólogo ni un especialista en ultrasonido. El equipo existe. La experiencia no.",
      stats: [
        {
          value: "2/3",
          label: "de la población mundial no tiene acceso a imagenología médica",
          source: "OMS",
        },
        {
          value: "1.9M",
          label: "bebés nacen muertos cada año — la mayoría por condiciones que un ultrasonido pudo haber detectado",
          source: "OMS / The Lancet Stillbirths Series",
        },
        {
          value: "30–40%",
          label: "de la mortalidad por trauma es por hemorragia no controlada",
          source: "NIH",
        },
        {
          value: "94%",
          label: "precisión de nivel especialista lograda por IA en imágenes médicas — sin restricción geográfica",
          source: "Lancet Digital Health, 2021",
        },
      ],
      footnote:
        "Fuentes: WHO Maternal Mortality Fact Sheet (2023); Trends in Maternal Mortality 2000–2023 (WHO, UNFPA, UNICEF, World Bank); NIH StatPearls sobre Control de Hemorragias; Stengel et al. sobre desempeño del examen FAST.",
    },

    bridge: {
      eyebrow: "El puente",
      title: "La misma máquina.",
      titleHighlight: "Potenciada con la IA.",
      body: "Alethia Kit se coloca entre el ultrasonido existente y el clínico. Una capturadora lee la salida RGB de cualquier ultrasonido antiguo, envía la señal a una tableta con Alethia, y regresa imágenes anotadas — en vivo, mientras el médico explora con la sonda.",
      steps: [
        {
          number: "01",
          title: "Conéctalo a lo que ya tienes",
          body: "El módulo captura la salida VGA, DVI o compuesta de cualquier ultrasonido — sin integración de firmware, sin depender del fabricante.",
        },
        {
          number: "02",
          title: "Alethia lee la señal",
          body: "Los frames pasan al modelo fine-tuned corriendo en el dispositivo. Sin latencia de nube. Ningún dato del paciente sale de la tableta.",
        },
        {
          number: "03",
          title: "El clínico ve estructura",
          body: "Órganos, patologías, mediciones fetales, líquido libre — renderizados en vivo sobre la imagen con indicadores de confianza.",
        },
      ],
    },

    how: {
      eyebrow: "Cómo funciona",
      title: "Tres capas. Un dispositivo.",
      titleLead: "Tres capas. ",
      titleTail: "Un dispositivo.",
      body: "Alethia Kit es un producto integrado: tableta Windows, capturadora de video y el modelo Alethia — preinstalado, calibrado y listo para usarse al llegar.",
      cards: [
        {
          title: "Captura",
          body: "Ingesta RGB universal desde cualquier salida de ultrasonido. Corre a 60 fps sobre hardware USB de gama común.",
          meta: "Hardware",
        },
        {
          title: "Procesamiento",
          body: "Inferencia en el dispositivo. Segmentación, clasificación y mediciones estructuradas en menos de 100 ms por frame.",
          meta: "Modelo",
        },
        {
          title: "Asistencia",
          body: "Overlays, alertas y notas estructuradas automáticas. Se integra al flujo del clínico — nunca lo reemplaza.",
          meta: "Interfaz",
        },
      ],
    },

    capabilities: {
      eyebrow: "Alethia · Capacidades",
      title: "Lo que Alethia ve.",
      titleLead: "Lo que ",
      titleTail: "Alethia ve.",
      body: "Entrenada y ajustada sobre las anatomías que importan en urgencias y atención primaria. No es un modelo general — es uno focalizado.",
      items: [
        {
          title: "Hígado",
          body: "Tamaño, ecogenicidad, lesiones, líquido libre en el receso de Morison.",
        },
        {
          title: "Riñones",
          body: "Morfología bilateral, graduación de hidronefrosis, líquido perirrenal.",
        },
        {
          title: "Vejiga",
          body: "Estimación de volumen, grosor de pared, alertas de retención.",
        },
        {
          title: "Desarrollo fetal",
          body: "Edad gestacional, biometría (DBP, CC, CA, LF), frecuencia cardíaca, curvas de crecimiento.",
        },
        {
          title: "Líquido libre / sangrado",
          body: "Automatización del protocolo FAST: ventanas pericárdica, perihepática, periesplénica y pélvica.",
        },
        {
          title: "Alertas de patología",
          body: "Avisos estructurados para hallazgos que requieren referencia a especialista.",
        },
      ],
    },

    kit: {
      eyebrow: "El producto",
      title: "Alethia Kit.",
      subtitle: "Una caja. Todo lo que el hospital necesita.",
      body: "Una tableta Windows ruggedizada con Alethia preinstalada, una capturadora USB de grado médico y el set universal de cables para salidas VGA, DVI, S-Video y compuestas. Desplegada, calibrada y soportada de extremo a extremo.",
      parts: [
        {
          label: "Tableta",
          title: "Tableta Windows ruggedizada",
          body: "Grado médico, con respaldo de batería, preconfigurada con el runtime de Alethia.",
        },
        {
          label: "Captura",
          title: "Capturadora de video universal",
          body: "Lee la salida de prácticamente cualquier ultrasonido fabricado desde 1995.",
        },
        {
          label: "Modelo",
          title: "Alethia — preinstalada",
          body: "Modelo de visión médica fine-tuned. Actualizaciones over-the-air. Inferencia en el dispositivo.",
        },
      ],
    },

    impact: {
      eyebrow: "Impacto",
      title: "Diseñado para donde más importa.",
      titleLead: "Diseñado para ",
      titleTail: "donde más importa.",
      body: "Kainos Medical está pensado desde el inicio para Latinoamérica y África — las regiones donde la brecha diagnóstica es más amplia y cada dispositivo salva más vidas.",
      markets: [
        {
          region: "Latinoamérica",
          stat: "16.8%",
          label: "La menor reducción de mortalidad materna de cualquier región, 2000–2023.",
          source: "OMS · UNFPA · Banco Mundial",
        },
        {
          region: "África subsahariana",
          stat: "182,000",
          label: "Muertes maternas en 2023 — aproximadamente el 70% del total global.",
          source: "OMS, 2023",
        },
        {
          region: "Brecha de capacitación",
          stat: "60%",
          label: "de clínicos en países de ingresos bajos y medios señalan la falta de entrenamiento como la barrera principal.",
          source: "Ultrasound Journal, 2015",
        },
      ],
    },

    opportunity: {
      eyebrow: "Oportunidad",
      title: "Un negocio de software habilitado por hardware al borde de un mercado generacional.",
      titleLead: "Al borde de un ",
      titleTail: "mercado generacional.",
      body: "El ultrasonido point-of-care y la imagenología con IA están convergiendo. Alethia Kit llega con ambos.",
      metrics: [
        {
          value: "$22.6B",
          label: "Mercado de IA en ultrasonido a 2034",
          sub: "26.6% CAGR · Fortune Business Insights",
        },
        {
          value: "$8.4B",
          label: "Mercado global de POCUS a 2035",
          sub: "7.2% CAGR · GMI Research",
        },
        {
          value: "2×",
          label: "Envíos de dispositivos con IA a la FDA se duplicaron 2020 → 2024",
          sub: "Acercándose a 300 en 2025",
        },
      ],
      pitchTitle: "Por qué ahora",
      pitchPoints: [
        "El ultrasonido antiguo está en todas partes — la base instalada ya está pagada.",
        "La brecha diagnóstica crece más rápido de lo que se forman sonografistas.",
        "La IA médica en el dispositivo por fin es lo suficientemente rápida y barata para tabletas estándar.",
        "Los marcos regulatorios para dispositivos diagnósticos asistidos por IA están madurando en 2025.",
      ],
      cta: "Solicitar deck para inversores",
    },

    contact: {
      eyebrow: "Contacto",
      title: "Habla con Kainos Medical.",
      titleLead: "Habla con ",
      titleTail: "Kainos Medical.",
      body: "Inversores, sistemas de salud y socios clínicos — escríbenos. Respondemos cada consulta seria en menos de 72 horas.",
      fields: {
        name: "Nombre",
        role: "Rol",
        email: "Correo",
        message: "Mensaje",
      },
      roles: {
        investor: "Inversor",
        clinician: "Clínico",
        partner: "Socio / Sistema de salud",
        other: "Otro",
      },
      submit: "Enviar mensaje",
      submitting: "Enviando…",
      success: "Gracias. Te contactaremos pronto.",
      errorRequired: "Este campo es obligatorio.",
      errorEmail: "Ingresa un correo válido.",
    },

    footer: {
      tagline: "Puente entre la imagenología antigua y el diagnóstico inteligente.",
      copy: "© 2026 Kainos Medical. Todos los derechos reservados.",
      disclaimer:
        "Alethia es un sistema de apoyo a la decisión clínica en desarrollo. Aún no cuenta con autorización regulatoria. No apto para uso diagnóstico fuera de programas piloto controlados.",
    },

    lang: {
      toggle: "EN",
      label: "Idioma",
    },
  },
} as const;

export type Dict = (typeof dict)["en"];
