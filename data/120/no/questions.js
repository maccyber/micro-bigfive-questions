'use strict'

const {plus, minus} = require('./choices')

module.exports = [
  {
    test: 'Johnson-120-IPIP-NEO-PI-R',
    link: 'http://ipip.ori.org/30FacetNEO-PI-RItems.htm'
  },
  {
    text: 'Bekymrer meg for mye',
    choises: plus,
    facet: 'N1'
  },
  {
    text: 'Har lett for å få venner',
    choises: plus,
    facet: 'E1'
  },
  {
    text: 'Har en livlig fantasi',
    choises: plus,
    facet: 'O1'
  },
  {
    text: 'Stoler på andre',
    choises: plus,
    facet: 'A1'
  },
  {
    text: 'Fullfører og lykkes med oppgaver',
    choises: plus,
    facet: 'C1'
  },
  {
    text: 'Blir fort sint',
    choises: plus,
    facet: 'N2'
  },
  {
    text: 'Elsker store selskaper og fester',
    choises: plus,
    facet: 'E2'
  },
  {
    text: 'Tror på betydningen av kunst',
    choises: plus,
    facet: 'O2'
  },
  {
    text: 'Bruker andre til min egen fordel',
    choises: minus,
    facet: 'A2'
  },
  {
    text: 'Liker å rydde opp',
    choises: plus,
    facet: 'C2'
  },
  {
    text: 'Føler meg ofte nedstemt',
    choises: plus,
    facet: 'N3'
  },
  {
    text: 'Tar ansvar',
    choises: plus,
    facet: 'E3'
  },
  {
    text: 'Opplever egne følelser sterkt',
    choises: plus,
    facet: 'O3'
  },
  {
    text: 'Elsker å hjelpe andre',
    choises: plus,
    facet: 'A3'
  },
  {
    text: 'Holder det jeg lover',
    choises: plus,
    facet: 'C3'
  },
  {
    text: 'Det er vanskelig for meg å nærme meg andre mennesker',
    choises: plus,
    facet: 'N4'
  },
  {
    text: 'Er alltid travel',
    choises: plus,
    facet: 'E4'
  },
  {
    text: 'Foretrekker variasjon framfor rutiner',
    choises: plus,
    facet: 'O4'
  },
  {
    text: 'Elsker en god kamp',
    choises: minus,
    facet: 'A4'
  },
  {
    text: 'Jobber hardt',
    choises: plus,
    facet: 'C4'
  },
  {
    text: 'Lett for å overdrive ting',
    choises: plus,
    facet: 'N5'
  },
  {
    text: 'Elsker spenning',
    choises: plus,
    facet: 'E5'
  },
  {
    text: 'Elsker å lese ting som krever noe av meg',
    choises: plus,
    facet: 'O5'
  },
  {
    text: 'Tror at jeg er bedre enn andre',
    choises: minus,
    facet: 'A5'
  },
  {
    text: 'Er alltid forberedt',
    choises: plus,
    facet: 'C5'
  },
  {
    text: 'Får lett panikk',
    choises: plus,
    facet: 'N6'
  },
  {
    text: 'Utstråler glede',
    choises: plus,
    facet: 'E6'
  },
  {
    text: 'Pleier å stemme på politikere som er liberale',
    choises: plus,
    facet: 'O6'
  },
  {
    text: 'Har sympati for hjemløse',
    choises: plus,
    facet: 'A6'
  },
  {
    text: 'Begir meg ut på ting uten å tenke først',
    choises: minus,
    facet: 'C6'
  },
  {
    text: 'Frykter det verste',
    choises: plus,
    facet: 'N1'
  },
  {
    text: 'Føler meg vel med andre mennesker',
    choises: plus,
    facet: 'E1'
  },
  {
    text: 'Liker ville fantasiflukter',
    choises: plus,
    facet: 'O1'
  },
  {
    text: 'Tror at andre har gode hensikter',
    choises: plus,
    facet: 'A1'
  },
  {
    text: 'Utmerker meg med det jeg gjør',
    choises: plus,
    facet: 'C1'
  },
  {
    text: 'Blir lett irritert',
    choises: plus,
    facet: 'N2'
  },
  {
    text: 'Snakker med mange ulike folk i selskapslivet',
    choises: plus,
    facet: 'E2'
  },
  {
    text: 'Ser skjønnheten i ting som andre kanskje ikke legger merke til',
    choises: plus,
    facet: 'O2'
  },
  {
    text: 'Jukser for å komme videre',
    choises: minus,
    facet: 'A2'
  },
  {
    text: 'Glemmer ofte å legge ting tilbake på plass',
    choises: minus,
    facet: 'C2'
  },
  {
    text: 'Misliker meg selv',
    choises: plus,
    facet: 'N3'
  },
  {
    text: 'Prøver å styre andre',
    choises: plus,
    facet: 'E3'
  },
  {
    text: 'Legger merke til andres følelser',
    choises: plus,
    facet: 'O3'
  },
  {
    text: 'Bryr meg om andre',
    choises: plus,
    facet: 'A3'
  },
  {
    text: 'Forteller sannheten',
    choises: plus,
    facet: 'C3'
  },
  {
    text: 'Er redd for å tiltrekke meg oppmerksomhet',
    choises: plus,
    facet: 'N4'
  },
  {
    text: 'Er alltid på farten',
    choises: plus,
    facet: 'E4'
  },
  {
    text: 'Foretrekker å holde meg til ting jeg kan',
    choises: minus,
    facet: 'O4'
  },
  {
    text: 'Skjeller ut folke',
    choises: minus,
    facet: 'A4'
  },
  {
    text: 'Gjør mer enn det som forventes av meg',
    choises: plus,
    facet: 'C4'
  },
  {
    text: 'Hengir meg sjelden til noe eller noen',
    choises: minus,
    facet: 'N5'
  },
  {
    text: 'Søker eventyr og spenning',
    choises: plus,
    facet: 'E5'
  },
  {
    text: 'Unngår filosofiske diskusjoner',
    choises: minus,
    facet: 'O5'
  },
  {
    text: 'Tenker høyt om meg selv',
    choises: minus,
    facet: 'A5'
  },
  {
    text: 'Realiserer planene mine',
    choises: plus,
    facet: 'C5'
  },
  {
    text: 'Blir overveldet av det som skjer',
    choises: plus,
    facet: 'N6'
  },
  {
    text: 'Har mye moro',
    choises: plus,
    facet: 'E6'
  },
  {
    text: 'Tror at det ikke er noe som er helt sant eller helt galt',
    choises: plus,
    facet: 'O6'
  },
  {
    text: 'Føler sympati for de som er verre stilt enn meg selv',
    choises: plus,
    facet: 'A6'
  },
  {
    text: 'Tar uoverveide beslutninger',
    choises: minus,
    facet: 'C6'
  },
  {
    text: 'Er redd for mange ting',
    choises: plus,
    facet: 'N1'
  },
  {
    text: 'Unngår kontakt med andre',
    choises: minus,
    facet: 'E1'
  },
  {
    text: 'Elsker å dagdrømme',
    choises: plus,
    facet: 'O1'
  },
  {
    text: 'Stoler på det folk sier',
    choises: plus,
    facet: 'A1'
  },
  {
    text: 'Håndterer oppgaver lett',
    choises: plus,
    facet: 'C1'
  },
  {
    text: 'Blir sint',
    choises: plus,
    facet: 'N2'
  },
  {
    text: 'Foretrekker å være alene',
    choises: minus,
    facet: 'E2'
  },
  {
    text: 'Liker ikke poesi',
    choises: minus,
    facet: 'O2'
  },
  {
    text: 'Utnytter andre',
    choises: minus,
    facet: 'A2'
  },
  {
    text: 'Forlater rom uten å rydde opp etter meg',
    choises: minus,
    facet: 'C2'
  },
  {
    text: 'Er ofte nede i følelsesmessige bølgedaler',
    choises: plus,
    facet: 'N3'
  },
  {
    text: 'Tar kontroll på ting',
    choises: plus,
    facet: 'E3'
  },
  {
    text: 'Legger sjelden merke til mine egne følelsesmessige reaksjoner',
    choises: minus,
    facet: 'O3'
  },
  {
    text: 'Er likegyldig ovenfor andres følelser',
    choises: minus,
    facet: 'A3'
  },
  {
    text: 'Bryter regler',
    choises: minus,
    facet: 'C3'
  },
  {
    text: 'Føler meg bare komfortabel når jeg er sammen med venner',
    choises: plus,
    facet: 'N3'
  },
  {
    text: 'Gjør mye i fritiden min',
    choises: plus,
    facet: 'E4'
  },
  {
    text: 'Misliker forandringer',
    choises: minus,
    facet: 'O4'
  },
  {
    text: 'Fornærmer andre',
    choises: minus,
    facet: 'A4'
  },
  {
    text: 'Gjør akkurat nok arbeid, verken mer eller mindre',
    choises: minus,
    facet: 'C4'
  },
  {
    text: 'Motstår lett fristelser',
    choises: minus,
    facet: 'N5'
  },
  {
    text: 'Liker å være uansvarlig',
    choises: plus,
    facet: 'E5'
  },
  {
    text: 'Har problemer med å forstå abstrakte idéer',
    choises: minus,
    facet: 'O5'
  },
  {
    text: 'Har høye tanker om meg selv',
    choises: minus,
    facet: 'A5'
  },
  {
    text: 'Kaster bort tiden min',
    choises: minus,
    facet: 'C5'
  },
  {
    text: 'Føler at jeg ikke er i stand til å takle ting',
    choises: plus,
    facet: 'N6'
  },
  {
    text: 'Elsker livet',
    choises: plus,
    facet: 'E6'
  },
  {
    text: 'Pleier å stemme på konservative politiske kandidater',
    choises: minus,
    facet: 'O6'
  },
  {
    text: 'Er ikke interessert i andre folks problemer',
    choises: minus,
    facet: 'A6'
  },
  {
    text: 'Kaster meg inn i ting',
    choises: minus,
    facet: 'C6'
  },
  {
    text: 'Blir fort stresset',
    choises: plus,
    facet: 'N1'
  },
  {
    text: 'Holder andre på avstand',
    choises: minus,
    facet: 'E1'
  },
  {
    text: 'Liker å fortape meg i egne tanker',
    choises: plus,
    facet: 'O1'
  },
  {
    text: 'Mistror andre',
    choises: minus,
    facet: 'A1'
  },
  {
    text: 'Vet hvordan ting skal gjøres',
    choises: plus,
    facet: 'C1'
  },
  {
    text: 'Blir ikke så lett ergerlig',
    choises: minus,
    facet: 'N2'
  },
  {
    text: 'Unngår folkemengder',
    choises: minus,
    facet: 'E2'
  },
  {
    text: 'Liker ikke å gå på kunstmuseer',
    choises: minus,
    facet: 'O2'
  },
  {
    text: 'Legger hindringer i veien for andres planer',
    choises: minus,
    facet: 'A2'
  },
  {
    text: 'Strør omkring meg med eiendelene mine',
    choises: minus,
    facet: 'C2'
  },
  {
    text: 'Føler meg vel med meg selv',
    choises: minus,
    facet: 'N3'
  },
  {
    text: 'Venter på at andre skal lede an',
    choises: minus,
    facet: 'E3'
  },
  {
    text: 'Forstår ikke folk som blir emosjonelle',
    choises: minus,
    facet: 'O3'
  },
  {
    text: 'Bruker ikke tid på andre',
    choises: minus,
    facet: 'A3'
  },
  {
    text: 'Bryter det jeg har lovet',
    choises: minus,
    facet: 'C3'
  },
  {
    text: 'Føler meg ikke brydd i vanskelige sosiale situasjoner',
    choises: minus,
    facet: 'N4'
  },
  {
    text: 'Liker å ta det rolig',
    choises: minus,
    facet: 'E4'
  },
  {
    text: 'Vil helst ta tradisjonelle valg',
    choises: minus,
    facet: 'O4'
  },
  {
    text: 'Hevner meg på andre',
    choises: minus,
    facet: 'A4'
  },
  {
    text: 'Investerer lite tid og innsats i arbeidet mitt',
    choises: minus,
    facet: 'C4'
  },
  {
    text: 'Er i stand til kontrollere mine lyster',
    choises: minus,
    facet: 'N5'
  },
  {
    text: 'Oppfører meg hemningsløst og vilt',
    choises: plus,
    facet: 'E5'
  },
  {
    text: 'Er ikke interesert i teoretiske diskusjoner',
    choises: minus,
    facet: 'O5'
  },
  {
    text: 'Skryter av mine fortrinn',
    choises: minus,
    facet: 'A5'
  },
  {
    text: 'Har vanskeligheter med å komme i gang med oppgaver',
    choises: minus,
    facet: 'C5'
  },
  {
    text: 'Er rolig hvis jeg blir presset',
    choises: minus,
    facet: 'N6'
  },
  {
    text: 'Ser lyst på livet',
    choises: plus,
    facet: 'E6'
  },
  {
    text: 'Synes at vi skal slå hardt ned på kriminalitet',
    choises: minus,
    facet: 'O6'
  },
  {
    text: 'Prøver ikke å tenke på de trengende',
    choises: minus,
    facet: 'A6'
  },
  {
    text: 'Handler uten å tenke',
    choises: minus,
    facet: 'C6'
  }
]
