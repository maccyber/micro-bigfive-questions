'use strict'

const {plus, minus} = require('./choices')

module.exports = [
  {
    test: "Lee and Ashton's (2004) HEXACO-PI",
    link: 'http://ipip.ori.org/newHEXACO_PI_key.htm',
    testType: 'HEXACO-PI',
    info: 'test info...'
  },
  {
    text: "Don't pretend to be more than I am",
    choises: plus,
    domain: 'H',
    facet: 'Sinc'
  },
  {
    text: 'Use flattery to get ahead',
    choises: minus,
    domain: 'H',
    facet: 'Sinc'
  },
  {
    text: 'Tell other people what they want to hear so that they will do what I want them to do',
    choises: minus,
    domain: 'H',
    facet: 'Sinc'
  },
  {
    text: 'Put on a show to impress people',
    choises: minus,
    domain: 'H',
    facet: 'Sinc'
  },
  {
    text: 'Switch my loyalties when I feel like it',
    choises: minus,
    domain: 'H',
    facet: 'Sinc'
  },
  {
    text: 'Play a role in order to impress people',
    choises: minus,
    domain: 'H',
    facet: 'Sinc'
  },
  {
    text: 'Pretend to be concerned for others',
    choises: minus,
    domain: 'H',
    facet: 'Sinc'
  },
  {
    text: 'Act like different people in different situations',
    choises: minus,
    domain: 'H',
    facet: 'Sinc'
  },
  {
    text: 'Find it necessary to please the people who have power',
    choises: minus,
    domain: 'H',
    facet: 'Sinc'
  },
  {
    text: 'Let people push me around to help them feel important',
    choises: minus,
    domain: 'H',
    facet: 'Sinc'
  },
  {
    text: "Would never take things that aren't mine",
    choises: plus,
    domain: 'H',
    facet: 'Fair'
  },
  {
    text: 'Would never cheat on my taxes',
    choises: plus,
    domain: 'H',
    facet: 'Fair'
  },
  {
    text: 'Return extra change when a cashier makes a mistake',
    choises: plus,
    domain: 'H',
    facet: 'Fair'
  },
  {
    text: 'Would feel very badly for a long time if I were to steal from someone',
    choises: plus,
    domain: 'H',
    facet: 'Fair'
  },
  {
    text: 'Try to follow the rules',
    choises: plus,
    domain: 'H',
    facet: 'Fair'
  },
  {
    text: 'Admire a really clever scam',
    choises: minus,
    domain: 'H',
    facet: 'Fair'
  },
  {
    text: 'Cheat to get ahead',
    choises: minus,
    domain: 'H',
    facet: 'Fair'
  },
  {
    text: 'Steal things',
    choises: minus,
    domain: 'H',
    facet: 'Fair'
  },
  {
    text: 'Cheat on people who have trusted me',
    choises: minus,
    domain: 'H',
    facet: 'Fair'
  },
  {
    text: 'Would not regret my behavior if I were to take advantage of someone impulsively',
    choises: minus,
    domain: 'H',
    facet: 'Fair'
  },
  {
    text: 'Would not enjoy being a famous celebrity',
    choises: plus,
    domain: 'H',
    facet: 'Gree'
  },
  {
    text: "Don't strive for elegance in my appearance",
    choises: plus,
    domain: 'H',
    facet: 'Gree'
  },
  {
    text: 'Love luxury',
    choises: minus,
    domain: 'H',
    facet: 'Gree'
  },
  {
    text: 'Have a strong need for power',
    choises: minus,
    domain: 'H',
    facet: 'Gree'
  },
  {
    text: 'Seek status',
    choises: minus,
    domain: 'H',
    facet: 'Gree'
  },
  {
    text: 'Am mainly interested in money',
    choises: minus,
    domain: 'H',
    facet: 'Gree'
  },
  {
    text: 'Wish to stay young forever',
    choises: minus,
    domain: 'H',
    facet: 'Gree'
  },
  {
    text: 'Try to impress others',
    choises: minus,
    domain: 'H',
    facet: 'Gree'
  },
  {
    text: 'Prefer to eat at expensive restaurants',
    choises: minus,
    domain: 'H',
    facet: 'Gree'
  },
  {
    text: 'Am out for my own personal gain',
    choises: minus,
    domain: 'H',
    facet: 'Gree'
  },
  {
    text: "Don't think that I'm better than other people",
    choises: plus,
    domain: 'H',
    facet: 'Mode'
  },
  {
    text: 'See myself as an average person',
    choises: plus,
    domain: 'H',
    facet: 'Mode'
  },
  {
    text: 'Am just an ordinary person',
    choises: plus,
    domain: 'H',
    facet: 'Mode'
  },
  {
    text: 'Consider myself an average person',
    choises: plus,
    domain: 'H',
    facet: 'Mode'
  },
  {
    text: 'Would like to have more power than other people',
    choises: minus,
    domain: 'H',
    facet: 'Mode'
  },
  {
    text: 'Believe that I am better than others',
    choises: minus,
    domain: 'H',
    facet: 'Mode'
  },
  {
    text: 'Like to attract attention',
    choises: minus,
    domain: 'H',
    facet: 'Mode'
  },
  {
    text: 'Am more capable than most others',
    choises: minus,
    domain: 'H',
    facet: 'Mode'
  },
  {
    text: 'Am likely to show off if I get the chance',
    choises: minus,
    domain: 'H',
    facet: 'Mode'
  },
  {
    text: 'Boast about my virtues',
    choises: minus,
    domain: 'H',
    facet: 'Mode'
  },
  {
    text: 'Begin to panic when there is danger',
    choises: plus,
    domain: 'E',
    facet: 'Fear'
  },
  {
    text: 'Would fear walking in a high-crime part of a city',
    choises: plus,
    domain: 'E',
    facet: 'Fear'
  },
  {
    text: 'Tremble in dangerous situations',
    choises: plus,
    domain: 'E',
    facet: 'Fear'
  },
  {
    text: 'Would never go riding down a stretch of rapids in a canoe',
    choises: plus,
    domain: 'E',
    facet: 'Fear'
  },
  {
    text: 'Like to do frightening things',
    choises: minus,
    domain: 'E',
    facet: 'Fear'
  },
  {
    text: 'Face danger confidently',
    choises: minus,
    domain: 'E',
    facet: 'Fear'
  },
  {
    text: 'Love dangerous situations',
    choises: minus,
    domain: 'E',
    facet: 'Fear'
  },
  {
    text: 'Would be good at rescuing people from a burning building',
    choises: minus,
    domain: 'E',
    facet: 'Fear'
  },
  {
    text: 'Am willing to take risks',
    choises: minus,
    domain: 'E',
    facet: 'Fear'
  },
  {
    text: 'Often worry about things that turn out to be unimportant',
    choises: plus,
    domain: 'E',
    facet: 'Anxi'
  },
  {
    text: 'Worry about things',
    choises: plus,
    domain: 'E',
    facet: 'Anxi'
  },
  {
    text: 'Get stressed out easily',
    choises: plus,
    domain: 'E',
    facet: 'Anxi'
  },
  {
    text: 'Get upset by unpleasant thoughts that come into my mind',
    choises: plus,
    domain: 'E',
    facet: 'Anxi'
  },
  {
    text: 'Panic easily',
    choises: plus,
    domain: 'E',
    facet: 'Anxi'
  },
  {
    text: 'Rarely worry',
    choises: minus,
    domain: 'E',
    facet: 'Anxi'
  },
  {
    text: 'Rarely feel depressed',
    choises: minus,
    domain: 'E',
    facet: 'Anxi'
  },
  {
    text: 'Am not easily disturbed by events',
    choises: minus,
    domain: 'E',
    facet: 'Anxi'
  },
  {
    text: 'Remain calm under pressure',
    choises: minus,
    domain: 'E',
    facet: 'Anxi'
  },
  {
    text: "Don't worry about things that have already happened",
    choises: minus,
    domain: 'E',
    facet: 'Anxi'
  },
  {
    text: 'Need reassurance',
    choises: plus,
    domain: 'E',
    facet: 'Dep'
  },
  {
    text: 'Let myself be influenced by others',
    choises: plus,
    domain: 'E',
    facet: 'Dep'
  },
  {
    text: 'Need the approval of others',
    choises: plus,
    domain: 'E',
    facet: 'Dep'
  },
  {
    text: 'Need protection',
    choises: plus,
    domain: 'E',
    facet: 'Dep'
  },
  {
    text: 'Often need help',
    choises: plus,
    domain: 'E',
    facet: 'Dep'
  },
  {
    text: 'Show my sadness',
    choises: plus,
    domain: 'E',
    facet: 'Dep'
  },
  {
    text: 'Suspect that my facial expressions give me away when I feel sad',
    choises: plus,
    domain: 'E',
    facet: 'Dep'
  },
  {
    text: 'Seek support',
    choises: plus,
    domain: 'E',
    facet: 'Dep'
  },
  {
    text: "Can't do without the company of others",
    choises: plus,
    domain: 'E',
    facet: 'Dep'
  },
  {
    text: 'Want to be liked',
    choises: plus,
    domain: 'E',
    facet: 'Dep'
  },
  {
    text: "Feel others' emotions",
    choises: plus,
    domain: 'E',
    facet: 'Sent'
  },
  {
    text: 'Immediately feel sad when hearing of an unhappy event',
    choises: plus,
    domain: 'E',
    facet: 'Sent'
  },
  {
    text: 'Cry during movies',
    choises: plus,
    domain: 'E',
    facet: 'Sent'
  },
  {
    text: 'Am sensitive to the needs of others',
    choises: plus,
    domain: 'E',
    facet: 'Sent'
  },
  {
    text: "Am deeply moved by others' misfortunes",
    choises: plus,
    domain: 'E',
    facet: 'Sent'
  },
  {
    text: 'Rarely cry during sad movies',
    choises: minus,
    domain: 'E',
    facet: 'Sent'
  },
  {
    text: 'Seldom feel weepy while reading the sad part of a story',
    choises: minus,
    domain: 'E',
    facet: 'Sent'
  },
  {
    text: 'Am seldom bothered by the apparent suffering of strangers',
    choises: minus,
    domain: 'E',
    facet: 'Sent'
  },
  {
    text: "Don't understand people who get emotional",
    choises: minus,
    domain: 'E',
    facet: 'Sent'
  },
  {
    text: 'Seldom get emotional',
    choises: minus,
    domain: 'E',
    facet: 'Sent'
  },
  {
    text: 'Talk a lot',
    choises: plus,
    domain: 'X',
    facet: 'Expr'
  },
  {
    text: 'Am never at a loss for words',
    choises: plus,
    domain: 'X',
    facet: 'Expr'
  },
  {
    text: 'Am the life of the party',
    choises: plus,
    domain: 'X',
    facet: 'Expr'
  },
  {
    text: "Tell people about it when I'm irritated",
    choises: plus,
    domain: 'X',
    facet: 'Expr'
  },
  {
    text: 'Have an intense, boisterous laugh',
    choises: plus,
    domain: 'X',
    facet: 'Expr'
  },
  {
    text: "Don't talk a lot",
    choises: minus,
    domain: 'X',
    facet: 'Expr'
  },
  {
    text: "Don't like to draw attention to myself.",
    choises: minus,
    domain: 'X',
    facet: 'Expr'
  },
  {
    text: 'Say little',
    choises: minus,
    domain: 'X',
    facet: 'Expr'
  },
  {
    text: 'Bottle up my feelings',
    choises: minus,
    domain: 'X',
    facet: 'Expr'
  },
  {
    text: 'Speak softly',
    choises: minus,
    domain: 'X',
    facet: 'Expr'
  },
  {
    text: 'Am good at making impromptu speeches',
    choises: plus,
    domain: 'X',
    facet: 'SocB'
  },
  {
    text: "Don't mind being the center of attention",
    choises: plus,
    domain: 'X',
    facet: 'SocB'
  },
  {
    text: 'Feel comfortable around people',
    choises: plus,
    domain: 'X',
    facet: 'SocB'
  },
  {
    text: 'Have leadership abilities',
    choises: plus,
    domain: 'X',
    facet: 'SocB'
  },
  {
    text: 'Have a strong personality',
    choises: plus,
    domain: 'X',
    facet: 'SocB'
  },
  {
    text: 'Would be afraid to give a speech in public',
    choises: minus,
    domain: 'X',
    facet: 'SocB'
  },
  {
    text: 'Keep in the background',
    choises: minus,
    domain: 'X',
    facet: 'SocB'
  },
  {
    text: 'Find it difficult to approach others',
    choises: minus,
    domain: 'X',
    facet: 'SocB'
  },
  {
    text: 'Hate being the center of attention',
    choises: minus,
    domain: 'X',
    facet: 'SocB'
  },
  {
    text: 'Have little to say',
    choises: minus,
    domain: 'X',
    facet: 'SocB'
  },
  {
    text: 'Usually like to spend my free time with people',
    choises: plus,
    domain: 'X',
    facet: 'Soci'
  },
  {
    text: 'Talk to a lot of different people at parties',
    choises: plus,
    domain: 'X',
    facet: 'Soci'
  },
  {
    text: 'Love to chat',
    choises: plus,
    domain: 'X',
    facet: 'Soci'
  },
  {
    text: 'Make friends easily',
    choises: plus,
    domain: 'X',
    facet: 'Soci'
  },
  {
    text: 'Enjoy being part of a group',
    choises: plus,
    domain: 'X',
    facet: 'Soci'
  },
  {
    text: 'Seem to derive less enjoyment from interacting with people than others do',
    choises: minus,
    domain: 'X',
    facet: 'Soci'
  },
  {
    text: 'Rarely enjoy being with people',
    choises: minus,
    domain: 'X',
    facet: 'Soci'
  },
  {
    text: 'Would not enjoy a job that involves a lot of social interaction',
    choises: minus,
    domain: 'X',
    facet: 'Soci'
  },
  {
    text: 'Am hard to get to know',
    choises: minus,
    domain: 'X',
    facet: 'Soci'
  },
  {
    text: 'Keep others at a distance',
    choises: minus,
    domain: 'X',
    facet: 'Soci'
  },
  {
    text: 'Maintain high energy throughout the day',
    choises: plus,
    domain: 'X',
    facet: 'Live'
  },
  {
    text: 'Have great stamina',
    choises: plus,
    domain: 'X',
    facet: 'Live'
  },
  {
    text: 'Am usually active and full of energy',
    choises: plus,
    domain: 'X',
    facet: 'Live'
  },
  {
    text: 'Smile a lot',
    choises: plus,
    domain: 'X',
    facet: 'Live'
  },
  {
    text: 'Feel healthy and vibrant most of the time',
    choises: plus,
    domain: 'X',
    facet: 'Live'
  },
  {
    text: 'Laugh a lot',
    choises: plus,
    domain: 'X',
    facet: 'Live'
  },
  {
    text: 'Feel that I have a lot of inner strength',
    choises: plus,
    domain: 'X',
    facet: 'Live'
  },
  {
    text: 'Have a lot of fun',
    choises: plus,
    domain: 'X',
    facet: 'Live'
  },
  {
    text: 'Tire out quickly',
    choises: minus,
    domain: 'X',
    facet: 'Live'
  },
  {
    text: 'Often feel blue',
    choises: minus,
    domain: 'X',
    facet: 'Live'
  },
  {
    text: 'Love my enemies',
    choises: plus,
    domain: 'A',
    facet: 'Forg'
  },
  {
    text: 'Try to forgive and forget',
    choises: plus,
    domain: 'A',
    facet: 'Forg'
  },
  {
    text: 'Am inclined to forgive others',
    choises: plus,
    domain: 'A',
    facet: 'Forg'
  },
  {
    text: 'Am nice to people I should be angry at',
    choises: plus,
    domain: 'A',
    facet: 'Forg'
  },
  {
    text: 'Find it hard to forgive others',
    choises: minus,
    domain: 'A',
    facet: 'Forg'
  },
  {
    text: 'Hold a grudge',
    choises: minus,
    domain: 'A',
    facet: 'Forg'
  },
  {
    text: 'Hold a grudge',
    choises: minus,
    domain: 'A',
    facet: 'Forg'
  },
  {
    text: 'Get even with others',
    choises: minus,
    domain: 'A',
    facet: 'Forg'
  },
  {
    text: 'Distrust people',
    choises: minus,
    domain: 'A',
    facet: 'Forg'
  },
  {
    text: "Feel that most people can't be trusted",
    choises: minus,
    domain: 'A',
    facet: 'Forg'
  },
  {
    text: 'Rarely complain',
    choises: plus,
    domain: 'A',
    facet: 'Gent'
  },
  {
    text: 'Take things as they come',
    choises: plus,
    domain: 'A',
    facet: 'Gent'
  },
  {
    text: 'Accept people as they are',
    choises: plus,
    domain: 'A',
    facet: 'Gent'
  },
  {
    text: 'Have a good word for everyone',
    choises: plus,
    domain: 'A',
    facet: 'Gent'
  },
  {
    text: "Become frustrated and angry with people when they don't live up to my expectations",
    choises: minus,
    domain: 'A',
    facet: 'Gent'
  },
  {
    text: 'Am quick to judge others',
    choises: minus,
    domain: 'A',
    facet: 'Gent'
  },
  {
    text: 'Find fault with everything',
    choises: minus,
    domain: 'A',
    facet: 'Gent'
  },
  {
    text: 'Speak ill of others',
    choises: minus,
    domain: 'A',
    facet: 'Gent'
  },
  {
    text: 'Have a sharp tongue',
    choises: minus,
    domain: 'A',
    facet: 'Gent'
  },
  {
    text: "Criticize others' shortcomings",
    choises: minus,
    domain: 'A',
    facet: 'Gent'
  },
  {
    text: 'Adjust easily',
    choises: plus,
    domain: 'A',
    facet: 'Flex'
  },
  {
    text: 'Am good at taking advice',
    choises: plus,
    domain: 'A',
    facet: 'Flex'
  },
  {
    text: 'When interacting with a group of people, am often bothered by at least one of them',
    choises: minus,
    domain: 'A',
    facet: 'Flex'
  },
  {
    text: 'React strongly to criticism',
    choises: minus,
    domain: 'A',
    facet: 'Flex'
  },
  {
    text: 'Get upset if others change the way that I have arranged things',
    choises: minus,
    domain: 'A',
    facet: 'Flex'
  },
  {
    text: 'Am hard to convince',
    choises: minus,
    domain: 'A',
    facet: 'Flex'
  },
  {
    text: "Am annoyed by others' mistakes",
    choises: minus,
    domain: 'A',
    facet: 'Flex'
  },
  {
    text: "Can't stand being contradicted",
    choises: minus,
    domain: 'A',
    facet: 'Flex'
  },
  {
    text: 'Am hard to satisfy',
    choises: minus,
    domain: 'A',
    facet: 'Flex'
  },
  {
    text: 'Am hard to reason with',
    choises: minus,
    domain: 'A',
    facet: 'Flex'
  },
  {
    text: 'Find that it takes a lot to make me feel angry at someone',
    choises: plus,
    domain: 'A',
    facet: 'Pati'
  },
  {
    text: 'Rarely feel angry with people',
    choises: plus,
    domain: 'A',
    facet: 'Pati'
  },
  {
    text: 'Am usually a patient person',
    choises: plus,
    domain: 'A',
    facet: 'Pati'
  },
  {
    text: 'Rarely get irritated',
    choises: plus,
    domain: 'A',
    facet: 'Pati'
  },
  {
    text: 'Seldom get mad',
    choises: plus,
    domain: 'A',
    facet: 'Pati'
  },
  {
    text: 'Am easily annoyed',
    choises: minus,
    domain: 'A',
    facet: 'Pati'
  },
  {
    text: 'Get angry easily',
    choises: minus,
    domain: 'A',
    facet: 'Pati'
  },
  {
    text: 'Get irritated easily',
    choises: minus,
    domain: 'A',
    facet: 'Pati'
  },
  {
    text: 'Lose my temper',
    choises: minus,
    domain: 'A',
    facet: 'Pati'
  },
  {
    text: 'Get upset easily',
    choises: minus,
    domain: 'A',
    facet: 'Pati'
  },
  {
    text: 'Keep things tidy',
    choises: plus,
    domain: 'C',
    facet: 'Orga'
  },
  {
    text: 'Get chores done right away',
    choises: plus,
    domain: 'C',
    facet: 'Orga'
  },
  {
    text: 'Like order',
    choises: plus,
    domain: 'C',
    facet: 'Orga'
  },
  {
    text: 'Like to tidy up',
    choises: plus,
    domain: 'C',
    facet: 'Orga'
  },
  {
    text: 'Want everything to be "just right"',
    choises: plus,
    domain: 'C',
    facet: 'Orga'
  },
  {
    text: 'Leave a mess in my room',
    choises: minus,
    domain: 'C',
    facet: 'Orga'
  },
  {
    text: 'Leave my belongings around',
    choises: minus,
    domain: 'C',
    facet: 'Orga'
  },
  {
    text: "Don't finish the things that I start",
    choises: minus,
    domain: 'C',
    facet: 'Orga'
  },
  {
    text: 'Often forget to put things back in their proper place',
    choises: minus,
    domain: 'C',
    facet: 'Orga'
  },
  {
    text: 'Am not bothered by disorder',
    choises: minus,
    domain: 'C',
    facet: 'Orga'
  },
  {
    text: 'Push myself very hard to succeed',
    choises: plus,
    domain: 'C',
    facet: 'Dili'
  },
  {
    text: 'Get started quickly on doing a job',
    choises: plus,
    domain: 'C',
    facet: 'Dili'
  },
  {
    text: 'Am exacting in my work',
    choises: plus,
    domain: 'C',
    facet: 'Dili'
  },
  {
    text: 'Work hard',
    choises: plus,
    domain: 'C',
    facet: 'Dili'
  },
  {
    text: 'Complete tasks successfully',
    choises: plus,
    domain: 'C',
    facet: 'Dili'
  },
  {
    text: 'Do just enough work to get by',
    choises: minus,
    domain: 'C',
    facet: 'Dili'
  },
  {
    text: 'Stop when work becomes too difficult',
    choises: minus,
    domain: 'C',
    facet: 'Dili'
  },
  {
    text: 'Do too little work',
    choises: minus,
    domain: 'C',
    facet: 'Dili'
  },
  {
    text: 'Hang around doing nothing',
    choises: minus,
    domain: 'C',
    facet: 'Dili'
  },
  {
    text: 'Quickly lose interest in the tasks I start',
    choises: minus,
    domain: 'C',
    facet: 'Dili'
  },
  {
    text: 'Pay attention to details',
    choises: plus,
    domain: 'C',
    facet: 'Perf'
  },
  {
    text: 'Continue until everything is perfect',
    choises: plus,
    domain: 'C',
    facet: 'Perf'
  },
  {
    text: 'Have an eye for detail',
    choises: plus,
    domain: 'C',
    facet: 'Perf'
  },
  {
    text: 'Want every detail taken care of',
    choises: plus,
    domain: 'C',
    facet: 'Perf'
  },
  {
    text: 'Dislike imperfect work',
    choises: plus,
    domain: 'C',
    facet: 'Perf'
  },
  {
    text: 'Want everything to add up perfectly',
    choises: plus,
    domain: 'C',
    facet: 'Perf'
  },
  {
    text: 'Detect mistakes',
    choises: plus,
    domain: 'C',
    facet: 'Perf'
  },
  {
    text: 'Demand quality',
    choises: plus,
    domain: 'C',
    facet: 'Perf'
  },
  {
    text: 'Pay too little attention to details',
    choises: minus,
    domain: 'C',
    facet: 'Perf'
  },
  {
    text: 'Prefer to just let things happen',
    choises: minus,
    domain: 'C',
    facet: 'Perf'
  },
  {
    text: 'Avoid mistakes',
    choises: plus,
    domain: 'C',
    facet: 'Prud'
  },
  {
    text: 'Make plans and stick to them',
    choises: plus,
    domain: 'C',
    facet: 'Prud'
  },
  {
    text: 'Do things according to a plan',
    choises: plus,
    domain: 'C',
    facet: 'Prud'
  },
  {
    text: 'Jump into things without thinking',
    choises: minus,
    domain: 'C',
    facet: 'Prud'
  },
  {
    text: 'Do things without thinking of the consequences',
    choises: minus,
    domain: 'C',
    facet: 'Prud'
  },
  {
    text: 'Make rash decisions',
    choises: minus,
    domain: 'C',
    facet: 'Prud'
  },
  {
    text: 'Act impulsively when something is bothering me',
    choises: minus,
    domain: 'C',
    facet: 'Prud'
  },
  {
    text: 'Make careless mistakes',
    choises: minus,
    domain: 'C',
    facet: 'Prud'
  },
  {
    text: "Don't know why I do some of the things I do",
    choises: minus,
    domain: 'C',
    facet: 'Prud'
  },
  {
    text: 'Make a fool of myself',
    choises: minus,
    domain: 'C',
    facet: 'Prud'
  },
  {
    text: 'Believe in the importance of art',
    choises: plus,
    domain: 'O',
    facet: 'AesA'
  },
  {
    text: 'Get deeply immersed in music',
    choises: plus,
    domain: 'O',
    facet: 'AesA'
  },
  {
    text: 'See beauty in things that others might not notice',
    choises: plus,
    domain: 'O',
    facet: 'AesA'
  },
  {
    text: 'Enjoy feeling "close to the earth"',
    choises: plus,
    domain: 'O',
    facet: 'AesA'
  },
  {
    text: 'Have read the great literary classics',
    choises: plus,
    domain: 'O',
    facet: 'AesA'
  },
  {
    text: 'Do not like art',
    choises: minus,
    domain: 'O',
    facet: 'AesA'
  },
  {
    text: 'Seldom notice the emotional aspects of paintings and pictures',
    choises: minus,
    domain: 'O',
    facet: 'AesA'
  },
  {
    text: 'Do not like poetry',
    choises: minus,
    domain: 'O',
    facet: 'AesA'
  },
  {
    text: 'Do not like concerts',
    choises: minus,
    domain: 'O',
    facet: 'AesA'
  },
  {
    text: 'Do not enjoy watching dance performances',
    choises: minus,
    domain: 'O',
    facet: 'AesA'
  },
  {
    text: 'Am interested in science',
    choises: plus,
    domain: 'O',
    facet: 'Inqu'
  },
  {
    text: 'Would love to explore strange places',
    choises: plus,
    domain: 'O',
    facet: 'Inqu'
  },
  {
    text: 'Enjoy intellectual games',
    choises: plus,
    domain: 'O',
    facet: 'Inqu'
  },
  {
    text: 'Love to read challenging material',
    choises: plus,
    domain: 'O',
    facet: 'Inqu'
  },
  {
    text: 'Find political discussions interesting',
    choises: plus,
    domain: 'O',
    facet: 'Inqu'
  },
  {
    text: 'Have a rich vocabulary',
    choises: plus,
    domain: 'O',
    facet: 'Inqu'
  },
  {
    text: "Don't know much about history",
    choises: minus,
    domain: 'O',
    facet: 'Inqu'
  },
  {
    text: 'Avoid difficult reading material',
    choises: minus,
    domain: 'O',
    facet: 'Inqu'
  },
  {
    text: "Don't bother worrying about political and social problems",
    choises: minus,
    domain: 'O',
    facet: 'Inqu'
  },
  {
    text: 'Will not probe deeply into a subject',
    choises: minus,
    domain: 'O',
    facet: 'Inqu'
  },
  {
    text: 'Have a vivid imagination',
    choises: plus,
    domain: 'O',
    facet: 'Crea'
  },
  {
    text: 'Come up with something new',
    choises: plus,
    domain: 'O',
    facet: 'Crea'
  },
  {
    text: 'Carry the conversation to a higher level',
    choises: plus,
    domain: 'O',
    facet: 'Crea'
  },
  {
    text: 'Am full of ideas',
    choises: plus,
    domain: 'O',
    facet: 'Crea'
  },
  {
    text: 'Love to think up new ways of doing things',
    choises: plus,
    domain: 'O',
    facet: 'Crea'
  },
  {
    text: 'Have excellent ideas',
    choises: plus,
    domain: 'O',
    facet: 'Crea'
  },
  {
    text: 'Do not have a good imagination',
    choises: minus,
    domain: 'O',
    facet: 'Crea'
  },
  {
    text: 'Have difficulty imagining things',
    choises: minus,
    domain: 'O',
    facet: 'Crea'
  },
  {
    text: 'Have trouble guessing how others will react',
    choises: minus,
    domain: 'O',
    facet: 'Crea'
  },
  {
    text: 'Seldom experience sudden intuitive insights',
    choises: minus,
    domain: 'O',
    facet: 'Crea'
  },
  {
    text: 'Am considered to be kind of eccentric',
    choises: plus,
    domain: 'O',
    facet: 'Unco'
  },
  {
    text: 'Know that my ideas sometimes surprise people',
    choises: plus,
    domain: 'O',
    facet: 'Unco'
  },
  {
    text: 'Do things that others find strange',
    choises: plus,
    domain: 'O',
    facet: 'Unco'
  },
  {
    text: 'Rebel against authority',
    choises: plus,
    domain: 'O',
    facet: 'Unco'
  },
  {
    text: 'Swim against the current',
    choises: plus,
    domain: 'O',
    facet: 'Unco'
  },
  {
    text: 'Would hate to be considered odd or strange',
    choises: minus,
    domain: 'O',
    facet: 'Unco'
  },
  {
    text: 'Enjoy being thought of as a normal "mainstream" person',
    choises: minus,
    domain: 'O',
    facet: 'Unco'
  },
  {
    text: 'Like to be viewed as proper and conventional',
    choises: minus,
    domain: 'O',
    facet: 'Unco'
  },
  {
    text: 'Like to be thought of as a normal kind of person',
    choises: minus,
    domain: 'O',
    facet: 'Unco'
  },
  {
    text: 'Try to avoid complex people',
    choises: minus,
    domain: 'O',
    facet: 'Unco'
  }
]
