export type TourCard = {
  id: string;
  image: string;
  duration: { es: string; en: string };
  price: string;
  route: { es: string[]; en: string[] };
  overview: { es: string; en: string };
  itinerary: { day: string; items: { es: string; en: string }[] }[];
  includes: { es: string[]; en: string[] };
  hotels: { name: string; url: string }[];
  optionalActivities: {
    title: { es: string; en: string };
    items: { es: string; en: string }[];
  }[];
  departures: string[];
  additionalInfo: { es: string; en: string };
  brochureUrl: string;
};

export const tours: TourCard[] = [
  {
    id: 'three-wonders',
    image: 'CR_vocalno.webp',
    duration: { es: '10 días / 11 noches', en: '10 days / 11 nights' },
    price: 'Desde USD $1,990 por persona',
    route: {
      es: ['San José', 'Cartago', 'Volcán Poás', 'La Fortuna', 'Monterverde', 'Manuel Antonio', 'Marino Ballena', 'Tarcoles', 'San José'],
      en: ['San José', 'Cartago', 'Volcán Poás', 'La Fortuna', 'Monterverde', 'Manuel Antonio', 'Marino Ballena', 'Tarcoles', 'San José']
    },
    overview: {
      es: 'Un viaje completo de 11 días Y 10 noches por los escenarios más icónicos de Costa Rica: volcanes, bosques nubosos, selva tropical y playas del Pacífico.',
      en: 'An 11-day complete journey across Costa Rica\u2019s most iconic sceneries: volcanoes, cloud forests, rainforest and Pacific beaches.',
    },
    itinerary: [
       {
        day: '1',
        items: [
          { es: 'Bienvenidos A Costa Rica', en: 'Welcome To CostaRica' },
        ],
      },
      {
        day: '2',
        items: [
          { es: 'Cartago Valle De Orosi', en: 'Cartago Orosi Valley' },

         
        ],
      },
      {
        day: '3',
        items: [
          { es: 'Volcán Poás, Catarata La Paz Y La Fortuna', en: 'Poás Volcano, La Paz Waterfall And La Fortuna' },          
        ],
      },
       {
        day: '4',
        items: [
          { es: 'Arenal: Volcán, Lago Y Relax', en: 'Arenal: Volcano, Lake And Relax' },          
        ],
      },
         {
        day: '5',
        items: [
          { es: 'Río Celeste Y Monteverde', en: 'Río Celeste And Monteverde' },          
        ],
      },
         {
        day: '6',
        items: [
          { es: 'Monteverde', en: 'Monteverde' },          
        ],
      },
         {
        day: '7',
        items: [
          { es: 'Camino Al Pacífico', en: 'Journey To The Pacific' },          
        ],
      },
         {
        day: '8',
        items: [
          { es: 'Parque Nacional Marino Ballena', en: 'Marino Ballena National Park' },          
        ],
      },
         {
        day: '9',
        items: [
          { es: 'Parque Nacional Manuel Antonio', en: 'Manuel Antonio National Park' },          
        ],
      },
         {
        day: '10',
        items: [
          { es: 'Regreso A San José', en: 'Back to SJ.' },          
        ],
      },
         {
        day: '11',
        items: [
          { es: 'Despedida de Costa Rica', en: 'Good Bye Costa Rica' },          
        ],
      },
       
    ],
    includes: {
      es: [
        '11 noches de alojamiento',
        'Desayuno diario',
        'Transporte terrestre',
        'Tour guiado en Manuel Antonio',
        'Cena tipica costarrincense',
        'Asistencia de viaje',
        'Desayuno diario y Opción de media pensión'
      ],
      en: [
        '11 nights accommodation',
        'Daily breakfast',
        'Ground transportation',
        'Manuel Antonio guided tour',
        'Traditional Costa Rican dinner',
        'Travel assistance',
      ],
    },
    hotels: [
      { name: 'Hilton Garden Inn San José', url: 'https://www.hilton.com/en/hotels/sjohigi-hilton-garden-inn-san-jose-costa-rica/' },
      { name: 'Volcano Lodge o Hotel Los Lagos Spa', url: ' https://los-lagos-spa-thermal-resort-experience.bookstaygo.com/es' },
      { name: 'Monteverde Country Lodge', url: 'https://www.monteverdecountrylodge.com/' },
      { name: 'Hotel Alma Vida', url: 'https://www.almavidahotel.com/' }, 
    ],
    optionalActivities: [
      {
        title: { es: 'Monteverde', en: 'Monteverde' },
        items: [
          { es: 'Puentes colgantes', en: 'Hanging bridges' },
          { es: 'Actividades al aire libre', en: 'Outdoor activities' },
        ],
      },
      {
        title: { es: 'Manuel Antonio', en: 'Manuel Antonio' },
        items: [{ es: 'Experiencia de vela y catamarán', en: 'Sailing and catamaran experience' }],
      },
    ],
    departures: ['Marzo 12, 2027', 'Abril 9, 2027', 'Mayo 7, 2027', 'Junio 11, 2027' , 'Julio 23, 2027', , 'Agosto 29, 2027',      'Septiembre 19, 2027'],
    additionalInfo: {
      es: 'Cupos limitados. Reserva con anticipación para asegurar disponibilidad de hoteles y tours.',
      en: 'Guaranteed departures in August and September. Limited spots. Book in advance to secure hotel and tour availability.',
    },
    brochureUrl: 'https://maravillas-costa-rica.g560511.chatgpt.site',
  },
  {
    id: 'monteverde-experience',
    image: 'CR_forest.webp',
    duration: { es: '3 días / 2 noches', en: '3 days / 2 nights' },
    price: '',
    route: {
      es: ['San José', 'Monteverde', 'Río Celeste'],
      en: ['San José', 'Monteverde', 'Celeste River'],
    },
    overview: {
      es: 'Una escapada al bosque nuboso de Monteverde con puentes colgantes, vida nocturna y una visita al legendario Río Celeste.',
      en: 'A getaway to the Monteverde cloud forest with hanging bridges, night wildlife and a visit to the legendary Río Celeste.',
    },
    itinerary: [
      {
        day: '1',
        items: [
          { es: 'Llegada a Monteverde', en: 'Arrival Monteverde' },
          { es: 'Reserva natural', en: 'Nature reserve' },
          { es: 'Tour nocturno', en: 'Night tour' },
        ],
      },
      {
        day: '2',
        items: [
          { es: 'Puentes colgantes', en: 'Hanging bridges' },
          { es: 'Jardín de colibríes', en: 'Hummingbird garden' },
        ],
      },
      {
        day: '3',
        items: [
          { es: 'Río Celeste', en: 'Río Celeste' },
          { es: 'Regreso', en: 'Return' },
        ],
      },  
    ],
    includes: {
      es: ['Hotel', 'Desayuno', 'Transporte', 'Entrada al Río Celeste'],
      en: ['Hotel', 'Breakfast', 'Transportation', 'Río Celeste entrance'],
    },
    hotels: [
         { name: 'Monteverde Country Lodge', url: 'https://www.monteverdecountrylodge.com/' },

    ],
    optionalActivities: [
      {
        title: { es: 'Monteverde', en: 'Monteverde' },
        items: [
          { es: 'Puentes colgantes', en: 'Hanging bridges' },
          { es: 'Actividades al aire libre', en: 'Outdoor activities' },
        ],
      },
    ],
    departures: [],
    additionalInfo: {
      es: 'Salidas privadas bajo reserva. Sujeto a disponibilidad de temporada seca. Recomendamos llevar ropa ligera, repelente de insectos y calzado cómodo para senderos.',
      en: 'Private departures on request. Subject to dry-season availability. We recommend lightweight clothing, insect repellent and comfortable trail footwear.',
    },
    brochureUrl: 'brochures/T2.png',
  },
  {
    id: 'caribbean-premium',
    image: 'CR_Tortugero.webp',
    duration: { es: '3 días / 2 noches', en: '3 days / 2 nights' },
    price: '',
    route: {
      es: ['San José', 'Tortuguero', 'Cahuita', 'Punta Uva', 'Centro de rescate de vida silvestre'],
      en: ['San José', 'Tortuguero', 'Cahuita', 'Punta Uva', 'Wildlife rescue center'],
    },
    overview: {
      es: 'Un recorrido por el Caribe costarricense: canales de Tortuguero, arrecifes de Cahuita, playas vírgenes de Punta Uva y rescate de fauna silvestre.',
      en: 'A journey through the Costa Rican Caribbean: Tortuguero canals, Cahuita reefs, pristine Punta Uva beaches and wildlife rescue.',
    },
    itinerary: [
       {
        day: '1',
        items: [
          { es: 'Canales de Tortuguero', en: 'Tortuguero Canals' },
          { es: 'Llegada y Alojamiento en Puerto Viejo', en: 'Arrival & Accommodation In Puerto Viejo' },
        ],
      },
      {
        day: '2',
        items: [
          { es: 'Parque Nacional Cahuita', en: 'National Park Cahuita' },
          { es: 'Playas de Punta Uva', en: 'Punta Uva Beaches' },
          { es: 'Regreso a Puerto Viejo', en: 'Return To Puerto Viejo' },

         
        ],
      },
      {
        day: '3',
        items: [
          { es: 'Visita al Centro de Rescate de Fauna Silvestre', en: 'Wildlife Rescue Center Tour' },
          { es: 'Regreso a San José', en: 'Return to San José' },
          
        ],
      },
    ],
    includes: {
      es: ['Hotel', 'Desayuno', 'Transporte', 'Tour por canales', 'Guía naturalista'],
      en: ['Hotel', 'Breakfast', 'Transportation', 'Canal tour', 'Naturalist guide'],
    },
    hotels: [],
    optionalActivities: [

      
    ],
    departures: [],
    additionalInfo: {
      es: 'Salidas privadas bajo reserva. Sujeto a disponibilidad de temporada seca. Recomendamos llevar ropa ligera, repelente de insectos y calzado cómodo para senderos.',
      en: 'Private departures on request. Subject to dry-season availability. We recommend lightweight clothing, insect repellent and comfortable trail footwear.',
    },
    brochureUrl: 'brochures/T3.png',
  },
];

