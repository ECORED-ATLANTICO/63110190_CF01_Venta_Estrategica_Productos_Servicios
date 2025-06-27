<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-5  
      .col-12.col-lg-8.order-2.order-lg-1
        p.mb-3 Vender no solo significa ofrecer un producto o servicio. También implica entender lo que el cliente necesita y cómo se puede responder a esas necesidades con una oferta adecuada. Este componente formativo, productos y servicios en el mercado, brinda al aprendiz las bases para conocer y diferenciar productos, servicios y portafolios de venta. Además, permite analizar el perfil del cliente y sus diferentes segmentos.   
        p.mb-0 El objetivo es que el aprendiz pueda identificar los atributos de cada oferta comercial y relacionarlos con las características de distintos tipos de clientes. Este conocimiento le ayudará a construir propuestas de valor claras, efectivas y adaptadas a escenarios reales de venta. Desarrollar estas habilidades es clave para un buen desempeño en ocupaciones relacionadas con ventas y servicios.
      .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img.h-100(src="../assets/curso/introduccion/img_1.png", class="img-fluid") 

    figure
      img(src="../assets/curso/introduccion/img_2.png", class="img-fluid") 
      //.video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
