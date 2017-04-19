'use strict'

const {plus, minus} = require('./choices')

module.exports = [
  {
    test: '50-IPIP-NEO-PI-R',
    link: 'http://ipip.ori.org/newNEODomainsKey.htm',
    info: 'test info...'
  },
  {
    text: 'Soy educado/a en arte, música, o literatura',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Tengo una imaginación activa',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Soy politicamente liberal',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Llevo la conversación a un nivel superior',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Disfruto de escuchar nuevas ideas',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'No estoy interesado en ideas abstractas',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'No me gusta el arte',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Evito discuciónes filosoficas',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'No disfruto ir a museos de arte',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Tiendo a votar por candidatos políticos conservativos',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'A menudo me siento triste',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'No me gusto a mi mismo/a',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Me distraigo fácilmente',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Tengo cambios de humor frecuentes',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Me asusto fácilmente',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Rara vez me irrito',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Rara vez me siento triste',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Me siento a gusto conmigo mismo/a',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'No me molesto facilmente con cosas',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Estoy muy contento conmigomismo/a',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Me siento a gusto con otras personas',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Hago amigos fácilmente',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Tengo habilidad en manejar situaciones sociales',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Soy el alma de la fiesta',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Se como cautivar gente',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Tengo poco que decir',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Keep in the background',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Describiría mis experiencias como algo aburrido',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'No me gusta ser el centro de atención',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'No hablo mucho',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Siempre estoy preparado',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Presto atención a los detalles',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Hago los quehaceres de inmediato',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Llevo a cabo mis planes',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Hago planes y los sigo',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Gasto mi tiempo',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Se me hace difícil hablar',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Hago solo el trabajo necesario',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'No veo las cosas detenidamente',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Evito mis deberes',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Me es fácil hablar con los demás',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Creo que los demás tienen buenas intenciones',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Respeto a los demás',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Acepto a las personas como son',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Hago que la gente se sienta a gusto',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Tengo una lengua afilada',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Hablo sin rodeos sobre los demas',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Sospecho segundas intenciónes en los demás',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Soy una persona vengativa',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Insulto a la gente',
    choises: minus,
    domain: 'A'
  }
]
