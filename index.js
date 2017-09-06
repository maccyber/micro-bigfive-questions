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
  if (pathname === '/questions') {
    const opts = {
      lang: data.lang || 'en',
      testType: data.testType || '120'
    }
    result = getQuestions(opts)
  } else if (pathname === '/tests') {
    const opts = {
      url: req.connection.encrypted ? `https://${req.headers.host}/questions` : `http://${req.headers.host}/questions`
    }
    result = getTests(opts)
  } else {
    const readme = readFileSync('./README.md', 'utf-8')
    result = marked(readme)
  }
  let status = result.error ? 500 : 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, status, result)
}
