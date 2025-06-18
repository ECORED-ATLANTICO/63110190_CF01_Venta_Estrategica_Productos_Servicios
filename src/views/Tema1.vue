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

    p.mb-5 Un producto es un bien material que se diseña y fabrica con el objetivo de cubrir las necesidades o deseos de los consumidores. Este elemento tangible tiene un valor percibido por los clientes, quienes buscan en la solución a problemas específicos o mejoras en su calidad de vida. Su desarrollo responde a un proceso que busca tanto la funcionalidad como la satisfacción del usuario final.

    h3(data-aos='zoom-in-right').mb-5
      span.label-title.label-title--1 Características

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-8.order-2.order-lg-1
        p.mb-3 Las principales cualidades de un producto comprenden su calidad, diseño, funcionalidad, durabilidad y apariencia. La combinación de estas características influye directamente en las decisiones de compra de los consumidores y en la percepción de marca (Kotler & Keller, 2016).
      .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
        figure
          img(src="@/assets/curso/temas/tema_1/img_2.png", class="img-fluid").height-100
    .bg_img_1.mb-3
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            span.text-dark Desarrollo de la planta
          figure
            img.d-none.d-md-block(src='@/assets/curso/temas/tema_1/img_3.svg', alt='La figura 1 resalta las características que tiene un producto como lo son: Calidad: capacidad para cumplir con las expectativas. Diseño: apariencia, funcionalidad y facilidad de uso. Funcionalidad: cumple con su propósito. Durabilidad: soporta un uso continuo.').mx-auto
            img.d-block.d-md-none(src='@/assets/curso/temas/tema_1/img_3_movil.svg', alt='La figura 1 resalta las características que tiene un producto como lo son: Calidad: capacidad para cumplir con las expectativas. Diseño: apariencia, funcionalidad y facilidad de uso. Funcionalidad: cumple con su propósito. Durabilidad: soporta un uso continuo.').mx-auto
            figcaption <b>Fuente.</b> SENA, 2025

    .bloque-texto-g.bloque-texto-g--inverso.color-primario-10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estas dimensiones no solo definen el valor intrínseco del producto, sino que también reflejan el compromiso del fabricante con la excelencia y la satisfacción del cliente. Comprender cómo cada una de estas características contribuye a la experiencia del usuario permite evaluar con mayor precisión el desempeño del producto en el mercado y su capacidad para generar lealtad. A continuación, se detallan cada una de estas cualidades clave.
 
    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-4.mb-lg-0.mb-3
        figure
          img(src="@/assets/curso/temas/tema_1/img_5.png", class="img-fluid")
      .col-12.col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-contenido-terciario-10")
          div(titulo="CALIDAD")
            p.ps-5.mb-0 La calidad de un producto se mide por su capacidad para cumplir con las expectativas del consumidor. Un ejemplo de una empresa con alta calidad es Apple, que asegura que cada uno de sus productos esté alineado con altos estándares de durabilidad y desempeño.
          div(titulo="DISEÑO")
            p.ps-5.mb-0 El diseño no solo se refiere a la apariencia estética de un producto, sino también a su funcionalidad y facilidad de uso. Por ejemplo, en el caso de Dyson, sus aspiradoras y secadores de mano tienen un diseño innovador que maximiza la eficacia del producto (Armstrong & Kotler, 2017).
          div(titulo="FUNCIONALIDAD")
            p.ps-5.mb-0 Esta característica se refiere a cómo el producto cumple con su propósito. En el caso de Smartphone, la funcionalidad incluye la capacidad de realizar llamadas, enviar mensajes, navegar por Internet, y ejecutar aplicaciones de manera eficiente.
          div(titulo="DURABILIDAD")
            p.ps-5.mb-0 La durabilidad como característica de un producto hace referencia a la capacidad de soportar un uso continuo sin que este pierda su funcionalidad, ni sufrir daños que sean significativos. Un ejemplo claro son los vehículos Toyota, conocidos por su alta durabilidad y resistencia a lo largo del tiempo (Churchill & Iacobucci, 2010).

    h3(data-aos='zoom-in-right').mb-3
      span.label-title.label-title--1 Tipos
    
    p.mb-3 Los productos pueden clasificarse en diversas categorías, dependiendo de sus características y el tipo de mercado al que van dirigidos. Estas categorías incluyen:

    TabsB.color-acento-contenido.mb-0
      .py-4.py-md-5(titulo="Productos  de consumo" :icono="require('@/assets/curso/temas/tema_1/img_6.svg')")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-3.mb-lg-0
            div.container
              h5.mb-3 Productos  de consumo 
              p.mb-0 Orientados al uso individual del consumidor. Ejemplos incluyen alimentos, ropa, cosméticos, productos electrónicos, entre otros. La marca Coca-Cola es un buen ejemplo de un producto de consumo masivo (Kotler & Keller, 2016).
          .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema_1/img_10.png', class="img-fluid")
      .py-4.py-md-5(titulo="Productos industriales" :icono="require('@/assets/curso/temas/tema_1/img_7.svg')")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-3.mb-lg-0
            div.container
              h5.mb-3 Productos industriales 
              p.mb-0 Son aquellos bienes que utilizan las empresas como parte del proceso para producir otros artículos o para ofrecer servicios. Por ejemplo, la empresa Caterpillar se dedica a fabricar maquinaria pesada que se usa en obras de construcción.
          .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema_1/img_11.png', class="img-fluid")
      .py-4.py-md-5(titulo="Productos no duraderos" :icono="require('@/assets/curso/temas/tema_1/img_8.svg')")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-3.mb-lg-0
            div.container
              h5.mb-3 Productos no duraderos 
              p.mb-0 Son aquellos artículos que se consumen de forma rápida o de una duración corta, puesto que su diseño va alineado a su uso en un corto plazo antes de desecharse o agotarse. Esto incluye alimentos que se dañan fácilmente o artículos que se usan una sola vez. Un ejemplo serían las frituras empaquetadas o la ropa para una temporada específica.
          .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema_1/img_12.png', class="img-fluid")
      .py-4.py-md-5(titulo="Productos duraderos" :icono="require('@/assets/curso/temas/tema_1/img_9.svg')")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-3.mb-lg-0
            div.container
              h5.mb-3 Productos duraderos
              p.mb-0 Se trata de productos que están hechos para ser utilizados durante un largo período sin deteriorarse fácilmente. Entre estos se encuentran los electrodomésticos, los muebles y los automóviles La marca LG se destaca en el mercado por fabricar electrodomésticos duraderos y confiables, lo que le ha permitido ganarse una sólida reputación en cuanto a calidad.
          .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/temas/tema_1/img_13.png', class="img-fluid")

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.2	Servicio
    .mb-3

    figure.mb-3
      img(src='@/assets/curso/temas/tema_1/img_14.png', class="img-fluid")

    p.mb-3 Un servicio se refiere a un conjunto de acciones intangibles que una organización ofrece a un cliente sin implicar la entrega de un bien material. Su valor está en la experiencia vivida y en los resultados que el usuario percibe. Por ello, debe ser diseñado cuidadosamente para reflejar calidad, apelando a aspectos sensoriales y emocionales. Además, es esencial gestionar la interacción simultánea entre quien presta el servicio y quien lo recibe, garantizar coherencia pese a las posibles variaciones en su ejecución, y optimizar su disponibilidad para evitar su caducidad, buscando siempre aumentar la satisfacción del cliente y fortalecer su lealtad (Zeithaml, Bitner, & Gremler, 2018).

    h3(data-aos='zoom-in-right').mb-5
      span.label-title.label-title--1 Características
    
    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          |  Características de los servicios.
        .tabla-a.mb-5
          table
            caption 
              p <b>Fuente.</b> Zeithaml, V. A., Bitner, M. J., & Gremler, D. D. (2018)
            thead
              tr
                th Característica
                th Descripción
                th Ejemplo
            tbody
              tr
                td Intangibilidad
                td Los servicios no pueden ser tocados, vistos o almacenados. Esto significa que los consumidores no pueden evaluar un servicio antes de comprarlo.
                td Un servicio de consultoría no puede ser probado antes de ser adquirido.
              tr
                td Inseparabilidad
                td Tanto la producción como el consumo del servicio ocurren de forma simultánea.
                td En un salón de belleza, el servicio de corte de cabello se realiza en el momento en que el cliente está presente.
              tr
                td Variabilidad
                td Un servicio puede variar dependiendo de quién lo ofrece, cuándo y dónde.
                td La experiencia en un hotel puede ser diferente dependiendo del personal que atienda.
              tr
                td Perecibilidad
                td Los servicios no pueden ser almacenados. Si un servicio no se utiliza en el momento, se pierde.
                td Los asientos de un avión que no se venden para un vuelo específico no pueden ser recuperados.
              tr
                td Participación del cliente
                td En muchos servicios, el consumidor o cliente tiene un papel activo en la prestación del servicio.
                td En una barbería, el cliente participa en la elección del estilo que quiere.

    h3(data-aos='zoom-in-right').mb-5
      span.label-title.label-title--1 Tipos 
    
    .bloque-texto-g.bloque-texto-g.color-acento-contenido-10.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los servicios forman parte esencial de la vida cotidiana y del funcionamiento de la economía, ya que responden a necesidades específicas tanto de individuos como de organizaciones. Su naturaleza intangible, su simultaneidad en la producción y el consumo, así como su alta dependencia del factor humano, hacen que su clasificación sea una herramienta clave para comprender mejor sus características, propósitos y formas de prestación. Esta diversidad ha dado lugar a diferentes categorías que agrupan los servicios según su finalidad, su beneficiario principal o el sector en el que se desarrollan.
 
    .tarjeta.tarjeta--fondo__slider.p-4
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            p <b>Servicios personales:</b> son aquellos que se brindan directamente a los consumidores. Ejemplos incluyen servicios de salud (consultas médicas), educación (clases particulares) y entretenimiento (cines, teatros, entre otros).
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_1/img_16.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            p <b>Servicios empresariales:</b> se dirigen a otras entidades, lo que puede incluir consultorías, servicios de marketing, y servicios de tecnología de la información. Por ejemplo, una empresa como Accenture ofrece servicios de consultoría en tecnología de la información, incluyendo implementación de software, gestión de infraestructura de TI y soluciones en la nube. Ayudan a las empresas a adoptar nuevas tecnologías 
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_1/img_17.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            p <b>Servicios públicos:</b> son proporcionados por el gobierno o entidades públicas, como servicios de agua, electricidad y transporte público.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_1/img_18.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            p <b>Servicios financieros:</b> este tipo de servicios son prestados por los bancos, aseguradoras y aquellas entidades que ofrecen servicios de inversión. Por ejemplo, un banco ofrece servicios de ahorro, préstamos y asesoría financiera.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_1/img_19.png', class="img-fluid")

        .row.justify-content-center.align-items-center
          .col-12.col-lg-6.order-2.order-lg-1.mb-0
            p <b>Servicios de mantenimiento y reparación:</b> incluyen servicios como plomería, electricidad y mantenimiento de vehículos.
          .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_1/img_19.png', class="img-fluid")
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
