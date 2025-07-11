export default {
  global: {
    Name: 'Productos y servicios en el mercado',
    Description:
      'El módulo productos y servicios en el mercado proporciona las bases para comprender las características de productos, servicios y portafolios de venta, junto con el análisis del perfil y la segmentación del cliente. Este conocimiento permite al aprendiz identificar los atributos de la oferta comercial y relacionarlos con distintos tipos de clientes, con el fin de estructurar propuestas de valor pertinentes en escenarios reales de venta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-portada.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Producto y servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Producto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Servicio',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Portafolio de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Pasos para elaborar portafolio',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Segmentación',
            hash: 't_3_3',
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
        download: 'downloads/CF01_63110190_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
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
      tema: 'Portafolio de ventas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024, 15 de noviembre). <i>Portafolio de productos y servicios</i> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DWjhZ4fNVuk',
    },
    {
      tema: 'Portafolio de ventas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (s.f.). <i>Portafolio y características del producto</i> [Video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=QrJ2hZkRpiM&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de mercado',
      significado:
        'estudio de las condiciones del mercado para tomar decisiones informadas.',
    },
    {
      termino: 'Ciclo de vida del producto',
      significado:
        'fases que atraviesa un producto desde su creación hasta su declive.',
    },
    {
      termino: 'Cliente',
      significado: 'persona que adquiere un producto o servicio.',
    },
    {
      termino: 'Clientes leales',
      significado: 'aquellos que tienen una relación continua con una marca.',
    },
    {
      termino: 'Clientes nuevos',
      significado: 'aquellos que compran por primera vez.',
    },
    {
      termino: 'Clientes potenciales',
      significado:
        'aquellos que están interesados en los productos, pero aún no compran.',
    },
    {
      termino: 'Clientes recurrentes',
      significado: 'aquellos que realizan compras repetidas.',
    },
    {
      termino: 'Comportamiento de compra',
      significado:
        'estudio de las decisiones de los consumidores al adquirir productos.',
    },
    {
      termino: 'Comportamiento del consumidor',
      significado:
        'estudio de cómo los consumidores toman decisiones de compra.',
    },
    {
      termino: 'Demografía',
      significado: 'estudio de las características de una población.',
    },
    {
      termino: 'Demografía de mercado',
      significado: 'características estadísticas de los consumidores.',
    },
    {
      termino: 'Estrategia de marketing',
      significado: 'plan para promocionar productos y servicios.',
    },
    {
      termino: 'Geografía',
      significado: 'estudio de las ubicaciones y sus efectos sobre el consumo.',
    },
    {
      termino: 'Innovación',
      significado: 'introducción de nuevos productos o mejoras significativas.',
    },
    {
      termino: 'Lealtad',
      significado: 'preferencia continua por una marca.',
    },
    {
      termino: 'Mercado objetivo',
      significado:
        'grupo de consumidores al que se dirige una estrategia de <i>marketing.</i>',
    },
    {
      termino: 'Perfil del cliente',
      significado: 'descripción detallada de un cliente ideal.',
    },
    {
      termino: 'Posicionamiento de marca',
      significado: 'percepción del consumidor sobre una marca en el mercado.',
    },
    {
      termino: 'Producto de consumo',
      significado: 'producto destinado al uso personal del consumidor.',
    },
    {
      termino: 'Producto industrial',
      significado: 'producto utilizado en la producción de otros bienes.',
    },
    {
      termino: 'Promoción',
      significado:
        'estrategias de <i>marketing</i> para atraer a los clientes.',
    },
    {
      termino: 'Psicografía',
      significado: 'estudio de los intereses y valores de los consumidores.',
    },
    {
      termino: 'Publicidad',
      significado: 'comunicación pagada para promover productos.',
    },
    {
      termino: 'Segmentación',
      significado:
        'dividir un mercado en grupos de consumidores con características similares.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chiavenato, I. (2006). <i>Introducción a la teoría general de la administración</i> (7. ª ed.). McGraw-Hill. ',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/15525/mod_resource/content/0/Chiavenato%20Idalverto.%20Introducci%C3%B3n%20a%20la%20teor%C3%ADa%20general%20de%20la%20Administraci%C3%B3n.pdf',
    },
    {
      referencia:
        'Churchill, G. A., & Iacobucci, D. (2010). <i>Investigación de mercados: Fundamentos metodológicos</i> (10.ª ed.). Cengage Learning. Versión en español (PDF): ',
      link:
        'https://usfx.bo/Documentos/RepositorioLibros/Investigacion_de_mercados.pdf',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2017). <i>Principios de marketing</i> (17.ª ed.). Pearson Education. ',
      link:
        'https://campus.eco.unlpam.edu.ar/pluginfile.php/154367/mod_resource/content/1/Marketing%20Kotler-Armstrong.pdf',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). <i>Dirección de marketing</i> (15.ª ed.). Pearson Educación. Versión en español (PDF): ',
      link:
        'https://www.leo.edu.pe/wp-content/uploads/2019/12/direccion-de-marketing-philip-kotler-1.pdf',
    },
    {
      referencia:
        'Zeithaml, V. A., Bitner, M. J., & Gremler, D. D. (2018). <i>Marketing de servicios: Integración del enfoque en el cliente en toda la empresa</i> (7.ª ed.). McGraw-Hill Education. Versión en español (PDF): ',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w20726w/El%20marketing%20de%20servicios_compressed.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina Gonzalez Garcia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Jair Coll',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
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
}
