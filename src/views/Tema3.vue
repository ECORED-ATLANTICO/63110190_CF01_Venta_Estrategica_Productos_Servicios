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
