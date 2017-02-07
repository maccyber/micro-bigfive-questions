# micro-bigfive-questions

Example: https://bigfive-questions.now.sh/

micro webservice that returs bigfive questions and calculates score

## Questions

```sh
$ curl -v http://localhost:3000 -d '{"page": 1, "lang": "en", "limit": 5, testType: "120" }'
```

```sh
$ curl -v http://localhost:3000/?page=1&lang=en&testType=120
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
    "link":"http://ipip.ori.org/30FacetNEO-PI-RItems.htm"
  },
  "next":"https://localhost:3000/?page=2",
  "previous":false,
  "questions":[  
    {  
      "id":1,
      "text":"Worry about things",
      "facet":"N1",
      "choises":[  
        {  
          "text":"Very Inacurate",
          "value":1
        },
        {  
          "text":"Moderately Inacurate",
          "value":2
        },
        {  
          "text":"Neither Accurate Nor Inaccurate",
          "value":3
        },
        {  
          "text":"Moderately Accurate",
          "value":4
        },
        {  
          "text":"Very Accurate",
          "value":5
        }
      ]
    },
    {  
      "id":2,
      "text":"Make friends easily",
      "facet":"E1",
      "choises":[  
        {  
          "text":"Very Inacurate",
          "value":1
        },
        {  
          "text":"Moderately Inacurate",
          "value":2
        },
        {  
          "text":"Neither Accurate Nor Inaccurate",
          "value":3
        },
        {  
          "text":"Moderately Accurate",
          "value":4
        },
        {  
          "text":"Very Accurate",
          "value":5
        }
      ]
    },
    {  
      "id":3,
      "text":"Have a vivid imagination",
      "facet":"O1",
      "choises":[  
        {  
          "text":"Very Inacurate",
          "value":1
        },
        {  
          "text":"Moderately Inacurate",
          "value":2
        },
        {  
          "text":"Neither Accurate Nor Inaccurate",
          "value":3
        },
        {  
          "text":"Moderately Accurate",
          "value":4
        },
        {  
          "text":"Very Accurate",
          "value":5
        }
      ]
    },
    {  
      "id":4,
      "text":"Trust others",
      "facet":"A1",
      "choises":[  
        {  
          "text":"Very Inacurate",
          "value":1
        },
        {  
          "text":"Moderately Inacurate",
          "value":2
        },
        {  
          "text":"Neither Accurate Nor Inaccurate",
          "value":3
        },
        {  
          "text":"Moderately Accurate",
          "value":4
        },
        {  
          "text":"Very Accurate",
          "value":5
        }
      ]
    },
    {  
      "id":5,
      "text":"Complete tasks successfully",
      "facet":"C1",
      "choises":[  
        {  
          "text":"Very Inacurate",
          "value":1
        },
        {  
          "text":"Moderately Inacurate",
          "value":2
        },
        {  
          "text":"Neither Accurate Nor Inaccurate",
          "value":3
        },
        {  
          "text":"Moderately Accurate",
          "value":4
        },
        {  
          "text":"Very Accurate",
          "value":5
        }
      ]
    }
  ]
}
```

## Calculate score

```POST```

```/calculate```

```JavaScript
{
  lang: '<lang-code>',
  items: '<10 or 20>',
  answers: [
    {
      id: '<question-id>',
      score: '<question-score>'
    }
  ]
}
```

returns score for each factor

```JavaScript
{ 
  E: 30, 
  A: 30, 
  C: 30, 
  N: 30, 
  O: 30 
}
```

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
