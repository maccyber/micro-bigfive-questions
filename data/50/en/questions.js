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
    facet: 'O'
  },
  {
    text: 'Have a vivid imagination',
    choises: plus,
    facet: 'O'
  },
  {
    text: 'Tend to vote for liberal political candidates',
    choises: plus,
    facet: 'O'
  },
  {
    text: 'Carry the conversation to a higher level',
    choises: plus,
    facet: 'O'
  },
  {
    text: 'Enjoy hearing new ideas',
    choises: plus,
    facet: 'O'
  },
  {
    text: 'Am not interested in abstract ideas',
    choises: minus,
    facet: 'O'
  },
  {
    text: 'Do not like art',
    choises: minus,
    facet: 'O'
  },
  {
    text: 'Avoid philosophical discussions',
    choises: minus,
    facet: 'O'
  },
  {
    text: 'Do not enjoy going to art museums',
    choises: minus,
    facet: 'O'
  },
  {
    text: 'Tend to vote for conservative political candidates',
    choises: minus,
    facet: 'O'
  },
  {
    text: 'Often feel blue',
    choises: plus,
    facet: 'N'
  },
  {
    text: 'Dislike myself',
    choises: plus,
    facet: 'N'
  },
  {
    text: 'Am often down in the dumps',
    choises: plus,
    facet: 'N'
  },
  {
    text: 'Have frequent mood swings',
    choises: plus,
    facet: 'N'
  },
  {
    text: 'Panic easily',
    choises: plus,
    facet: 'N'
  },
  {
    text: 'Rarely get irritated',
    choises: minus,
    facet: 'N'
  },
  {
    text: 'Seldom feel blue',
    choises: minus,
    facet: 'N'
  },
  {
    text: 'Feel comfortable with myself',
    choises: minus,
    facet: 'N'
  },
  {
    text: 'Am not easily bothered by things',
    choises: minus,
    facet: 'N'
  },
  {
    text: 'Am very pleased with myself',
    choises: minus,
    facet: 'N'
  },
  {
    text: 'Feel comfortable around people',
    choises: plus,
    facet: 'E'
  },
  {
    text: 'Make friends easily',
    choises: plus,
    facet: 'E'
  },
  {
    text: 'Am skilled in handling social situations',
    choises: plus,
    facet: 'E'
  },
  {
    text: 'Am the life of the party',
    choises: plus,
    facet: 'E'
  },
  {
    text: 'Know how to captivate people',
    choises: plus,
    facet: 'E'
  },
  {
    text: 'Have little to say',
    choises: minus,
    facet: 'E'
  },
  {
    text: 'Keep in the background',
    choises: minus,
    facet: 'E'
  },
  {
    text: 'Would describe my experiences as somewhat dull',
    choises: minus,
    facet: 'E'
  },
  {
    text: "Don't like to draw attention to myself",
    choises: minus,
    facet: 'E'
  },
  {
    text: "Don't talk a lot",
    choises: minus,
    facet: 'E'
  },
  {
    text: 'Am always prepared',
    choises: plus,
    facet: 'C'
  },
  {
    text: 'Pay attention to details',
    choises: plus,
    facet: 'C'
  },
  {
    text: 'Get chores done right away',
    choises: plus,
    facet: 'C'
  },
  {
    text: 'Carry out my plans',
    choises: plus,
    facet: 'C'
  },
  {
    text: 'Make plans and stick to them',
    choises: plus,
    facet: 'C'
  },
  {
    text: 'Waste my time',
    choises: minus,
    facet: 'C'
  },
  {
    text: 'Find it difficult to get down to work',
    choises: minus,
    facet: 'C'
  },
  {
    text: 'Do just enough work to get by',
    choises: minus,
    facet: 'C'
  },
  {
    text: "Don't see things through",
    choises: minus,
    facet: 'C'
  },
  {
    text: 'Shirk my duties',
    choises: minus,
    facet: 'C'
  },
  {
    text: 'Have a good word for everyone',
    choises: plus,
    facet: 'A'
  },
  {
    text: 'Believe that others have good intentions',
    choises: plus,
    facet: 'A'
  },
  {
    text: 'Respect others',
    choises: plus,
    facet: 'A'
  },
  {
    text: 'Accept people as they are',
    choises: plus,
    facet: 'A'
  },
  {
    text: 'Make people feel at ease',
    choises: plus,
    facet: 'A'
  },
  {
    text: 'Have a sharp tongue',
    choises: minus,
    facet: 'A'
  },
  {
    text: 'Cut others to pieces"',
    choises: minus,
    facet: 'A'
  },
  {
    text: 'Suspect hidden motives in others',
    choises: minus,
    facet: 'A'
  },
  {
    text: 'Get back at others',
    choises: minus,
    facet: 'A'
  },
  {
    text: 'Insult people',
    choises: minus,
    facet: 'A'
  }
]
