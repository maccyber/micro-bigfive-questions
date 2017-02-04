'use strict'

const tap = require('tap')
const calculateScore = require('../../lib/calculate-score')
const template = require('../../data/en/questions-10-item-scale')
const answers = require('../data/answers-10-item-median.json')
const score = calculateScore({template: template, answers: answers})

tap.equal(score['E'], 30, 'It calculates 30 for E')

tap.equal(score['A'], 30, 'It calculates 30 for A')

tap.equal(score['C'], 30, 'It calculates 30 for C')

tap.equal(score['N'], 30, 'It calculates 30 for N')

tap.equal(score['O'], 30, 'It calculates 30 for O')
