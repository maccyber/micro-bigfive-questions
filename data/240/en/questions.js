'use strict'

const {plus, minus} = require('./choices')

module.exports = [
  {
    test: 'Costa-McCrae-30-facet-IPIP-NEO-PI-R',
    link: 'http://ipip.ori.org/newNEOFacetsKey.htm',
    info: 'test info ...'
  },
  {
    text: 'Worry about things',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Fear for the worst',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Am afraid of many things',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Get stressed out easily',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Get caught up in my problems',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Am not easily bothered by things',
    choises: minus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Am relaxed most of the time',
    choises: minus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Am not easily disturbed by events',
    choises: minus,
    domain: 'N',
    facet: 1
  },
  {
    text: "Don't worry about things that have already happened",
    choises: minus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Adapt easily to new situations',
    choises: minus,
    domain: 'N',
    facet: 1
  }
]
