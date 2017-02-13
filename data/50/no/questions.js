'use strict'

const {plus, minus} = require('./choices')

module.exports = [
  {
    test: '50-IPIP-NEO-PI-R',
    link: 'http://ipip.ori.org/newNEODomainsKey.htm',
    info: 'test info...'
  },
  {
    text: 'Synes kunst er viktig',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Har livlig fantasi',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Pleier å stemme på liberale politikere',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Går dypere i samtaler',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Begeistret for nye ideer',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Er ikke interessert i abstrakte ideer',
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
    text: 'Pleier å stemme på konservative politikere',
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
    text: 'Føler meg ofte nede i en bølgedal',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Har ofte humørsvingninger',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Får lett panikk',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Blir sjelden irritert',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Føler meg sjelden nedstemt',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Føler meg vel i forhold til meg selv',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Føler ofte at ting ikke vedrører meg',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Er veldig fornøyd med meg selv',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Føler meg vel med mennesker rundt meg',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Får lett venner',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Er flink til å håndtere sosiale situasjoner',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Er midtpunkt i selskapet',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Vet hvordan jeg skal fenge andre mennesker',
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
    text: 'Vil beskrive meg selv som litt kjedelig',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Liker ikke å få oppmerksomhet rettet mot meg',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Snakker ikke så mye',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Er alltid forberedt',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Er opptatt av detaljer',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Får viktige oppgaver fort unnagjort',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Realiserer planene mine',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Legger planer og holder meg til dem',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Kaster bort tiden min',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Syns det er vanskelig å komme i gang med arbeid',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Gjør akkurat det jeg må av arbeid, verken mer eller mindre',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Følger ikke opp ting jeg setter i gang',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Følger ikke opp pliktene mine',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Har noe godt og pent å si til alle',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Tror at alle har gode hensikter',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Respekterer andre',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Aksepterer folk for det de er',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Får folk til å føle seg vel',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Har en skarp tunge',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Bryter andre ned i fillebiter"',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Tror at andre har skjulte motiver',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Hevner meg på andre',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Fornærmer folk',
    choises: minus,
    domain: 'A'
  }
]
