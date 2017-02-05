'use strict'

const { parse } = require('url')
const { json, send } = require('micro')
const getQuestions = require('./lib/get-questions')
const calculateScore = require('./lib/calculate-score')
const compileQuestions = require('./lib/compile-questions')

module.exports = async (req, res) => {
  let result = {}
  const {pathname, query} = await parse(req.url, true)
  const data = req.method === 'POST' ? await json(req) : query

  if (pathname === '/calculate') {
    result = calculateScore({template: compileQuestions({language: data.lang, items: data.items}), answers: data.answers})
  } else {
    const opts = {
      url: req.encrypted ? `https://${req.headers.host}` : `https://${req.headers.host}`,
      page: parseInt(data.page) || 1,
      langCode: data.lang || 'en',
      limit: parseInt(data.limit) || 5
    }
    result = getQuestions(opts)
  }

  let status = result.error ? 500 : 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, status, result)
}
