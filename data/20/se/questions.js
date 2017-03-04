'use strict'

const {plus, minus} = require('./choices')

module.exports = [
  {
    test: 'Mini-IPIP',
    link: 'http://ipip.ori.org/MiniIPIPKey.htm',
    info: 'test info ...'
  },
  {
    text: 'Är den som håller igång på ett party',
    choises: plus,
    code: ['H34', 'X94'],
    domain: 'E'
  },
  {
    text: 'Pratar med en massa olika människor på fester',
    choises: plus,
    code: ['X83'],
    domain: 'E'
  },
  {
    text: 'Pratar inte mycket',
    choises: minus,
    code: ['X56'],
    domain: 'E'
  },
  {
    text: 'Håller mig i bakgrunden',
    choises: minus,
    code: ['H154', 'X34'],
    domain: 'E'
  },
  {
    text: 'Sympatiserar med andras känslor',
    choises: plus,
    code: ['H1130'],
    domain: 'A'
  },
  {
    text: 'Känner andra människors känslor',
    choises: plus,
    code: ['E136'],
    domain: 'A'
  },
  {
    text: 'Är egentligen inte intresserad av andra',
    choises: minus,
    code: ['X165'],
    domain: 'A'
  },
  {
    text: 'Är inte intresserad av andra människors problem',
    choises: minus,
    code: ['X227'],
    domain: 'A'
  },
  {
    text: 'Fullföljer mina plikt så snart som möjligt',
    choises: plus,
    code: ['T321'],
    domain: 'C'
  },
  {
    text: 'Tycker om ordning',
    choises: plus,
    code: ['X118'],
    domain: 'C'
  },
  {
    text: 'Glömmer ofta att lägga tillbaka saker på sin plats',
    choises: minus,
    code: ['X82'],
    domain: 'C'
  },
  {
    text: 'Skapar oreda omkring mig',
    choises: minus,
    code: ['H1467'],
    domain: 'C'
  },
  {
    text: 'Har ofta förekommande humörsvängningar',
    choises: plus,
    code: ['E92'],
    domain: 'N'
  },
  {
    text: 'Blir lätt upprörd',
    choises: plus,
    code: ['X95'],
    domain: 'N'
  },
  {
    text: 'Är avslappnad för det mesta',
    choises: minus,
    code: ['E141'],
    domain: 'N'
  },
  {
    text: 'Känner mig sällan nere',
    choises: minus,
    code: ['X156'],
    domain: 'N'
  },
  {
    text: 'Har en livlig fantasi',
    choises: plus,
    code: ['X14'],
    domain: 'O'
  },
  {
    text: 'Har svårt att förstå abstrakta idéer',
    choises: minus,
    code: ['X176'],
    domain: 'O'
  },
  {
    text: 'Är inte intresserad av abstrakta idéer',
    choises: minus,
    code: ['X228'],
    domain: 'O'
  },
  {
    text: 'Är fantasilös',
    choises: minus,
    code: ['X272'],
    domain: 'O'
  }
]
