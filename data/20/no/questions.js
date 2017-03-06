'use strict'

const {plus, minus} = require('./choices')

module.exports = [
  {
    test: 'Mini-IPIP',
    link: 'http://ipip.ori.org/MiniIPIPKey.htm',
    info: 'test info ...'
  },
  {
    text: 'Am the life of the party',
    choises: plus,
    code: ['H34', 'X94'],
    domain: 'E'
  },
  {
    text: 'Talk to a lot of different people at parties',
    choises: plus,
    code: ['X83'],
    domain: 'E'
  },
  {
    text: "Don't talk a lot",
    choises: minus,
    code: ['X56'],
    domain: 'E'
  },
  {
    text: 'Keep in the background',
    choises: minus,
    code: ['H154', 'X34'],
    domain: 'E'
  },
  {
    text: "Sympathize with others' feelings.",
    choises: plus,
    code: ['H1130'],
    domain: 'A'
  },
  {
    text: "Feel others' emotions",
    choises: plus,
    code: ['E136'],
    domain: 'A'
  },
  {
    text: 'Am not really interested in others',
    choises: minus,
    code: ['X165'],
    domain: 'A'
  },
  {
    text: "Am not interested in other people's problems",
    choises: minus,
    code: ['X227'],
    domain: 'A'
  },
  {
    text: 'Get chores done right away',
    choises: plus,
    code: ['T321'],
    domain: 'C'
  },
  {
    text: 'Like order',
    choises: plus,
    code: ['X118'],
    domain: 'C'
  },
  {
    text: 'Often forget to put things back in their proper place',
    choises: minus,
    code: ['X82'],
    domain: 'C'
  },
  {
    text: 'Make a mess of things',
    choises: minus,
    code: ['H1467'],
    domain: 'C'
  },
  {
    text: 'Have frequent mood swings',
    choises: plus,
    code: ['E92'],
    domain: 'N'
  },
  {
    text: 'Get upset easily',
    choises: plus,
    code: ['X95'],
    domain: 'N'
  },
  {
    text: 'Am relaxed most of the time',
    choises: minus,
    code: ['E141'],
    domain: 'N'
  },
  {
    text: 'Seldom feel blue',
    choises: minus,
    code: ['X156'],
    domain: 'N'
  },
  {
    text: 'Have a vivid imagination',
    choises: plus,
    code: ['X14'],
    domain: 'O'
  },
  {
    text: 'Have difficulty understanding abstract ideas',
    choises: minus,
    code: ['X176'],
    domain: 'O'
  },
  {
    text: 'Am not interested in abstract ideas',
    choises: minus,
    code: ['X228'],
    domain: 'O'
  },
  {
    text: 'Do not have a good imagination',
    choises: minus,
    code: ['X272'],
    domain: 'O'
  }
]
