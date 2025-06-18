<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Cliente

    .bloque-texto-t.justify-content-center.align-items-center.mb-0
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_3/img_1.png')
      .bloque-texto-t__texto.color-primario-5.col-10.mb-0
        p.mb-0 Cliente es toda persona que, más allá de comprar un producto o servicio, entrega su confianza a cambio de una solución, una experiencia o un valor que mejora su vida o satisface una necesidad. Es alguien que no solo elige, sino que también evalúa, recuerda y, si se siente bien tratado, vuelve y recomienda.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.1	Características
    .mb-3

    .bg_img_3.mb-3
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-11.order-2.order-lg-1.mb-0
          p.mb-3 El cliente es el punto de partida y el destino de toda acción comercial; es la razón por la que una estrategia cobra sentido y hacia quien deben orientarse cada idea, cada decisión y cada esfuerzo. Las características de los clientes no solo dependen de sus necesidades, sino también de sus comportamientos, valores y actitudes hacia los productos y servicios ofrecidos. A continuación, se detallan las principales características y perfiles de los clientes:
        .col-4.col-lg-1.order-1.order-lg-2.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_3/img_2.svg', class="img-fluid")

      .tarjeta.tarjeta--fondo__slider.p-4.mb-5
        SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h4 Demográficas 
              p Los clientes pueden diferir según su edad, género, nivel de ingresos, educación, ocupación, entre otras. Esta información es vital para crear campañas de marketing personalizadas y segmentadas. Por ejemplo, los jóvenes adultos (18-34 años) suelen estar más interesados en productos tecnológicos y moda (Kotler & Keller, 2016).
            .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_3/img_3.png', class="img-fluid")

          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h4 Geográficas
              p Los clientes también se distinguen por el lugar donde viven o interactúan, ya que su entorno geográfico influye en sus hábitos, preferencias y formas de consumo. Los consumidores urbanos pueden estar más inclinados a comprar productos de tecnología avanzada, mientras que los clientes rurales pueden buscar productos relacionados con la agricultura o herramientas para el hogar.
            .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_3/img_4.png', class="img-fluid")

          .row.justify-content-center.align-items-center.mb-5
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h4 Psicográficas
              p Esta categoría se refiere a los estilos de vida, intereses, valores y creencias de los consumidores. Un buen ejemplo son los consumidores que compran productos de marcas como Patagonia, que se asocian con la sostenibilidad y la conciencia ambiental (Armstrong & Kotler, 2017).
            .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_3/img_5.png', class="img-fluid")

          .row.justify-content-center.align-items-center
            .col-12.col-lg-6.order-2.order-lg-1.mb-0
              h4 Conductuales
              p Este tipo de característica está relacionada con las decisiones de compra, el uso del producto y la lealtad. Por ejemplo, los clientes leales de Amazon tienden a comprar productos en línea debido a la conveniencia, mientras que otros pueden estar más enfocados en obtener descuentos y promociones (Churchill & Iacobucci, 2010).
            .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_3/img_6.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-5.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_3/img_7.png', class="img-fluid")
      .col-12.col-lg-7
        p El perfil del cliente y sus características permite crear estrategias de marketing personalizadas y efectivas. Un ejemplo es el perfil de quienes compran en Zara: personas que priorizan la moda actual, desean calidad sin pagar precios excesivos y valoran la rapidez con la que la marca responde a las nuevas tendencias. (Armstrong & Kotler, 2017).

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2	Tipos
    .mb-3
    
    p.mb-5 Los clientes pueden organizarse en diferentes grupos dependiendo de lo que son, lo que buscan y cómo actúan frente a una oferta. Esta diversidad permite identificar perfiles como los siguientes:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-contenido-terciario-10")
          div(titulo="Clientes nuevos")
            p.ps-5.mb-0 Son quienes dan su primer paso hacia la marca, explorando una compra inicial que puede abrir la puerta a una relación futura. A menudo, las empresas desarrollan estrategias de captación como promociones o descuentos para atraerlos. Ejemplo: Tesla utiliza una estrategia de pruebas gratuitas para atraer nuevos clientes y convencerlos de la calidad de sus vehículos eléctricos.
          div(titulo="Clientes recurrentes")
            p.ps-5.mb-0 Son aquellos que compran con regularidad. Estos clientes ya han construido un vínculo con la empresa, confían en lo que ofrece y representan un flujo continuo y predecible de ingresos. Un ejemplo clásico de clientes recurrentes son los suscriptores de servicios como Netflix o los clientes leales de marcas como Apple.
          div(titulo="Clientes potenciales")
            p.ps-5.mb-0 Aún no han comprado, pero ya demuestran un interés claro por lo que la empresa ofrece, lo que los convierte en candidatos reales para futuras ventas. Las estrategias de marketing deben centrarse en convertir a estos clientes potenciales en clientes reales. Un ejemplo puede ser la captación de clientes para un gimnasio mediante pruebas gratuitas.
          div(titulo="Clientes leales")
            p.ps-5.mb-0 Son clientes que, con el tiempo, han mantenido una elección constante por una marca o producto, reflejando fidelidad y generando un alto nivel de compras repetidas. Un ejemplo sería Starbucks, que ha cultivado una base de clientes muy leal gracias a su programa de recompensas y la calidad constante de sus productos.
      .col-8.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-5
        figure
          img(src='@/assets/curso/temas/tema_3/img_8.png', class="img-fluid")

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-11.order-2.order-lg-1
        p El perfil del cliente permite crear estrategias de marketing personalizadas y efectivas. Un ejemplo es el perfil de quienes compran en Zara: personas que priorizan la moda actual, desean calidad sin pagar precios excesivos y valoran la rapidez con la que la marca responde a las nuevas tendencias. (Armstrong & Kotler, 2017).
      .col-4.col-lg-1.order-1.order-lg-2.mb-lg-0.mb-3  
        figure
          img(src='@/assets/curso/temas/tema_3/img_9.svg', class="img-fluid")

    separador

    #t_3_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.3	Segmentación
    .mb-3
    
    .row.d-flex.align-items-stretch.justify-content-center.mb-5
      .col-12.col-lg-6.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src="@/assets/curso/temas/tema_3/img_10.png", class="img-fluid").h-100
      .col-12.col-lg-6.mb-lg-0.mb-3.d-flex
        .w-100.d-flex.flex-column
          .tarjeta.color-primario-5.h-100.p-3
            .d-flex.flex-column.justify-content-center.h-100
              p.mb-0 La segmentación de clientes es una herramienta esencial en marketing, que implica descomponer un mercado amplio y variado en segmentos más pequeños y homogéneos, cuyos integrantes comparten atributos, necesidades y comportamientos comunes, lo que permite una aproximación más precisa y efectiva a cada grupo. Al identificar estos segmentos, las empresas pueden desarrollar enfoques más precisos y personalizados que incrementen la efectividad de sus campañas y el rendimiento de sus productos o servicios.
      
    h3(data-aos='zoom-in-right').mb-5
      span.label-title.label-title--1 Criterios
    
    p.mb-5 A continuación, una tabla que ilustra cómo se puede segmentar un mercado utilizando varias dimensiones:

    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      |  Segmentación de clientes
    .tabla-a.mb-5
      table
        caption 
          p <b>Fuente.</b> adaptado de Kotler, P., & Keller, K. L. (2016).
        thead.text-white
          tr
            th Segmento
            th Demografía
            th Psicografía
            th Geografía
            th Conducta de compra
        tbody
          tr
            td <b>Jóvenes adultos</b>
            td Edad: 18-30 años, solteros
            td Estilo de vida activo y valoran la tecnología.
            td Zonas urbanas.
            td Compradores frecuentes de tecnología.
          tr
            td <b>Familias</b>
            td Edad: 30-45 años, casados
            td Buscan estabilidad y comodidad familiar
            td Zonas suburbanas y rurales.
            td Compradores regulares de productos para el hogar.
          tr
            td <b>Lujosos</b>
            td Edad: 35-55 años, ingresos altos
            td Estilo de vida exclusivo y aprecian el lujo.
            td Ciudades grandes.
            td Compradores esporádicos de productos de alta gama.
          tr
            td <b>Ecológicos</b>
            td Edad: 25-40 años, solteros
            td Preocupación por el medio ambiente.
            td Áreas con conciencia ecológica.
            td Compradores frecuentes de productos orgánicos.
      
    h3(data-aos='zoom-in-right').mb-5
      span.label-title.label-title--1 Importancia 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-9.order-2.order-lg-1.mb-lg-0.mb-3
        p.mb-3 La segmentación facilita a las empresas identificar a sus clientes clave, mientras adaptan sus ofertas y estrategias comunicacionales para satisfacer de manera más precisa las necesidades y deseos específicos de cada segmento. Esto aumenta la relevancia de las campañas, mejora la eficiencia de los recursos y fomenta una relación más estrecha con los consumidores.
        .tarjeta.color-terciario-10.p-3.row.justify-content-center.align-items-center
          .col-5.col-lg-1.mb-lg-0.mb-3
            figure
              img(src="@/assets/curso/temas/tema_3/img_12.svg", class="img-fluid")
          .col-12.col-lg-11
            p.mb-0 Ejemplo en la práctica: una marca de ropa deportiva podría crear una línea de productos especialmente diseñada para mujeres jóvenes urbanas interesadas en el fitness (segmentación psicográfica) y otra línea orientada a consumidores rurales que buscan ropa funcional para actividades al aire libre (segmentación geográfica). Así, la empresa ofrece productos que se alinean más directamente con las necesidades de cada grupo.
      .col-7.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
        figure
          img(src="@/assets/curso/temas/tema_3/img_11.png", class="img-fluid")
    
    .bloque-texto-g.bloque-texto-g.color-acento-contenido-10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_3/img_13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La segmentación de clientes es una herramienta poderosa que permite a las empresas entender mejor a su público objetivo y ofrecer productos o servicios de manera más eficaz. Al descomponer un mercado vasto en grupos más definidos y similares, las empresas tienen la oportunidad de afinar sus estrategias de marketing, ofreciendo respuestas más específicas que no solo mejoran la experiencia del cliente, sino que también amplifican las posibilidades de expansión y generación de ingresos.
</template>

<script>
export default {
  name: 'Tema3',
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
