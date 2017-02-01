'use strict'

const { parse } = require('url')
const { json, send } = require('micro')
const getQuestions = require('./lib/get-questions')

module.exports = async (req, res) => {
  const data = req.method === 'POST' ? await json(req) : parse(req.url, true).query
  const opts = {
    url: req.encrypted ? `https://${req.headers.host}` : `https://${req.headers.host}`,
    page: parseInt(data.page) || 1,
    langCode: data.lang || 'en',
    limit: parseInt(data.limit) || 5
  }
  const q = getQuestions(opts)
  let status = q.error ? 500 : 200
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, status, q)
}
