export interface BlogPost {
  slug: string;
  titulo: string;
  metaDescription: string;
  fecha: string;
  categoria: string;
  tiempoLectura: string;
  resumen: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'diferencias-programa-seguridad-35-98-51-97-319-99',
    titulo: '¿Cuál es la diferencia entre el Programa de Seguridad 35/98, 51/97 y 319/99?',
    metaDescription: 'Explicamos de forma clara la diferencia entre el Plan de Higiene y Seguridad (Res. 51/97), el Programa de Seguridad (Res. 35/98) y el Programa Vial (Res. 319/99) en obras de construcción argentina.',
    fecha: '2026-04-20',
    categoria: 'Construcción',
    tiempoLectura: '6 min',
    resumen: 'Tres documentos, tres situaciones distintas. Si trabajás en construcción, seguro te preguntaste cuándo corresponde cada uno. Te lo explicamos sin vueltas.',
    tags: ['construcción', 'normativa', 'programa de seguridad', 'SRT', 'Dec. 911/96'],
  },
  {
    slug: 'que-es-el-legajo-tecnico-srt',
    titulo: '¿Qué es el Legajo Técnico SRT y cuándo te lo pueden exigir?',
    metaDescription: 'El Legajo Técnico es el documento principal de H&S que exige la SRT. Explicamos qué tiene que contener, quién lo firma y qué pasa si no lo tenés.',
    fecha: '2026-04-27',
    categoria: 'Normativa General',
    tiempoLectura: '5 min',
    resumen: 'Es el documento central de la seguridad en tu empresa. Lo puede pedir la SRT, tu ART o el municipio. Si no sabés qué es, leé esto antes de que te llegue una notificación.',
    tags: ['legajo técnico', 'SRT', 'ART', 'Ley 19587', 'normativa'],
  },
  {
    slug: 'cuando-es-obligatoria-la-medicion-de-ruido',
    titulo: '¿Cuándo es obligatoria la medición de ruido en tu empresa?',
    metaDescription: 'La Res. SRT 85/2012 obliga a medir el ruido en el trabajo. Te explicamos en qué casos aplica, qué pasa si el nivel supera 85 dB(A) y cuánto cuesta no hacerlo.',
    fecha: '2026-04-28',
    categoria: 'Mediciones',
    tiempoLectura: '5 min',
    resumen: 'Si tu empresa tiene maquinaria, generadores, talleres o música ambiental, muy probablemente estés obligado a medir el ruido. Te contamos cuándo, cómo y qué pasa si no lo hacés.',
    tags: ['ruido', 'Res. 85/2012', 'medición', 'hipoacusia', 'ART'],
  },
  {
    slug: 'como-elegir-protector-auditivo',
    titulo: 'Cómo elegir el protector auditivo correcto (sin adivinar)',
    metaDescription: 'Guía práctica para elegir protectores auditivos según la normativa argentina y el nivel de ruido medido. NRR, SNR, protectores de copa y tapones.',
    fecha: '2026-04-30',
    categoria: 'EPP',
    tiempoLectura: '5 min',
    resumen: 'No todos los protectores auditivos son iguales ni sirven para todos los ruidos. Si no calculás la atenuación real que necesitás, estás regalando EPP inútil o, peor, dándole al trabajador algo que no lo protege.',
    tags: ['EPP', 'protector auditivo', 'NRR', 'ruido', 'equipos de protección'],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}
