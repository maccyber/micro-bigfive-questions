[![Build Status](https://travis-ci.org/maccyber/micro-bigfive-questions.svg?branch=master)](https://travis-ci.org/maccyber/micro-bigfive-questions)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# micro-bigfive-questions

Example: https://questions.bigfive.world

[micro](https://github.com/zeit/micro) webservice that returns bigfive questions

## Tests

### Request

```sh
$ curl -v http://localhost:3000/tests
```

### Result

```JavaScript
[
  {
    "active": true,
    "default": false,
    "name": "100-IPIP-NEO-PI-R",
    "link": "http://ipip.ori.org/newNEODomainsKey.htm",
    "info": "Costa and McCrae's NEO-PI-R (100 questions)",
    "shuffle": true
  },
  {
    "active": true,
    "default": true,
    "name": "Johnson-120-IPIP-NEO-PI-R",
    "link": "http://ipip.ori.org/30FacetNEO-PI-RItems.htm",
    "info": "(Recommended) 120 questions (Johnson's IPIP NEO-PI-R)",
    "shuffle": false
  },
  {
    "active": true,
    "default": false,
    "name": "Mini-IPIP",
    "link": "http://ipip.ori.org/MiniIPIPKey.htm",
    "info": "Mini-IPIP 5-factors (20 questions)",
    "shuffle": true
  },
  {
    "active": false,
    "default": false,
    "name": "Costa and McCrae's NEO-PI-R",
    "link": "http://ipip.ori.org/newNEOFacetsKey.htm",
    "info": "Costa and McCrae's NEO-PI-R (300 questions) (EXPERIMENTAL)",
    "shuffle": true
  },
  {
    "active": true,
    "default": false,
    "name": "50-IPIP-NEO-PI-R",
    "link": "http://ipip.ori.org/newNEODomainsKey.htm",
    "info": "Costa and McCrae's NEO-PI-R (50 questions)",
    "shuffle": true
  },
  {
    "active": false,
    "default": false,
    "name": "Adult Self-Report Scale (ASRS) Symptom Checklist",
    "link": "http://www.mentalhealthprofessionalsinc.com/Forms/Adult_ADHD_Self-Report_Scale_(ASRS-v1.1).pdf",
    "info": "Adult Self-Report Scale (ASRS) Symptom Checklist (18 questions)",
    "shuffle": true
  },
  {
    "active": false,
    "default": false,
    "name": "Lee and Ashton's (2004) HEXACO-PI",
    "link": "http://ipip.ori.org/newHEXACO_PI_key.htm",
    "info": "Lee and Ashton's HEXACO-PI (240 questions) (EXPERIMENTAL)",
    "shuffle": true
  }
]
```

## Questions

### Request (POST)

```sh
$ curl -v http://localhost:3000/questions -d '{"lang": "en", testType: "120" }'
```

### Request (url params)

```sh
$ curl -v http://localhost:3000/questions?lang=en&testType=120
```

### Result

```JavaScript
{
  "info": {
    "active": true,
    "default": true,
    "name": "Johnson-120-IPIP-NEO-PI-R",
    "link": "http://ipip.ori.org/30FacetNEO-PI-RItems.htm",
    "info": "(Recommended) 120 questions (Johnson's IPIP NEO-PI-R)",
    "shuffle": false,
    "totalQuestions": 120,
    "lang": "en",
    "scoreMax": 5,
    "scoreMin": 1,
    "domains": 5,
    "facets": 30,
    "id": "120",
    "languages": [
      "en",
      "es",
      "no"
    ]
  },
  "questions": [
    {
      "text": "Worry about things",
      "choises": [
        {
          "text": "Very Inaccurate",
          "score": 1,
          "color": 1
        },
        {
          "text": "Moderately Inaccurate",
          "score": 2,
          "color": 2
        },
        {
          "text": "Neither Accurate Nor Inaccurate",
          "score": 3,
          "color": 3
        },
        {
          "text": "Moderately Accurate",
          "score": 4,
          "color": 4
        },
        {
          "text": "Very Accurate",
          "score": 5,
          "color": 5
        }
      ],
      "domain": "N",
      "facet": 1,
      "id": 1
    }
  ]
}
```

## Calculate score

See [micro-bigfive-evaluator](https://github.com/maccyber/micro-bigfive-evaluator)

## Supported languages

Set ```lang``` to code

| Code | Name      | Translator |
| ---- | --------- | ---------- |
| en   | English   |            |
| no   | Norwegian | Eli Huseby |
| es   | Spanish   | nieled     |

## Supported tests

Set ```testType``` to code

| Code | Name |
| ---- | ---- |
| 300 | - |
| 120  | Johnson-120-IPIP-NEO-PI-R |
| 100  | - |
| 50   | - |
| 20   | - |
| hexaco | - |

## Deploy using [Now](https://zeit.co/now)

```sh
$ now https://github.com/maccyber/micro-bigfive-questions
```

## Related
- [bigfive-web](https://github.com/maccyber/bigfive-web) Web frontend for bigfive tests
- [micro-bigfive-evaluator](https://github.com/maccyber/micro-bigfive-evaluator) Webservice that evaluates bigfive questions
- [micro-bigfive-generator](https://github.com/maccyber/micro-bigfive-generator) Webservice that generates and saves results to bigfive-web
- [micro-bigfive-results](https://github.com/maccyber/micro-bigfive-results) Webservice that returns bigfive informative test results
- [micro-bigfive-save](https://github.com/maccyber/micro-bigfive-save) Webservice that stores bigfive answers

## License

[MIT](LICENSE)

## About

Created with <3 by [zrrzzt](https://github.com/zrrrzzt) and [maccyber](https://github.com/maccyber)

![alt text](https://robots.kebabstudios.party/zrrrzzt.png "Robohash image of zrrrzzt") 
![alt text](https://robots.kebabstudios.party/maccyber.png "Robohash image of maccyber")
