'use strict'

const scale = require('./choices')

module.exports = [
  {
    test: 'Adult Self-Report Scale (ASRS) Symptom Checklist',
    link: 'http://www.mentalhealthprofessionalsinc.com/Forms/Adult_ADHD_Self-Report_Scale_(ASRS-v1.1).pdf',
    info: 'test info ...',
    average: 2
  },
  {
    text: 'How often do you make careless mistakes when you have to work on a boring or difficult project?',
    choises: scale,
    domain: 'A'
  },
  {
    text: 'How often do you have difficulty keeping your attention when you are doing boring or repetitive work?',
    choises: scale,
    domain: 'A'
  },
  {
    text: 'How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?',
    choises: scale,
    domain: 'A'
  },
  {
    text: 'How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?',
    choises: scale,
    domain: 'A'
  },
  {
    text: 'How often do you have difficulty getting things in order when you have to do a task that requires organization?',
    choises: scale,
    domain: 'A'
  },
  {
    text: 'When you have a task that requires a lot of thought, how often do you avoid or delay getting started?',
    choises: scale,
    domain: 'A'
  },
  {
    text: 'How often do you misplace or have difficulty finding things at home or at work?',
    choises: scale,
    domain: 'A'
  },
  {
    text: 'How often are you distracted by activity or noise around you?',
    choises: scale,
    domain: 'A'
  },
  {
    text: 'How often do you have problems remembering appointments or obligations?',
    choises: scale,
    domain: 'A'
  },
  {
    text: 'How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?',
    choises: scale,
    domain: 'B'
  },
  {
    text: 'How often do you leave your seat in meetings or other situations in which you are expected to remain seated?',
    choises: scale,
    domain: 'B'
  },
  {
    text: 'How often do you feel restless or fidgety?',
    choises: scale,
    domain: 'B'
  },
  {
    text: 'How often do you have difficulty unwinding and relaxing when you have time to yourself?',
    choises: scale,
    domain: 'B'
  },
  {
    text: ' How often do you feel overly active and compelled to do things, like you were driven by a motor?',
    choises: scale,
    domain: 'B'
  },
  {
    text: 'How often do you find yourself talking too much when you are in social situations?',
    choises: scale,
    domain: 'B'
  },
  {
    text: 'When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?',
    choises: scale,
    domain: 'B'
  },
  {
    text: 'How often do you have difficulty waiting your turn in situations when turn taking is required?',
    choises: scale,
    domain: 'B'
  },
  {
    text: 'How often do you interrupt others when they are busy?',
    choises: scale,
    domain: 'B'
  }
]
