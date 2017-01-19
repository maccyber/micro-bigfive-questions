# micro-bigfive-questions

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
  totalQuestions: 121,
  limit: 5,
  totalPages: 24,
  percentDone: 4,
  page: 1,
  langCode: "en",
  from: 1,
  to: 6,
  data: [
    "Worry about things",
    "Make friends easily",
    "Have a vivid imagination",
    "Trust others",
    "Complete tasks successfully"
  ]
}
```

## Deploy using [Now](https://zeit.co/now)

```sh
$ now https://github.com/maccyber/micro-bigfive-questions
```

## License
[MIT](LICENSE)
