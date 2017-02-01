# micro-bigfive-questions

Example: https://bigfive-questions.now.sh/

micro webservice that returs bigfive questions

```sh
$ curl -v http://localhost:3000 -d '{"page": 1, "lang": "en", "limit": 5}'
```

```sh
$ curl -v http://localhost:3000/?page=1&lang=en
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
  "from":1,
  "to":6,
  "choises":[  
    {  
      "val":1,
      "text":"Very Inaccurate"
    },
    {  
      "val":2,
      "text":"Moderately Inaccurate"
    },
    {  
      "val":3,
      "text":"Neither Accurate Nor Inaccurate"
    },
    {  
      "val":4,
      "text":"Moderately Accurate"
    },
    {  
      "val":5,
      "text":"Very Accurate"
    }
  ],
  "next":"http://bigfive-questions.now.sh/?page=2",
  "questions":[  
    {  
      "id":1,
      "text":"Worry about things"
    },
    {  
      "id":2,
      "text":"Make friends easily"
    },
    {  
      "id":3,
      "text":"Have a vivid imagination"
    },
    {  
      "id":4,
      "text":"Trust others"
    },
    {  
      "id":5,
      "text":"Complete tasks successfully"
    }
  ]
}
```

## Supported languages

Set ```lang``` to code

| Code | Name |
| ---- | ---- |
| en   | English |
| no   | Norwegian |


## Deploy using [Now](https://zeit.co/now)

```sh
$ now https://github.com/maccyber/micro-bigfive-questions
```

## License
[MIT](LICENSE)
