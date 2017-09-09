const fs = require('fs')
const resolvePath = require('path').resolve
const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(`${p}/${f}`).isDirectory())

const getInfo = (files, url) => {
  return files.map(file => {
    const path = resolvePath(`./data/${file}/index.js`)
    return Object.assign(require(path), { id: file, url: `${url}?testType=${file}` })
  })
}

module.exports = opts => {
  const tests = dirs(resolvePath('data/'))
  const testList = getInfo(tests, opts.url)
  const sortedTestList = testList.sort((a, b) => b.default - a.default || b.active - a.active)
  return sortedTestList
}
