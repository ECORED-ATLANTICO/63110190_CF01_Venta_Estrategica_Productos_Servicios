<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .p-md-3 El componente formativo Productos y servicios en el mercado aborda los conceptos clave relacionados con la identificación, análisis y estructuración de ofertas comerciales. Se exploran las características de productos, servicios y portafolios, así como las bases para el análisis del perfil del cliente y su segmentación. Este proceso permite al aprendiz relacionar las particularidades de la oferta con distintos tipos de clientes, para construir propuestas de valor alineadas con sus necesidades y comportamientos. El enfoque práctico del módulo facilita la aplicación de estos conocimientos en contextos reales de venta, fortaleciendo las capacidades para diseñar soluciones comerciales efectivas y personalizadas.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="El componente formativo Productos y servicios en el mercado aborda los conceptos clave relacionados con la identificación, análisis y estructuración de ofertas comerciales. Se exploran las características de productos, servicios y portafolios, así como las bases para el análisis del perfil del cliente y su segmentación. Este proceso permite al aprendiz relacionar las particularidades de la oferta con distintos tipos de clientes, para construir propuestas de valor alineadas con sus necesidades y comportamientos. El enfoque práctico del módulo facilita la aplicación de estos conocimientos en contextos reales de venta, fortaleciendo las capacidades para diseñar soluciones comerciales efectivas y personalizadas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
</template>

<script>
export default {
  name: 'Sintesis',
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
