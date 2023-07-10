<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Interpretación y planes de acción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img01.png' alt="Imagen decorativa")
      .col(data-aos="fade-left")
        p.mb-0 Interpretar las realidades de una comunidad es un proceso interactivo donde la persona o promotor ambiental se relaciona con las personas objeto de estudio, de una manera colaborativa, bidireccional, esto quiere decir, que ambas partes se involucran y aprenden en conjunto; para que esto sea posible, se deben llevar a cabo diferentes acciones de manera organizada y planificada, dentro de las cuales se encuentran:

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-right") 
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img(style="min-width: 25% !important")
            img(src='@/assets/curso/tema3/img02.png' alt="Imagen decorativa")
          .tarjeta.BGR02A.p-2
            p.ms-4.mb-0 Recolección de la información.
      .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-up") 
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img(style="min-width: 25% !important")
            img(src='@/assets/curso/tema3/img03.png' alt="Imagen decorativa")
          .tarjeta.BGR02A.p-2
            p.ms-4.mb-0 Metodologías participativas.
      .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="flip-up") 
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img(style="min-width: 25% !important")
            img(src='@/assets/curso/tema3/img04.png' alt="Imagen decorativa")
          .tarjeta.BGR02A.p-2
            p.ms-4.mb-0 Planes de acción ambiental.
      .col-lg-3.col-md-6.col-8.mb-lg-0.mb-4(data-aos="fade-left") 
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img(style="min-width: 25% !important")
            img(src='@/assets/curso/tema3/img05.png' alt="Imagen decorativa")
          .tarjeta.BGR02A.p-2
            p.ms-4.mb-0 Agendas interministeriales.

    p A continuación, se ampliará la información sobre cada una de ellas.

    separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.1 Recolección de la información
    
    p La selección y elaboración de instrumentos de recolección de información es fundamental en el proceso de trabajo comunitario; a través del uso de estos instrumentos se reúne toda la información previa de una investigación, dando directrices y estableciendo el marco de referencia para el planteamiento de acciones con la comunidad.
    p Dentro de los instrumentos básicos para la recolección de información se encuentran, según Cerda (1991) los siguientes:

    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Observación" :icono="require('@/assets/curso/tema3/img06.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p Medio preferido por los investigadores sociales; es una técnica de fácil aplicación, que exige una tabulación muy sencilla; El observador fija su atención en una finalidad de la que tiene clara conciencia, la cual le proporciona la justa postura frente al objeto de la observación. El proceso de observación exige tener un plan o por lo menos algunas directrices determinadas con relación a lo que se quiere o espera observar. 
            p.mb-0 Uno de los problemas más complejos y más difíciles de resolver es, sin duda, el registro de las observaciones, frente al cual existen posiciones muy encontradas. Se han sugerido las técnicas y los métodos más dispares para alcanzar un “óptimo registro" de las observaciones, los cuales van desde rígidos protocolos utilizados en los experimentos y en las observaciones clínicas, hasta las modalidades más libres y asistemáticas (p. 239).
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img10.svg' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Entrevista" :icono="require('@/assets/curso/tema3/img07.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p Es la técnica más utilizada en investigaciones cualitativas, se encuentran bajo la denominación de interrogatorio o de cuestionarios (siendo este último la misma modalidad pero escrita), se basa en la realización de preguntas orientadas hacia la búsqueda de información de un objetivo específico.
            p Por medio de la entrevista se obtiene aquella información que no obtenemos por la observación, de ello se deduce que la entrevista no es otra cosa que una conversación entre dos personas, una de las cuales se denomina entrevistador y la otra entrevistado. Estas dos personas dialogan y conversan de acuerdo con pautas acordadas previamente, o sea, se presume que para realizar una entrevista debe existir una interacción verbal entre dos personas en un proceso de acción recíproca (Cerda, 1991, p. 259).
            p Dentro las subclasificaciones se encuentran:
            ul.lista-ul--color
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Entrevistas focalizadas.
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Entrevistas clínicas.
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #3076B6;")
                | Entrevistas no dirigidas.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img11.svg' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Encuestas" :icono="require('@/assets/curso/tema3/img08.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p Es una de las técnicas más usada por empresas de diferentes índoles. De acuerdo con Cerda (1991), se define como la recolección sistemática de datos en una población o en una muestra de la población, mediante el uso de entrevistas personales y otros instrumentos, para obtener datos. Habitualmente, a este tipo de estudio se le denomina así, cuando se ocupa de grupos de personas, numerosas y dispersas (p. 277).
            p Existen encuestas abiertas o no restringidas, que propician respuestas libres; la dificultad de este medio es la tabulación y análisis, al ser abierto, deja también a libre interpretación las respuestas perdiendo la rigurosidad científica.
            p Existen encuestas cerradas o restringidas, son encuestas que incitan respuestas breves y específicas, lo que permite la tabulación y posterior evaluación de las respuestas formuladas.
            p.mb-0 Se encuentran encuestas de diferente tipología, como las encuestas descriptivas, encuestas explicativas y sondeo y encuestas de opinión pública.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img12.svg' alt="Imagen decorativa")
      .py-4.py-md-5(titulo="Etapas y desarrollo de encuestas" :icono="require('@/assets/curso/tema3/img09.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p No existe una metodología estándar para la aplicación de las encuestas, por el contrario, cada entidad o las diferentes investigaciones sugieren su propio procedimiento para realizar la recolección de información, acorde a sus necesidades.
            p Sin embargo, de acuerdo con Cerda (1991), es relevante tomar en consideración las siguientes acciones, secuenciales y elementales, para la elaboración de un proceso de recolección de información:
            ul.lista-ul--color
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Familiarización con el problema general.
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Trabajos exploratorios complementarios.
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Definición de objetivos generales y específicos.
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Selección de métodos.
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Planeación y plan operativo de la muestra.
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Cronograma de trabajo.
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Población y muestra.
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Análisis y caracterización de la población y de la muestra.
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Elaboración de los cuestionarios o guías de las encuestas.
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Trabajo de campo.
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Tabulación de datos.
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Análisis e interpretación de datos.
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                | Redacción del informe.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema3/img13.svg' alt="Imagen decorativa")


    separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.2 Metodologías participativas

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img14.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p Para iniciar se debe tener claro que la participación comunitaria debe ser un proceso activo y voluntario; si se piensa en este tema como un formalismo obligatorio, se pierde el sentido y la importancia de estas acciones.
        p La participación debe ser una construcción colectiva, es decir, no es solo consultar con personas su concepto referente a un tema, implica a su vez, la planificación de propuestas, gestión de recursos, ejecución de actividades, evaluación de proyectos e interpretación.
        p.mb-0 En esa construcción colectiva se encuentra una infinidad de metodologías aplicables, para este caso se tomará como referencia la clasificación otorgada por Soliz y Maldonado (2012), en su documento Guía de metodologías comunitarias participativas.

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Metodologías participativas para comprender el contexto sociohistórico

    p.mb-5 Su énfasis es en la articulación de las problemáticas que suelen verse o percibirse como aisladas en las comunidades, pero que tienen relaciones causales entre ellas.
    .h4.texto-primario(data-aos="fade-right") Cartografía socioambiental - Mapas comunitarios
    p También denominado mapas comunitarios, con base en Soliz y Maldonado (2012):

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="color: #FFA031")
            .h4.mb-0 Esta metodología permite ir más allá de las descripciones y construir gráficamente la historia de los territorios, de sus conflictos, de los actores, de las relaciones, de las amenazas y las oportunidades
            i.fas.fa-quote-right(style="color: #FFA031")
      .col-lg-6(data-aos="fade-left")
        p.mb-0 La cartografía social es una metodología nueva y alternativa que permite a las comunidades conocer y construir un conocimiento integral de su territorio para que puedan elegir una mejor manera de vivirlo; este tipo de mapas son creados por la comunidad en un proceso de planificación participativa, poniendo en común el saber colectivo y legitimándolo (p. 8).

    p.mb-5 Los elementos básicos para elaborar mapas socioambientales de manera participativa son:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-4.px-4.img-05(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img15.svg' alt="Imagen decorativa")
      .col-12.BG11.p-4(data-aos="fade-left")
        .row.justify-content-end
          .col-lg-8
            .row.justify-content-center
              .col-lg-6.mb-lg-0.mb-4
                ol.lista-ol--cuadro.mb-0
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    | Proponer la importancia de la metodología.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | Delimitar con la comunidad el territorio a mapear.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | Definir los elementos de interés.
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | Establecer los objetivos del proceso de mapeo.
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    | Construir la metodología.
              .col-lg-6
                ol.lista-ol--cuadro.mb-0
                  li 
                    .lista-ol--cuadro__vineta
                      span 6
                    | Realizar el trabajo de campo y construcción de los primeros borradores.
                  li 
                    .lista-ol--cuadro__vineta
                      span 7
                    | Construcción de representaciones gráficas.
                  li 
                    .lista-ol--cuadro__vineta
                      span 8
                    | Construcción de bases de datos paralelas.
                  li 
                    .lista-ol--cuadro__vineta
                      span 9
                    | Validación comunitaria.
                  li 
                    .lista-ol--cuadro__vineta
                      span 10
                    | Toma de decisiones.

    .h4.texto-primario(data-aos="fade-right") Cartografía de sueños - Mapas de sueños

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img16.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p.mb-0 Este es un proceso que se realiza como una proyección de los mapas comunitarios, teniendo en cuenta que estos buscan la visibilización de las problemáticas del territorio y la relación de los actores involucrados. En los mapas de sueños se busca que se contemple la proyección o deseos de cómo se debe ver el territorio “la meta”; usualmente los sueños proyectados se encuentran relacionados a servicios como: espacios recreativos, centros de salud, escuelas, entre otros.

    .h4.texto-primario(data-aos="fade-right") Línea del tiempo comunitario
    p Siguiendo a Soliz y Maldonado (2012), esta es una metodología que puede combinar elementos gráficos. En una línea horizontal se trazan las divisiones temporales que la comunidad considere pertinentes, y se pueden proponer partir del análisis del pasado, presente, futuro.

    .BGR16.px-4.pt-4.mb-5(data-aos="zoom-in")
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="Pasado")
          .col-lg-5.mb-lg-0.mb-4
            ul.lista-ul--color.mt-4
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                .h5.mb-0 ¿Cómo era la comunidad hace 10 - 15 - 20 años?
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                .h5.mb-0 ¿Qué problemas tenía?
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                .h5.mb-0 ¿Qué fortalezas tenía?
            p.mb-0 Para cada uno de los problemas y fortalezas se deberán trazar flechas que ilustren, en años, si estos problemas y fortalezas se han mantenido y hasta cuándo lo han hecho; y si han desaparecido, por qué.
          .col-lg-6.col-10
            img(src='@/assets/curso/tema3/img17.svg' alt="Imagen decorativa")
        .row.justify-content-center(titulo="Presente")
          .col-lg-4.mb-lg-0.mb-4
            ul.lista-ul--color
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                .h5.mb-0 ¿Cuál es la realidad actual?
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                .h5.mb-0 ¿Qué problemas tenemos?
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                .h5.mb-0 ¿Qué fortalezas tenemos?
            p.mb-0 Para ello se pueden utilizar las matrices FODA que hablan de Fortalezas, Oportunidades, Debilidades y Amenazas. También es importante que los problemas y fortalezas identificadas sean graficados en su inicio y evolución.
          .col-lg-6.col-10
            img(src='@/assets/curso/tema3/img17.svg' alt="Imagen decorativa")
        .row.justify-content-center(titulo="Futuro")
          .col-lg-4.mb-lg-0.mb-4
            ul.lista-ul--color
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                .h5.mb-0 ¿Cómo gustaría que sea la comunidad?
              li(style="margin-bottom: 5px")
                i.fas.fa-chevron-circle-right(style="color: #FFA031;")
                .h5.mb-0 ¿En qué se sueña? ¿Qué cosas se pueden cambiar? ¿Qué se necesita para ello?
            p.mb-0 Aquí se pueden utilizar los insumos de los mapas de sueños y de las libretas de registro comunitario. Con esta estructura base, se sugiere sacar líneas hacia abajo y hacia arriba, precisando en meses y semana las acciones que permitirán llegar a los sueños proyectados.
          .col-lg-6.col-10
            img(src='@/assets/curso/tema3/img17.svg' alt="Imagen decorativa")

    p.mb-5 Es importante que las acciones respondan a los compromisos establecidos. Estas acciones podrán sistematizarse luego en una matriz como la anterior precisando responsables para cada actividad. En caso de considerar la planificación semanal o mensual demasiado específica, se pueden realizar ejercicios de campo de fuerzas o de estrategias para el cambio centrados en la acción. Es decir, se podrían graficar grandes estrategias o acciones (p. 20).
    .h4.texto-primario(data-aos="fade-right") Guías etnográficas
    p Este es un proceso que se realiza a través de la observación directa y entrevistas; su objetivo es recoger información de las personas de forma directa, su base primordial es distinguir qué nivel de exposición se está trabajando. En este sentido, Soliz y Maldonado (2012) relaciona los siguientes: 
    p Las comunidades afectadas por problemáticas socioambientales sufren lo que se podría llamar un proceso de exposición múltiple que se articula en tres escenarios:

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema3/img18.svg' alt="Imagen decorativa" style='width:400px')
          .tarjetas-up_card.BGR08.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Laboral
            p.mb-0 Las dinámicas laborales constituyen, por sí mismas, procesos que amenazan la salud y la vida, al mismo tiempo que proveen el único sustento económico.
      .col-lg-4.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema3/img19.svg' alt="Imagen decorativa" style='width:400px')
          .tarjetas-up_card.BGR08.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Ambiental
            p.mb-0 La exposición nociva de vivir cerca o sobre un proceso ambiental destructivo, con todos los conflictos que ello genera de militarización, violencia, alcoholismo, y exposición permanente con fuentes de agua, suelos, aire, paisaje, flora y fauna contaminados.
      .col-lg-4.col-md-8.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema3/img20.svg' alt="Imagen decorativa" style='width:400px')
          .tarjetas-up_card.BGR08.p-xl-4.p-lg-3.p-4
            .title.d-flex.align-items-center.mb-xl-5.mb-lg-4.mb-md-5.mb-4
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Doméstico-familiar
            p.mb-0 En la que la exposición entra a la casa, a través de las ropas contaminadas, el embodegado de tóxicos, el consumo de productos producidos en ese ambiente, el alcoholismo, la violencia o represión, sin que haya barreras de separación (p. 23).

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Metodologías participativas para comprender y analizar problemas de estudio
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img21.png' alt="Imagen decorativa")
      .col(data-aos="fade-left")
        p.mb-0 En estas metodologías sí intervienen las emociones y sentimientos, su objetivo es desnaturalizar los problemas, es decir, identificar problemáticas que las personas ya consideran normales y cotidianas, luego se realizan procesos de análisis, de origen, de hábitos y conductas que se dan de forma automática. Estos son:

    .BGR17.p-4.mb-5
      SlyderA(tipo="b" data-aos="zoom-in")
        .row.justify-content-center
          .col-lg-5
            .h4 Árboles de sueños, miedos y compromisos
            p Es un método que busca que por medio de una libreta que se les entrega a los participantes, estos reflejan sus sueños, miedos y compromisos en la comunidad; se puede enfocar hacia una o varias problemáticas ambientales asociadas en el territorio.
            p Luego, con lo que cada persona escribió, se organiza un árbol de forma gráfica donde la raíz representa miedos, el tronco los compromisos y las ramas los sueños.
            a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
              span Ver Arbol
              .indicador--click(v-if="mostrarIndicador")
          .col-lg-5.col-10
            img(src='@/assets/curso/tema3/img22.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5
            .h4 Matriz FODA (Fortalezas, Oportunidad, Debilidades y Amenazas)
            p Determinar con las comunidades los parámetros que ellos identifican como debilidades y fortalezas, y cómo se encuentran referente a otros actores institucionales, analizando oportunidades y amenazas.
            a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
              span Ver FODA
              .indicador--click(v-if="mostrarIndicador")
          .col-lg-5.col-10
            img(src='@/assets/curso/tema3/img23.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5
            .h4 Diagrama espina de pescado
            p Es una metodología donde, tomando cada problemática que la misma comunidad identifica (la cabeza del pecado), se comienza a analizar las causas de su generación, que se verán reflejados como espinas del pescado.
            a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
              span Ver Diagrama
              .indicador--click(v-if="mostrarIndicador")
          .col-lg-5.col-10
            img(src='@/assets/curso/tema3/img24.png' alt="Imagen decorativa")
    
    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center
        .col-11
          .h4 Árbol de sueños, miedos y compromisos
          figure
            img(src='@/assets/curso/tema3/img25.jpg' alt="Imagen que representa el árbol de sueños, miedos y compromisos, con todas sus partes y procesos")
            figcaption Nota. <a style="font-weigh: 400">Adaptada de Soliz y Maldonado (2012).</a>

    ModalA(:abrir-modal.sync="modal2")
      .row.justify-content-center
        .col-11
          .h4 Matriz FODA (Fortalezas, Oportunidad, Debilidades y Amenazas)
          img(src='@/assets/curso/tema3/img26.jpg' alt="Esquema de la matriz FODA, el cual representa las Fortalezas, Oportunidades, Debilidades y Amenazas")

    ModalA(:abrir-modal.sync="modal3")
      .row.justify-content-center
        .col-11
          .h4 Diagrama espina de pescado
          figure
            img(src='@/assets/curso/tema3/img27.jpg' alt="Imagen que representa el Diagrama de espina de pescado, el cual a través de un ejemplo relacionado con la salud explica su funcionamiento")
            figcaption Nota. <a style="font-weigh: 400">Adaptada de Soliz y Maldonado (2012).</a>

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Metodologías participativas para comprender las dinámicas de los actores sociales
    
    p Analiza las dinámicas grupales que se dan y la evaluación de los actores sociales que están presentes, directa o indirectamente.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-primario.BGR08.hg-04.p-4
          figure.mb-4
            img(src='@/assets/curso/tema3/img28.png' alt="Imagen decorativa")
          .h4 Sociogramas
          p.mb-0 Con base en Soliz y Maldonado (2012), el sociograma es una técnica que permite comprender la estructura de grupos sociales, las afinidades y asperezas, las relaciones cercanas y las problemáticas. Es una herramienta de diagnóstico orientadora que puede ser útil para trabajar divisiones y dificultades en la estructura de grupos (p. 36).
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta--boton.color-primario.BGR08.hg-04.p-4
          figure.mb-4
            img(src='@/assets/curso/tema3/img29.png' alt="Imagen decorativa")
          .h4 Juego de roles - sociodrama
          p Es una estrategia metodológica utilizada para crear empatía.
          p.mb-0 Cuando deseamos que alguien comprenda lo más íntimamente posible una conducta o situación, se le pide que “se ponga en el lugar” de quien la vivió en la realidad.

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Metodologías para el análisis de acciones
    
    p Estas van direccionadas al análisis de las acciones de fuerza ejercidas contra las comunidades y las respuestas que esto genera en la comunidad.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/img30.svg')})`}" data-aos="fade-right"
        )
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p.mb-0 Con todas las metodologías mencionadas anteriormente, se consigue que las colectividades se sientan como sujetos de transformación y que las personas se consideran actores de su propia historia y no objetos de estudio. El objetivo es ese, hacer que las personas se sientan como personas con derechos y los reclamen (Soliz y Maldonado, 2012, p. 41)

    p Luego, estas se diferencian de todas las anteriores, en que se fundamentan en normatividad y buscan organizar a las personas para ejercer sus derechos por medio de instrumentos como, tutelas, cabildos, entre otros.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .BGR13.p-3
          .row.justify-content-around.align-items-center
            .col-4.col-sm-3.col-lg-2.px-xl-5.px-4
              img(src="@/assets/curso/temas/img01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Guía de metodologías comunitarias participativas 
                  p.mb-0 Para ampliar el tema de las metodologías, lo invitamos a consultar el siguiente documento: 
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/Guia_Metolodogias_comunitarias_participativas.pdf')" target="_blank")
                    span(style="color: #000; font-weight: 400") Descargar
                    i.fas.fa-file-download(style="color: #000")

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Diagnóstico Ambiental Participativo (DAP)
    
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p El uso de las metodologías antes descritas es importante porque son la base para la elaboración de lo que se conoce como DAP, que de acuerdo con Zamalloa y Diaz (2005), es:
        .cajon.color-primario.p-4
          p.mb-0 Una herramienta de gestión del Desarrollo Sostenible Local, a través de la cual se identifica y presenta información sobre la situación del medio ambiente y los recursos naturales de una zona, sobre las interacciones positivas y negativas de los diferentes actores y sectores locales con los principales medios (Atmósfera, Biodiversidad, Bosques, Medio Urbano, Agua, Suelo, Residuos). Esta información, junto con las características socioeconómicas y organizativas del Gobierno local, constituye la base del análisis colectivo para fijar prioridades y tomar decisiones en pro del desarrollo local sostenible (p. 13).
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img31.png' alt="Imagen decorativa")

    .row.justify-content-end.align-items-center.mb-5
      .col-lg-3.col-6.px-4.img-05(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img32.svg' alt="Imagen decorativa")
      .col-lg-8.BGR11.p-4(data-aos="fade-left")
        .row.justify-content-end
          .col-lg-9
            p Realizar este tipo de herramientas en un territorio permite:
            ul.lista-ul--color
              li(style="margin-bottom: 5px")
                i.fas.fa-leaf(style="color: #FFA031;")
                | Generar un conocimiento colectivo del estado ambiental del lugar.
              li(style="margin-bottom: 5px")
                i.fas.fa-leaf(style="color: #FFA031;")
                | Identificar los aspectos que generan problemas en la comunidad.
              li(style="margin-bottom: 5px")
                i.fas.fa-leaf(style="color: #FFA031;")
                | Conocer cómo se encuentran organizados los actores involucrados.
              li(style="margin-bottom: 5px")
                i.fas.fa-leaf(style="color: #FFA031;")
                | Es la base para iniciar acciones más concretas.
      .col-lg-1.d-lg-flex.d-none

    .h4.texto-primario(data-aos="fade-right") Fases del diagnóstico ambiental participativo
    p Este tipo de diagnóstico requiere la ejecución planificada y organizada de una serie de fases, con el fin de buscar información real y verídica del territorio objeto del estudio. Estas fases son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="BGR14")
      .row.justify-content-center(titulo="Fase 1 - Creación del equipo de trabajo")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 El equipo de trabajo puede ser interno, es decir de la misma comunidad; puede ser externo, cuando implica la contratación de personal totalmente ajeno a ese territorio, o mixto que es la integración de los dos anteriores.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img33.png' alt="Imagen decorativa")
      .row.justify-content-center(titulo="Fase 2 - Elaboración de un plan de trabajo")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Establecer claramente las etapas de trabajo, actividades, responsabilidades, tiempo, medios necesarios y presupuestos.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img34.png' alt="Imagen decorativa")
      .row.justify-content-center(titulo="Fase 3 - Realización de la metodología")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Un DAP siempre estará articulado por dos etapas: la primera, la metodología, que contiene la identificación de la información y la documentación respectiva (incluye actores, fuentes de información primaria y secundaria), y la segunda, el ordenamiento, sistematización y análisis de la información obtenida (Problemas, causas - efecto, propuestas).
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img35.png' alt="Imagen decorativa")
      .row.justify-content-center(titulo="Fase 4 - Información y documentación")
        .col-lg-7.order-lg-1.order-2
          p.mb-0 Revisión que la información y documentación cuente con las siguientes características: accesibilidad, disponibilidad, capacidad de actualización y fiabilidad de las fuentes.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema3/img36.png' alt="Imagen decorativa")
    
    separador
    #t_3_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.3 Planes de acción ambiental
    
    p Zamalloa y Díaz (2005), en el tomo 5 de sus guías metodológicas para la gestión ambiental, mencionan que el Plan de Acción Ambiental (PAA) es el siguiente paso que se debe realizar después del Diagnóstico Ambiental Participativo (DAP), ya que la calidad y consistencia del plan depende de los resultados del diagnóstico.

    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img37.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        .cajon.color-primario.p-4
          p.mb-0 El Plan de Acción Ambiental (PAA) es, en sí, una herramienta de gestión del Desarrollo Sostenible Local a través de la cual se presenta en forma ordenada la información y conocimiento sobre la situación del medio ambiente y los recursos naturales de una zona y su repercusión en la calidad de vida y posibilidades de desarrollo de sus habitantes.
    
    p Al ser un acuerdo entre los diferentes actores locales, permite indicar la urgencia y prioridad de los problemas ambientales, así como las medidas que deben ser tomadas a corto, mediano y largo plazo.

    .BG11.mb-4
      .row.justify-content-center.mb-5
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img38.svg' alt="Imagen decorativa")
        .col-lg-1.d-lg-flex.d-none
        .col-lg-8.p-4(data-aos="fade-left")
          p El objetivo principal del Plan de Acción Ambiental es mejorar las condiciones de desarrollo y la calidad de vida de los seres humanos, en armonía con su entorno. Cuando se elabora un Plan de Acción Ambiental (PAA) también se tienen en cuenta, entre otros objetivos, que:
          ul.lista-ul--color
            li(style="margin-bottom: 5px")
              i.fas.fa-leaf(style="color: #FFA031;")
              | Integre el medio ambiente con otras políticas sectoriales.
            li(style="margin-bottom: 5px")
              i.fas.fa-leaf(style="color: #FFA031;")
              | Reduzca las emisiones contaminantes hacia el entorno natural.
            li(style="margin-bottom: 5px")
              i.fas.fa-leaf(style="color: #FFA031;")
              | Disminuya la dependencia sobre recursos no renovables.
            li(style="margin-bottom: 5px")
              i.fas.fa-leaf(style="color: #FFA031;")
              | Fomente cambios de hábitos y actitudes por parte de la población.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img39.png' alt="Imagen decorativa")
      .col(data-aos="fade-left")
        p.mb-0 El Plan de Acción Ambiental (PAA) es, en sí, una herramienta de gestión del Desarrollo Sostenible Local a través de la cual se presenta en forma ordenada la información y conocimiento sobre la situación del medio ambiente y los recursos naturales de una zona y su repercusión en la calidad de vida y posibilidades de desarrollo de sus habitantes.

    p Los resultados del Plan de Acción Ambiental (PAA) deben llevar a:

    .row.justify-content-center.mb-5
      .col-lg-3.col-md-6.col-9.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-secundario.BGR12.hg-05.p-4
          figure.mb-4
            img(src='@/assets/curso/tema3/img40.png' alt="Imagen decorativa")
          p.mb-0 Fortalecimiento del proceso de participación ciudadana a través de los acuerdos concertados entre los actores locales comprometidos.
      .col-lg-3.col-md-6.col-9.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-secundario.BGR12.hg-05.p-4
          figure.mb-4
            img(src='@/assets/curso/tema3/img41.png' alt="Imagen decorativa")
          p.mb-0 Una visión de futuro sobre la situación ambiental de la zona.
      .col-lg-3.col-md-6.col-9.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-secundario.BGR12.hg-05.p-4
          figure.mb-4
            img(src='@/assets/curso/tema3/img42.png' alt="Imagen decorativa")
          p.mb-0 Una agenda para la acción, conteniendo los problemas a enfrentar, los objetivos y metas a lograr. 
      .col-lg-3.col-md-6.col-9.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta--boton.color-secundario.BGR12.hg-05.p-4
          figure.mb-4
            img(src='@/assets/curso/tema3/img43.png' alt="Imagen decorativa")
          p.mb-0 Una línea de base con indicadores de la situación ambiental, que permita evaluar los logros de las metas propuestas.

    p El Plan de Acción Ambiental (PAA) debe incluir todo el territorio, y en los casos que sea necesario se pueden incluir propuestas que vinculen a otros municipios, una vez se realiza el Plan de Acción Ambiental (PAA), es posible:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="zoom-in")
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img44.png' alt="Imagen decorativa")
        .tarjeta.color-primario.p-4
          p.mb-0.text-center Definir una correcta política ambiental enfocada en la sostenibilidad de los recursos.
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img45.png' alt="Imagen decorativa")
        .tarjeta.color-primario.p-4
          p.mb-0.text-center Definir las acciones necesarias para subsanar todas las incidencias ambientales.
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img46.png' alt="Imagen decorativa")
        .tarjeta.color-primario.p-4
          p.mb-0.text-center Enfrentar los efectos negativos identificados.
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img47.png' alt="Imagen decorativa")
        .tarjeta.color-primario.p-4
          p.mb-0.text-center Contribuir al fortalecimiento de la institucionalidad.
      .tarjeta-avatar
        img(src='@/assets/curso/tema3/img48.png' alt="Imagen decorativa")
        .tarjeta.color-primario.p-4
          p.mb-0.text-center Poner en marcha los espacios y mecanismos de participación ciudadana.
          
    p El Plan de Acción Ambiental (PAA) debe incluir todo el territorio, y en los casos que sea necesario se pueden incluir propuestas que vinculen a otros municipios.

    separador
    #t_3_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 3.4 Agendas interministeriales
    
    p Una agenda ambiental es una estrategia de participación, enfocada en la generación de espacios de diálogo, concertación y coordinación interculturales, y referida a la planificación ambiental integral del territorio.
    p Cuando se habla de agenda interministerial, es una agenda ambiental dirigida por mínimo dos de los ministerios del gobierno nacional; este es un mecanismo de participación que se encuentra regulado normativamente en los Planes Nacionales de Desarrollo del 2006-2010 y 2010-2014, y sustentado en los Lineamientos de Política para la Participación Ciudadana en la Gestión Ambiental.
    
    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .BG18.p-4
          p.mb-0 De acuerdo con el Ministerio de Ambiente y Desarrollo Sostenible (MADS), el objetivo principal de las agendas interministeriales es generar espacios de diálogo intercultural e incorporar la mirada, el enfoque, la posición de las autoridades tradicionales, étnico territoriales y líderes comunitarios en la gestión ambiental sobre la protección del territorio, identidad cultural, ordenamiento, uso y aprovechamiento sostenible, en los instrumentos de planificación institucional del Sistema Nacional Ambiental (SINA) y en la gestión intersectorial, a la vez que contar con insumos directos para la elaboración de medidas administrativas o legislativas.
        p.mb-0 Tales agendas permiten tener una línea base de propuestas temáticas propias para trabajar conjuntamente con la autoridad ambiental, las cuales deben articularse a los instrumentos institucionales del SINA, de otros sectores y entes territoriales para su implementación y acción articulada.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img49.png' alt="Imagen decorativa")

    .row.justify-content-end.align-items-center.mb-5
      .col-lg-4.col-8.px-4.img-06(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img50.svg' alt="Imagen decorativa")
      .col-10.BG08.p-4(data-aos="fade-left")
        .row.justify-content-end
          .col-lg-10
            p Las agendas interministeriales tienen una serie de beneficios, entre los cuales se encuentran:
            ul.lista-ul--color
              li(style="margin-bottom: 5px")
                i.fas.fa-universal-access(style="color: #3076B6;")
                | Conocer y comprender el enfoque sobre el territorio y la naturaleza.
              li(style="margin-bottom: 5px")
                i.fas.fa-universal-access(style="color: #3076B6;")
                | Lograr un diálogo fructífero, al incluir la mirada de las comunidades y de sus respectivas autoridades tradicionales y/o étnico-territoriales.
              li(style="margin-bottom: 5px")
                i.fas.fa-universal-access(style="color: #3076B6;")
                | Contar con un instrumento base de planificación de los territorios.
              li(style="margin-bottom: 5px")
                i.fas.fa-universal-access(style="color: #3076B6;")
                | Permitir la promoción de escenarios de encuentro y concertación de actores sociales e institucionales.
              li(style="margin-bottom: 5px")
                i.fas.fa-universal-access(style="color: #3076B6;")
                | Construir un enfoque del ambiente, los ecosistemas y el territorio, de abajo hacia arriba.

    p Se pueden generar agendas ambientales interministeriales entre el Ministerio de Ambiente y Desarrollo Sostenible (MADS) y cualquier otro de los ministerios; por ejemplo, en conjunto con el Ministerio de transporte, se pueden concertar y formular las evaluaciones ambientales estratégicas del sector transporte o identificar y priorizar medidas de adaptación al cambio climático de la infraestructura vial, a partir del análisis de vulnerabilidad, en el marco del Plan Nacional de Adaptación.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
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
