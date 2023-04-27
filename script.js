// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "アナグラム問題",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "アナグラム問題",
          "content": "いまからアナグラム問題に取り組んでいただきます。\n問題が表示されますので、テキストの部分にひらがな5文字を入力してください。\n解答が思いつかない場合は「１」を入力して次に進んでください。\n"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "始める →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instraction"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word1": "あせつわけ",
          "word2": "つけあわせ"
        },
        {
          "word1": "あすしなら",
          "word2": "すなあらし"
        },
        {
          "word1": "しけみまお",
          "word2": "まけおしみ"
        },
        {
          "word1": "ふうりつた",
          "word2": "うりふたつ"
        },
        {
          "word1": "うとこりの",
          "word2": "こうのとり"
        },
        {
          "word1": "めおまひさ",
          "word2": "おひめさま"
        },
        {
          "word1": "みきおつす",
          "word2": "おすみつき"
        },
        {
          "word1": "わらしさま",
          "word2": "さらまわし"
        },
        {
          "word1": "きかつりあ",
          "word2": "つきあかり"
        },
        {
          "word1": "としおよひ",
          "word2": "おひとよし"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "anagram task",
      "correctResponse": "${parameters.word2}",
      "indexParameter": "自己憐憫",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "trial",
        "shuffle": true,
        "correctResponse": "${parameters.word2}",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "input",
                "label": "${parameters.word1}",
                "help": "ひらがな5文字で入力してください。",
                "name": "dollarparameters.word1"
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次の問題へ →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Page",
            "correctResponse": "${parameters.word2}",
            "tardy": true
          }
        ]
      }
    }
  ]
})

// Let's go!
study.run()