export type GalleryItem = {
  id: string;
  image: string;
  location: { es: string; en: string };
  description: { es: string; en: string };
  span: 'tall' | 'wide' | 'normal';
};

export const galleryItems: GalleryItem[] = [
  {
    id: 'arenal',
    image: 'Gallery/1-Volcan.webp',
    location: { es: 'Volcán Arenal', en: 'Arenal Volcano' },
    description: {
      es: 'El imponente Volcán Arenal domina el horizonte de La Fortuna con su cono perfecto.',
      en: 'The imposing Arenal Volcano dominates the La Fortuna skyline with its perfect cone.',
    },
    span: 'tall',
  },
  {
    id: 'monteverde',
    image: 'CR_forest.webp',
    location: { es: 'Monteverde', en: 'Monteverde' },
    description: {
      es: 'El bosque nuboso de Monteverde alberga una biodiversidad única en el mundo.',
      en: "Monteverde's cloud forest holds biodiversity found nowhere else on Earth.",
    },
    span: 'normal',
  },
  {
    id: 'manuel-antonio',
    image: 'Gallery/manuelAntonio.webp',
    location: { es: 'Manuel Antonio', en: 'Manuel Antonio' },
    description: {
      es: 'Playas de arena blanca rodeadas de selva tropical en el Parque Nacional Manuel Antonio.',
      en: 'White-sand beaches surrounded by tropical rainforest in Manuel Antonio National Park.',
    },
    span: 'wide',
  },
  {
    id: 'beaches',
    image: 'CR_beach.webp',
    location: { es: 'Playas', en: 'Beaches' },
    description: {
      es: 'Costa Rica cuenta con más de 300 playas en el Caribe y el Pacífico.',
      en: 'Costa Rica has over 300 beaches across the Caribbean and Pacific coasts.',
    },
    span: 'normal',
  },
  {
    id: 'rainforest',
    image: 'Gallery/6-Iguana.webp',
    location: { es: 'Selva Tropical', en: 'Rainforest' },
    description: {
      es: 'Bosques lluviosos que albergan el 5% de la biodiversidad mundial.',
      en: 'Rainforests home to 5% of the world\u2019s biodiversity.',
    },
    span: 'tall',
  },
  {
    id: 'wildlife',
    image: 'Gallery/5-vida_silvestre.webp',
    location: { es: 'Vida Silvestre', en: 'Wildlife' },
    description: {
      es: 'Perezosos, monos, tucanes y ranas rojas conviven en nuestros bosques.',
      en: 'Sloths, monkeys, toucans and red-eyed frogs share our forests.',
    },
    span: 'wide',
  },
];

export type DiscoverCategory = {
  id: string;
  title: { es: string; en: string };
  image: string;
};

export const discoverCategories: DiscoverCategory[] = [
  {
    id: 'volcanoes',
    title: { es: 'Volcanes', en: 'Volcanoes' },
    image: 'https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'beaches',
    title: { es: 'Playas', en: 'Beaches' },
    image: 'https://images.pexels.com/photos/2598683/pexels-photo-2598683.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'rainforests',
    title: { es: 'Bosques Lluviosos', en: 'Rainforests' },
    image: 'https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'hot-springs',
    title: { es: 'Aguas Termales', en: 'Hot Springs' },
    image: 'https://images.pexels.com/photos/13195322/pexels-photo-13195322.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'wildlife',
    title: { es: 'Vida Silvestre', en: 'Wildlife' },
    image: 'https://images.pexels.com/photos/2476054/pexels-photo-2476054.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'culture',
    title: { es: 'Cultura', en: 'Culture' },
    image: 'https://images.pexels.com/photos/2901528/pexels-photo-2901528.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];
