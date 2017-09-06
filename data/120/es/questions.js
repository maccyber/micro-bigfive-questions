const {plus, minus} = require('./choices')
const info = require('../index')

module.exports = [
  info,
  {
    // text: 'Worry about things',
    text: 'Me preocupo por las cosas',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    // text: 'Make friends easily',
    text: 'Creo que hago amigos fácilmente',
    choises: plus,
    domain: 'E',
    facet: 1
  },
  {
    // text: 'Have a vivid imagination',
    text: 'Tengo una imaginación vívida',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    // text: 'Trust others',
    text: 'Confío en los demás',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    // text: 'Complete tasks successfully',
    text: 'Completo las tareas correctamente',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    // text: 'Get angry easily',
    text: 'Suelo enojarme fácilmente',
    choises: plus,
    domain: 'N',
    facet: 2
  },
  {
    // text: 'Love large parties',
    text: 'Me encantan las fiestas grandes',
    choises: plus,
    domain: 'E',
    facet: 2
  },
  {
    // text: 'Believe in the importance of art',
    text: 'Creo que el arte es importante',
    choises: plus,
    domain: 'O',
    facet: 2
  },
  {
    // text: 'Use others for my own ends',
    text: 'Colaboro con otros solo si obtengo algún beneficio propio',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    // text: 'Like to tidy up',
    text: 'Me gusta mantener las cosas en orden',
    choises: plus,
    domain: 'C',
    facet: 2
  },
  {
    // text: 'Often feel blue',
    text: 'A menudo me siento triste',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    // text: 'Take charge',
    text: 'Me gusta estar a cargo de las decisiones',
    choises: plus,
    domain: 'E',
    facet: 3
  },
  {
    // text: 'Experience my emotions intensely',
    text: 'Considero que soy muy sentimental',
    choises: plus,
    domain: 'O',
    facet: 3
  },
  {
    // text: 'Love to help others',
    text: 'Me siento a gusto ayudando a los demás',
    choises: plus,
    domain: 'A',
    facet: 3
  },
  {
    // text: 'Keep my promises',
    text: 'Siempre cumplo mis promesas',
    choises: plus,
    domain: 'C',
    facet: 3
  },
  {
    // text: 'Find it difficult to approach others',
    text: 'Tengo dificultades para acercarme a los demás',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    // text: 'Am always busy',
    text: 'Estoy ocupado/a todo el tiempo',
    choises: plus,
    domain: 'E',
    facet: 4
  },
  {
    // text: 'Prefer variety to routine',
    text: 'Prefiero la variedad antes que la rutina',
    choises: plus,
    domain: 'O',
    facet: 4
  },
  {
    // text: 'Love a good fight',
    text: 'Me gusta pelear',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    // text: 'Work hard',
    text: 'Siempre trabajo duro',
    choises: plus,
    domain: 'C',
    facet: 4
  },
  {
    // text: 'Go on binges',
    text: 'A menudo voy de borracheras',
    choises: plus,
    domain: 'N',
    facet: 5
  },
  {
    // text: 'Love excitement',
    text: 'Amo la emocion',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    // text: 'Love to read challenging material',
    text: 'Me gusta mucho leer',
    choises: plus,
    domain: 'O',
    facet: 5
  },
  {
    // text: 'Believe that I am better than others',
    text: 'Creo que soy mejor que los demás',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    // text: 'Am always prepared',
    text: 'Siepre estoy preparado',
    choises: plus,
    domain: 'C',
    facet: 5
  },
  {
    // text: 'Panic easily',
    text: 'Me asusto fácilmente',
    choises: plus,
    domain: 'N',
    facet: 6
  },
  {
    // text: 'Radiate joy',
    text: 'Soy una persona muy alegre',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    // text: 'Tend to vote for liberal political candidates',
    text: 'Tiendo a votar por candidatos políticos liberales',
    choises: plus,
    domain: 'O',
    facet: 6
  },
  {
    // text: 'Sympathize with the homeless',
    text: 'Me compadezco por la gente sin hogar',
    choises: plus,
    domain: 'A',
    facet: 6
  },
  {
    // text: 'Jump into things without thinking',
    text: 'Hago las cosas sin razonar mucho sobre ellas',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    // text: 'Fear for the worst',
    text: 'Temo que suceda lo peor',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    // text: 'Feel comfortable around people',
    text: 'Me siento cómodo con la gente',
    choises: plus,
    domain: 'E',
    facet: 1
  },
  {
    // text: 'Enjoy wild flights of fantasy',
    text: 'Disfruto de fantásticos vuelos de fantasía',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    // text: 'Believe that others have good intentions',
    text: 'Creo que las personas tienen buenas intenciones',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    // text: 'Excel in what I do',
    text: 'Soy muy bueno en lo que hago',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    // text: 'Get irritated easily',
    text: 'Me suelo molestar con facilidad',
    choises: plus,
    domain: 'N',
    facet: 2
  },
  {
    // text: 'Talk to a lot of different people at parties',
    text: 'Me gusta hablar con muchas personas en las fiestas',
    choises: plus,
    domain: 'E',
    facet: 2
  },
  {
    // text: 'See beauty in things that others might not notice',
    text: 'Veo belleza en cosas que otros podrían no notar',
    choises: plus,
    domain: 'O',
    facet: 2
  },
  {
    // text: 'Cheat to get ahead',
    text: 'Podría hacer trampa si eso me lleva adelante',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    // text: 'Often forget to put things back in their proper place',
    text: 'A menudo olvido poner las cosas de vuelta donde las tomé',
    choises: minus,
    domain: 'C',
    facet: 2
  },
  {
    // text: 'Dislike myself',
    text: 'No me siento bien conmigo mismo',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    // text: 'Try to lead others',
    text: 'Intento dirigir a los demás',
    choises: plus,
    domain: 'E',
    facet: 3
  },
  {
    // text: "Feel others' emotions",
    text: 'Puedo comprender bien las emociones de los demás',
    choises: plus,
    domain: 'O',
    facet: 3
  },
  {
    // text: 'Am concerned about others',
    text: 'Me preocupo por los demás',
    choises: plus,
    domain: 'A',
    facet: 3
  },
  {
    // text: 'Tell the truth',
    text: 'Siempre digo la verdad',
    choises: plus,
    domain: 'C',
    facet: 3
  },
  {
    // text: 'Am afraid to draw attention to myself',
    text: 'Temo ser el centro de atención',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    // text: 'Am always on the go',
    text: 'Creo que soy una persona activa y vigorosa',
    choises: plus,
    domain: 'E',
    facet: 4
  },
  {
    // text: 'Prefer to stick with things that I know',
    text: 'Prefiero quedarme cosas que conozco',
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    // text: 'Yell at people',
    text: 'Suelo gritar a las personas',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    // text: "Do more than what's expected of me",
    text: 'Hago más de lo que se espera de mí',
    choises: plus,
    domain: 'C',
    facet: 4
  },
  {
    // text: 'Rarely overindulge',
    text: 'Rara vez me dejo llevar',
    choises: minus,
    domain: 'N',
    facet: 5
  },
  {
    // text: 'Seek adventure',
    text: 'Siempre busco la aventura',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    // text: 'Avoid philosophical discussions',
    text: 'Intento evitar discusiones filosóficas',
    choises: minus,
    domain: 'O',
    facet: 5
  },
  {
    // text: 'Think highly of myself',
    text: 'Espero mucho de mi mismo',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    // text: 'Carry out my plans',
    text: 'Llevo a cabo mis planes',
    choises: plus,
    domain: 'C',
    facet: 5
  },
  {
    // text: 'Become overwhelmed by events',
    text: 'Me abrumo fácilmente de las cosas que suceden alrededor',
    choises: plus,
    domain: 'N',
    facet: 6
  },
  {
    // text: 'Have a lot of fun',
    text: 'Pienso que soy una persona muy divertida',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    // text: 'Believe that there is no absolute right and wrong',
    text: 'No creo que haya acciones completamente correctas o incorrectas',
    choises: plus,
    domain: 'O',
    facet: 6
  },
  {
    // text: 'Feel sympathy for those who are worse off than myself',
    text: 'Siento simpatía por aquellos que se encuentran en peores situaciones que yo',
    choises: plus,
    domain: 'A',
    facet: 6
  },
  {
    // text: 'Make rash decisions',
    text: 'Suelo tomar decisiones precipitadas',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    // text: 'Am afraid of many things',
    text: 'Tengo miedo de muchas cosas',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    // text: 'Avoid contacts with others',
    text: 'Amenudo evito el contacto con los demás',
    choises: minus,
    domain: 'E',
    facet: 1
  },
  {
    // text: 'Love to daydream',
    text: 'Soy una persona que aveces sueña despierta',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    // text: 'Trust what people say',
    text: 'Confío en lo que dicen las personas',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    // text: 'Handle tasks smoothly',
    text: 'Realizo mis tareas sin ningún problema',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    // text: 'Lose my temper',
    text: 'Aveces pierdo los estribos',
    choises: plus,
    domain: 'N',
    facet: 2
  },
  {
    // text: 'Prefer to be alone',
    text: 'Prefiero estar solo',
    choises: minus,
    domain: 'E',
    facet: 2
  },
  {
    // text: 'Do not like poetry',
    text: 'No me gusta la poesía',
    choises: minus,
    domain: 'O',
    facet: 2
  },
  {
    // text: 'Take advantage of others',
    text: 'Me aprovecio de los demás',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    // text: 'Leave a mess in my room',
    text: 'Mi habitación es muy desordenada',
    choises: minus,
    domain: 'C',
    facet: 2
  },
  {
    // text: 'Am often down in the dumps',
    text: 'A menudo me siento bajoneado',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    // text: 'Take control of things',
    text: 'Tomo el control de las cosas',
    choises: plus,
    domain: 'E',
    facet: 3
  },
  {
    // text: 'Rarely notice my emotional reactions',
    text: 'En raras ocasiones noto mis reacciones emocionales',
    choises: minus,
    domain: 'O',
    facet: 3
  },
  {
    // text: 'Am indifferent to the feelings of others',
    text: 'Soy indiferente a los sentimientos de los demás',
    choises: minus,
    domain: 'A',
    facet: 3
  },
  {
    // text: 'Break rules',
    text: 'Las reglas fueron hechas para romperse',
    choises: minus,
    domain: 'C',
    facet: 3
  },
  {
    // text: 'Only feel comfortable with friends',
    text: 'Sólo me siento cómodo en compañía de amigos',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    // text: 'Do a lot in my spare time',
    text: 'Hago muchas cosas en mi tiempo libre',
    choises: plus,
    domain: 'E',
    facet: 4
  },
  {
    // text: 'Dislike changes',
    text: 'No me atraen situaciones en constante cambio',
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    // text: 'Insult people',
    text: 'No tengo recelo en insultar a la gente',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    // text: 'Do just enough work to get by',
    text: 'Solo hago el trabajo justo para haberlo cumplido',
    choises: minus,
    domain: 'C',
    facet: 4
  },
  {
    // text: 'Easily resist temptations',
    text: 'Resisto las tentaciones fácilmente',
    choises: minus,
    domain: 'N',
    facet: 5
  },
  {
    // text: 'Enjoy being reckless',
    text: 'Me gusta ser imprudente',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    // text: 'Have difficulty understanding abstract ideas',
    text: 'Me es difícil entender ideas abstractas',
    choises: minus,
    domain: 'O',
    facet: 5
  },
  {
    // text: 'Have a high opinion of myself',
    text: 'Tengo altas expectativas de mi mismo',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    // text: 'Waste my time',
    text: 'No hago mucho en mi tiempo libre',
    choises: minus,
    domain: 'C',
    facet: 5
  },
  {
    // text: "Feel that I'm unable to deal with things",
    text: 'Aveces siento que no soy capaz de manejar situaciones',
    choises: plus,
    domain: 'N',
    facet: 6
  },
  {
    // text: 'Love life',
    text: 'Amo la vida',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    // text: 'Tend to vote for conservative political candidates',
    text: 'Tiendo a votar por los candidatos políticos conservativos',
    choises: minus,
    domain: 'O',
    facet: 6
  },
  {
    // text: "Am not interested in other people's problems",
    text: 'No me suelo implicar en los problemas de los demás',
    choises: minus,
    domain: 'A',
    facet: 6
  },
  {
    // text: 'Rush into things',
    text: 'Hago las cosas sin cautela',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    // text: 'Get stressed out easily',
    text: 'Tiendo a estresarme con facilidad',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    // text: 'Keep others at a distance',
    text: 'Siempre mantengo cierta distancia con las personas',
    choises: minus,
    domain: 'E',
    facet: 1
  },
  {
    // text: 'Like to get lost in thought',
    text: 'Me gusta perderme en mis pensamientos',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    // text: 'Distrust people',
    text: 'Desconfío de la gente',
    choises: minus,
    domain: 'A',
    facet: 1
  },
  {
    // text: 'Know how to get things done',
    text: 'Generalmente se como hacer las cosas',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    // text: 'Am not easily annoyed',
    text: 'No me molesto fácilmente',
    choises: minus,
    domain: 'N',
    facet: 2
  },
  {
    // text: 'Avoid crowds',
    text: 'No me gusta mezclarme con la gente',
    choises: minus,
    domain: 'E',
    facet: 2
  },
  {
    // text: 'Do not enjoy going to art museums',
    text: 'No me agrada ir a museos de arte',
    choises: minus,
    domain: 'O',
    facet: 2
  },
  {
    // text: "Obstruct others' plans",
    text: 'Sería capaz de sabotear los planes de otros',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    // text: 'Leave my belongings around',
    text: 'Dejo mis pertenencias aquí y allá',
    choises: minus,
    domain: 'C',
    facet: 2
  },
  {
    // text: 'Feel comfortable with myself',
    text: 'Me siento cómodo conmigo mismo',
    choises: minus,
    domain: 'N',
    facet: 3
  },
  {
    // text: 'Wait for others to lead the way',
    text: 'Espero que alguien más lleve la batuta en un grupo',
    choises: minus,
    domain: 'E',
    facet: 3
  },
  {
    // text: "Don't understand people who get emotional",
    text: 'No comprendo a las personas que se emocionan fácilmente',
    choises: minus,
    domain: 'O',
    facet: 3
  },
  {
    // text: 'Take no time for others',
    text: 'No tengo tiempo para los demás',
    choises: minus,
    domain: 'A',
    facet: 3
  },
  {
    // text: 'Break my promises',
    text: 'No suelo cumplir mis promesas',
    choises: minus,
    domain: 'C',
    facet: 3
  },
  {
    // text: 'Am not bothered by difficult social situations',
    text: 'No me molestan las situaciones sociales difíciles',
    choises: minus,
    domain: 'N',
    facet: 4
  },
  {
    // text: 'Like to take it easy',
    text: 'Me gusta tomar las cosas con calma',
    choises: minus,
    domain: 'E',
    facet: 4
  },
  {
    // text: 'Am attached to conventional ways',
    text: 'Soy una persona mayormente conservadora',
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    // text: 'Get back at others',
    text: 'No suelo apoyar a los otros',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    // text: 'Put little time and effort into my work',
    text: 'Pongo poco tiempo y esfuerzo para mi trabajo',
    choises: minus,
    domain: 'C',
    facet: 4
  },
  {
    // text: 'Am able to control my cravings',
    text: 'Siempre puedo controlar mis antojos',
    choises: minus,
    domain: 'N',
    facet: 5
  },
  {
    // text: 'Act wild and crazy',
    text: 'Creo que soy una persona activa y vigorosa',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    // text: 'Am not interested in theoretical discussions',
    text: 'No me interesan las discusiones teóricas',
    choises: minus,
    domain: 'O',
    facet: 5
  },
  {
    // text: 'Boast about my virtues',
    text: 'Me jacto de mis virtudes',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    // text: 'Have difficulty starting tasks',
    text: 'Tengo dificultad para comenzar tareas',
    choises: minus,
    domain: 'C',
    facet: 5
  },
  {
    // text: 'Remain calm under pressure',
    text: 'Me mantengo tranquilo/a bajo presión',
    choises: minus,
    domain: 'N',
    facet: 6
  },
  {
    // text: 'Look at the bright side of life',
    text: 'Siempre miro el buen lado de la vida',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    // text: 'Believe that we should be tough on crime',
    text: 'Creo que deberíamos ser severos con el crimen',
    choises: minus,
    domain: 'O',
    facet: 6
  },
  {
    // text: 'Try not to think about the needy',
    text: 'Trato de no pensar en los necesitados',
    choises: minus,
    domain: 'A',
    facet: 6
  },
  {
    // text: 'Act without thinking',
    text: 'Actúo sin pensar',
    choises: minus,
    domain: 'C',
    facet: 6
  }
]
