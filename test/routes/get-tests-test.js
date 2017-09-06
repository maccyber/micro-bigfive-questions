const test = require('ava')
const listen = require('test-listen')
const axios = require('axios')
const micro = require('micro')
const srv = require('../../index')
const expectedTests = require('./data/data.json')

const getUrl = fn => {
  const srv = micro(fn)
  return listen(srv)
}

test('it returns expected tests at /tests', async t => {
  const url = await getUrl(srv)
  const result = await axios.get(`${url}/tests`)
  const data = result.data.map(res => {
    res.url = res.url.replace(url, 'http://localhost:3000')
    return res
  })
  t.deepEqual(data, expectedTests, 'tests ok')
})
