export default {
  global: {
    componenteFormativo: 'Promotoría y educación ambiental',
    descripcionCurso:
      'Cada comunidad territorial (regiones, municipios, localidades y barrios) o laborales (instituciones, organizaciones y empresas), requieren que la educación ambiental sea realizada según sus condiciones y necesidades particulares. Para llegar a esa fase, se debe previamente conocer a fondo cada metodología y técnica que puede ser usada para garantizar que esta tenga resultados favorables en las personas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Técnicas y metodologías',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Educación ambiental',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Promotoría ambiental',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Formas organizativas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Técnicas y habilidades comunitarias',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planes y programas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Normativa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Planes, programas y proyectos institucionales',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Interpretación y planes de acción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Recolección de la información',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Metodologías participativas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Planes de acción ambiental',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Agendas interministeriales',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Planes y programas',
      referencia:
        'Establecimiento Público Ambiental de Cartagena. (2017). Marco normativo de la educación ambiental. Cartagena, Colombia.',
      tipo: 'Articulo',
      link:
        'http://observatorio.epacartagena.gov.co/wp-content/uploads/2017/05/Marco-Normativo-de-la-Educaci%C3%B3n-Ambiental.pdf',
    },
    {
      tema: '3. Interpretación y planes de acción',
      referencia:
        'Superintendencia de Industria y Comercio. (2018). ABD de la Responsabilidad Social (RS).',
      tipo: 'PDF',
      link:
        'https://www.sic.gov.co/sites/default/files/documentos/122018/abc-responsabilidad-social-final-.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Actores',
      significado:
        'personas que intervienen activa o pasivamente en los procesos de gestión para su propio desarrollo o que asisten al proceso. Abarca los habitantes, los usuarios (habitantes o no de un ámbito), los representantes de organismos públicos o privados, los asesores o interventores en el ámbito, los representantes de los grupos de poder, los empresarios, los sindicatos y, en general, todas las personas que vean afectada su calidad de vida y que influyen o reciben los efectos de uso y conservación de los recursos del ámbito en estudio, así como los que tienen como función apoyar el desarrollo del hombre en dichos ámbitos (Corporación Autónoma Regional del Quindío - CRQ, s. f.).',
    },
    {
      termino: 'Ambiente',
      significado:
        'región, alrededores y circunstancias en las que se encuentra un ser u objeto. El ambiente de un individuo comprende dos tipos de constituyentes: 1. El medio puramente físico o abiótico, en el cual él existe (aire, agua) y 2. El componente biótico, que comprende la materia orgánica no viviente y todos los organismos, plantas y animales de la región, incluida la población específica a la que pertenece el organismo (CRQ, s. f.).',
    },
    {
      termino: 'Calidad ambiental',
      significado:
        'los atributos mensurables de un producto o proceso que indican su contribución a la salud e integridad ecológica. Estado físico, biológico y ecológico de un área o zona determinada de la biosfera, en términos relativos a su unidad y a la salud presente y futura del hombre y las demás especies animales y vegetales (CRQ, s. f.).',
    },
    {
      termino: 'Calidad de vida',
      significado:
        'vínculo dinámico entre el individuo y el ambiente en donde la satisfacción de necesidades implica la participación continua y creativa del sujeto en la transformación de la realidad (CRQ, s. f.).',
    },
    {
      termino: 'Comunidad',
      significado:
        'conjunto de seres vivos que pueblan un territorio determinado, caracterizado por las interrelaciones que estos organismos tienen entre sí y con su entorno. Grupo integrado de especies que habitan en determinada zona; los organismos de determinada comunidad se influyen mutuamente en materia de distribución, abundancia y evolución (una comunidad humana es un grupo social de cualquier tamaño, cuyos miembros viven en determinada localidad) (CRQ, s. f.).',
    },
    {
      termino: 'Contaminación',
      significado:
        'liberación de sustancias que de manera directa o indirecta, causan efectos adversos sobre el medio ambiente y los seres vivos. Existencia en el ambiente de contaminantes o agentes tóxicos o infecciosos que entorpecen o perjudican la vida, la salud y el bienestar del hombre, la fauna y la flora; que degradan la calidad del ambiente y en general, el equilibrio ecológico y los bienes particulares y públicos (CRQ, s. f.).',
    },
    {
      termino: 'Organizaciones o movimientos de base',
      significado:
        'personas o sociedades que actúan a nivel local y no en el centro de las actividades políticas a gran escala (CRQ, s. f.).',
    },
    {
      termino: 'Población',
      significado:
        'grupo de individuos con un ancestro común, que tienden, en mucha mayor medida, a formar parejas entre sí, más bien que con individuos de otro grupo del mismo género (CRQ, s. f.).',
    },
  ],
  referencias: [
    {
      referencia:
        'Barón, G. (2014). El medio ambiente es responsabilidad social de todos. Universidad Católica de Colombia.',
      link:
        'https://repository.ucatolica.edu.co/bitstream/10983/1711/1/El%20medio%20ambiente%20es%20responsabilidad%20social%20de%20todos%20%20Facultad%20de%20Psicologia%20Universidad%20Cat%C3%B3lica.pdf',
    },
    {
      referencia:
        'Causse, M. (2009). El concepto de comunidad desde el punto de vista socio-histórico-cultural y lingüístico. Centro de información y gestión tecnológica de Santiago de Cuba.',
    },
    {
      referencia:
        'Cerda. (1991). Los elementos de la investigación: Cómo reconocerlos, diseñarlos y construirlos. Editorial El Búho.',
    },
    {
      referencia:
        'Corporación Autónoma de Tolima - Cortolima. (2009). Promotores ambientales. Corporación Autónoma de Tolima - Cortolima.',
      link: 'https://www.cortolima.gov.co/promotores-ambientales',
    },
    {
      referencia:
        'Corporación Autónoma Regional CAR. (s. f.) Sistema de Gestión Ambiental (SIGAM). Corporación Autónoma Regional CAR.',
      link: 'http://elearning.sigci.car.gov.co/moodle/mod/book/view.php?id=7',
    },
    {
      referencia:
        'Corporación Autónoma Regional del Valle del Cauca - CVC. (2015). Plan de Gestión Ambiental Regional PGAR 2015-2036. Corporación Autónoma Regional del Valle del Cauca - CVC.',
      link:
        'https://www.cvc.gov.co/sites/default/files/Planes_y_Programas/Planes_de_Gestion_Ambiental_Regional/Plan-de-Gestion-Ambiental-Regional-2015-2036-descarga-liviana.pdf',
    },
    {
      referencia:
        'Establecimiento Público Ambiental de Cartagena. (2017). Marco normativo de la educación ambiental. Cartagena, Colombia.',
      link:
        'http://observatorio.epacartagena.gov.co/wp-content/uploads/2017/05/Marco-Normativo-de-la-Educaci%C3%B3n-Ambiental.pdf',
    },
    {
      referencia:
        'Gobernación de Vichada. (2017). Plan Departamental de Agua (PDA) del Vichada. Gobernación de Vichada.',
      link:
        'http://www.vichada.gov.co/planes/plan-ambiental-pda-vichada-20172019',
    },
    {
      referencia:
        'Gonzalez, M., y Codagnone, T. (2010). La importancia de la tecnoestructura y el staff de apoyo en la organización de las instituciones de educación superior. Universidad Nacional de Mar del Plata.',
      link:
        'https://repositorio.ufsc.br/xmlui/bitstream/handle/123456789/96752/GONZALEZ.pdf;jsessionid=9DA4D77378F689B3D2D391CF418D5A00?sequence=1',
    },
    {
      referencia:
        'Maldonado, T. (2013). Promotoría ambiental. Centro de Educación y Capacitación para el Desarrollo Sustentable [CECADESU].',
      link:
        'http://189.208.102.74/u094/m-sitios/academicos/teresita/articulos/Promotoria_ambiental.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (s. f.). Programa nacional de promotoría ambiental comunitaria. Ministerio de Ambiente y Desarrollo Sostenible.',
      link:
        'https://www.minambiente.gov.co/index.php/component/content/article?id=380:plantilla-ordenamiento-ambiental-territorial-y-coordinacion-del-sina-con-galeria-7',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial. (2013). Brújula, bastón y lámpara para trasegar los caminos de la educación ambiental. Ministerio de Ambiente, Vivienda y Desarrollo Territorial.',
      link:
        'http://www.unilibre.edu.co/praeul/images/stories/pdfs/2013/brujula_baston_y_lampara.pdf',
    },
    {
      referencia:
        'Ministerio de Medio Ambiente y Ministerio de Salud. (2002). Resolución 1164 de 2002 “por la cual se adopta el Manual de Procedimientos para la Gestión Integral de los residuos hospitalarios y similares”. Ministerio de Medio Ambiente y Ministerio de Salud.',
      link:
        'http://www.udea.edu.co/wps/wcm/connect/udea/8ef2b54c-c7a3-4d32-8dde-ddf2c0bd9dc9/Resoluci%C3%B3n+1164+de+2002.pdf?MOD=AJPERES',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio, Ministerio de Ambiente y Desarrollo Sostenible. (2014). Resolución 0754 de 2014 “Por la cual se adopta la metodología para la formulación, implementación, evaluación, seguimiento, control y actualización de los Planes de Gestión Integral de Residuos Sólidos”. Ministerio de Vivienda, Ciudad y Territorio, Ministerio de Ambiente y Desarrollo Sostenible.',
      link:
        'http://www.corantioquia.gov.co/SiteAssets/PDF/Gesti%C3%B3n%20ambiental/Residuos/Anexo%20residuos%20ordinarios/Resoluci%C3%B3n%200754%20del%202014.pdf',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente - MMA y Ministerio de Educación Nacional - MEN. (2002). Política Nacional de Educación Ambiental SINA. MNA y MEN.',
      link:
        'http://cmap.upb.edu.co/rid=1195259861703_152904399_919/politi-ca_educacion_amb.pdf',
    },
    {
      referencia:
        'Observatorio Ambiental de Bogotá. (2018). Proyectos Ambientales Universitarios (PRAU). Observatorio Ambiental de Bogotá.',
      link:
        'https://oab.ambientebogota.gov.co/prau-proyectos-ambientales-universitarios/',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Agricultura y la Alimentación - FAO. (2008). Organización comunitaria. FAO.',
      link: 'http://www.fao.org/3/a-as496s.pdf',
    },
    {
      referencia:
        'Padilla, A., y Aguilar, A. (2003). La evolución de las formas organizativas de la estructura simple a la organización en red y virtual. Investigaciones europeas de dirección y economía. Universidad de Málaga. España.',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=793508',
    },
    {
      referencia:
        'Parra, J., y Vargas, M. (2017). Trabajo con comunidades de base como herramienta de cohesión social y desarrollo local. Universidad EAFIT.',
      link: 'http://www.scielo.org.co/pdf/traso/n19/2256-5493-traso-19-159.pdf',
    },
    {
      referencia:
        'Pomachagua, J. (2010). Educación ambiental. Universidad Nacional del Centro del Perú.',
    },
    {
      referencia:
        'Presidencia de la República. (2013). Decreto 2981 de 2013 “por el cual se reglamenta la prestación del servicio público de aseo”.',
      link: 'http://www.suin-juriscol.gov.co/viewDocument.asp?id=1505864',
    },
    {
      referencia:
        'Presidencia de la República. (2015). Decreto 1076 de 2015, “Por medio del cual se expide el Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible”.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=62511',
    },
    {
      referencia:
        'Rengifo, B., Quitiaquez, L. y Mora, F. (2012). La educación ambiental, una estrategia pedagógica que contribuye a la solución de la problemática ambiental en Colombia.',
      link: 'http://www.ub.edu/geocrit/coloquio2012/actas/06-B-Rengifo.pdf',
    },
    {
      referencia:
        'Secretaría Distrital de Planeación de Bogotá - SDP. (2020). Plan de Ordenamiento Territorial (POT).',
      link: 'http://www.sdp.gov.co/micrositios/pot/que-es',
    },
    {
      referencia:
        'Soliz, F., y Maldonado, A. (2012). Guía No. 5. Guía de metodologías comunitarias participativas. Universidad Andina Simón Bolívar.',
      link:
        'http://repositorio.uasb.edu.ec/bitstream/10644/3997/1/Soliz,%20F-CON008-Guia5.pdf',
    },
    {
      referencia:
        'Superintendencia de Industria y Comercio. (2018). ABD de la Responsabilidad Social (RS).',
      link:
        'https://www.sic.gov.co/sites/default/files/documentos/122018/abc-responsabilidad-social-final-.pdf',
    },
    {
      referencia:
        'Universidad Nacional Abierta. (s. f.). Metodología de la Investigación II. Capítulo 7: Medios, instrumentos, técnicas y métodos en la recolección de datos e información. El Búho.',
    },
    {
      referencia:
        'Zamalloa, E., y Díaz, J. (2005). Manual N°5, guías metodológicas para la gestión ambiental. Unidad de Desarrollo Sostenible - UDES.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Xiomara Becerra Aldana',
          cargo: 'Instructora Ambiental',
          centro: 'Regional Distrito Capital - Centro de gestión industrial',
        },
        {
          nombre: 'Jesús Ricardo Arias Munevar',
          cargo: 'Instructor Ambiental',
          centro: 'Regional Distrito Capital - Centro de gestión industrial',
        },
        {
          nombre: 'Javier Ricardo Luna Pineda',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Silvia Milena Sequeda Cardenas',
          cargo: 'Evaluador Instruccional',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Adriana Lozano Zapata',
          cargo: 'Revisora de estilo',
          centro:
            'Regional Distrito Capital  -Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
