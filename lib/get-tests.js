const fs = require('fs')
const resolvePath = require('path').resolve
const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(p + '/' + f).isDirectory())

module.exports = opts => {
  const a = dirs(resolvePath(`data/`))
  console.log(a)
  return a
}
