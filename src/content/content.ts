/**
 * Textos del sitio centralizados. Editá acá sin tocar los componentes.
 * Las secciones replican las de la web en producción (admin React) más lo pedido para la web comercial.
 * Los ítems marcados con TODO son placeholders, datos a confirmar o funciones a confirmar.
 */
import type { IconName } from "@/components/Icon";

export type Feature = {
  icon: IconName;
  title: string;
  description: string;
  bullets?: string[];
};

export type Tone = "blue" | "emerald" | "violet" | "indigo" | "orange" | "green" | "pink" | "teal";

export type Module = {
  id: string;
  icon: IconName;
  tone: Tone;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
};

export type Faq = { question: string; answer: string };

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const HOME = {
  seo: {
    title: "DentalCor Software | Software odontológico para clínicas y consultorios en Argentina",
    description:
      "Agenda por profesional, notificaciones por WhatsApp y email, historia clínica con odontograma, presupuestos y finanzas. Menos pacientes que faltan, sin cambiar cómo trabajás. Primer mes gratis.",
  },

  /* 1. Hero (FeatureSection en producción) */
  hero: {
    badge: "🇦🇷 Software 100% argentino para clínicas dentales",
    title: "Menos pacientes que faltan,",
    titleHighlight: "sin cambiar cómo trabajás",
    subtitle:
      "Agenda inteligente, historial clínico digital, presupuestos en PDF, finanzas en tiempo real y notificaciones automáticas.",
    subtitleStrong: "Todo en un solo sistema.",
    // TODO: cifras tomadas de producción; confirmar que se puedan respaldar antes de publicarlas.
    outcomes: [
      {
        icon: "clock",
        tone: "blue",
        title: "Ahorrá 15 hs/semana",
        description: "Automatizá recordatorios, confirmaciones y gestión de turnos.",
      },
      {
        icon: "users",
        tone: "emerald",
        title: "Más pacientes, menos ausencias",
        description: "Emails y WhatsApp automáticos reducen inasistencias hasta un 70%.",
      },
      {
        icon: "trending",
        tone: "violet",
        title: "Control total de tus finanzas",
        description: "Dashboard en tiempo real con ingresos, gastos y cobros pendientes.",
      },
    ] satisfies { icon: IconName; tone: Tone; title: string; description: string }[],
    pillsTitle: "Incluye todo esto:",
    pills: [
      { icon: "calendar", label: "Agenda & Calendario" },
      { icon: "users", label: "Gestión de Pacientes" },
      { icon: "stethoscope", label: "Historial Clínico" },
      { icon: "receipt", label: "Presupuestos en PDF" },
      { icon: "chart", label: "Finanzas & Reportes" },
      { icon: "bell", label: "Notificaciones Auto." },
      { icon: "document", label: "Documentos Clínicos" },
      { icon: "shield", label: "Roles & Seguridad" },
      { icon: "building", label: "Multi-sede" },
      { icon: "mail", label: "Emails Automáticos" },
    ] satisfies { icon: IconName; label: string }[],
    offerTitle: "30 días GRATIS",
    offerBadge: "🔥 OFERTA",
    offerText: "Sin contrato · Sin tarjeta de crédito · Setup incluido",
    primaryCta: "Probar 30 días gratis",
    whatsappCta: "Empezar por WhatsApp",
    whatsappMessage: "Hola, quiero empezar con DentalCor gratis. ¿Me podés ayudar?",
    // TODO: "Soporte 24/7" y "4.9 — +500 clínicas" vienen de producción; confirmar que sean verificables.
    trust: [
      { icon: "shield", label: "SSL Seguro", tone: "emerald" },
      { icon: "clock", label: "Soporte 24/7", tone: "blue" },
      { icon: "cloud", label: "100% Cloud", tone: "violet" },
    ] satisfies { icon: IconName; label: string; tone: Tone }[],
    rating: "4.9 — +500 clínicas",
  },

  /* Mockup del panel en el hero (datos ficticios) */
  dashboard: {
    title: "DentalCor — Panel Admin",
    subtitle: "Consultorio García · Hoy",
    stats: [
      { label: "Turnos hoy", value: "12", icon: "calendar", tone: "blue" },
      { label: "Pacientes", value: "347", icon: "users", tone: "emerald" },
      { label: "Este mes", value: "$482K", icon: "trending", tone: "violet" },
    ] satisfies { label: string; value: string; icon: IconName; tone: Tone }[],
    appointments: [
      { time: "09:00", patient: "Ana Martínez", treatment: "Ortodoncia", doctor: "Dr. López", color: "bg-blue-500", paid: true },
      { time: "10:30", patient: "Carlos Ruiz", treatment: "Blanqueamiento", doctor: "Dra. García", color: "bg-emerald-500", paid: false },
      { time: "12:00", patient: "Laura Sosa", treatment: "Implante", doctor: "Dr. López", color: "bg-violet-500", paid: true },
      { time: "15:00", patient: "Jorge Díaz", treatment: "Limpieza", doctor: "Dra. García", color: "bg-orange-500", paid: false },
    ],
    notifications: [
      { icon: "mail", text: "Email enviado — Ana Martínez", sub: "Turno confirmado para mañana 9:00 hs", tone: "blue" },
      { icon: "whatsapp", text: "WhatsApp enviado — Carlos Ruiz", sub: "Recordatorio: tu turno es en 2 horas", tone: "emerald" },
      { icon: "check", text: "Pago registrado — $8.500", sub: "Laura Sosa · Implante · Cobrado", tone: "violet" },
    ] satisfies { icon: IconName; text: string; sub: string; tone: Tone }[],
  },

  /* 2. Funcionalidades en pestañas (FuncionalidadesSaaS en producción) */
  modules: {
    eyebrow: "Software de gestión odontológica completo",
    title: "Todo lo que tu clínica necesita,",
    titleHighlight: "en una sola plataforma",
    subtitle:
      "Desde la agenda hasta las finanzas. DentalCor centraliza la gestión de tu consultorio para que vos te concentres en lo que importa: atender pacientes.",
    includedLabel: "Funcionalidades incluidas",
    ctaTitle: "¿Querés ver cómo funciona en tu clínica?",
    ctaText: "30 días gratis · Sin tarjeta · Setup incluido",
    ctaButton: "Empezar prueba gratuita",
  },

  /* 3. Quiénes somos con video (sección "ComoComprar" en producción) */
  about: {
    title: "¿Quiénes Somos?",
    youtubeId: "SGRWxeaIbPw",
    videoTitle: "Video institucional DentalCor",
    videoText: [
      "Con una interfaz intuitiva y herramientas automatizadas, ayudamos a los profesionales de la salud a mejorar su productividad y la experiencia de sus pacientes.",
      "DentalCor combina innovación, seguridad y soporte local para impulsar la transformación digital del sector odontológico.",
    ],
    cardTitle: "DentalCor Software",
    cardText: [
      "Somos una empresa dedicada al desarrollo de software para el sector odontológico y de salud. Creamos soluciones digitales que ayudan a clínicas y consultorios a optimizar su gestión, mejorar la comunicación con pacientes y aumentar su rentabilidad.",
      "Desde Argentina, desarrollamos tecnología en la nube con enfoque en seguridad, usabilidad y personalización. Nuestro objetivo es acompañar a los profesionales de la salud en su transformación digital.",
    ],
    bullets: ["Desarrollo a medida", "Soporte técnico local", "Seguridad en la nube", "Automatización inteligente"],
    more: "Conocé más sobre nosotros",
  },

  /* 4. Grilla de módulos (ServiciosFront en producción) */
  services: {
    eyebrow: "Software Odontológico en la Nube",
    title: "Funcionalidades Principales",
    titleHighlight: "Todo lo que tu clínica necesita",
    subtitle:
      "DentalCor reúne en un solo sistema todo lo necesario para administrar tu clínica de forma ágil, segura y profesional. Desde la agenda hasta las finanzas, todo conectado.",
    cta: "Solicitar demo gratis",
    ctaMessage: "Hola, quiero una demo del sistema DentalCor",
    // TODO: "+500 clínicas conectadas" viene de producción; confirmar.
    footnote: ["Software en la nube", "+500 clínicas conectadas", "Datos 100% seguros"],
    items: [
      {
        emoji: "🧠",
        title: "Gestión Integral del Consultorio",
        description:
          "Administrá turnos, pacientes, tratamientos, finanzas y personal desde un solo lugar. DentalCor centraliza toda la información de tu clínica.",
        highlight: "Todo en un solo sistema",
      },
      {
        emoji: "📅",
        title: "Agenda Inteligente de Turnos",
        description:
          "Organizá turnos por profesional, sala o especialidad. Notificaciones automáticas por WhatsApp y recordatorios a tus pacientes.",
        highlight: "Ahorrá tiempo",
      },
      {
        emoji: "💳",
        title: "Módulo Financiero",
        description:
          "Control de facturación, presupuestos, pagos, deudas y reportes automáticos. Mantené el control de tu clínica en tiempo real.",
        highlight: "Finanzas claras",
      },
      {
        emoji: "📊",
        title: "Panel de Estadísticas",
        description:
          "Visualizá métricas clave: ingresos, pacientes activos, tratamientos realizados, conversión y más. Decisiones basadas en datos.",
        highlight: "Análisis en tiempo real",
      },
      {
        emoji: "📂",
        title: "Historias Clínicas Digitales",
        description:
          "Registrá evolución, diagnósticos, odontogramas y archivos por paciente. Acceso rápido y seguro desde cualquier dispositivo.",
        highlight: "Todo digitalizado",
      },
      // TODO: confirmar que el portal para pacientes esté disponible.
      {
        emoji: "👥",
        title: "Portal para Pacientes",
        description:
          "Tus pacientes pueden ver sus turnos, historial y estudios desde una plataforma segura. Mejora la comunicación y fidelización.",
        highlight: "Mejor experiencia",
      },
      {
        emoji: "🔒",
        title: "Seguridad y Respaldo",
        description:
          "Tu información y la de tus pacientes está protegida con encriptación SSL y backups automáticos en la nube.",
        highlight: "Protección total",
      },
      {
        emoji: "🚀",
        title: "Soporte y Capacitación",
        description:
          "Te acompañamos en cada paso con soporte técnico local y capacitaciones personalizadas para tu equipo.",
        highlight: "Acompañamiento",
      },
    ],
  },

  /* 5. Calculadora (pedida para la web comercial) */
  calculator: {
    title: "¿Cuánto te cuesta un paciente que falta?",
    subtitle:
      "Hacé la cuenta con tus números. Un turno vacío no se recupera, pero se puede prevenir.",
    fields: {
      appointments: "Turnos por semana",
      noShowRate: "Porcentaje de pacientes que faltan",
      averageFee: "Valor promedio de la consulta",
    },
    defaults: { appointments: 60, noShowRate: 15, averageFee: 25000 },
    resultMonthly: "Perdés aproximadamente por mes",
    resultYearly: "Al año",
    resultHint: "Si recuperás aunque sea uno o dos turnos por mes, el sistema se paga solo.",
    disclaimer:
      "Cálculo estimativo: turnos semanales × 4,3 semanas × % de ausentismo × valor de la consulta.",
  },

  /* 6. CTA (Cta en producción) */
  cta: {
    badge: "Oferta por tiempo limitado",
    title: "Empezá a optimizar tu clínica hoy",
    subtitle: "30 días completamente gratis. Sin tarjeta de crédito. Sin compromiso.",
    button: "Comenzar mis 30 días gratis",
    checks: ["Setup incluido", "Capacitación gratis", "Sin contrato"],
    whatsappLabel: "¿Preguntas? Contactanos por WhatsApp:",
    whatsappMessage: "Hola, quiero saber más sobre su software odontológico",
  },

  /* 7. Beneficios (Beneficios en producción) */
  benefits: {
    badge: "Beneficios Comprobados",
    title: "¿Por qué elegir DentalCor?",
    // TODO: "Más de 500 consultorios" viene de producción; confirmar.
    subtitle:
      "Más de 500 consultorios en Argentina confían en nuestra plataforma para optimizar su gestión diaria y crecer profesionalmente.",
    // TODO: "30%" y "24/7" vienen de producción; confirmar que sean verificables.
    items: [
      "⏱️ Ahorrá hasta 15 horas semanales en gestión administrativa",
      "💰 Aumentá la facturación promedio en un 30%",
      "📱 Notificaciones automáticas por Email y WhatsApp",
      "📁 Historial clínico completo con gestión de archivos",
      "👥 Accesos personalizados para pacientes y staff",
      "💳 Control financiero total de tu clínica",
      "🌐 Acceso desde cualquier dispositivo, en cualquier lugar",
      "🛡️ Soporte técnico en español 24/7",
    ],
    security: {
      title: "Datos 100% Seguros",
      subtitle: "Encriptación SSL + Backup diario",
      text: "Cumplimos con todas las normativas de protección de datos médicos. Tu información y la de tus pacientes está protegida con los más altos estándares de seguridad.",
    },
  },

  /* Testimonios (dentro de Beneficios, como en producción) */
  testimonials: {
    // TODO: si los testimonios son reales y tenés autorización, poné esto en false para ocultar la etiqueta.
    areExamples: true,
    exampleLabel: "Testimonio de ejemplo",
    items: [
      {
        quote:
          "Las notificaciones cambiaron todo. Ya no pierdo tiempo llamando para confirmar turnos y mis pacientes llegan puntuales.",
        name: "Dra. María González",
        role: "Odontóloga · Buenos Aires",
        initials: "MG",
      },
      {
        quote:
          "El panel financiero es increíble. Veo en tiempo real cuánto facturo, qué debo y puedo tomar decisiones con datos reales.",
        name: "Dr. Carlos Mendoza",
        role: "Director · Clínica Dental Sonrisas",
        initials: "CM",
      },
    ],
  },

  /* 8. Antes y después (Comparacion en producción) */
  comparison: {
    title: "Antes y después de DentalCor",
    subtitle: "Mirá cómo cambia tu día a día",
    before: {
      title: "Sin DentalCor",
      items: [
        "Llamadas telefónicas constantes para confirmar turnos",
        "Papeles y carpetas desorganizadas",
        "Pacientes que faltan sin avisar",
        "Horas perdidas en tareas administrativas",
        "Sin control de finanzas en tiempo real",
        "Archivos médicos extraviados",
        "Imposible saber el estado real de tu clínica",
      ],
    },
    after: {
      title: "Con DentalCor",
      items: [
        "Notificaciones por WhatsApp y Email",
        "Todo digitalizado y accesible en segundos",
        "Recordatorios automáticos = menos ausencias",
        "Ahorrá hasta 15 horas semanales",
        "Dashboard financiero en tiempo real",
        "Archivos organizados por paciente",
        "Reportes y estadísticas al instante",
      ],
    },
  },

  faq: { title: "Preguntas frecuentes" },

  /* 9. Contacto (Contacto en producción) */
  contact: {
    eyebrow: "🚀 Desarrollos Digitales",
    title: "Contactanos",
    subtitle: "Dejanos tu mensaje o escribinos directamente por WhatsApp. Te asesoramos sin compromiso.",
  },
};

