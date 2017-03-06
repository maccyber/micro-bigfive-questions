'use strict'

const {plus, minus} = require('./choices')

module.exports = [
  {
    test: 'Johnson-120-IPIP-NEO-PI-R',
    link: 'http://ipip.ori.org/30FacetNEO-PI-RItems.htm',
    info: "Johnson's (2014) 120-item IPIP NEO-PI-R"
  },
  {
    text: 'Bekymrer meg for mye',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Har lett for å få venner',
    choises: plus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Har en livlig fantasi',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Stoler på andre',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Fullfører og lykkes med oppgaver',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Blir fort sint',
    choises: plus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Elsker store selskaper og fester',
    choises: plus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Tror på betydningen av kunst',
    choises: plus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Bruker andre til min egen fordel',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Liker å rydde opp',
    choises: plus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'Føler meg ofte nedstemt',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Tar ansvar',
    choises: plus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Opplever egne følelser sterkt',
    choises: plus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Elsker å hjelpe andre',
    choises: plus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Holder det jeg lover',
    choises: plus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Det er vanskelig for meg å nærme meg andre mennesker',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Er alltid travel',
    choises: plus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Foretrekker variasjon framfor rutiner',
    choises: plus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Elsker en god kamp',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Jobber hardt',
    choises: plus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Lett for å overdrive ting',
    choises: plus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Elsker spenning',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Elsker å lese ting som krever noe av meg',
    choises: plus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Tror at jeg er bedre enn andre',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Er alltid forberedt',
    choises: plus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Får lett panikk',
    choises: plus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Utstråler glede',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Pleier å stemme på politikere som er liberale',
    choises: plus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Har sympati for hjemløse',
    choises: plus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Begir meg ut på ting uten å tenke først',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Frykter det verste',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Føler meg vel med andre mennesker',
    choises: plus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Liker ville fantasiflukter',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Tror at andre har gode hensikter',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Utmerker meg med det jeg gjør',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Blir lett irritert',
    choises: plus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Snakker med mange ulike folk i selskapslivet',
    choises: plus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Ser skjønnheten i ting som andre kanskje ikke legger merke til',
    choises: plus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Jukser for å komme videre',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Glemmer ofte å legge ting tilbake på plass',
    choises: minus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'Misliker meg selv',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Prøver å styre andre',
    choises: plus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Legger merke til andres følelser',
    choises: plus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Bryr meg om andre',
    choises: plus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Forteller sannheten',
    choises: plus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Er redd for å tiltrekke meg oppmerksomhet',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Er alltid på farten',
    choises: plus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Foretrekker å holde meg til ting jeg kan',
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Skjeller ut folk',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Gjør mer enn det som forventes av meg',
    choises: plus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Hengir meg sjelden til noe eller noen',
    choises: minus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Søker eventyr og spenning',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Unngår filosofiske diskusjoner',
    choises: minus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Tenker høyt om meg selv',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Realiserer planene mine',
    choises: plus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Blir overveldet av det som skjer',
    choises: plus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Har mye moro',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Tror at det ikke er noe som er helt sant eller helt galt',
    choises: plus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Føler sympati for de som er verre stilt enn meg selv',
    choises: plus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Tar uoverveide beslutninger',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Er redd for mange ting',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Unngår kontakt med andre',
    choises: minus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Elsker å dagdrømme',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Stoler på det folk sier',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Håndterer oppgaver lett',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Blir sint',
    choises: plus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Foretrekker å være alene',
    choises: minus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Liker ikke poesi',
    choises: minus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Utnytter andre',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Forlater rom uten å rydde opp etter meg',
    choises: minus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'Er ofte nede i følelsesmessige bølgedaler',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Tar kontroll på ting',
    choises: plus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Legger sjelden merke til mine egne følelsesmessige reaksjoner',
    choises: minus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Er likegyldig ovenfor andres følelser',
    choises: minus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Bryter regler',
    choises: minus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Føler meg bare komfortabel når jeg er sammen med venner',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Gjør mye i fritiden min',
    choises: plus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Misliker forandringer',
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Fornærmer andre',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Gjør akkurat nok arbeid, verken mer eller mindre',
    choises: minus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Motstår lett fristelser',
    choises: minus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Liker å være uansvarlig',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Har problemer med å forstå abstrakte idéer',
    choises: minus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Har høye tanker om meg selv',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Kaster bort tiden min',
    choises: minus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Føler at jeg ikke er i stand til å takle ting',
    choises: plus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Elsker livet',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Pleier å stemme på konservative politiske kandidater',
    choises: minus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Er ikke interessert i andre folks problemer',
    choises: minus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Kaster meg inn i ting',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Blir fort stresset',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Holder andre på avstand',
    choises: minus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Liker å fortape meg i egne tanker',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Mistror andre',
    choises: minus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Vet hvordan ting skal gjøres',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Blir ikke så lett ergerlig',
    choises: minus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Unngår folkemengder',
    choises: minus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Liker ikke å gå på kunstmuseer',
    choises: minus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Legger hindringer i veien for andres planer',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Strør omkring meg med eiendelene mine',
    choises: minus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'Føler meg vel med meg selv',
    choises: minus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Venter på at andre skal lede an',
    choises: minus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Forstår ikke folk som blir emosjonelle',
    choises: minus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Bruker ikke tid på andre',
    choises: minus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Bryter det jeg har lovet',
    choises: minus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Føler meg ikke brydd i vanskelige sosiale situasjoner',
    choises: minus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Liker å ta det rolig',
    choises: minus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Vil helst ta tradisjonelle valg',
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Hevner meg på andre',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Investerer lite tid og innsats i arbeidet mitt',
    choises: minus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Er i stand til kontrollere mine lyster',
    choises: minus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Oppfører meg hemningsløst og vilt',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Er ikke interessert i teoretiske diskusjoner',
    choises: minus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Skryter av mine fortrinn',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Har vanskeligheter med å komme i gang med oppgaver',
    choises: minus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Er rolig hvis jeg blir presset',
    choises: minus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Ser lyst på livet',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Synes at vi skal slå hardt ned på kriminalitet',
    choises: minus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Prøver ikke å tenke på de trengende',
    choises: minus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Handler uten å tenke',
    choises: minus,
    domain: 'C',
    facet: 6
  }
]
