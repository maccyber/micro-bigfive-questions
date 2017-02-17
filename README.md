[![Build Status](https://travis-ci.org/maccyber/micro-bigfive-questions.svg?branch=master)](https://travis-ci.org/maccyber/micro-bigfive-questions)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Code Climate](https://codeclimate.com/github/maccyber/micro-bigfive-questions/badges/gpa.svg)](https://codeclimate.com/github/maccyber/micro-bigfive-questions)

# micro-bigfive-questions

Example: https://questions.bigfive.maccyber.io/

micro webservice that returs bigfive questions and calculates score

## Questions

```sh
$ curl -v http://localhost:3000/getQuestions -d '{"page": 1, "lang": "en", "limit": 5, testType: "120" }'
```

```sh
$ curl -v http://localhost:3000/getQuestions?page=1&lang=en&testType=120
```

Both returns

```JavaScript
{  
  "totalQuestions":120,
  "limit":5,
  "totalPages":24,
  "percentDone":4,
  "page":1,
  "langCode":"en",
  "languages":[  
    "en",
    "no"
  ],
  "from":1,
  "to":6,
  "testInfo":{  
    "test":"Johnson-120-IPIP-NEO-PI-R",
    "link":"http://ipip.ori.org/30FacetNEO-PI-RItems.htm",
    "info":"test info ..."
  },
  "next":"https://localhost:3000/getQuestions?page=2",
  "previous":false,
  "questions":[  
    {  
      "text":"Worry about things",
      "choises":[  
        {  
          "text":"Very Inaccurate",
          "score":1,
          "color":1
        },
        {  
          "text":"Moderately Inaccurate",
          "score":2,
          "color":2
        },
        {  
          "text":"Neither Accurate Nor Inaccurate",
          "score":3,
          "color":3
        },
        {  
          "text":"Moderately Accurate",
          "score":4,
          "color":4
        },
        {  
          "text":"Very Accurate",
          "score":5,
          "color":5
        }
      ],
      "domain":"N",
      "facet":1,
      "id":1
    },
    {  
      "text":"Make friends easily",
      "choises":[  
        {  
          "text":"Very Inaccurate",
          "score":1,
          "color":1
        },
        {  
          "text":"Moderately Inaccurate",
          "score":2,
          "color":2
        },
        {  
          "text":"Neither Accurate Nor Inaccurate",
          "score":3,
          "color":3
        },
        {  
          "text":"Moderately Accurate",
          "score":4,
          "color":4
        },
        {  
          "text":"Very Accurate",
          "score":5,
          "color":5
        }
      ],
      "domain":"E",
      "facet":1,
      "id":2
    },
    {  
      "text":"Have a vivid imagination",
      "choises":[  
        {  
          "text":"Very Inaccurate",
          "score":1,
          "color":1
        },
        {  
          "text":"Moderately Inaccurate",
          "score":2,
          "color":2
        },
        {  
          "text":"Neither Accurate Nor Inaccurate",
          "score":3,
          "color":3
        },
        {  
          "text":"Moderately Accurate",
          "score":4,
          "color":4
        },
        {  
          "text":"Very Accurate",
          "score":5,
          "color":5
        }
      ],
      "domain":"O",
      "facet":1,
      "id":3
    },
    {  
      "text":"Trust others",
      "choises":[  
        {  
          "text":"Very Inaccurate",
          "score":1,
          "color":1
        },
        {  
          "text":"Moderately Inaccurate",
          "score":2,
          "color":2
        },
        {  
          "text":"Neither Accurate Nor Inaccurate",
          "score":3,
          "color":3
        },
        {  
          "text":"Moderately Accurate",
          "score":4,
          "color":4
        },
        {  
          "text":"Very Accurate",
          "score":5,
          "color":5
        }
      ],
      "domain":"A",
      "facet":1,
      "id":4
    },
    {  
      "text":"Complete tasks successfully",
      "choises":[  
        {  
          "text":"Very Inaccurate",
          "score":1,
          "color":1
        },
        {  
          "text":"Moderately Inaccurate",
          "score":2,
          "color":2
        },
        {  
          "text":"Neither Accurate Nor Inaccurate",
          "score":3,
          "color":3
        },
        {  
          "text":"Moderately Accurate",
          "score":4,
          "color":4
        },
        {  
          "text":"Very Accurate",
          "score":5,
          "color":5
        }
      ],
      "domain":"C",
      "facet":1,
      "id":5
    }
  ]
}
```

## Calculate score

See [micro-bigfive-evaluator](https://github.com/maccyber/micro-bigfive-evaluator)

## Supported languages

Set ```lang``` to code

| Code | Name |
| ---- | ---- |
| en   | English |
| no   | Norwegian |


## Supported tests

Set ```testType``` to code

| Code | Name |
| ---- | ---- |
| 120  | Johnson-120-IPIP-NEO-PI-R |
| 100  | - |
| 50   | - |


## Deploy using [Now](https://zeit.co/now)

```sh
$ now https://github.com/maccyber/micro-bigfive-questions
```

## License

[MIT](LICENSE)

## About

Created by [zrrzzt](https://github.com/zrrrzzt) and [maccyber](https://github.com/maccyber)

![alt text](https://robots.kebabstudios.party/zrrrzzt.png "Robohash image of zrrrzzt") 
![alt text](https://robots.kebabstudios.party/maccyber.png "Robohash image of maccyber")
