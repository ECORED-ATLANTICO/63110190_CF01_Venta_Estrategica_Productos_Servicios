<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Producto y servicio

    .bloque-texto-t.justify-content-center.align-items-center.mb-0
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_1/img_1.png')
      .bloque-texto-t__texto.color-terciario-20.col-10.mb-0
        p.mb-0 Los productos y servicios constituyen el núcleo de las actividades comerciales, al ser la propuesta que una empresa ofrece para atender las demandas del mercado. Factores como la calidad, la disponibilidad y el ajuste a las expectativas del cliente influyen directamente en los resultados de venta y en la lealtad del consumidor. Asimismo, son fundamentales para destacar frente a la competencia y aportar valor. Administrarlos adecuadamente favorece el desarrollo sostenible de la empresa. Por tanto, comprender su relevancia es esencial para diseñar estrategias comerciales eficaces.

    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1	Producto
    .mb-3

    p.mb-3 Un producto es un bien material que se diseña y fabrica con el objetivo de cubrir las necesidades o deseos de los consumidores. Este elemento tangible tiene un valor percibido por los clientes, quienes buscan en la solución a problemas específicos o mejoras en su calidad de vida. Su desarrollo responde a un proceso que busca tanto la funcionalidad como la satisfacción del usuario final.


 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
