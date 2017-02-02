'use strict'

const resolvePath = require('path').resolve
const isFile = require('fs').existsSync

module.exports = opts => {
  const path = resolvePath(`./data/${opts.langCode}/questions.js`)
  const file = isFile(path) ? require(path).default : false
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
    from: (opts.page - 1) * opts.limit + 1,
    to: (opts.page - 1) * opts.limit + 1 + opts.limit,
    choises: require(path).choises
  }
  res.next = res.page === res.totalPages ? false : `${opts.url}/?page=${opts.page + 1}`
  res.previous = opts.page === 1 ? false :`${opts.url}/?page=${opts.page - 1}`
  const reqQuestions = file.slice(res.from, res.to)
  res.questions = reqQuestions.map(q => { return { id: file.indexOf(q), text: q } })
  return res
}
