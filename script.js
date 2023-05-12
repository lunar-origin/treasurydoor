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
      "filePrefix": "namingstroop",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "namingStroop",
    "description": "This experiment use JapaneseTextInputForLabJs（https:\u002F\u002Fgithub.com\u002Fmklab-japan\u002FjapaneseTextInputForLab.js）",
    "repository": "",
    "contributors": "Masanori Kobayashi"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "アナグラム課題",
          "content": "\u003Cp\u003Eいまからアナグラム問題に取り組んでいただきます。\n問題が表示されますので、テキストの部分にひらがな5文字を入力してください。\n解答に\u003Cstrong\u003Eできるだけ速く\u003C\u002Fstrong\u003E取り組んでください。\u003C\u002Fp\u003E\n\u003Cp\u003E解答が思いつかない場合は、そのまま次に進んでください。\u003C\u002Fp\u003E\n\n\u003C\u002Fp\u003E"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class =\"content-horizontal-center\"\u003E\n  \u003Cbutton type =\"submit\" form=\"page-form\"\u003E課題を始める\u003C\u002Fbutton\u003E\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {
        "スクリーンショット 2021-05-06 14.44.38.png": "embedded\u002F13bb39df95fd429ca3de099a33e2e9fdd68068a6d3242df31877ea61b1cddcbf.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instruction"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cdiv class =\"content-horizontal-center\"\u003E\n  \u003Ch1\u003ESTART!\u003C\u002Fh1\u003E\n\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "start",
      "timeout": "1000"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "word": "あせつわけ"
        },
        {
          "word": "あすしなら"
        },
        {
          "word": "しけみまお"
        },
        {
          "word": "ふうつりた"
        },
        {
          "word": "うとこりの"
        },
        {
          "word": "めおまひさ"
        },
        {
          "word": "みきおつす"
        },
        {
          "word": "わらしさま"
        },
        {
          "word": "きかつりあ"
        },
        {
          "word": "としおよひ"
        },
        {
          "word": "ちかまりあ"
        },
        {
          "word": "あひりたと"
        },
        {
          "word": "むちりつけ"
        },
        {
          "word": "おちしくな"
        },
        {
          "word": "さふうくよ"
        },
        {
          "word": "んめなあお"
        },
        {
          "word": "つひみとま"
        },
        {
          "word": "こやうおふ"
        },
        {
          "word": "ねりないき"
        },
        {
          "word": "またりちわ"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "mainBlock",
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
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\u003Cspan style = \"content-horizontal-cente:${this.parameters.word}; font-size:6vh\"\u003E${this.parameters.word}\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
                "name": ""
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"w-m alert content-horizontal-center\"\u003E\u003Cspan style = \"animation: blink 0.5s linear infinite alternate;\" id=\"inputWindow\"\u003E|\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
                "name": ""
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\n  \u003Cp style=\"color:gray; font-size:1.5vh\"\u003Eアナグラム課題の答えをひらがな5文字でできるだけ正確に入力し，Enterで入力を確定してください\n  \u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "次へ",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
let inputArray =[]
let text;
let convertText = "";
window.response = "";

//初期カーソルの点滅用のCSSを追加
const css = document.createElement('style')
css.media = 'screen'
css.type = 'text/css'

const cssKeyframes ='@keyframes blink{ 0% {opacity: 0} 100% {opacity: 1.0}}';
const rules = document.createTextNode(cssKeyframes)
css.appendChild(rules)

document.getElementsByTagName('head')[0].appendChild(css);

//キー入力時
this.options.events['keydown'] = function(e) {
  //点滅をやめる
  if(inputArray.length <= 0)
  {
    document.getElementById('inputWindow').style = 'text-decoration: underline';
  }
  //削除時
  if(e.key == 'Backspace' || e.key == 'Delete'){
      //1文字のみの時はカーソルを表示
      if(inputArray.length == 1)
      {
        inputArray =['|']
        document.getElementById('inputWindow').style = 'animation: blink 0.5s linear infinite alternate;';
      }
      else{
        inputArray.pop();
      }
  }

  //押されたキーが1文字の時
  else if(e.key.length == 1){
    //最後まで消していた場合
    if(inputArray[0] == '|')
    {
      inputArray.pop()
      document.getElementById('inputWindow').style = 'text-decoration: underline';
    }
    inputArray.push(e.key);
  }

  //Enterの場合は終了
  else if(e.key == 'Enter')
  {
    this.end();
  }
  //配列を1つにまとめる
  convertText = inputArray.join('');

  //アルファベットをひらがな/カタカナに変換
  convertText = wanakana.toHiragana(convertText, {customKanaMapping: { n: 'n', nn: 'ん'}});
  
  //変換したテキストを表示
  document.getElementById('inputWindow').textContent = convertText;
  //変換したテキストを反応として保存
  this.data.response = convertText;
  window.response = convertText;
}
},
              "end": function anonymous(
) {
const response = window.response

if(this.parameters.word == "あせつわけ" && response == "つけあわせ")
{
  this.data.correct = '1';
}
else if(this.parameters.word == "あすしなら" && response == "すなあらし")
{
  this.data.correct = '1';
}
else if(this.parameters.word == "しけみまお" && response == "まけおしみ")
{
  this.data.correct = '1';
}
else if(this.parameters.word == "ふうつりた" && response == "うりふたつ" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "うとこりの" && response == "こうのとり" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "めおまひさ" && response == "おひめさま" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "みきおつす" && response == "おすみつき" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "わらしさま" && response == "さらまわし" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "きかつりあ" && response == "つきあかり" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "としおよひ" && response == "おひとよし" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "ちかまりあ" && response == "まちあかり" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "あひりたと" && response == "ひとあたり" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "むちりつけ" && response == "つちけむり" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "おちしくな" && response == "くちなおし" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "さふうくよ" && response == "ふくさよう" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "んめなあお" && response == "あめおんな" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "つひみとま" && response == "ひとつまみ" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "こやうおふ" && response == "おやふこう" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "ねりないき" && response == "なきねいり" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "またりちわ" && response == "たちまわり" )

{
  this.data.correct = '1';
}

else if(response == "1")

{
  this.data.correct = '2'
}

else
{
  this.data.correct = '0';
}
}
            },
            "title": "item"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\n  \u003Cspan style = \"color:black; font-size:6vh\"\u003E${this.state.correct==\"2\" ? \"残念\" : this.state.correct==\"1\" ? \"正解\":\"不正解\"}\u003C\u002Fspan\u003E\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "feedback",
            "timeout": "500",
            "tardy": true
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "ありがとうございました。",
          "content": "\u003Cp\u003Eこれで実験は終了です。\n\u003Cbr\u003E以下の「結果のダウンロード」ボタンを押すと結果をダウンロードできます。\u003C\u002Fp\u003E\n"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "結果のダウンロード→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const ds = this.options.datastore

