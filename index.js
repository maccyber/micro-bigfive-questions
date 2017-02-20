'use strict'

const readFileSync = require('fs').readFileSync
const marked = require('marked')
const { parse } = require('url')
const { json, send } = require('micro')
const getQuestions = require('./lib/get-questions')
const getTests = require('./lib/get-tests')

module.exports = async (req, res) => {
  const {query, pathname} = await parse(req.url, true)
  const data = req.method === 'POST' ? await json(req) : query
  let result = {}
  if (pathname === '/getQuestions') {
    const opts = {
      url: req.encrypted ? `https://${req.headers.host}/getQuestions` : `https://${req.headers.host}/getQuestions`,
      page: parseInt(data.page) || 1,
      langCode: data.lang || 'en',
      testType: data.testType || '120',
      limit: parseInt(data.limit) || 5
    }
    result = getQuestions(opts)
  } else if (pathname === '/getTests') {
    result = getTests({})
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    result = marked(readme)
  }
  let status = result.error ? 500 : 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, status, result)
}
