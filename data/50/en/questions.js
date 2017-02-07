'use strict'

const {plus, minus} = require('./choices')

module.exports = [
  {
    test: '50-IPIP-NEO-PI-R',
    link: 'http://ipip.ori.org/newNEODomainsKey.htm'
  },
  {
    text: 'Believe in the importance of art',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Have a vivid imagination',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Tend to vote for liberal political candidates',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Carry the conversation to a higher level',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Enjoy hearing new ideas',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Am not interested in abstract ideas',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Do not like art',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Avoid philosophical discussions',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Do not enjoy going to art museums',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Tend to vote for conservative political candidates',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Often feel blue',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Dislike myself',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Am often down in the dumps',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Have frequent mood swings',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Panic easily',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Rarely get irritated',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Seldom feel blue',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Feel comfortable with myself',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Am not easily bothered by things',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Am very pleased with myself',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Feel comfortable around people',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Make friends easily',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Am skilled in handling social situations',
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
    text: 'Have little to say',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Keep in the background',
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
    text: "Don't talk a lot",
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Am always prepared',
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
    text: 'Carry out my plans',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Make plans and stick to them',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Waste my time',
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
    text: 'Respect others',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Accept people as they are',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Make people feel at ease',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Have a sharp tongue',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Cut others to pieces"',
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
    text: 'Insult people',
    choises: minus,
    domain: 'A'
  }
]