//一致条件
//試行を抽出
const congruentData = ds.data.filter(row =>
  row.sender === 'item' && row.condition === 'congruent')
const noOfCongruentTrial = congruentData.length

//正答試行を抽出
const congruentCorrectData = ds.data.filter(row => 
  row.sender === 'item' && row.condition === 'congruent'  && row.correct ==='1'
)
const noOfCongruentCorrectTrial = congruentCorrectData.length
//時間を抽出
const congruentCorrectRTs = congruentCorrectData.map(row => row.duration)
//平均を計算
const meanCongruentRT = lab.util.stats.mean(congruentCorrectRTs)
//小数点以下を丸める
this.state.meanCongruentRT = Math.round(meanCongruentRT, 0)
//正答率
this.state.meanCongruentCorrect = Math.round((noOfCongruentCorrectTrial/noOfCongruentTrial * 100), 2)

//不一致条件
//試行を抽出
const incongruentData = ds.data.filter(row => 
  row.sender === 'item' && row.condition === 'incongruent'
)
const noOfIncongruentTrial = incongruentData.length
//正答試行を抽出
const incongruentCorrectData = ds.data.filter(row => 
  row.sender === 'item' && row.condition === 'incongruent' && row.correct ==='1'
)
const noOfIncongruentCorrectTrial = incongruentCorrectData.length
//時間を抽出
const incongruentCorrectRTs = incongruentCorrectData.map(row => row.duration)
//平均を計算
const meanIncongruentRT = lab.util.stats.mean(incongruentCorrectRTs)
//小数点以下を丸める
this.state.meanIncongruentRT = Math.round(meanIncongruentRT, 0)
//正答率
this.state.meanIncongruentCorrect = Math.round((noOfIncongruentCorrectTrial/noOfIncongruentTrial * 100), 2)

//干渉量を計算
this.state.stroopEffect = Math.round(meanIncongruentRT - meanCongruentRT)
}
      },
      "title": "Thanks",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()