/* ------------------------------------------------------------------ */
/* Módulos del sistema (confirmados en producción / funcionalidades.md) */
/* ------------------------------------------------------------------ */

export const MODULES: Module[] = [
  {
    id: "agenda",
    icon: "calendar",
    tone: "blue",
    title: "Agenda y Calendario",
    subtitle: "Organizá todos los turnos de tu clínica en un solo lugar",
    description:
      "Calendario visual con vistas diaria, semanal y mensual. Gestioná turnos de múltiples profesionales al mismo tiempo, con código de color por doctor para identificarlos de un vistazo.",
    features: [
      "Vista diaria, semanal, mensual y de lista",
      "Crear, editar y cancelar citas con un clic",
      "Código de color por doctor en el calendario",
      "Notificación automática al paciente al agendar o cancelar",
      "Exportar cita a Google Calendar, Outlook o Apple Calendar",
      "Monto de la cita y estado de pago integrados",
    ],
  },
  {
    id: "pacientes",
    icon: "users",
    tone: "emerald",
    title: "Gestión de Pacientes",
    subtitle: "Toda la información de tus pacientes centralizada",
    description:
      "Alta, búsqueda, edición y seguimiento de cada paciente. Si el paciente ya existe en el sistema, se asigna a tu clínica sin duplicar datos. Búsqueda instantánea por nombre, DNI o email.",
    features: [
      "Alta, edición y baja de pacientes",
      "Búsqueda por nombre, email o DNI",
      "Importación inteligente sin duplicar registros",
      "Datos demográficos, de contacto e identificación",
      "Estado activo / inactivo por paciente",
      "Portal exclusivo del paciente para ver sus turnos",
    ],
  },
  {
    id: "historial",
    icon: "stethoscope",
    tone: "violet",
    title: "Historial Clínico Digital",
    subtitle: "El expediente completo de cada paciente, siempre disponible",
    description:
      "Odontograma interactivo, notas de consultas, patologías, alergias y documentos clínicos. Todo el historial organizado cronológicamente y accesible desde cualquier dispositivo.",
    features: [
      "Odontograma interactivo pieza por pieza",
      "Registro de notas y evoluciones por consulta",
      "Alergias, medicamentos y enfermedades preexistentes",
      "Subida de radiografías, estudios y documentos PDF",
      "Descarga y búsqueda de archivos del paciente",
      "Historial ordenado con la última consulta primero",
    ],
  },
  {
    id: "doctores",
    icon: "userCog",
    tone: "indigo",
    title: "Gestión de Profesionales",
    subtitle: "Administrá tu equipo de doctores con facilidad",
    description:
      "Registrá a cada profesional con su especialidad, matrícula y color identificatorio. Asignales acceso como administradores cuando lo necesites. El calendario refleja los turnos de cada doctor en su color.",
    features: [
      "Alta, edición y baja de profesionales",
      "Especialidad y número de licencia/matrícula",
      "Color personalizado por doctor en el calendario",
      "Asignación de rol administrador de la clínica",
      "Notificación automática al doctor al asignarle una cita",
      "Control de acceso por perfil profesional",
    ],
  },
  {
    id: "presupuestos",
    icon: "receipt",
    tone: "orange",
    title: "Presupuestos Profesionales",
    subtitle: "Generá y enviá presupuestos en segundos",
    description:
      "Creá presupuestos detallados por tratamiento con numeración automática, descuentos y fechas de validez. Descargalos en PDF con el diseño y los datos de tu clínica listos para entregar al paciente.",
    features: [
      "Ítems por servicio, pieza dental, cantidad y precio",
      "Descuento global porcentual por presupuesto",
      "Numeración automática: P-2026-0001, P-2026-0002...",
      "Estados: borrador, enviado, aceptado, rechazado",
      "Descarga en PDF con datos de tu clínica",
      "Fechas de validez y notas adicionales",
    ],
  },
  {
    id: "finanzas",
    icon: "trending",
    tone: "green",
    title: "Control Financiero",
    subtitle: "Conocé los números de tu clínica en tiempo real",
    description:
      "Dashboard financiero con ingresos cobrados, pendientes, gastos categorizados y balance neto. Filtrá por período y tomá decisiones basadas en datos reales, no en intuición.",
    features: [
      "Ingresos cobrados vs. pendientes del período",
      "Porcentaje de cobranza sobre lo esperado",
      "Registro y categorización de gastos",
      "Balance neto: ingresos menos gastos",
      "Filtros por rango de fechas personalizables",
      "Gráficos de tendencias del dashboard",
    ],
  },
  {
    id: "comunicaciones",
    icon: "bell",
    tone: "pink",
    title: "Comunicaciones Automáticas",
    subtitle: "Notificaciones por email y WhatsApp sin esfuerzo",
    description:
      "El sistema avisa automáticamente al paciente cuando su turno es creado o cancelado, y al doctor cuando le asignan una cita. Cada email incluye los datos de tu clínica y un archivo .ics para agregar el turno al calendario.",
    features: [
      "Email de confirmación de turno al paciente",
      "Email de cancelación con opción de reprogramar",
      "Email al doctor con archivo .ics adjunto",
      "Emails con logo, dirección y datos de la clínica",
      "Botón para enviar el turno por WhatsApp",
      "SMTP propio por clínica — los mails salen desde tu cuenta",
    ],
  },
  {
    id: "reportes",
    icon: "chart",
    tone: "teal",
    title: "Exportación y Reportes",
    subtitle: "Toda la información lista para usar fuera del sistema",
    description:
      "Exportá presupuestos en PDF, enviá archivos .ics para que los pacientes agreguen sus turnos al calendario y accedé a reportes financieros con filtros de fecha. La información de tu clínica, siempre en tus manos.",
    features: [
      "Presupuestos en PDF con diseño profesional",
      "Archivos .ics para Google Calendar y Outlook",
      "Reportes financieros con filtros de fecha",
      "Descarga de documentos clínicos del paciente",
      "Exportar e importar pacientes y citas",
      "Datos accesibles desde cualquier dispositivo",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Funciones                                                           */
/* ------------------------------------------------------------------ */

export const FEATURES_PAGE = {
  seo: {
    title: "Funcionalidades",
    description:
      "Agenda por profesional, turnos online, recordatorios por WhatsApp, historia clínica, odontograma, obras sociales, pacientes, roles, multi-clínica, presupuestos y finanzas.",
  },
  title: "Funcionalidades de DentalCor",
  subtitle:
    "Herramientas simples para organizar el consultorio, atender mejor y que falten menos pacientes.",
  mainTitle: "Lo principal para tu consultorio",
  modulesTitle: "Módulos en detalle",
  modulesSubtitle: "Todo lo que incluye cada parte del sistema.",
};

export const FEATURES: Feature[] = [
  {
    icon: "calendar",
    title: "Agenda por profesional",
    description:
      "Vista diaria, semanal y mensual con un color por profesional para identificar cada turno de un vistazo.",
    bullets: [
      "Crear, mover y cancelar turnos en un clic",
      "Agenda de cada profesional o de toda la clínica",
      "Exportar turnos a Google Calendar, Outlook o Apple",
    ],
  },
  // TODO: confirmar si existe la reserva de turnos online por parte del paciente (en funcionalidades.md no figura).
  {
    icon: "globe",
    title: "Turnos online",
    description:
      "Tus pacientes piden turno desde la web de la clínica, a cualquier hora, sin llamar por teléfono.",
    bullets: [
      "Página web propia de la clínica",
      "Solicitudes que llegan directo a la agenda",
      "Confirmación automática por email",
    ],
  },
  // TODO: confirmar recordatorios automáticos por WhatsApp. En funcionalidades.md solo figura el botón para enviar la cita por WhatsApp.
  {
    icon: "whatsapp",
    title: "Recordatorios por WhatsApp",
    description:
      "Avisale al paciente su turno por WhatsApp con día, hora y dirección. Menos olvidos, menos huecos.",
    bullets: [
      "Mensaje listo para enviar en un clic",
      "Incluye datos de la clínica",
      "Confirmación y cancelación también por email",
    ],
  },
  {
    icon: "tooth",
    title: "Historia clínica y odontograma",
    description: "Notas por consulta, odontograma interactivo y antecedentes del paciente, todo en su ficha.",
    bullets: ["Odontograma pieza por pieza", "Alergias, medicación y antecedentes", "Radiografías, estudios y PDFs adjuntos"],
  },
  // TODO: confirmar si existe la gestión de obras sociales y prepagas (en funcionalidades.md no figura).
  {
    icon: "card",
    title: "Obras sociales y prepagas",
    description: "Registrá la cobertura de cada paciente y tené claro qué se cobra a quién.",
    bullets: [
      "Obra social o prepaga y número de afiliado",
      "Pacientes particulares y con cobertura",
      "Seguimiento de lo cobrado y lo pendiente",
    ],
  },
  {
    icon: "users",
    title: "Pacientes",
    description: "Fichas completas y fáciles de encontrar por nombre, email o DNI.",
    bullets: ["Datos de contacto, DNI y WhatsApp", "Importación de pacientes sin duplicados", "Pacientes activos e inactivos"],
  },
  {
    icon: "shield",
    title: "Roles de odontólogo y admin",
    description: "Cada persona entra con su usuario y ve lo que le corresponde según su rol.",
    bullets: [
      "Odontólogos con su agenda y sus pacientes",
      "Administradores con control total de la clínica",
      "Especialidad y matrícula de cada profesional",
    ],
  },
  // TODO: confirmar el alcance de multi-clínica (¿un mismo usuario puede trabajar en varias clínicas?).
  {
    icon: "building",
    title: "Multi-clínica",
    description:
      "¿Tenés más de una sede? Gestioná cada clínica por separado con su equipo, su agenda y su configuración.",
    bullets: ["Datos separados por clínica", "Logo, horarios y contacto propios", "Emails enviados desde la cuenta de cada clínica"],
  },
];

/* ------------------------------------------------------------------ */
/* Preguntas frecuentes                                                */
/* ------------------------------------------------------------------ */

export const FAQS: Faq[] = [
  {
    question: "¿Cómo funciona la prueba de 30 días?",
    answer:
      "Creás tu cuenta y usás DentalCor completo durante 30 días, sin cargar tarjeta. Al terminar, si querés seguir, te contactamos para contarte cómo continuar.",
  },
  {
    question: "¿Tengo que instalar algo?",
    answer:
      "No. DentalCor funciona desde el navegador en la computadora, la tablet o el celular. Solo necesitás conexión a internet.",
  },
  {
    question: "¿Puedo cargar los pacientes que ya tengo?",
    answer: "Sí. Podés importar tu listado de pacientes y el sistema evita cargar duplicados.",
  },
  {
    question: "¿Sirve para un consultorio con un solo profesional?",
    answer:
      "Sí. DentalCor sirve tanto para quienes atienden solos como para clínicas con varios profesionales, y podés sumar profesionales cuando lo necesites.",
  },
  {
    question: "¿Los datos de mis pacientes están seguros?",
    answer:
      "Cada persona entra con su propio usuario y ve solo lo que le permite su rol. Los datos de cada clínica están separados y protegidos con SSL.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer: "Sí. El pago es mensual y no hay permanencia mínima.",
  },
];

/* ------------------------------------------------------------------ */
/* Contacto                                                            */
/* ------------------------------------------------------------------ */

export const CONTACT_PAGE = {
  seo: {
    title: "Contacto",
    description:
      "Contactá a DentalCor Software por WhatsApp o email. Te ayudamos a digitalizar tu clínica odontológica sin compromiso.",
  },
  title: "Contactanos",
  subtitle: "Dejanos tu mensaje o escribinos directamente por WhatsApp. Te asesoramos sin compromiso.",
  whatsappCta: "Escribinos por WhatsApp",
  whatsappMessage: "Hola, quiero saber más sobre su software odontológico",
  emailLabel: "O mandanos un email a",
  form: {
    title: "Dejanos tu consulta",
    name: "Nombre y apellido",
    clinic: "Consultorio o clínica",
    phone: "Teléfono (opcional)",
    message: "¿En qué te podemos ayudar?",
    messagePlaceholder: "Contanos qué necesitás...",
    sendWhatsapp: "Enviar por WhatsApp",
    sendEmail: "Enviar por email",
    note: "El formulario abre WhatsApp o tu app de correo con el mensaje listo para enviar.",
    subject: "Consulta desde la web de DentalCor",
  },
};

/* ------------------------------------------------------------------ */
/* Quiénes somos (QuienesSomos en producción)                          */
/* ------------------------------------------------------------------ */

export const ABOUT_PAGE = {
  seo: {
    title: "Quiénes Somos",
    description:
      "En DentalCor desarrollamos software para clínicas odontológicas y profesionales de la salud. Tecnología argentina en la nube, con soporte local.",
  },
  eyebrow: "DentalCor Software",
  title: "Desarrollamos",
  titleHighlight: "software que impulsa tu clínica",
  subtitle:
    "Somos un equipo de desarrolladores apasionados por la innovación tecnológica aplicada a la salud. Creamos soluciones digitales que transforman la gestión de clínicas y consultorios odontológicos.",
  mission: {
    title: "Nuestra misión",
    text: "Desarrollar software intuitivo, escalable y seguro para que los profesionales de la salud puedan concentrarse en lo importante: brindar un mejor servicio a sus pacientes. Nuestro producto estrella, DentalCor, automatiza turnos, historiales, notificaciones y finanzas en una sola plataforma.",
  },
  services: {
    title: "Nuestros servicios",
    items: [
      "Desarrollo de software a medida",
      "Aplicaciones web y móviles",
      "Integraciones con sistemas médicos",
      "Infraestructura en la nube (Cloud SaaS)",
      "Soporte y mantenimiento continuo",
    ],
  },
  why: {
    title: "Por qué elegirnos",
    items: [
      "Soluciones específicas para odontología",
      "Equipo técnico y soporte local",
      "Actualizaciones constantes",
      "Seguridad y respaldo de datos",
      "Experiencia en proyectos de salud",
    ],
  },
  buttons: {
    whatsapp: "Consultar por DentalCor",
    whatsappMessage: "Hola, quiero conocer más sobre su software odontológico",
    call: "Llamar",
    contact: "Contacto",
  },
  company: { title: "Datos de la empresa" },
  innovation: {
    title: "Compromiso con la innovación",
    text: "Apostamos al desarrollo tecnológico nacional. Nuestro equipo combina experiencia técnica con un profundo conocimiento de los procesos clínicos para ofrecer soluciones reales que mejoran la productividad.",
    tags: ["Software a medida", "Cloud & Seguridad", "Automatización", "Soporte local"],
  },
  cta: {
    title: "¿Querés desarrollar tu propio software o mejorar la gestión de tu clínica?",
    subtitle: "Escribinos y te asesoramos sin compromiso.",
  },
};

/* ------------------------------------------------------------------ */
/* Páginas web para consultorios (PaginasWeb en producción)            */
/* ------------------------------------------------------------------ */

export const WEB_PAGE = {
  seo: {
    title: "Páginas Web para Consultorios Odontológicos",
    description:
      "Diseñamos páginas web profesionales para dentistas y clínicas dentales. SEO local, Google Maps y campañas en Google para conseguir más pacientes.",
  },
  whatsappMessage: "Hola, quiero una página web para mi consultorio odontológico",
  hero: {
    badge: "Diseño web para odontología",
    title: "Hacé que tu consultorio",
    titleHighlight: "aparezca primero en Google",
    subtitle:
      "Creamos tu página web y la posicionamos para que cuando alguien busque un dentista en tu ciudad, te encuentre a vos — no a la competencia.",
    whatsappCta: "Consulta gratuita por WhatsApp",
    secondaryCta: "Ver cómo funciona",
  },
  benefits: {
    title: "¿Por qué necesitás una buena página web?",
    // TODO: el "90%" viene de producción; confirmar la fuente.
    subtitle:
      "El 90% de las personas busca servicios de salud en Google antes de llamar. Si no aparecés, esos pacientes van a tu competencia.",
    items: [
      { icon: "search", title: "Aparecés en Google", description: "Cuando alguien busca \"dentista en tu ciudad\", tu consultorio aparece primero." },
      { icon: "sparkles", title: "Diseño que convierte", description: "Páginas rápidas y claras optimizadas para que el visitante pida turno." },
      { icon: "phone", title: "Contacto directo", description: "Botón de WhatsApp, formulario y llamada con un solo clic desde el celular." },
      { icon: "star", title: "Reputación online", description: "Mostrás tus reseñas de Google, galería de trabajos y el equipo de profesionales." },
      { icon: "users", title: "Más pacientes nuevos", description: "SEO local y publicidad para atraer pacientes de forma constante y predecible." },
      { icon: "bolt", title: "Rápido y seguro", description: "SSL, carga en menos de 2 segundos, backup automático y hosting confiable." },
    ] satisfies Feature[],
  },
  mockup: {
    title: "Así quedaría el sitio de tu consultorio",
    subtitle:
      "Diseño profesional, moderno y optimizado para convertir visitantes en pacientes. Personalizado con tus colores, fotos y servicios.",
    domain: "dra-garcia-odontologia.com.ar",
    clinicName: "Consultorio García",
    clinicTagline: "ODONTOLOGÍA DE CALIDAD",
    heroTitle: "Tu sonrisa, nuestra pasión",
    services: [
      { emoji: "🦷", name: "Ortodoncia", description: "Brackets, alineadores y corrección de mordida." },
      { emoji: "✨", name: "Blanqueamiento", description: "Resultados visibles desde la primera sesión." },
      { emoji: "🔩", name: "Implantes", description: "Estética y funcionalidad natural." },
      { emoji: "🚑", name: "Urgencias", description: "Atención inmediata para dolores o fracturas." },
    ],
  },
  search: {
    title: "Así te encuentran tus futuros pacientes",
    subtitle:
      "Cuando alguien escribe \"dentista en tu ciudad\", tu consultorio aparece en los primeros resultados — antes que cualquier competidor.",
    query: "dentista cerca de mí",
  },
  maps: {
    title: "También te encontramos en el mapa",
    subtitle:
      "Tu ficha de Google Business Profile completa y optimizada: dirección, horarios, fotos, reseñas y teléfono. Todo actualizado.",
  },
  pmax: {
    badge: "Campañas Performance Max · Google Ads",
    title: "Tu consultorio en",
    titleHighlight: "todos los canales de Google",
    subtitle:
      "Performance Max es la campaña más completa de Google. La IA de Google decide automáticamente dónde, cuándo y a quién mostrar tu anuncio para conseguirte más pacientes al menor costo.",
    advantages: [
      { icon: "sparkles", title: "La IA de Google trabaja para vos", description: "El algoritmo aprende qué anuncios, horarios y audiencias generan más turnos para tu consultorio y los optimiza solo." },
      { icon: "target", title: "Solo pagás por resultados", description: "Pagás cuando alguien hace clic en tu anuncio y llega a tu sitio. Sin presupuesto mínimo, sin compromisos." },
      { icon: "globe", title: "Alcance total en Google", description: "Una sola campaña te pone en Search, YouTube, Gmail, Maps y Display al mismo tiempo." },
      { icon: "trending", title: "Escalable y medible", description: "Ves exactamente cuántas personas vieron tu anuncio, cuántas hicieron clic y cuántas pidieron turno." },
    ] satisfies Feature[],
    channelsTitle: "Así aparecería tu consultorio en cada canal de Google",
    channels: [
      { icon: "search", label: "Google Search", description: "Aparecés cuando alguien busca activamente" },
      { icon: "layout", label: "Display (banners)", description: "Banners en millones de sitios web y apps" },
      { icon: "play", label: "YouTube", description: "Anuncios antes o durante videos populares" },
      { icon: "mail", label: "Gmail", description: "Llegás directo a la bandeja de entrada" },
      { icon: "pin", label: "Google Maps", description: "Tu anuncio en búsquedas locales del mapa" },
      { icon: "smartphone", label: "Google Discover", description: "Feed personalizado en Android e iOS" },
    ] satisfies { icon: IconName; label: string; description: string }[],
  },
  steps: {
    title: "Cómo trabajamos",
    subtitle: "Simple, rápido y sin tecnicismos.",
    items: [
      { title: "Consulta gratuita", description: "Hablamos sobre tu consultorio, tu paciente ideal y tus objetivos. Sin compromiso." },
      { title: "Propuesta a medida", description: "Te armamos la estrategia que mejor encaja con tu tipo de clínica y tu ciudad." },
      { title: "Diseño y desarrollo", description: "Construimos tu sitio con foco en conversión: que el visitante se convierta en paciente." },
      { title: "Publicamos y crecemos", description: "Lanzamos, posicionamos en Google y trabajamos para que tu agenda no pare." },
    ],
  },
  cta: {
    title: "¿Listo para que te encuentren?",
    subtitle:
      "Escribinos por WhatsApp y en menos de 24 horas te mostramos cómo puede crecer tu consultorio con presencia digital real.",
    button: "Quiero crecer con mi página web",
  },
};

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

export const FOOTER = {
  tagline: "Software de gestión para consultorios y clínicas odontológicas en Argentina.",
  // TODO: confirmar razón social / firma.
  copyright: "DentalCor Software. Todos los derechos reservados.",
};
