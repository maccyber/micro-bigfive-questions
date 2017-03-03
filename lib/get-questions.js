'use strict'

const fs = require('fs')
const resolvePath = require('path').resolve
const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(p + '/' + f).isDirectory())

module.exports = opts => {
  const path = resolvePath(`./data/${opts.testType}/${opts.langCode}/questions.js`)
  const file = fs.existsSync(path) ? require(path) : false
  if (!file) {
    return { error: `${path} not found` }
  } else if (opts.page > Math.round(file.length / opts.limit)) {
    return { error: 'Reached page limit' }
  }
  let res = {
    totalQuestions: file.length - 1,
    limit: opts.limit,
    totalPages: Math.round(file.length / opts.limit),
    percentDone: Math.round(opts.page / ((file.length - 1) / opts.limit) * 100),
    page: opts.page,
    langCode: opts.langCode,
    languages: dirs(resolvePath(`data/${opts.testType}`)),
    from: (opts.page - 1) * (opts.limit + 1),
    to: (opts.page - 1) * (opts.limit + 1 + opts.limit),
    testInfo: file[0]
  }
  res.next = res.page === res.totalPages ? false : `${opts.url}?page=${opts.page + 1}`
  res.previous = opts.page === 1 ? false : `${opts.url}?page=${opts.page - 1}`
  const reqQuestions = file.slice(res.from, res.to)
  res.questions = reqQuestions.map(q => Object.assign({}, q, {id: file.indexOf(q)}))
  return res
}
