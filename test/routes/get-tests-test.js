'use strict'

const test = require('ava')
const listen = require('test-listen')
const axios = require('axios')
const micro = require('micro')
const srv = require('../../index')
const expectedTests = ['100', '120', '20', '240', '50', 'asrs', 'hexaco']

const getUrl = fn => {
  const srv = micro(fn)
  return listen(srv)
}

test('it returns expected tests at /getTests', async t => {
  const url = await getUrl(srv)
  const result = await axios.get(`${url}/getTests`)
  t.deepEqual(result.data, expectedTests, 'tests ok')
})
