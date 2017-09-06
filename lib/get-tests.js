const fs = require('fs')
const resolvePath = require('path').resolve
const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(`${p}/${f}`).isDirectory())

const getInfo = files => {
  return files.map(file => {
    const path = resolvePath(`./data/${file}/index.js`)
    const testInfo = Object.assign(require(path), { id: file })
    return testInfo
  })
}

module.exports = opts => {
  const tests = dirs(resolvePath('data/'))
  return getInfo(tests)
}
