const shuffle = require('knuth-shuffle').knuthShuffle
const getQuestions = require('./lib/get-questions')
const fs = require('fs')
const util = require('util')

const q = getQuestions(
  {
    testType: 'hexaco',
    langCode: 'en',
    page: 1,
    limit: 240,
    url: 'aa'
  }
)

const e = shuffle(q.questions.slice(0))

const r = e.map(d => {
    delete d.id
    return d
  }
)

fs.writeFileSync('file.js', util.inspect(r, { depth: 10, maxArrayLength: 300 }))
