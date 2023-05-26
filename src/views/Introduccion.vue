<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 La promotoría ambiental es un procedimiento que busca promover la participación ciudadana en procesos de planificación, gestión y seguimiento de las políticas, planes, programas y proyectos orientados hacia el desarrollo sostenible y la educación ambiental, revise a continuación el propósito de este componente formativo.

    .row.justify-content-center.mb-4
      .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/intro/img01.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-center.mb-0 En el presente componente formativo se estudiará la educación y promotoría ambiental, cuál es su normativa y los diferentes planes, programas y proyectos institucionales, realizaremos una interpretación a la promotoría y educación ambiental y sus planes de acción.
      .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/intro/img02.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-center.mb-0 La búsqueda del equilibrio entre el desarrollo económico y la protección del medio ambiente es un objetivo ambicioso que requiere información suficiente por parte de todos los agentes. Las bibliotecas pueden desempeñar un papel importante como promotoras de conocimientos sobre sostenibilidad ambiental.
      .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/intro/img03.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-center.mb-0 Se identificarán las principales técnicas y metodologías ambientales que la población debe conocer, planes y programas que incluyen conceptualización teórica hasta temas normativos y la interpretación de planes de acción a implementar junto con su metodología.
      .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/intro/img04.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-center.mb-0 Con el ánimo de conseguir que las personas adopten hábitos, productos y servicios más respetuosos con el medio ambiente.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
