'use strict'

const summarize = (a, b) => a + b
const objectize = (a, b) => {
  a[b.id] = b
  return a
}

module.exports = data => {
  if (!data || !data.template || !data.answers) {
    return {error: 'Missing required input'}
  }

  const questions = data.template.reduce(objectize, {})
  const answers = data.answers
  let score = {
    E: [],
    A: [],
    C: [],
    N: [],
    O: []
  }

  if (answers.length !== Object.keys(questions).length) {
    return {error: 'Mismatch of questions and  answers length'}
  }

  answers.forEach(answer => {
    const template = questions[answer.id]
    const data = parseInt(answer.score, 10)
    score[template.factor].push(data)
  })

  score['E'] = score['E'].reduce(summarize, 0)
  score['A'] = score['A'].reduce(summarize, 0)
  score['C'] = score['C'].reduce(summarize, 0)
  score['N'] = score['N'].reduce(summarize, 0)
  score['O'] = score['O'].reduce(summarize, 0)

  return score
}
