const {plus, minus} = require('./choices')
const info = require('../index')

module.exports = [
  info,
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
    text: 'Gjør samtaler dypere`',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Liker nye ideer',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Liker å tenke på saker og ting',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Kan uttrykke meg i vakre vendinger',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Liker ville tankeflukter',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Blir inspirert av nye ideer',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Har et rikt ordforråd',
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
    text: 'Liker ikke poesi',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Prøver sjelden å finne en dypere mening i ting',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Syns det blir brukt for mange skattepenger til støtte av kunstnere',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Er ikke interessert i teoretiske diskusjoner',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Har problemer med å skjønne abstrakte ideer',
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
    text: 'Fylles ofte av tvil',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Føler meg lett truet',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Blir ofte stresset',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Frykter det verste',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Bekymrer meg ofte',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Føler meg sjelden nedstemt',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Føler meg vel med meg selv',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Blir sjelden irritert',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Bryr meg ikke så lett om saker og ting',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Er veldig fornøyd med meg selv',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Er som oftest avslappet',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Blir sjelden sint',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Blir ikke lett frustrert',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Forholder meg rolig i pressede situasjoner',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Mister sjelden fatningen',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Føler meg vel rundt andre mennesker',
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
    text: 'Er midtpunktet på festen',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Vet hvordan jeg skal fenge folk',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Jeg starter samtalene',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Blir fort kjent med mennesker',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Snakker med mange ulike folk på fester',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Har ikke noe i mot å være sentrum for andres oppmerksomet',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Muntrer opp folk',
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
    text: 'Vil beskrive mine erfaringer som relativt kjedelige',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Liker ikke at oppmerksomheten ledes mot meg',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Snakker ikke så mye',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Unngår kontakt med andre',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Det er vanskelig å bli kjent med meg',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Trekker meg tilbake fra andre mennesker',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Finner det vanskelig å nærme meg andre',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Holder andre på avstand',
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
    text: 'Får arbeid unna i en fei',
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
    text: 'Fullfører oppgaver på en god måte',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Gjør ting i overensstemmelse med planen',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Er nøyaktig i arbeidet mitt',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Fullfører det jeg begynner på',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Follow through with my plans',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Kaster bort tiden min',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Synes det er vanskelig å komme i gang med arbeid',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Gjør akkurat det arbeidet jeg må, verken mer eller mindre',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Sjekker ikke at jeg blir ferdig med ting',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Holder ikke forpliktelsene mine',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Roter til ting',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Fullfører ikke ting',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Investerer ikke mye energi i det jeg driver med',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Roter til ting',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Trenger et dytt i ryggen for å starte på noe',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Har noe positivt å si om alle',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Tror at andre har gode hensikter',
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
    text: 'Får folk til å kjenne seg vel',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Bryr meg om andre',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Stoler på det folk sier til meg',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Sympatiserer med andre menneskers følelser',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Er lett å tilfredsstille',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Behandler alle mennesker likt',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Har en skarp tunge',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Bryter andre ned i fillebiter',
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
    text: 'Fornærmer andre',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Tror jeg er bedre enn andre',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Motsier andre',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Krever noe av andre',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Bærer nag',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Er ute etter personlig vinning',
    choises: minus,
    domain: 'A'
  }
]
