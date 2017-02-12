'use strict'

const {plus, minus} = require('./choices')

module.exports = [
  {
    test: '50-IPIP-NEO-PI-R',
    link: 'http://ipip.ori.org/newNEODomainsKey.htm',
    info: 'test info...'
  },
  {
    text: 'Tror på betydningen av kunst',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Har en livlig fantasi',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Pleier å stemme på liberale politiske kandidater',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Fører samtalen til et høyere nivå',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Liker å høre nye idèer',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Jeg er ikke interessert i nye idèer',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Liker ikke kunst',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Unngår filosofiske diskusjoner',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Liker ikke å gå på kunstmuseer',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Pleier å stemme på politikere som er konservative',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Føler meg ofte nedstemt',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Misliker meg selv',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Er ofte nede i følelsesmessige bølgedaler',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Har hyppige humørsvingninger',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Får lett panikk',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Blir lett irritert',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Seldom feel blue',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Føler meg komfortabel med meg selv',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Er ikke lett brydd av ting',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Er veldig fornøyd med meg selv',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Føler meg komfortabel rundt mennesker',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Får lett venner',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Er dyktig i å håndere sosiale situasjoner',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Am the life of the party',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Know how to captivate people',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Har lite å si',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Holder meg i bakgrunnen',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Would describe my experiences as somewhat dull',
    choises: minus,
    domain: 'E'
  },
  {
    text: "Don't like to draw attention to myself",
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Snakker ikke mye',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Er alltid forberedt',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Pay attention to details',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Get chores done right away',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Gjennomfører planene mine',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Lager planer og holder meg til dem',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Kaster bort tiden min',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Find it difficult to get down to work',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Do just enough work to get by',
    choises: minus,
    domain: 'C'
  },
  {
    text: "Don't see things through",
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Shirk my duties',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Have a good word for everyone',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Believe that others have good intentions',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Respekterer andre',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Aksepterer mennesker som de er',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Make people feel at ease',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Har en skarp tunge',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Cut others to pieces',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Suspect hidden motives in others',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Get back at others',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Fornærmer folk',
    choises: minus,
    domain: 'A'
  }
]
