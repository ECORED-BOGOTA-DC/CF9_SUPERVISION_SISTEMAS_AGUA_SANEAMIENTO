<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Técnicas y metodologías
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img01.png')
      .col(data-aos="fade-left")
        p.mb-0 En los procesos que involucran activamente a las comunidades, como los de educación ambiental, implica no solo conocer a la población con la cual se va a interactuar, también se requiere escoger una técnica o metodología que sea apropiada para ese territorio y para las necesidades que presenten.

    separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Educación ambiental
    
    p.mb-5 La educación ambiental es un proceso que vincula a un educador con un educando, se podría inferir de modo más sencillo, que la educación ambiental es:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/img02.jpg')})`}" data-aos="fade-right"
        )
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p.mb-0 La capacidad que tenemos los seres vivos para identificar y recibir información procedente del ambiente y de nosotros mismos (nuestro entorno interior), para transformarnos como resultado del procesamiento o <a style="color: #FFA031; font-weight: 900;">“digestión”</a> de esa información, y como consecuencia, para incidir luego sobre el territorio del cual formamos parte (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2013, p. 39).

    p.mb-5 La educación ambiental tiene una función única y principal: sensible a la población con respecto a la conciencia ambiental necesaria, a continuación, se definen los principios, los objetivos, los lineamientos, los ejes y los niveles para la educación:

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Principios
    
    p.mb-5 A continuación, se describen los principios a tener en cuenta para la educación ambiental:

    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Integrador" :icono="require('@/assets/curso/tema1/img03.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p.mb-0 No solo involucra a todos los participantes del territorio, sino que se integra desde los mismos hábitos culturales que han sido creados de generación en generación, reconociendo la historia de las comunidades y su relación con sus territorios.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img06.png')
      .py-4.py-md-5(titulo="Transversalidad" :icono="require('@/assets/curso/tema1/img04.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p.mb-0 Cuando se realiza educación ambiental debe partir de este proceso, pues se deben contemplar todas las ciencias que intervienen dentro de la conducta y hábitos de un ser humano, la parte biológica, económica, social, cultural, educativa, el género y las condiciones especiales.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img07.png')
      .py-4.py-md-5(titulo="Fractalidad" :icono="require('@/assets/curso/tema1/img05.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p.mb-0 Es la capacidad de entender de qué manera #[strong “el todo”] se refleja cualitativamente en cada una de las partes que lo conforman (Ministerio de Ambiente, Vivienda y Desarrollo Territorial, 2013, p. 67). En otras palabras, este principio comprende que las problemáticas que se presentan en un barrio, en una ciudad o en una huerta escolar, pueden ser el reflejo de una problemática mucho más general, por lo cual, cada particularidad también pertenece a un aspecto global, y los pequeños cambios podrían generar cambios a nivel macro.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img08.png')

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Objetivos
    
    p Teniendo en cuenta el documento La educación ambiental, una estrategia pedagógica que contribuye a la solución de la problemática ambiental en Colombia, dentro de los objetivos más relevantes de la educación ambiental se encuentran:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img09.svg')
      .col-lg-8(data-aos="fade-left")
        ol.lista-ol--cuadro.mb-0
          li 
            .lista-ol--cuadro__vineta
              span a
            | Que los individuos y las comunidades deben comprender la complejidad del ambiente natural y el creado por el ser humano.
          li 
            .lista-ol--cuadro__vineta
              span b
            | La interacción de los factores biológicos, físico-químicos, sociales, económicos, políticos y culturales.
          li 
            .lista-ol--cuadro__vineta
              span c
            | La creación de conocimientos, valores, actitudes, destrezas y habilidades que les permita a las personas participar de manera responsable, ética, y afectiva en la previsión de las problemáticas.
          li 
            .lista-ol--cuadro__vineta
              span d
            | Desarrollar el sentido de responsabilidad y solidaridad entre diferentes regiones, como base de un nuevo orden nacional para garantizar la conservación, preservación y el mejoramiento del ambiente (Rengifo, Quitiaquez y Mora, 2012).

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Lineamientos

    p.mb-5 Rengifo, et al., (2012), establecen que se pueden inferir tres lineamientos básicos en la educación ambiental:

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8.mb-lg-0.mb-4(data-aos="fade-right") 
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .BGR03A.px-4.py-3
              .h2.text-center.text-white.mb-0 1
          .tarjeta.BGR02A.p-4
            .row.justify-content-center.align-items-center
              .col-xl-2.col-lg-3.col-2.ps-3.pe-1.py-1
                img(src='@/assets/curso/tema1/img10.png')
              .col
                p.mb-0 El aprender sobre el ambiente.
      .col-lg-4.col-md-8.mb-lg-0.mb-4(data-aos="flip-up")  
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .BGR04B.px-4.py-3
              .h2.text-center.text-white.mb-0 2
          .tarjeta.BGR02B.p-4
            .row.justify-content-center.align-items-center
              .col-xl-2.col-lg-3.col-2.ps-3.pe-1.py-1
                img(src='@/assets/curso/tema1/img11.png')
              .col
                p.mb-0 Aprender en el ambiente.
      .col-lg-4.col-md-8.mb-lg-0.mb-4(data-aos="fade-left")   
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .BGR05C.px-4.py-3
              .h2.text-center.text-white.mb-0 3
          .tarjeta.BGR02C.p-4
            .row.justify-content-center.align-items-center
              .col-xl-2.col-lg-3.col-2.ps-3.pe-1.py-1
                img(src='@/assets/curso/tema1/img12.png')
              .col
                p.mb-0 Aprender para el ambiente.
            
    p.mb-5 La educación ambiental, es una corriente internacional de pensamiento y acción, su meta es procurar cambios individuales y sociales que provoquen la mejora ambiental y un desarrollo sostenible, proporcionando la información y los conocimientos necesarios en la población colombiana para que esta adquiera conciencia de los problemas del ambiente, creando en ella predisposición, motivación, sentido de responsabilidad, pertenencia y compromiso para trabajar individual y colectivamente en la búsqueda de soluciones (Rengifo, et al., 2012, p. 9).

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Ejes
    
    p Siguiendo a Rengifo, et al. (2012,), los ejes de la educación ambiental son:

    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-primario.BGR06.hg-01.p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img13.png')
          .h4 Equidad
          p.mb-0 Se divide en intra e intercultural, en la que se hace relación a la libertad cultural, la diversidad cultural, religiosa y étnica, la cooperación, la identidad cultural, el sentido de pertenencia, el valor personal en un contexto social y la educación intercultural.
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta--boton.color-secundario.BGR07.hg-01.p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img14.png')
          .h4 La participación en educación
          p.mb-0 Se entiende como un acto democrático y un proceso de autoaprendizaje individual y colectivo que transcurre en el propio proceso de toma de decisiones y que implica un compromiso activo.
    
    <br><br>   
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-3.col-6.px-0.pb-4.img-01(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img15.svg')
      .col-12.BG08.p-4(data-aos="fade-left")
        .row.justify-content-end
          .col-lg-8
            p La integración de la educación ambiental en un ámbito pedagógico involucra las siguientes características, de acuerdo con Pomachagua (2010):
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | Una filosofía sustentada en la estabilidad del ecosistema global. 
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | La buena calidad de la vida y del medio ambiente, donde se desarrolla está como una preocupación central. 
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | La protección, la conservación y el mejoramiento del medio ambiente como una meta. 
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | Los problemas y riesgos ambientales como el campo de atención. 
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | La relación y la interdependencia del sistema ecológico como un enfoque sistémico. 
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #4DB1F0;")
                | El ejercicio de la participación ciudadana y la toma de decisiones como el instrumento metodológico básico. 

    p.mb-5 A pesar de lo complejo que puede llegar a ser articular la pedagogía y el medio ambiente, con estas características se puede lograr formar individuos y sociedades críticas, creativas e integrales.

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Niveles
      
    p Aunque dependiendo del autor se pueden encontrar diferentes jerarquías o niveles relacionados con la educación ambiental, los más usuales son los cuatro (4) niveles, que define Pomachagua (2010).
    p.mb-5 A continuación se describen dichas jerarquías en la educación ambiental.
    
    .BGR09.p-4.mb-5(data-aos="zoom-in")
      LineaTiempoC.color-primario(text-small)
        .row.justify-content-center(titulo="Primer Nivel")
          .col-lg-6.order-lg-1.order-2
            .h4 Fundamentos ecológicos
            p.mb-0 El propósito de este nivel de instrucción es dar al docente/estudiante informaciones sobre los sistemas terrestres de soporte vital, incluye la instrucción sobre ecología básica, ciencia de los sistemas de la Tierra, geología, meteorología, geografía física, botánica, biología, química, física, etc.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img16.png')
        .row.justify-content-center(titulo="Segundo Nivel")
          .col-lg-6.order-lg-1.order-2
            .h4 Concienciación conceptual
            p.mb-0 De cómo las acciones individuales y de grupo pueden influenciar la relación entre calidad de vida humana y la condición del ambiente.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img17.png')
        .row.justify-content-center(titulo="Tercer Nivel")
          .col-lg-6.order-lg-1.order-2
            .h4 La investigación y evaluación de problemas
            p.mb-0 Esto implica aprender a investigar y evaluar problemas ambientales. Debido a que hay demasiados casos de personas que han interpretado de forma incorrecta o sin exactitud asuntos ambientales, muchas personas se encuentran confundidas acerca de cuál es el comportamiento más responsable ambientalmente.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img18.png')
        .row.justify-content-center(titulo="Cuarto Nivel")
          .col-lg-6.order-lg-1.order-2
            .h4 La capacidad de acción
            p.mb-0 Este componente enfatiza en las habilidades necesarias para participar productivamente en la solución de problemas ambientales presentes y la prevención de problemas ambientales futuros.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img19.png')

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 La Investigación Acción Participativa (IAP)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img20.png')
      .col-lg-8(data-aos="fade-left")
        p Esta metodología afirma que los conocimientos no se transmiten, sino que se construyen. Por lo tanto, las personas deben investigar sus propias representaciones, las de su medio social, familiar y las de su entorno natural. 
        p Este método tiene su fundamentación teórica en los métodos educativos de Paulo Freire. Se propone romper la separación sujeto-objeto, investigador-investigado, salvar la distancia entre teoría e investigación y evitar la fractura entre teoría y práctica: no hay que conformarse y explicar los problemas sociales, sino que también hay que transformarlos a través de la acción investigativa.
        .cajon.color-primario.p-4
          .h5.mx-5.mb-0 #[em “La IAP pone al sujeto como productor de conocimientos en la reflexión de sí mismo y de su realidad, para generar cambios conscientes en el individuo y en su contexto social” (p. 11).]

    separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Promotoría ambiental

    p De acuerdo con Maldonado (2013), en su artículo Promotoría ambiental describe este término como:

    .row.justify-content-center.align-items-end.mb-5
      .col-12.BGRS10.p-4(data-aos="fade-right")
        .row.justify-content-start
          .col-lg-8
            p.ms-4.mb-0 Un instrumento estratégico para el desarrollo de una comunidad, que está orientado a provocar un cambio de actitud y a vencer las resistencias de la población hacia ese cambio. La base principal de las actividades de promoción es la participación organizada de la población, a partir de su cultura y sus condiciones socioeconómicas. La población es el sujeto y el protagonista de su propio crecimiento. La base de la promotoría es el trabajo organizado en torno a un objetivo común, apoyado en un proceso educativo que tiende al cambio de actitudes del individuo, la familia y el grupo social. Está siempre vinculada a un programa que persigue metas y objetivos establecidos, de acuerdo a las necesidades del contexto físico, ecológico, social, político, económico, histórico y cultural de la comunidad y la idiosincrasia de los individuos (p. 4).
      .col-lg-3.col-6.pb-2.img-02(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img21.svg')
    
    p.mb-5 En este tema surgen una serie de preguntas, las cuales responderemos a continuación:
    
    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 ¿Qué es un promotor ambiental?
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img22.png')
      .col(data-aos="fade-left")
        p.mb-0 De acuerdo con el Ministerio de Ambiente y Desarrollo Sostenible (s. f.), el promotor ambiental es un líder con gran sensibilidad y responsabilidad social frente al desarrollo sostenible de su localidad y su región. A continuación, podrán conocer los principales aspectos en la gestión socio ambiental de un promotor.
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 ¿Cuáles son sus características?
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img23.svg')
      .col-lg-7(data-aos="fade-left")
        ol.lista-ol--cuadro.mb-0
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Se fundamenta en la vida de las comunidades.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Los proyectos que se generen son propuestos y planificados por la población.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Las metodologías propuestas son acordes a las necesidades de la población.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Las actividades se realizan en la comunidad y con la población involucrada.

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 ¿Cuáles son las funciones de un promotor ambiental?
    
    p Para la Corporación Autónoma del Tolima - Cortolima (2009), algunas de las funciones de un promotor ambiental son:

    figure(data-aos="zoom-in")
      img(src='@/assets/curso/tema1/img24.svg')
    .row.justify-content-center.mb-5
      .col-lg-4.col-8(data-aos="flip-up")
        TarjetaAudio.color-acento-contenido.img-03(
          :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
          .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        
    p Aunque existe una gran variedad de temáticas para tratar dentro de las comunidades y para llevar a cabo diagnósticos y planes de acción, según  Maldonado (2013), algunos de los temas más abordados son:

    .row.justify-content-center.mb-4
      .col-lg-5.order-lg-1.order-2(data-aos="fade-right")
        ul.lista-ul--color
          li
            i.fas.fa-check-circle(style="color: #4DB1F0;")
            | Estilos de vida y modelos de desarrollo.
          li
            i.fas.fa-check-circle(style="color: #4DB1F0;")
            | Impacto ambiental originado por prácticas sociales. 
          li
            i.fas.fa-check-circle(style="color: #4DB1F0;")
            | Procesos productivos y uso de los recursos.
          li
            i.fas.fa-check-circle(style="color: #4DB1F0;")
            | Manejo de residuos.
          li
            i.fas.fa-check-circle(style="color: #4DB1F0;")
            | Hábitos de consumo.
          li
            i.fas.fa-check-circle(style="color: #4DB1F0;")
            | Hábitos de convivencia respecto al ambiente.
          li
            i.fas.fa-check-circle(style="color: #4DB1F0;")
            | Niveles de responsabilidad y posibilidad de acción.
          li
            i.fas.fa-check-circle(style="color: #4DB1F0;")
            | Manejo del recurso hídrico.
      .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img25.png')

    separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.3 Formas organizativas

    p.mb-5 Para mencionar las formas organizativas, se debe diferenciar la existencia de estas en dos ámbitos: comunidad y empresas.

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Organizaciones comunitarias
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img26.png')
      .col-lg-8(data-aos="fade-left")
        p Antes de hablar de organizaciones comunitarias, se debe definir el concepto de comunidad; este, como espacio en el que un grupo humano desarrolla su vida y las interacciones que en esta intervienen, por tanto, el concepto de comunidad puede referirse a un sistema de relaciones psicosociales, a un agrupamiento humano, al espacio geográfico o al uso de la lengua según determinados patrones o hábitos culturales (Causse, 2009,). 
        p De acuerdo con la Organización de las Naciones Unidas para la Agricultura y la Alimentación - FAO (2008), en su documento Organización comunitaria, específica que la organización comunitaria se da: 
        .cajon.color-primario.p-4
          p.mb-0 Cuando un grupo de personas se unen para ver los problemas que les afectan en su comunidad y le buscan soluciones. Los problemas pueden ser de carácter social, cultural, económico, político y productivo. La organización es la estructura que se da a un grupo de personas para funcionar de acuerdo a un método y a un objetivo común. Cuando varias personas deciden organizarse, lo hacen porque tienen intereses o problemas comunes que les exigen su unión para poder enfrentarlos (p. 10).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/img27.jpg')})`}" data-aos="fade-right"
        )
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p.mb-0 La organización comunitaria es importante porque es ahí donde se da a conocer nuestros valores humanos y talentos individuales para resolver de forma efectiva los problemas sociales, económicos y políticos de la comunidad (FAO, 2008, p. 11).

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Formas organizativas empresariales
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="color: #FFA031")
            .h4.mb-0 Existen múltiples explicaciones de las formas organizativas en las empresas, sin embargo, a manera general se puede contemplar que en una empresa existen como mínimo las siguientes partes fundamentales
            i.fas.fa-quote-right(style="color: #FFA031")
          .bloque-texto-d__autor
            p.mb-0 González y Codagnone, 2010, p. 2
      .col-lg-6(data-aos="fade-left")
        .row.justify-content-center.align-items-end
          .col-lg-3.col-6.img-04.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img28.svg')
          .col-12.BGRS11.p-4
            .row.justify-content-end
              .col-lg-6.col-10
                ol.lista-ol--cuadro.mb-0
                  li 
                    .lista-ol--cuadro__vineta
                      span 1
                    | El núcleo de operaciones.
                  li 
                    .lista-ol--cuadro__vineta
                      span 2
                    | El ápice estratégico.
                  li 
                    .lista-ol--cuadro__vineta
                      span 3
                    | La línea media.
                  li 
                    .lista-ol--cuadro__vineta
                      span 4
                    | La tecnoestructura.
                  li 
                    .lista-ol--cuadro__vineta
                      span 5
                    p.mb-0 El #[em staff] de apoyo.

    p.mb-5 Aunque pueden ser nombrados de otras formas, estos cinco procesos son los que normalmente conforman una estructura empresarial.

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 Responsabilidad social
    
    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        .BG12.p-4.mb-4
          p.mx-4.mb-0 La responsabilidad social es un atributo que puede ser dado a nivel comunitario o empresarial. Significa que las empresas, además de maximizar el valor para el accionista, deben actuar de forma que beneficien a la sociedad, no solo a la cuenta de resultados. La responsabilidad social es cada vez más importante para los inversores y los consumidores, que buscan inversiones que no solo sean rentables, sino que también contribuyan al bienestar de la sociedad y del medio ambiente. Aunque tradicionalmente los críticos han argumentado que la naturaleza básica de las empresas no considera a la sociedad como parte interesada, las generaciones más jóvenes están adoptando la responsabilidad social e impulsando el cambio donde se podrán ver diferentes definiciones y una contextualización más amplia desde la perspectiva empresarial.
        p.mb-0 De acuerdo con Barón (2014), la Responsabilidad Social Empresarial (RSE) surge en los años 20, pero toma fuerza en las décadas de 1950 y 1960. Se inicia por la idea fundamental que si las empresas usan recursos naturales y sociales, el solo hecho de su uso genera un deber ético, por lo tanto, de alguna manera este uso se devolverá a la sociedad. Las empresas deben ser responsables, por consiguiente, deben ir más allá de la generación de trabajo y riqueza para los empresarios; deben velar por el bienestar de la comunidad donde se encuentran realizando sus actividades.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img29.svg')

    p Otra definición se puede encontrar en la superintendencia de industria y comercio (2018), en su documento ABD de la Responsabilidad Social (RS), el cual indica que la RS busca el actuar desde una perspectiva consciente de la actividad económica y de los efectos positivos y negativos que se causa tanto interna como externamente en el entorno. El desarrollo de la RS incluye la planeación de estrategias que apuntan al crecimiento de una empresa/pyme/organización, pero también al desarrollo de iniciativas con el ánimo de contribuir al desarrollo sostenible.
    p Para facilitar el desarrollo de las estrategias de responsabilidad social, se deben contemplar las categorías en las cuales estas se desarrollan (Superintendencia de Industria y Comercio, 2018).

    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-secundario.BGR07.hg-02.p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img30.png')
          .h4 Desarrollo económico
          p.mb-0 Desde la perspectiva de Responsabilidad Social, se identifica en cómo está distribuido el capital en sus grupos de interés. Por ejemplo, nómina, pagos tributarios, gastos en infraestructura y comunidad, e inversiones en tecnologías o mejoras que beneficien el medio ambiente (Superintendencia de Industria y Comercio).
      .col-lg-4.mb-lg-0.mb-4(data-aos="flip-up")
        .tarjeta--boton.color-primario.BGR06.hg-02.p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img31.png')
          .h4 Desarrollo social
          p.mb-0 Es el desarrollo del capital humano y social. Implica evolución o cambio positivo por medio de actividades que tienen como fin contribuir al mejoramiento de la vida (Superintendencia de Industria y Comercio).
      .col-lg-4.mb-lg-0.mb-4(data-aos="fade-left")
        .tarjeta--boton.color-secundario.BGR07.hg-02.p-4
          figure.mb-4
            img(src='@/assets/curso/tema1/img32.png')
          .h4 Desarrollo ambiental
          p.mb-0 Es la forma en que su organización o actividad intenta prevenir, mitigar y compensar el impacto directo o indirecto que su actividad genera en el medio ambiente.
      
    separador
    #t_1_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.4 Técnicas y habilidades comunitarias

    p El trabajo con comunidad implica el uso de habilidades para lograr, no solo trabajar con las personas, sino también relacionarse con ese territorio y así lograr que el diagnóstico de las situaciones ambientales sea el reflejo más verídico de las condiciones actuales de esa organización u empresa.
    p.mb-5 En este proceso se establecen las siguientes etapas:

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 A. Identificación de contexto y análisis del entorno

    p Este es el punto de partida, para el trabajo con comunidad se debe analizar e identificar tres factores elementales en territorio en el cual se va a trabajar:

    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8.mb-lg-0.mb-4(data-aos="fade-right") 
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .BGR03A.px-4.py-3
              .h2.text-center.text-white.mb-0 1
          .tarjeta.BGR02A.p-4
            .row.justify-content-center.align-items-center
              .col-xl-2.col-lg-3.col-2.ps-3.pe-1.py-1
                img(src='@/assets/curso/tema1/img33.png')
              .col
                p.mb-0 Procesos históricos.
      .col-lg-4.col-md-8.mb-lg-0.mb-4(data-aos="flip-up")  
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .BGR04B.px-4.py-3
              .h2.text-center.text-white.mb-0 2
          .tarjeta.BGR02B.p-4
            .row.justify-content-center.align-items-center
              .col-xl-2.col-lg-3.col-2.ps-3.pe-1.py-1
                img(src='@/assets/curso/tema1/img34.png')
              .col
                p.mb-0 Actores.
      .col-lg-4.col-md-8.mb-lg-0.mb-4(data-aos="fade-left")   
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            .BGR05C.px-4.py-3
              .h2.text-center.text-white.mb-0 3
          .tarjeta.BGR02C.p-4
            .row.justify-content-center.align-items-center
              .col-xl-2.col-lg-3.col-2.ps-3.pe-1.py-1
                img(src='@/assets/curso/tema1/img35.png')
              .col
                p.mb-0 La realidad del escenario local.
    
    .row.justify-content-center.mb-4
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right") 
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Este análisis, con base en Parra y Vargas (2017), se realiza para asegurar que no se repliquen experiencias que ya se hayan probado en el pasado y que las acciones a adelantar no desconozcan las realidades de los actores involucrados ni las características y particularidades del entorno. Se precisa, entonces, #[strong #[em “reconocer que los espacios locales están inmersos dentro de realidades más amplias que tienen incidencia en su interior”]] (p. 166).
        p.mb-0 Para definir la palabra territorio, que es muy usada en promotoría y educación ambiental, se puede inferir que existen tres tipologías de territorio (Boisier, citado en Parra y Vargas, 2017, p. 166), como se observa a continuación: 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left") 
        img(src='@/assets/curso/tema1/img36.png')

    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Territorio natural" :icono="require('@/assets/curso/tema1/img37.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p Implica un recorte que reconoce la existencia de actividades de mayor complejidad, por ejemplo, sistemas de asentamientos humanos y sus infraestructuras, pero que fundamentalmente refiere a la existencia de una comunidad que se reconoce y que tiene como autorreferencia primaria el propio territorio y que está regulada mediante un dispositivo político-administrativo que define las competencias de ese territorio, su ubicación y el papel que tiene en el ordenamiento jurídico nacional, es decir, un territorio organizado tiene una estructura de administración y, en algunos casos, también de Gobierno. Estos territorios pasan a ser sujetos de intervenciones promotoras del desarrollo.
            p.mb-0 Se refiere a uno en el cual el hombre ya ha instalado sistemas, por ejemplo, de transporte, infraestructuras y actividades productivas extractivas.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img39.png')
      .py-4.py-md-5(titulo="Territorio organizado" :icono="require('@/assets/curso/tema1/img38.png')")
        .row.justify-content-center
          .col-lg-6.order-lg-1.order-2
            p.mb-0 Implica un recorte que reconoce la existencia de actividades de mayor complejidad, por ejemplo, sistemas de asentamientos humanos y sus infraestructuras, pero que fundamentalmente refiere a la existencia de una comunidad que se reconoce y que tiene como autorreferencia primaria el propio territorio y que está regulada mediante un dispositivo político-administrativo que define las competencias de ese territorio, su ubicación y el papel que tiene en el ordenamiento jurídico nacional, es decir, un territorio organizado tiene una estructura de administración y, en algunos casos, también de Gobierno. Estos territorios pasan a ser sujetos de intervenciones promotoras del desarrollo.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img40.png')

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 B. Formulación de un plan de acción participativo
    
    p Teniendo en cuenta los objetivos y necesidades comunes que pueden presentarse en esa comunidad o población, se inicia el proceso de planeación de la acción participativa, en donde se incentive toda la cooperación, participación e integración de los diferentes actores que han sido identificados. Además, incluye revisar cómo será la interrelación con otros actores involucrados, como empresas, actores locales, entidades, comunidades y grupos diferenciales. 
    p De acuerdo con Parra y Vargas (2017), en este punto, el trabajo con comunidades supone el establecimiento de canales de comunicación para favorecer la socialización, el intercambio social, la interacción, el fomento de confianza, solidaridad y colaboración entre los actores intervinientes para el favorecimiento de acercamientos que fomenten inclusión y cohesión social (p. 167). 
    p.mb-5 Dentro de las acciones que van encaminadas al cumplimiento de esta habilidad comunitaria, se encuentran:
    
    .BG08.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img41.svg')
        .col-lg-8(data-aos="fade-left")
          p #[strong Diseño de planes de comunicación:] su objetivo es mantener canales de comunicación con los actores involucrados.
          p #[strong Capacitación en mecanismos de participación, derechos y ciudadanía:] el empoderamiento de las personas que lideren esa agrupación o población es elemental para que sean ejes de articulación entre las partes interesadas y favorezca el diagnóstico.
          p #[strong Apoyo y promoción de actores:] siempre impulsar las acciones de participación.

    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 C. Creación de redes de cooperación

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-1.col-2(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img42.png')
      .col(data-aos="fade-left")
        p.mb-0 La búsqueda de soluciones debe partir de la identificación de redes de cooperación existentes en esa comunidad, con el fin de llegar a la generación de capacidades de transformación de las condiciones socioeconómicas para reaccionar ante los desafíos externos y para promover aprendizaje social y la introducción de formas específicas de regulación social a nivel social y comunitario.

    .row.justify-content-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p.mb-0 De acuerdo con Parra y Vargas (2017), la experiencia del trabajo con comunidades para el desarrollo local estará fundamentada en la identificación y promoción de escenarios para el crecimiento de la capacidad productiva y organizativa local, a través de la conformación de redes de cooperación y el fortalecimiento y acompañamiento de las redes ya existentes. Por otra parte, deben ponerse en marcha acciones de gestión con autoridades para la apertura de opciones para el acceso al crédito, facilitación de servicios tecnológicos u otros que propendan por la solución de problemas comunes a los emprendedores locales, integrando activamente a la empresa privada (p.170).
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img43.png')
      
    .row.justify-content-start.mb-4
      .col-auto.BGRS01.px-5.py-3(data-aos="fade-right")
        .h4.text-white.mb-0 D. Lograr la continuidad y permanencia del proceso
    
    p Es importante resaltar la necesidad de que los procesos realizados con comunidades sean continuos y permanentes en el tiempo, como lo indica Parra y Vargas (2017):

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img44.png')
      .col-lg-8(data-aos="fade-left")
        .cajon.color-acento-contenido.p-4
          p.mx-4.mb-0 Desde la particularidad e integración de los actores, con miras al logro de los objetivos compartidos y mediante la disposición de recursos en el corto, mediano y largo plazo, el trabajo con comunidades debe partir de una metodología de planeación estratégica que permita la construcción de acciones colectivas frente a metas de largo plazo, sin perder de vista el involucramiento de las comunidades y la incorporación de sus opiniones en el análisis de la realidad.
    
    p El compromiso de los representantes del Estado, empresa y sociedad es vital para alcanzar la construcción de una interpretación compartida de los retos y de las oportunidades para el desarrollo y la cohesión social desde el entorno local; los escenarios de encuentro cotidiano son una alternativa viable para la movilización y dinamización de acciones desde los actores, pues, involucrándose a través de la asignación de responsabilidades y compromisos, se puede construir el engranaje necesario para dar respuesta a diversas problemáticas propias del territorio desde lo local y a identificar los recursos que deban ser requeridos desde el exterior (p. 171).

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
