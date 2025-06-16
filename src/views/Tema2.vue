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
          img(src='@/assets/curso/temas/tema_2/img_2.png', class="img-fluid")
        
    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-contenido-terciario-10")
      div(titulo="Portafolio  de productos")
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
