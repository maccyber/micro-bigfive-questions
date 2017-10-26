const {plus, minus} = require('./choices')
const info = require('../index')

module.exports = [
  info,
  {
    text: 'Me preocupo por las cosas',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Creo que hago amigos fácilmente',
    choises: plus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Tengo una imaginación vívida',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Confío en los demás',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Completo las tareas correctamente',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Suelo enojarme fácilmente',
    choises: plus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Me encantan las fiestas grandes',
    choises: plus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Creo que el arte es importante',
    choises: plus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Colaboro con otros solo si obtengo algún beneficio propio',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Me gusta mantener las cosas en orden',
    choises: plus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'A menudo me siento triste',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Me gusta estar a cargo de las decisiones',
    choises: plus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Considero que soy muy sentimental',
    choises: plus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Me siento a gusto ayudando a los demás',
    choises: plus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Siempre cumplo mis promesas',
    choises: plus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Tengo dificultades para acercarme a los demás',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Estoy ocupado todo el tiempo',
    choises: plus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Prefiero la variedad antes que la rutina',
    choises: plus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Me gusta pelear',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Siempre trabajo duro',
    choises: plus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'A menudo voy de borracheras',
    choises: plus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Amo la emocion',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Me gusta mucho leer',
    choises: plus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Creo que soy mejor que los demás',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Siepre estoy preparado',
    choises: plus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Me asusto fácilmente',
    choises: plus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Soy una persona muy alegre',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Tiendo a votar por candidatos políticos liberales',
    choises: plus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Me compadezco por la gente sin hogar',
    choises: plus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Hago las cosas sin razonar mucho sobre ellas',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Tengo una actitud pesimista',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Me siento cómodo con la gente',
    choises: plus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Disfruto momentos de creatividad',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Creo que las personas tienen buenas intenciones',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Soy muy bueno en lo que hago',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Me suelo molestar con facilidad',
    choises: plus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Me gusta hablar con muchas personas en las fiestas',
    choises: plus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Veo belleza en cosas que otros podrían no notar',
    choises: plus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Podría hacer trampa si eso me lleva adelante',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'A menudo olvido poner las cosas de vuelta donde las tomé',
    choises: minus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'No me siento bien conmigo mismo',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Intento dirigir a los demás',
    choises: plus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Puedo comprender bien las emociones de los demás',
    choises: plus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Me preocupo por los demás',
    choises: plus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Siempre digo la verdad',
    choises: plus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Temo ser el centro de atención',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Creo que soy una persona activa y vigorosa',
    choises: plus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Prefiero callar cosas que conozco',
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Suelo gritar a las personas',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Hago más de lo que se espera de mí',
    choises: plus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Rara vez me dejo llevar',
    choises: minus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Siempre busco la aventura',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Intento evitar discusiones filosóficas',
    choises: minus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Espero mucho de mi mismo',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Llevo a cabo mis planes',
    choises: plus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Me abrumo fácilmente de las cosas que suceden alrededor',
    choises: plus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Pienso que soy una persona muy divertida',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'No creo que haya acciones completamente correctas o incorrectas',
    choises: plus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Siento simpatía por aquellos que se encuentran en peores situaciones que yo',
    choises: plus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Suelo tomar decisiones precipitadas',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Tengo miedo de muchas cosas',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'A menudo evito el contacto con los demás',
    choises: minus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Soy una persona que aveces sueña despierta',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Confío en lo que dicen las personas',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Realizo mis tareas sin ningún problema',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Aveces pierdo el control de mi carácter',
    choises: plus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Prefiero estar solo',
    choises: minus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'No me gusta la poesía',
    choises: minus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Me aprovecio de los demás',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Mi habitación es muy desordenada',
    choises: minus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'A menudo me siento entristecido',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Tomo el control de las situaciones',
    choises: plus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'En raras ocasiones noto mis reacciones emocionales',
    choises: minus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Soy indiferente a los sentimientos de los demás',
    choises: minus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Creo que las reglas fueron hechas para romperse',
    choises: minus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Sólo me siento cómodo en compañía de amigos',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Hago muchas cosas en mi tiempo libre',
    choises: plus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'No me atraen situaciones en constante cambio',
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'No tengo recelo en insultar a la gente',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Solo hago el trabajo justo para haberlo cumplido',
    choises: minus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Resisto las tentaciones fácilmente',
    choises: minus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Me gusta ser imprudente',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Me es difícil entender ideas abstractas',
    choises: minus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Tengo altas expectativas de mi mismo',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'No hago mucho en mi tiempo libre',
    choises: minus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Aveces siento que no soy capaz de manejar situaciones',
    choises: plus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Amo la vida',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Tiendo a votar por los candidatos políticos conservadores',
    choises: minus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'No me suelo implicar en los problemas de los demás',
    choises: minus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Hago las cosas sin cautela',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Tiendo a estresarme con facilidad',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Siempre mantengo cierta distancia con las personas',
    choises: minus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Me gusta perderme en mis pensamientos',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Desconfío de la gente',
    choises: minus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Generalmente sé como hacer las cosas',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'No me molesto fácilmente',
    choises: minus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'No me gusta mezclarme con la gente',
    choises: minus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'No me agrada ir a museos de arte',
    choises: minus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Sería capaz de sabotear los planes de otros para mi beneficio',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Dejo mis pertenencias aquí y allá',
    choises: minus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'Me siento cómodo conmigo mismo',
    choises: minus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Espero que alguien más lleve la batuta en un grupo',
    choises: minus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'No comprendo a las personas que se emocionan fácilmente',
    choises: minus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'No tengo tiempo para los demás',
    choises: minus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'No suelo cumplir mis promesas',
    choises: minus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'No me molestan las situaciones sociales difíciles',
    choises: minus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Me gusta tomar las cosas con calma',
    choises: minus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Soy una persona mayormente conservadora',
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'No suelo apoyar a los otros',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Pongo poco tiempo y esfuerzo para mi trabajo',
    choises: minus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Siempre puedo controlar mis antojos',
    choises: minus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Creo que soy una persona activa y vigorosa',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'No me interesan las discusiones teóricas',
    choises: minus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Estoy orgulloso de mis virtudes',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Tengo dificultad para comenzar tareas',
    choises: minus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Me mantengo tranquilo bajo presión',
    choises: minus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Siempre miro el buen lado de la vida',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Creo que deberíamos ser severos con el crimen',
    choises: minus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Trato de no pensar en los necesitados',
    choises: minus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Actúo sin pensar',
    choises: minus,
    domain: 'C',
    facet: 6
  }
]
