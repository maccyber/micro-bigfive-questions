'use strict'

const tap = require('tap')
const calculateScore = require('../../lib/calculate-score')
const compileQuestions = require('../../lib/compile-questions')
const questions = compileQuestions({language: 'en', items: '20'})
const answers = Array.from({length: 100}, (v, i) => i).map(num => Object.assign({id: num + 1, score: 3}))

const score = calculateScore({template: questions, answers: answers})

tap.equal(score['E'], 60, 'It calculates 60 for E')

tap.equal(score['A'], 60, 'It calculates 60 for A')

tap.equal(score['C'], 60, 'It calculates 60 for C')

tap.equal(score['N'], 60, 'It calculates 60 for N')

tap.equal(score['O'], 60, 'It calculates 60 for O')
