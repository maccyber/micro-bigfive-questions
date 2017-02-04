'use strict'

const tap = require('tap')
const calculatePersonality = require('../../lib/calculate-personality')
const template = require('../../data/en/questions-short')
const answers = require('../data/answers-short-median.json')
const score = calculatePersonality({template: template, answers: answers})

tap.equal(score['E'], 20, 'It calculates 20 for E')

tap.equal(score['A'], 20, 'It calculates 20 for A')

tap.equal(score['C'], 20, 'It calculates 20 for C')

tap.equal(score['N'], 20, 'It calculates 20 for N')

tap.equal(score['O'], 20, 'It calculates 20 for O')
