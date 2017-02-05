'use strict'

const tap = require('tap')
const calculateScore = require('../../lib/calculate-score')
const compileQuestions = require('../../lib/compile-questions')
const questions = compileQuestions({language: 'en', items: '10'})
const answers = Array.from({length: 50}, (v, i) => i).map(num => Object.assign({id: num + 1, score: 3}))

const score = calculateScore({template: questions, answers: answers})

tap.equal(score['E'], 30, 'It calculates 30 for E')

tap.equal(score['A'], 30, 'It calculates 30 for A')

tap.equal(score['C'], 30, 'It calculates 30 for C')

tap.equal(score['N'], 30, 'It calculates 30 for N')

tap.equal(score['O'], 30, 'It calculates 30 for O')
