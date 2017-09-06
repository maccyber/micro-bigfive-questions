const {plus, minus} = require('./choices')
const info = require('../index')

module.exports = [
  info,
  {
    text: 'Worry about things',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Fear for the worst',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Am afraid of many things',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Get stressed out easily',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Get caught up in my problems',
    choises: plus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Am not easily bothered by things',
    choises: minus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Am relaxed most of the time',
    choises: minus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Am not easily disturbed by events',
    choises: minus,
    domain: 'N',
    facet: 1
  },
  {
    text: "Don't worry about things that have already happened",
    choises: minus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Adapt easily to new situations',
    choises: minus,
    domain: 'N',
    facet: 1
  },
  {
    text: 'Get angry easily',
    choises: plus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Get irritated easily',
    choises: plus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Get upset easily',
    choises: plus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Am often in a bad mood',
    choises: plus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Lose my temper',
    choises: plus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Rarely get irritated',
    choises: minus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Seldom get mad',
    choises: minus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Am not easily annoyed',
    choises: minus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Keep my cool',
    choises: minus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Rarely complain',
    choises: minus,
    domain: 'N',
    facet: 2
  },
  {
    text: 'Often feel blue',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Dislike myself',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Am often down in the dumps',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Have a low opinion of myself',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Have frequent mood swings',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Feel desperate',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Feel that my life lacks direction',
    choises: plus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Seldom feel blue',
    choises: minus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Feel comfortable with myself',
    choises: minus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Am very pleased with myself',
    choises: minus,
    domain: 'N',
    facet: 3
  },
  {
    text: 'Am easily intimidated',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Am afraid that I will do the wrong thing',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Find it difficult to approach others',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Am afraid to draw attention to myself',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Only feel comfortable with friends',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Stumble over my words',
    choises: plus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Am not embarrassed easily',
    choises: minus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Am comfortable in unfamiliar situations',
    choises: minus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Am not bothered by difficult social situations',
    choises: minus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Am able to stand up for myself',
    choises: minus,
    domain: 'N',
    facet: 4
  },
  {
    text: 'Often eat too much',
    choises: plus,
    domain: 'N',
    facet: 5
  },
  {
    text: "Don't know why I do some of the things I do",
    choises: plus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Do things I later regret',
    choises: plus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Go on binges',
    choises: plus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Love to eat',
    choises: plus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Rarely overindulge',
    choises: minus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Easily resist temptations',
    choises: minus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Am able to control my cravings',
    choises: minus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Never spend more than I can afford',
    choises: minus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Never splurge',
    choises: minus,
    domain: 'N',
    facet: 5
  },
  {
    text: 'Panic easily',
    choises: plus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Become overwhelmed by events',
    choises: plus,
    domain: 'N',
    facet: 6
  },
  {
    text: "Feel that I'm unable to deal with things",
    choises: plus,
    domain: 'N',
    facet: 6
  },
  {
    text: "Can't make up my mind",
    choises: plus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Get overwhelmed by emotions',
    choises: plus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Remain calm under pressure',
    choises: minus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Can handle complex problems',
    choises: minus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Know how to cope',
    choises: minus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Readily overcome setbacks',
    choises: minus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Am calm even in tense situations',
    choises: minus,
    domain: 'N',
    facet: 6
  },
  {
    text: 'Make friends easily',
    choises: plus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Make friends easily',
    choises: plus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Feel comfortable around people',
    choises: plus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Act comfortably with others',
    choises: plus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Cheer people up',
    choises: plus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Am hard to get to know',
    choises: minus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Often feel uncomfortable around others',
    choises: minus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Avoid contacts with others',
    choises: minus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Am not really interested in others',
    choises: minus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Keep others at a distance',
    choises: minus,
    domain: 'E',
    facet: 1
  },
  {
    text: 'Love large parties',
    choises: plus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Talk to a lot of different people at parties',
    choises: plus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Enjoy being part of a group',
    choises: plus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Involve others in what I am doing',
    choises: plus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Love surprise parties',
    choises: plus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Prefer to be alone',
    choises: minus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Want to be left alone',
    choises: minus,
    domain: 'E',
    facet: 2
  },
  {
    text: "Don't like crowded events",
    choises: minus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Avoid crowds',
    choises: minus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Seek quiet',
    choises: minus,
    domain: 'E',
    facet: 2
  },
  {
    text: 'Take charge',
    choises: plus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Try to lead others',
    choises: plus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Can talk others into doing things',
    choises: plus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Seek to influence others',
    choises: plus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Take control of things',
    choises: plus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Wait for others to lead the way',
    choises: minus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Keep in the background',
    choises: minus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Have little to say',
    choises: minus,
    domain: 'E',
    facet: 3
  },
  {
    text: "Don't like to draw attention to myself",
    choises: minus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Hold back my opinions',
    choises: minus,
    domain: 'E',
    facet: 3
  },
  {
    text: 'Am always busy',
    choises: plus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Am always on the go',
    choises: plus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Do a lot in my spare time',
    choises: plus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Can manage many things at the same time',
    choises: plus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'React quickly',
    choises: plus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Like to take it easy',
    choises: minus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Like to take my time',
    choises: minus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Like a leisurely lifestyle',
    choises: minus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Let things proceed at their own pace',
    choises: minus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'React slowly',
    choises: minus,
    domain: 'E',
    facet: 4
  },
  {
    text: 'Love excitement',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Seek adventure',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Love action',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Enjoy being part of a loud crowd',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Enjoy being reckless',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Act wild and crazy',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Am willing to try anything once',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Seek danger',
    choises: plus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Would never go hang gliding or bungee jumping',
    choises: minus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Dislike loud music',
    choises: minus,
    domain: 'E',
    facet: 5
  },
  {
    text: 'Radiate joy',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Have a lot of fun',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Express childlike joy',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Laugh my way through life',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Love life',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Look at the bright side of life',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Laugh aloud',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Amuse my friends',
    choises: plus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Am not easily amused',
    choises: minus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Seldom joke around',
    choises: minus,
    domain: 'E',
    facet: 6
  },
  {
    text: 'Have a vivid imagination',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Enjoy wild flights of fantasy',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Love to daydream',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Like to get lost in thought',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Indulge in my fantasies',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Spend time reflecting on things',
    choises: plus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Seldom daydream',
    choises: minus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Do not have a good imagination',
    choises: minus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Seldom get lost in thought',
    choises: minus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Have difficulty imagining things',
    choises: minus,
    domain: 'O',
    facet: 1
  },
  {
    text: 'Believe in the importance of art',
    choises: plus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Like music',
    choises: plus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'See beauty in things that others might not notice',
    choises: plus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Love flowers',
    choises: plus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Enjoy the beauty of nature',
    choises: plus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Do not like art',
    choises: minus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Do not like poetry',
    choises: minus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Do not enjoy going to art museums',
    choises: minus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Do not like concerts',
    choises: minus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Do not enjoy watching dance performances',
    choises: minus,
    domain: 'O',
    facet: 2
  },
  {
    text: 'Experience my emotions intensely',
    choises: plus,
    domain: 'O',
    facet: 3
  },
  {
    text: "Feel others' emotions",
    choises: plus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Am passionate about causes',
    choises: plus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Enjoy examining myself and my life',
    choises: plus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Try to understand myself',
    choises: plus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Seldom get emotional',
    choises: minus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Am not easily affected by my emotions',
    choises: minus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Rarely notice my emotional reactions',
    choises: minus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Experience very few emotional highs and lows',
    choises: minus,
    domain: 'O',
    facet: 3
  },
  {
    text: "Don't understand people who get emotional",
    choises: minus,
    domain: 'O',
    facet: 3
  },
  {
    text: 'Prefer variety to routine',
    choises: plus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Like to visit new places',
    choises: plus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Am interested in many things',
    choises: plus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Like to begin new things',
    choises: plus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Prefer to stick with things that I know',
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Dislike changes',
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    text: "Don't like the idea of change",
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Am a creature of habit',
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Dislike new foods',
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Am attached to conventional ways',
    choises: minus,
    domain: 'O',
    facet: 4
  },
  {
    text: 'Like to solve complex problems',
    choises: plus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Love to read challenging material',
    choises: plus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Have a rich vocabulary',
    choises: plus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Can handle a lot of information',
    choises: plus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Enjoy thinking about things',
    choises: plus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Am not interested in abstract ideas',
    choises: minus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Avoid philosophical discussions',
    choises: minus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Have difficulty understanding abstract ideas',
    choises: minus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Am not interested in theoretical discussions',
    choises: minus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Avoid difficult reading material',
    choises: minus,
    domain: 'O',
    facet: 5
  },
  {
    text: 'Tend to vote for liberal political candidates',
    choises: plus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Believe that there is no absolute right and wrong',
    choises: plus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Believe that criminals should receive help rather than punishment',
    choises: plus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Believe in one true religion',
    choises: minus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Tend to vote for conservative political candidates',
    choises: minus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Believe that too much tax money goes to support artists',
    choises: minus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Believe laws should be strictly enforced',
    choises: minus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Believe that we coddle criminals too much',
    choises: minus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Believe that we should be tough on crime',
    choises: minus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Like to stand during the national anthem',
    choises: minus,
    domain: 'O',
    facet: 6
  },
  {
    text: 'Trust others',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Believe that others have good intentions',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Trust what people say',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Believe that people are basically moral',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Believe in human goodness',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Think that all will be well',
    choises: plus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Distrust people',
    choises: minus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Suspect hidden motives in others',
    choises: minus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Am wary of others',
    choises: minus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Believe that people are essentially evil',
    choises: minus,
    domain: 'A',
    facet: 1
  },
  {
    text: 'Would never cheat on my taxes',
    choises: plus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Stick to the rules',
    choises: plus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Use flattery to get ahead',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Use others for my own ends',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Know how to get around the rules',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Cheat to get ahead',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Put people under pressure',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Pretend to be concerned for others',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Take advantage of others',
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: "Obstruct others' plans",
    choises: minus,
    domain: 'A',
    facet: 2
  },
  {
    text: 'Make people feel welcome',
    choises: plus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Anticipate the needs of others',
    choises: plus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Love to help others',
    choises: plus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Am concerned about others',
    choises: plus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Have a good word for everyone',
    choises: plus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Look down on others',
    choises: minus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Am indifferent to the feelings of others',
    choises: minus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Make people feel uncomfortable',
    choises: minus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Turn my back on others',
    choises: minus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Take no time for others',
    choises: minus,
    domain: 'A',
    facet: 3
  },
  {
    text: 'Am easy to satisfy',
    choises: plus,
    domain: 'A',
    facet: 4
  },
  {
    text: "Can't stand confrontations",
    choises: plus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Hate to seem pushy',
    choises: plus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Have a sharp tongue',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Contradict others',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Love a good fight',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Yell at people',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Insult people',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Get back at others',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Hold a grudge',
    choises: minus,
    domain: 'A',
    facet: 4
  },
  {
    text: 'Dislike being the center of attention',
    choises: plus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Dislike talking about myself',
    choises: plus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Consider myself an average person',
    choises: plus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Seldom toot my own horn',
    choises: plus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Believe that I am better than others',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Think highly of myself',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Have a high opinion of myself',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Know the answers to many questions',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Boast about my virtues',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Make myself the center of attention',
    choises: minus,
    domain: 'A',
    facet: 5
  },
  {
    text: 'Sympathize with the homeless',
    choises: plus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Feel sympathy for those who are worse off than myself',
    choises: plus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Value cooperation over competition',
    choises: plus,
    domain: 'A',
    facet: 6
  },
  {
    text: "Suffer from others' sorrows",
    choises: plus,
    domain: 'A',
    facet: 6
  },
  {
    text: "Am not interested in other people's problems",
    choises: minus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Tend to dislike soft-hearted people',
    choises: minus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Believe in an eye for an eye',
    choises: minus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Try not to think about the needy',
    choises: minus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Believe people should fend for themselves',
    choises: minus,
    domain: 'A',
    facet: 6
  },
  {
    text: "Can't stand weak people",
    choises: minus,
    domain: 'A',
    facet: 6
  },
  {
    text: 'Complete tasks successfully',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Excel in what I do',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Handle tasks smoothly',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Am sure of my ground',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Come up with good solutions',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Know how to get things done',
    choises: plus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Misjudge situations',
    choises: minus,
    domain: 'C',
    facet: 1
  },
  {
    text: "Don't understand things",
    choises: minus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Have little to contribute',
    choises: minus,
    domain: 'C',
    facet: 1
  },
  {
    text: "Don't see the consequences of things",
    choises: minus,
    domain: 'C',
    facet: 1
  },
  {
    text: 'Like order',
    choises: plus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'Like to tidy up',
    choises: plus,
    domain: 'C',
    facet: 2
  },
  {
    text: "Want everything to be 'just right'",
    choises: plus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'Love order and regularity',
    choises: plus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'Do things according to a plan',
    choises: plus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'Often forget to put things back in their proper place',
    choises: minus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'Leave a mess in my room',
    choises: minus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'Leave my belongings around',
    choises: minus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'Am not bothered by messy people',
    choises: minus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'Am not bothered by disorder',
    choises: minus,
    domain: 'C',
    facet: 2
  },
  {
    text: 'Try to follow the rules',
    choises: plus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Keep my promises',
    choises: plus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Pay my bills on time',
    choises: plus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Tell the truth',
    choises: plus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Listen to my conscience',
    choises: plus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Break rules',
    choises: minus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Break my promises',
    choises: minus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Get others to do my duties',
    choises: minus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Do the opposite of what is asked',
    choises: minus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Misrepresent the facts',
    choises: minus,
    domain: 'C',
    facet: 3
  },
  {
    text: 'Go straight for the goal',
    choises: plus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Work hard',
    choises: plus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Turn plans into actions',
    choises: plus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Plunge into tasks with all my heart',
    choises: plus,
    domain: 'C',
    facet: 4
  },
  {
    text: "Do more than what's expected of me",
    choises: plus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Set high standards for myself and others',
    choises: plus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Demand quality',
    choises: plus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Am not highly motivated to succeed',
    choises: minus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Do just enough work to get by',
    choises: minus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Put little time and effort into my work',
    choises: minus,
    domain: 'C',
    facet: 4
  },
  {
    text: 'Get chores done right away',
    choises: plus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Am always prepared',
    choises: plus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Start tasks right away',
    choises: plus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Get to work at once',
    choises: plus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Carry out my plans',
    choises: plus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Find it difficult to get down to work',
    choises: minus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Waste my time',
    choises: minus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Need a push to get started',
    choises: minus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Have difficulty starting tasks',
    choises: minus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Postpone decisions',
    choises: minus,
    domain: 'C',
    facet: 5
  },
  {
    text: 'Avoid mistakes',
    choises: plus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Choose my words with care',
    choises: plus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Stick to my chosen path',
    choises: plus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Jump into things without thinking',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Make rash decisions',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Like to act on a whim',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Rush into things',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Do crazy things',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Act without thinking',
    choises: minus,
    domain: 'C',
    facet: 6
  },
  {
    text: 'Often make last-minute plans',
    choises: minus,
    domain: 'C',
    facet: 6
  }
]
