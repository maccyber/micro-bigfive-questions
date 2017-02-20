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
    domain: 'E'
  },
  {
    text: 'Talk to a lot of different people at parties',
    choises: plus,
    domain: 'E'
  },
  {
    text: "Don't talk a lot",
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Keep in the background',
    choises: minus,
    domain: 'E'
  },
  {
    text: "Sympathize with others' feelings.",
    choises: plus,
    domain: 'A'
  },
  {
    text: "Feel others' emotions",
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Am not really interested in others',
    choises: minus,
    domain: 'A'
  },
  {
    text: "Am not interested in other people's problems.",
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Get chores done right away',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Like order',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Often forget to put things back in their proper place',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Make a mess of things',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Have frequent mood swings',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Get upset easily',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Am relaxed most of the time',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Seldom feel blue',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Have a vivid imagination',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Have difficulty understanding abstract ideas',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Am not interested in abstract ideas',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Do not have a good imagination',
    choises: minus,
    domain: 'O'
  }
]
