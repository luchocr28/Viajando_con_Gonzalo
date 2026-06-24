export type Language = 'es' | 'en';

export type TranslationKey =
  | 'nav.inicio'
  | 'nav.about'
  | 'nav.tours'
  | 'nav.gallery'
  | 'nav.why'
  | 'nav.contact'
  | 'nav.startTrip'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.ctaPrimary'
  | 'hero.ctaWhatsApp'
  | 'hero.scroll'
  | 'promo.badge'
  | 'promo.title'
  | 'promo.subtitle'
  | 'promo.departures'
  | 'promo.dates'
  | 'about.eyebrow'
  | 'about.title'
  | 'about.p1'
  | 'about.p2'
  | 'about.p3'
  | 'about.missionTitle'
  | 'about.missionText'
  | 'about.experience'
  | 'about.experienceLabel'
  | 'custom.eyebrow'
  | 'custom.title'
  | 'custom.description'
  | 'custom.card1Title'
  | 'custom.card1Desc'
  | 'custom.card2Title'
  | 'custom.card2Desc'
  | 'custom.card3Title'
  | 'custom.card3Desc'
  | 'custom.card4Title'
  | 'custom.card4Desc'
  | 'custom.card5Title'
  | 'custom.card5Desc'
  | 'custom.card6Title'
  | 'custom.card6Desc'
  | 'custom.accordion1Title'
  | 'custom.accordion1Body'
  | 'custom.accordion2Title'
  | 'custom.accordion2Body'
  | 'custom.accordion3Title'
  | 'custom.accordion3Body'
  | 'custom.cta'
  | 'tours.eyebrow'
  | 'tours.title'
  | 'tours.subtitle'
  | 'tours.duration'
  | 'tours.price'
  | 'tours.route'
  | 'tours.itinerary'
  | 'tours.overview'
  | 'tours.day'
  | 'tours.includes'
  | 'tours.hotels'
  | 'tours.optionalActivities'
  | 'tours.guaranteedDepartures'
  | 'tours.additionalInfo'
  | 'tours.brochure'
  | 'tours.requestInfo'
  | 'gallery.eyebrow'
  | 'gallery.title'
  | 'gallery.subtitle'
  | 'why.eyebrow'
  | 'why.title'
  | 'why.subtitle'
  | 'why.item1Title'
  | 'why.item1Desc'
  | 'why.item2Title'
  | 'why.item2Desc'
  | 'why.item3Title'
  | 'why.item3Desc'
  | 'why.item4Title'
  | 'why.item4Desc'
  | 'why.item5Title'
  | 'why.item5Desc'
  | 'why.item6Title'
  | 'why.item6Desc'
  | 'why.item7Title'
  | 'why.item7Desc'
  | 'why.item8Title'
  | 'why.item8Desc'
  | 'testimonial.quote'
  | 'testimonial.attribute'
  | 'contact.eyebrow'
  | 'contact.title'
  | 'contact.text'
  | 'contact.whatsapp'
  | 'contact.phoneLabel'
  | 'contact.emailLabel'
  | 'contact.socialLabel'
  | 'contact.formName'
  | 'contact.formEmail'
  | 'contact.formMessage'
  | 'contact.formSubmit'
  | 'footer.tagline'
  | 'footer.copyright'
  | 'footer.quickLinks'
  | 'footer.contact'
  | 'footer.follow'
  | 'common.language'
  | 'common.menu'
  | 'common.na';

