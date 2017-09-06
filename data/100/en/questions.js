const {plus, minus} = require('./choices')
const info = require('../index')

module.exports = [
  info,
  {
    text: 'Believe in the importance of art',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Have a vivid imagination',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Tend to vote for liberal political candidates',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Carry the conversation to a higher level',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Enjoy hearing new ideas',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Enjoy thinking about things',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Can say things beautifully',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Enjoy wild flights of fantasy',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Get excited by new ideas',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Have a rich vocabulary',
    choises: plus,
    domain: 'O'
  },
  {
    text: 'Am not interested in abstract ideas',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Do not like art',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Avoid philosophical discussions',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Do not enjoy going to art museums',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Tend to vote for conservative political candidates',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Do not like poetry',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Rarely look for a deeper meaning in things',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Believe that too much tax money goes to support artists',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Am not interested in theoretical discussions',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Have difficulty understanding abstract ideas',
    choises: minus,
    domain: 'O'
  },
  {
    text: 'Often feel blue',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Dislike myself',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Am often down in the dumps',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Have frequent mood swings',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Panic easily',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Am filled with doubts about things',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Feel threatened easily',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Get stressed out easily',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Fear for the worst',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Worry about things',
    choises: plus,
    domain: 'N'
  },
  {
    text: 'Seldom feel blue',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Feel comfortable with myself',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Rarely get irritated',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Am not easily bothered by things',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Am very pleased with myself',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Am relaxed most of the time',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Seldom get mad',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Am not easily frustrated',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Remain calm under pressure',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Rarely lose my composure',
    choises: minus,
    domain: 'N'
  },
  {
    text: 'Feel comfortable around people',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Make friends easily',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Am skilled in handling social situations',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Am the life of the party',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Know how to captivate people',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Start conversations',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Warm up quickly to others',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Talk to a lot of different people at parties',
    choises: plus,
    domain: 'E'
  },
  {
    text: "Don't mind being the center of attention",
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Cheer people up',
    choises: plus,
    domain: 'E'
  },
  {
    text: 'Have little to say',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Keep in the background',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Would describe my experiences as somewhat dull',
    choises: minus,
    domain: 'E'
  },
  {
    text: "Don't like to draw attention to myself",
    choises: minus,
    domain: 'E'
  },
  {
    text: "Don't talk a lot",
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Avoid contacts with others',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Am hard to get to know',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Retreat from others',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Find it difficult to approach others',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Keep others at a distance',
    choises: minus,
    domain: 'E'
  },
  {
    text: 'Am always prepared',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Pay attention to details',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Get chores done right away',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Carry out my plans',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Make plans and stick to them',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Complete tasks successfully',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Do things according to a plan',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Am exacting in my work',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Finish what I start',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Follow through with my plans',
    choises: plus,
    domain: 'C'
  },
  {
    text: 'Waste my time',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Find it difficult to get down to work',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Do just enough work to get by',
    choises: minus,
    domain: 'C'
  },
  {
    text: "Don't see things through",
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Shirk my duties',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Mess things up',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Leave things unfinished',
    choises: minus,
    domain: 'C'
  },
  {
    text: "Don't put my mind on the task at hand",
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Make a mess of things',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Need a push to get started',
    choises: minus,
    domain: 'C'
  },
  {
    text: 'Have a good word for everyone',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Believe that others have good intentions',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Respect others',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Accept people as they are',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Make people feel at ease',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Am concerned about others',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Trust what people say',
    choises: plus,
    domain: 'A'
  },
  {
    text: "Sympathize with others' feelings",
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Am easy to satisfy',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Treat all people equally',
    choises: plus,
    domain: 'A'
  },
  {
    text: 'Have a sharp tongue',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Cut others to pieces',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Suspect hidden motives in others',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Get back at others',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Insult people',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Believe that I am better than others',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Contradict others',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Make demands on others',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Hold a grudge',
    choises: minus,
    domain: 'A'
  },
  {
    text: 'Am out for my own personal gain',
    choises: minus,
    domain: 'A'
  }
]
