'use strict'

const fs = require('fs')

const flatten = (a, b) => a.concat(b)

const unwrap = dict => {
  const unwrapped = dict.questions
                      .map(question => Object.assign({factor: dict.factor, text: question, keyed: dict.keyed}))

  return unwrapped
}

module.exports = options => {
  if (!options || !options.language || !options.items) {
    throw new Error('Missing required input')
  }

  const isItem = filename => filename.includes(options.items)

  const questionFiles = fs.readdirSync(`raw/${options.language}`).filter(isItem)

  const questions = questionFiles
                      .map(fileName => fileName.split('-'))
                      .map(arr => Object.assign({factor: arr[0], keyed: arr[2].replace('.json', ''), name: arr.join('-')}))
                      .map(dict => Object.assign(dict, {questions: require(`../raw/${options.language}/${dict.name}`)}))
                      .map(unwrap)
                      .reduce(flatten, [])
                      .map((item, index) => Object.assign({id: index + 1}, item))

  return questions
}