const es: Record<TranslationKey, string> = {
  'nav.inicio': 'Inicio',
  'nav.about': 'Sobre Nosotros',
  'nav.tours': 'Tours',
  'nav.gallery': 'Galería',
  'nav.why': '¿Por Qué Elegirnos?',
  'nav.contact': 'Contacto',
  'nav.startTrip': 'Comienza Tu Viaje',
  'hero.title': 'Más Que Un Destino, Una Experiencia Que Recordarás Para Siempre',
  'hero.subtitle':
    'Explora la belleza de Costa Rica a través de viajes diseñados para inspirar, sorprender y crear recuerdos inolvidables.',
  'hero.ctaPrimary': 'Comienza Tu Viaje',
  'hero.ctaWhatsApp': 'Consultas y Reservaciones por WhatsApp',
  'hero.scroll': 'Desliza para descubrir',
  'promo.badge': 'Salida Garantizada',
  'promo.title': '🇨🇷 Su viaje a Costa Rica comienza aquí',
  'promo.subtitle': 'Fechas garantizadas de diciembre 2026 a octubre 2027',
  'promo.departures': 'Próximas salidas garantizadas',
  'promo.dates': 'del 19 de Agosto y 2 de Septiembre',
  'about.eyebrow': 'Sobre Nosotros',
  'about.title': 'Bienvenidos a Viajando con Gonzalo Tours',
  'about.p1':
    'Viajando con Gonzalo Tours es una empresa de turismo receptivo en Costa Rica con más de 30 años de experiencia en la industria turística.',
  'about.p2':
    'Creamos experiencias auténticas, seguras y memorables para viajeros de todo el mundo.',
  'about.p3':
    'Combinamos destinos icónicos de Costa Rica con hoteles seleccionados, transporte profesional y atención personalizada.',
  'about.missionTitle': 'Nuestra Misión',
  'about.missionText':
    'Mostrar lo mejor de Costa Rica a través de experiencias auténticas, seguras y de alta calidad.',
  'about.experience': '30+',
  'about.experienceLabel': 'Años de experiencia',
  'custom.eyebrow': 'Viajes a Medida',
  'custom.title': 'Diseñamos viajes 100% personalizados',
  'custom.description':
    'Creamos itinerarios personalizados para individuos, parejas, familias y grupos. Cada viaje es único como usted.',
  'custom.card1Title': 'Tiempo Disponible',
  'custom.card1Desc': 'Adaptamos la duración a sus días disponibles.',
  'custom.card2Title': 'Presupuesto',
  'custom.card2Desc': 'Opciones para cada nivel de inversión.',
  'custom.card3Title': 'Intereses Específicos',
  'custom.card3Desc': 'Diseñamos según sus gustos y prioridades.',
  'custom.card4Title': 'Aventura',
  'custom.card4Desc': 'Adrenalina en selvas, ríos y volcanes.',
  'custom.card5Title': 'Cultura',
  'custom.card5Desc': 'Tradiciones, gastronomía y comunidades locales.',
  'custom.card6Title': 'Naturaleza',
  'custom.card6Desc': 'Bosque nuboso, vida silvestre y paisajes.',
  'custom.accordion1Title': '¿Cómo creamos su itinerario?',
  'custom.accordion1Body':
    'Iniciamos con una conversación para entender sus intereses, fechas y presupuesto. Luego diseñamos un plan detallado día a día, seleccionando hoteles, tours y transporte de primera calidad.',
  'custom.accordion2Title': '¿Pueden viajar familias y grupos?',
  'custom.accordion2Body':
    'Por supuesto. Diseñamos viajes para individuos, parejas, familias y grupos privados. Ajustamos actividades según edades, intereses y ritmo de cada viajero.',
  'custom.accordion3Title': '¿Qué incluye un viaje personalizado?',
  'custom.accordion3Body':
    'Incluye alojamiento seleccionado, transporte privado, tours, guías certificados, asistencia 24/7 y un coordinador dedicado durante toda su estancia.',
  'custom.cta': 'Solicitar Itinerario Personalizado',
  'tours.eyebrow': 'Nuestros Tours',
  'tours.title': 'Experiencias destacadas en Costa Rica',
  'tours.subtitle': 'Itinerarios cuidadosamente diseñados con salidas garantizadas.',
  'tours.duration': 'Duración',
  'tours.price': 'Precio',
  'tours.route': 'Ruta',
  'tours.itinerary': 'Itinerario',
  'tours.overview': 'Resumen',
  'tours.day': 'Día',
  'tours.includes': 'Incluye',
  'tours.hotels': 'Hoteles',
  'tours.optionalActivities': 'Actividades opcionales',
  'tours.guaranteedDepartures': 'Salidas garantizadas',
  'tours.additionalInfo': 'Información adicional',
  'tours.brochure': 'Descargar Brochure',
  'tours.requestInfo': 'Solicitar Información',
  'gallery.eyebrow': 'Galería',
  'gallery.title': 'Costa Rica en imágenes',
  'gallery.subtitle': 'Un recorrido visual por los paisajes que le esperan.',
  'why.eyebrow': '¿Por Qué Elegirnos?',
  'why.title': 'Su viaje, en manos expertas',
  'why.subtitle': 'Más de tres décadas creando experiencias inolvidables en Costa Rica.',
  'why.item1Title': '30+ años de experiencia',
  'why.item1Desc': 'Tres décadas perfeccionando cada detalle de su viaje.',
  'why.item2Title': 'Atención personalizada',
  'why.item2Desc': 'Un coordinador dedicado durante todo su recorrido.',
  'why.item3Title': 'Guías certificados',
  'why.item3Desc': 'Guías naturalistas bilingües y acreditados.',
  'why.item4Title': 'Transporte seguro',
  'why.item4Desc': 'Vehículos modernos con conductores profesionales.',
  'why.item5Title': 'Hoteles seleccionados',
  'why.item5Desc': 'Alojamientos cuidadosamente curados por calidad.',
  'why.item6Title': 'Excelente relación valor',
  'why.item6Desc': 'Experiencias premium con transparencia total.',
  'why.item7Title': 'Viajes individuales y en grupo',
  'why.item7Desc': 'Soluciones privadas o compartidas según prefiera.',
  'why.item8Title': 'Itinerarios a medida',
  'why.item8Desc': 'Cada viaje se diseña según sus intereses.',
  'testimonial.quote':
    'Costa Rica no es solo un destino; es una experiencia que permanecerá con usted para siempre.',
  'testimonial.attribute': 'Viajando con Gonzalo Tours',
  'contact.eyebrow': 'Contacto',
  'contact.title': '¿Listo para descubrir Costa\u00A0Rica?',
  'contact.text': 'Permítanos ayudarle a planificar unas vacaciones inolvidables.',
  'contact.whatsapp': 'Consultas y Reservaciones',
  'contact.phoneLabel': 'Teléfono',
  'contact.emailLabel': 'Correo',
  'contact.socialLabel': 'Síganos',
  'contact.formName': 'Nombre',
  'contact.formEmail': 'Correo electrónico',
  'contact.formMessage': 'Mensaje',
  'contact.formSubmit': 'Enviar mensaje',
  'footer.tagline': 'Más de 30 años creando experiencias inolvidables.',
  'footer.copyright': '© 2026 Viajando con Gonzalo Tours. Todos los derechos reservados.',
  'footer.quickLinks': 'Enlaces',
  'footer.contact': 'Contacto',
  'footer.follow': 'Síganos',
  'common.language': 'Idioma',
  'common.menu': 'Menú',
  'common.na': 'N/A',
};

