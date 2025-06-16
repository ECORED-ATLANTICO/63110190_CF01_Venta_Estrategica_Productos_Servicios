<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Portafolio de ventas

    .row.d-flex.align-items-stretch.justify-content-center.mb-0
      .col-12.col-lg-8.order-2.order-lg-1.d-flex
        .w-100.d-flex.flex-column
          .tarjeta.color-acento-contenido-5.h-100.p-3.rounded-0(style="border-radius: 0 10px 10px 10px !important;")
            .d-flex.flex-column.justify-content-center.h-100
              p.mb-0 El portafolio de ventas es el conjunto de productos y servicios que una empresa ofrece a sus clientes. Tener un portafolio bien diseñado es crucial para diversificar las fuentes de ingreso y satisfacer las variadas necesidades del mercado (Armstrong & Kotler, 2017).
      .col-8.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src="@/assets/curso/temas/tema_2/img_1.png", class="img-fluid").h-100

    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.1	Características
    .mb-3

    .bg_img_2.mb-3
      .row.justify-content-center.align-items-center.mb-3
        .col-8.col-lg-4.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_2/img_2.png', class="img-fluid")
        .col-12.col-lg-8
          p Un buen portafolio de ventas no solo representa la oferta de productos o servicios de una empresa, sino que también refleja su propuesta de valor, su posicionamiento en el mercado y su capacidad de adaptación a las necesidades del cliente. Algunas de las características clave de un portafolio de ventas efectivo incluyen la variedad y relevancia de los productos o servicios ofrecidos, la claridad en la presentación de beneficios y diferenciadores, la coherencia con la estrategia comercial de la organización y la flexibilidad para actualizarse frente a las tendencias del mercado. Además, un portafolio bien estructurado permite segmentar adecuadamente a los clientes, identificar oportunidades de venta cruzada y fortalecer la relación comercial mediante una oferta personalizada y alineada con los objetivos del cliente. En ese sentido, a continuación, se presentan:
    
      .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
        .col-sm-8.col-lg-4.mb-4.mb-lg-0.d-flex
          .w-100.d-flex.flex-column
            .tarjeta--boton.color-primario-5.p-4.h-100
              .row.justify-content-center.mb-3
                .col-4.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema_2/img_3.svg')
                .col-12
                  h3.text-center Diversificación
                  p.text-center Un portafolio diversificado ofrece una gama de productos que se adaptan a diferentes segmentos del mercado. Esto ayuda a mitigar los riesgos de depender de un solo tipo de producto. Un ejemplo de esto es Nestlé, que produce desde alimentos hasta productos de salud.

        .col-sm-8.col-lg-4.mb-4.mb-lg-0.d-flex
          .w-100.d-flex.flex-column
            .tarjeta--boton.color-terciario-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-5.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema_2/img_4.svg')
                .col-12
                  h3.text-center Equilibrio
                  p.text-center Un portafolio equilibrado debe incluir productos que generen ingresos inmediatos y otros con márgenes de beneficio más altos, pero con un ciclo de vida largo, como ocurre con los vehículos de Ford y sus repuestos.
        .col-sm-8.col-lg-4.mb-4.mb-sm-0.d-flex
          .w-100.d-flex.flex-column
            .tarjeta--boton.color-acento-contenido-10.p-4.h-100
              .row.justify-content-center.mb-3
                .col-6.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema_2/img_5.svg')
                .col-12
                  h3.text-center Alineación estratégica
                  p.text-center Un portafolio debe estar alineado con los objetivos a largo plazo de la empresa. Por ejemplo, una marca como Tesla tiene un portafolio de productos alineados con su visión de sostenibilidad y tecnología avanzada (Kotler & Keller, 2016).

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2	Tipos 
    .mb-3

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.order-2.order-lg-1.mb-lg-0.mb-3
        p El portafolio de ventas es una herramienta clave en la estrategia comercial de cualquier organización, ya que permite organizar y comunicar de manera efectiva la oferta disponible para diferentes segmentos de mercado. Su estructura puede variar según el objetivo del negocio, el comportamiento del consumidor o las dinámicas del sector, lo que lo convierte en un recurso flexible y adaptable. Al comprender su clasificación, es posible optimizar la presentación de productos o servicios, facilitar el proceso de venta y fortalecer la propuesta de valor frente a la competencia. A continuación, se presentan las principales formas en que puede organizarse un portafolio de ventas:
      .col-8.col-lg-4.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema_2/img_6.png', class="img-fluid")
        
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-contenido-terciario-10")
      div(titulo="Portafolio de productos")
        p.ps-5.mb-0 Incluye todos los bienes tangibles que una empresa ofrece. Estos pueden organizarse por líneas de producto, categorías o niveles de calidad. Permiten atender diferentes necesidades del mercado. Ejemplo: una empresa de tecnología que vende celulares, tabletas y computadoras. (Kotler & Keller, 2016).
      div(titulo="Portafolio de servicio")
        p.ps-5.mb-0 Reúne prestaciones intangibles como asesorías, mantenimientos, soporte técnico, entre otros. Es común en sectores como salud, tecnología y finanzas. Ejemplo: una empresa de software que ofrece consultoría y capacitación junto al programa. (Armstrong & Kotler, 2017).
      div(titulo="Portafolio mixto")
        p.ps-5.mb-0 Combina productos físicos con servicios complementarios, generando un mayor valor agregado para el cliente. Ejemplo: una empresa de telecomunicaciones que vende teléfonos e incluye planes de datos y asistencia técnica. (Zeithaml, Bitner, & Gremler, 2018).
      div(titulo="Portafolio básico y complementario")
        p.ps-5.mb-0 El portafolio básico cubre la necesidad principal del cliente, mientras que el complementario ofrece productos o servicios adicionales que mejoran la experiencia. Ejemplo: en una panadería, el pan sería parte del portafolio básico, y las bebidas o postres, del complementario. (Zeithaml, Bitner, & Gremler, 2018).
      div(titulo="Portafolio por segmentos de clientes")
        p.ps-5.mb-0 Se estructura según distintos perfiles de consumidores (por edad, hábitos, ubicación, entre otros), lo que permite diseñar ofertas específicas y personalizadas. Ejemplo: una marca de ropa que crea colecciones distintas para adolescentes, adultos y ejecutivos. (Solé & Esteban, 2014).

    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.3	Pasos para elaborar portafolio.
    .mb-3
    
    figure.mb-3
      img(src='@/assets/curso/temas/tema_2/img_7.png', class="img-fluid")

    p.mb-3 La elaboración de un portafolio de productos y/o servicios es un proceso clave para estructurar de forma estratégica la oferta comercial de una empresa. Permite identificar, organizar y presentar los elementos que componen la propuesta de valor, de acuerdo con las necesidades del mercado y los segmentos de clientes. Este proceso no solo facilita la toma de decisiones comerciales, sino que también mejora la comunicación con los clientes y la diferenciación frente a la competencia. A continuación, se describen los pasos fundamentales para su construcción, desde el análisis del entorno hasta la validación final del portafolio. A continuación, se establecen pasos para la elaboración del portafolio de venta: 

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.order-2.order-lg-1.mb-lg-0.mb-3
        LineaTiempoD.color-adicional-1
          .row(numero="1" titulo="Definir objetivos y público objetivo")
            .col-md-12.mb-3.mb-md-0
              ul.text-small
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Determine qué busca lograr el portafolio (por ejemplo, captar nuevos clientes, presentar línea completa y apoyar fuerza de ventas).
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Delimite el segmento al que se dirige (edad, sector, nivel de ingresos, entre otros) para adecuar lenguaje y formatos (Armstrong & Kotler, 2020).
          .row(numero="2" titulo="Recopilar y analizar información")
            .col-md-12.mb-3.mb-md-0
              ul.text-small  
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Reúna ficha técnica, especificaciones, precios, fotos y resultados de pruebas de uso.
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Emplee un marco DOFA para examinar las ventajas competitivas y las posibles áreas de crecimiento de cada producto o servicio (Lamb, Hair & McDaniel, 2019). (Opcional)
          .row(numero="3" titulo="Identificar atributos y propuesta de valor")
            .col-md-12.mb-3.mb-md-0
              ul.text-small  
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Describa las características diferenciales y los beneficios clave de cada producto o servicio.
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Explique cómo satisfacen necesidades específicas o mejoran la experiencia del cliente (Schiffman & Kanuk, 2018).
          .row(numero="4" titulo="Segmentar y clasificar el portafolio")
            .col-md-12.mb-3.mb-md-0
              ul.text-small  
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Agrupe los ítems por categorías: uso, rango de precio, rentabilidad o fase de ciclo de vida.
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Asigne un nombre claro a cada categoría (American Marketing Association, s.f.).
          .row(numero="5" titulo="Diseñar estructura y formato")
            .col-md-12.mb-3.mb-md-0
              ul.text-small
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Elija el soporte más adecuado: impreso, digital interactivo o PDF descargable. 
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Defina las secciones fijas: índice, presentación, fichas de producto, testimonios y condiciones de venta (Ecosistema de Recursos Educativos Digitales SENA, 2024).
      .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/temas/tema_2/img_8.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-5
      .col-7.col-lg-4.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_2/img_9.png', class="img-fluid")
      .col-12.col-lg-8
        LineaTiempoD.color-adicional-1
          .row(numero="6" titulo="Elaborar fichas de producto/servicio")
            .col-md-12.mb-3.mb-md-0
              ul.text-small  
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Incluya en cada ficha: nombre, breve descripción, características técnicas, beneficios, imágenes, precio y código interno.
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Incorpore iconografía o cuadros explicativos que faciliten la comprensión de la información (Kotler & Keller, 2021).
          .row(numero="7" titulo="Incorporar elementos visuales y multimedia")
            .col-md-12.mb-3.mb-md-0
              ul.text-small  
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Utilice fotografías de alta calidad, diagramas de uso o videos cortos embebidos.
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Mantenga coherencia gráfica en tipografía, colores y estilo visual (Lamb, Hair & McDaniel, 2019).
          .row(numero="8" titulo="Establecer precios y condiciones")
            .col-md-12.mb-3.mb-md-0
              ul.text-small  
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Detalle precios oficiales, descuentos por volumen, plazos de entrega, garantías y políticas de devolución.
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Explique claramente las formas de pago aceptadas y proporcione los contactos de atención al cliente (Kotler & Keller, 2021).
          .row(numero="9" titulo="Integrar casos de éxito y certificaciones")
            .col-md-12.mb-3.mb-md-0
              ul.text-small  
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Inserte breves testimonios de clientes satisfechos o estadísticas de proyectos exitosos.
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Añada sellos de calidad o certificaciones reconocidas cuando correspondan (Schiffman & Kanuk, 2018).
          .row(numero="10" titulo="Revisar, validar y actualizar")
            .col-md-12.mb-3.mb-md-0
              ul.text-small  
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Antes de la publicación definitiva, verifique toda la información con los equipos de producción, finanzas y área legal. 
                li.mb-0.d-flex.align-items-start
                  i.fa-solid.fa-circle-check.me-2(style="color: #517E64; margin-top: 4px;")
                  span 	Establezca un calendario de revisiones semestrales o anuales para incorporar novedades y retirar productos obsoletos (Armstrong & Kotler, 2020).
    
    .bloque-texto-t.justify-content-center.align-items-center.mb-0
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_2/img_10.png')
      .bloque-texto-t__texto.color-acento-contenido-10.col-7.mb-0
        .row.justify-content-center.align-items-center
          .col-4.col-lg-1.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_2/img_11.svg', class="img-fluid")
          .col-12.col-lg-6.mb-lg-0.mb-3
            b Ir a los videos con tema portafolio de ventas:
          .col-7.col-lg-5.mb-lg-0.mb-3
            a.text-small.boton.color-acento-contenido(href="https://www.youtube.com/watch?v=QrJ2hZkRpiM&ab_channel=EcosistemadeRecursosEducativosDigitalesSENA", target="_blank")
              .row.justify-content-center.align-items-center
                .col-7.col-lg-7.mb-lg-0.mb-3
                  span Ver Videos
                .col-7.col-lg-5.mb-lg-0.mb-3
                  img(src='@/assets/curso/temas/tema_2/img_14.svg')
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
