const fs = require('fs')
const resolvePath = require('path').resolve
const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(p + '/' + f).isDirectory())

module.exports = opts => {
  const path = resolvePath(`./data/${opts.testType}/${opts.lang}/questions.js`)
  const file = fs.existsSync(path) ? require(path) : false

  if (!file) {
    return { error: `${path} not found` }
  }

  const testInfo = file[0]
  const choisesScores = file[1].choises.map(c => c.score)
  const questions = file.slice(1, file.length - 1).map(q => Object.assign({}, q, {id: file.indexOf(q)}))

  const info = {
    totalQuestions: file.length - 1,
    lang: opts.lang,
    scoreMax: Math.max(...choisesScores),
    scoreMin: Math.min(...choisesScores),
    domains: new Set(questions.map(q => q.domain)).size,
    facets: questions[0].facet ? new Set(questions.map(q => `${q.domain}${q.facet})`)).size : 0,
    id: opts.testType,
    languages: dirs(resolvePath(`data/${opts.testType}`))
  }

  return {
    info: Object.assign(testInfo, info),
    questions: testInfo.shuffle ? questions.sort(Math.random() - 0.5) : questions
  }
}