const en: Record<TranslationKey, string> = {
  'nav.inicio': 'Home',
  'nav.about': 'About Us',
  'nav.tours': 'Tours',
  'nav.gallery': 'Gallery',
  'nav.why': 'Why Choose Us',
  'nav.contact': 'Contact',
  'nav.startTrip': 'Start Your Trip',
  'hero.title': 'More Than a Destination, an Experience You\u2019ll Remember Forever',
  'hero.subtitle':
    'Explore the beauty of Costa Rica through trips designed to inspire, surprise and create unforgettable memories.',
  'hero.ctaPrimary': 'Start Your Trip',
  'hero.ctaWhatsApp': 'Inquiries & Reservations via WhatsApp',
  'hero.scroll': 'Scroll to discover',
  'promo.badge': 'Guaranteed Departure',
  'promo.title': '🇨🇷 Your Costa Rica trip starts here',
  'promo.subtitle': 'Guaranteed dates from December 2026 to October 2027',
  'promo.departures': 'Upcoming guaranteed departures',
  'promo.dates': 'on August 19 and September 2',
  'about.eyebrow': 'About Us',
  'about.title': 'Welcome to Viajando con Gonzalo Tours',
  'about.p1':
    'Viajando con Gonzalo Tours is an inbound tourism company in Costa Rica with more than 30 years of experience in the travel industry.',
  'about.p2':
    'We create authentic, safe and memorable experiences for travelers from around the world.',
  'about.p3':
    'We combine iconic Costa Rica destinations with selected hotels, professional transportation and personalized attention.',
  'about.missionTitle': 'Our Mission',
  'about.missionText':
    'To showcase the best of Costa Rica through authentic, safe and high-quality experiences.',
  'about.experience': '30+',
  'about.experienceLabel': 'Years of experience',
  'custom.eyebrow': 'Tailor-made Travel',
  'custom.title': 'We design 100% personalized trips',
  'custom.description':
    'We create personalized itineraries for individuals, couples, families and groups. Every journey is as unique as you.',
  'custom.card1Title': 'Available Time',
  'custom.card1Desc': 'We tailor the duration to your available days.',
  'custom.card2Title': 'Budget',
  'custom.card2Desc': 'Options for every level of investment.',
  'custom.card3Title': 'Specific Interests',
  'custom.card3Desc': 'We design around your tastes and priorities.',
  'custom.card4Title': 'Adventure',
  'custom.card4Desc': 'Adrenaline across forests, rivers and volcanoes.',
  'custom.card5Title': 'Culture',
  'custom.card5Desc': 'Traditions, cuisine and local communities.',
  'custom.card6Title': 'Nature',
  'custom.card6Desc': 'Cloud forests, wildlife and landscapes.',
  'custom.accordion1Title': 'How do we create your itinerary?',
  'custom.accordion1Body':
    'We start with a conversation to understand your interests, dates and budget. Then we craft a detailed day-by-day plan, selecting first-class hotels, tours and transportation.',
  'custom.accordion2Title': 'Can families and groups travel?',
  'custom.accordion2Body':
    'Of course. We design trips for individuals, couples, families and private groups. We adjust activities based on ages, interests and pace of each traveler.',
  'custom.accordion3Title': 'What does a personalized trip include?',
  'custom.accordion3Body':
    'It includes selected accommodation, private transportation, certified guided tours, 24/7 assistance and a dedicated coordinator throughout your stay.',
  'custom.cta': 'Request Personalized Itinerary',
  'tours.eyebrow': 'Our Tours',
  'tours.title': 'Featured Costa Rica experiences',
  'tours.subtitle': 'Carefully crafted itineraries with guaranteed departures.',
  'tours.duration': 'Duration',
  'tours.price': 'Price',
  'tours.route': 'Route',
  'tours.itinerary': 'Itinerary',
  'tours.overview': 'Overview',
  'tours.day': 'Day',
  'tours.includes': 'Includes',
  'tours.hotels': 'Hotels',
  'tours.optionalActivities': 'Optional activities',
  'tours.guaranteedDepartures': 'Guaranteed departures',
  'tours.additionalInfo': 'Additional information',
  'tours.brochure': 'Download Brochure',
  'tours.requestInfo': 'Request Information',
  'gallery.eyebrow': 'Gallery',
  'gallery.title': 'Costa Rica in pictures',
  'gallery.subtitle': 'A visual journey through the landscapes waiting for you.',
  'why.eyebrow': 'Why Choose Us',
  'why.title': 'Your journey, in expert hands',
  'why.subtitle': 'Over three decades creating unforgettable experiences in Costa Rica.',
  'why.item1Title': '30+ years of experience',
  'why.item1Desc': 'Three decades perfecting every detail of your trip.',
  'why.item2Title': 'Personalized attention',
  'why.item2Desc': 'A dedicated coordinator throughout your journey.',
  'why.item3Title': 'Certified guides',
  'why.item3Desc': 'Bilingual, accredited naturalist guides.',
  'why.item4Title': 'Safe transportation',
  'why.item4Desc': 'Modern vehicles with professional drivers.',
  'why.item5Title': 'Selected hotels',
  'why.item5Desc': 'Accommodation curated by quality.',
  'why.item6Title': 'Excellent value',
  'why.item6Desc': 'Premium experiences with total transparency.',
  'why.item7Title': 'Individual and group trips',
  'why.item7Desc': 'Private or shared solutions as you prefer.',
  'why.item8Title': 'Custom itineraries',
  'why.item8Desc': 'Every trip is designed to your interests.',
  'testimonial.attribute': 'Viajando con Gonzalo Tours',
  'contact.eyebrow': 'Contact',
  'contact.title': 'Ready to discover Costa Rica?',
  'contact.text': 'Let us help you plan an unforgettable vacation.',
  'contact.whatsapp': 'Inquiries & Reservations',
  'contact.phoneLabel': 'Phone',
  'contact.emailLabel': 'Email',
  'contact.socialLabel': 'Follow us',
  'contact.formName': 'Name',
  'contact.formEmail': 'Email',
  'contact.formMessage': 'Message',
  'contact.formSubmit': 'Send message',
  'footer.tagline': 'Over 30 years creating unforgettable experiences.',
  'footer.copyright': '© 2026 Viajando con Gonzalo Tours. All rights reserved.',
  'footer.quickLinks': 'Quick Links',
  'footer.contact': 'Contact',
  'footer.follow': 'Follow us',
  'common.language': 'Language',
  'common.menu': 'Menu',
  'common.na': 'N/A',
};

export const translations: Record<Language, Record<TranslationKey, string>> = { es, en };

export const tourTitles: Record<'three-wonders' | 'monteverde-experience' | 'caribbean-premium', Record<Language, string>> = {
  'three-wonders': { es: 'Costa Rica Three Wonders', en: 'Costa Rica Three Wonders' },
  'monteverde-experience': { es: 'Monteverde Experience', en: 'Monteverde Experience' },
  'caribbean-premium': { es: 'Caribe Premium', en: 'Caribbean Premium' },
};
