'use strict'

const { parse } = require('url')
const { json, send } = require('micro')
const getQuestions = require('./lib/get-questions')

module.exports = async (req, res) => {
  try {
    const data = req.method === 'POST' ? await json(req) : parse(req.url, true).query
    const opts = {
      page: parseInt(data.page) || 1,
      langCode: data.lang || 'en',
      limit: parseInt(data.limit) || 5
    }
    const questions = getQuestions(opts)
    if (!questions) {
      send(res, 404)
    } else {
      send(res, 200, questions)
    }
  } catch (err) {
    send(res, 500, err)
  }
}
