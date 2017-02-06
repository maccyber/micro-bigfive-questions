'use strict'

const objectize = (a, b) => {
  a[b.id] = b
  return a
}

const reduceFactors = (a, b) => {
  a[b.factor] = a[b.factor] || 0
  a[b.factor] += parseInt(b.score || 0, 10)

  return a
}

module.exports = data => {
  if (!data || !data.template || !data.answers) {
    return {error: 'Missing required input'}
  }

  const questions = data.template.reduce(objectize, {})
  const answers = data.answers.reduce(objectize, {})

  if (Object.keys(answers).length !== Object.keys(questions).length) {
    return {error: 'Mismatch of questions and  answers length'}
  }

  const combined = Object.keys(questions).map(key => Object.assign({factor: questions[key].factor, score: answers[key].score}))

  return combined.reduce(reduceFactors, {})
}
