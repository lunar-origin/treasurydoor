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
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Full screen",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験はフルスクリーンで実行いたします。",
          "hint": "準備ができたらここをクリックしてください。",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "本実験・調査について",
              "content": "\u003Cp\u003E本実験・調査の実施責任者は岐阜大学教育学部学校教育講座心理学コース4回生の戸倉優希です。\n\u003Cbr\u003E本実験・調査の参加はあなたの任意によるものです。\u003C\u002Fp\u003E"
            },
            {
              "required": true,
              "type": "text",
              "title": "1. 本実験・調査の目的",
              "content": "\u003Cp\u003Eこの実験は大学生の言語処理能力を測定することが目的です。\u003C\u002Fp\u003E\n"
            },
            {
              "required": true,
              "type": "text",
              "title": "2. 本実験・調査の手続き",
              "content": "\u003Cp\u003Eもし、あなたが本実験・調査に参加した場合、アナグラム課題に取り組んでいただきます。\n\u003Cbr\u003Eこの実験・調査の所要時間は約30分程度です。\u003C\u002Fp\u003E"
            },
            {
              "required": true,
              "type": "text",
              "title": "3. 潜在的なリスク・苦痛など",
              "content": "\u003Cp\u003E実験による多少の疲労は除き、潜在的なリスクや苦痛はありません。\n\u003Cbr\u003Eまた、いつ、いかなる理由でも、自由に実験を中止していただけます (項目６をご参照ください。) 。\u003C\u002Fp\u003E"
            },
            {
              "required": true,
              "type": "text",
              "title": "4.参加による利益",
              "content": "\u003Cp\u003Eあなたが本実験・調査に参加されることで心理学の研究の発展に繋がります。\u003C\u002Fp\u003E"
            },
            {
              "required": true,
              "type": "text",
              "title": "5. 匿名性の確保",
              "content": "\u003Cp\u003E本実験・調査によって得られた情報は法律による開示請求を除き、匿名性が維持されます。\n\u003Cbr\u003E匿名性は実験参加者番号の付与、統計的解析によって保たれます。収集されたデータは個人が特定できるデータが公表されることは決してありません。\n\u003Cbr\u003E二次分析などのため個人を特定できない形で個人データを公開する場合があります。加えて、統計的に処理されたデータを学会発表や論文として公表する場合があります。\u003C\u002Fp\u003E"
            },
            {
              "required": true,
              "type": "text",
              "title": "6. 参加と中止",
              "content": "\u003Cp\u003Eあなたは本実験・調査への参加もしくは不参加を自由に選択できます。\n\u003Cbr\u003Eまた、参加した場合でも、いつでも、どのような理由でも、途中で実験・調査を中止することができます。\n\u003Cbr\u003Eもし、途中で実験・調査を中止したくなった場合は、「ESCキー」を押した後、ウィンドウを閉じることで実験・調査を中止できます。\u003C\u002Fp\u003E"
            },
            {
              "required": true,
              "type": "text",
              "title": "7. 実験・調査実施者への問い合わせ",
              "content": "\u003Cp\u003E本実験・調査に対して質問がある場合は、実施責任者にお問い合わせください。\u003C\u002Fp\u003E"
            },
            {
              "required": true,
              "type": "checkbox",
              "label": "\u003Cp\u003E実験・調査への参加に同意いただけますか？\u003Cbr\u003E同意いただける方はチェックをお願いします。同意いただけない方は、ESCを押した後、ウィンドウを閉じて下さい。\u003C\u002Fp\u003E",
              "options": [
                {
                  "label": "上記の説明をよく読み、理解した上で、実験・調査への参加に同意します。",
                  "coding": "informedConsent"
                }
              ],
              "name": "lesspgreaterlessbrgreateresclesspgreater"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "infotmedConsent"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "練習問題",
              "content": "\u003Cp\u003Eいまから練習問題に取り組んでいただきます。\n\u003Cbr\u003Eアナグラム課題は、言葉遊びの1つで、単語をいくつか入れ替えることによって、全く別の意味にさせるものです。\n\u003Cbr\u003E問題が表示されますので、\u003Cstrong\u003Eテキストの部分にひらがな5文字\u003C\u002Fstrong\u003Eを入力してください。\n\u003C\u002Fp\u003E\n\u003Cp\u003E解答が思い浮かばない場合は、\u003Cstrong\u003E１\u003C\u002Fstrong\u003Eを入力し次に進んでください。\u003C\u002Fp\u003E\n\n\u003C\u002Fp\u003E"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv class =\"content-horizontal-center\"\u003E\r\n  \u003Cbutton type =\"submit\" form=\"page-form\"\u003E練習を始める\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
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
          "title": "Practice : instruction"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv class =\"content-horizontal-center\"\u003E\r\n  \u003Ch1\u003ESTART!\u003C\u002Fh1\u003E\r\n\u003C\u002Fdiv\u003E",
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
          "timeout": "1000",
          "tardy": true
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "word": "まりひつな"
            },
            {
              "word": "たむかりつ"
            },
            {
              "word": "おなゆんき"
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
          "title": "mainBlock",
          "tardy": true,
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
            "tardy": true,
            "content": [
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"content-horizontal-center\" \u003E\u003Cspan style = \"content-horizontal-cente:${this.parameters.word}; font-size:6vh\"\u003E${this.parameters.word}\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
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
                    "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E \r\n  \u003Cp style=\"color:gray; font-size:1.5vh\"\u003Eアナグラム課題の答えをひらがな5文字でできるだけ正確に入力し，Enterで入力を確定してください。\r\n  \r\n\u003Cbr\u003E文字を消去する際は、アルファベットが残らないように注意してください。\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
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
  else if(inputArray.length != 0 && e.key == 'Enter')
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

if(this.parameters.word == "まりひつな" && response == "ひなまつり")
{
  this.data.correct = '1';
}
else if(this.parameters.word == "たむかりつ" && response == "かたつむり")
{
  this.data.correct = '1';
}
else if(this.parameters.word == "おなゆんき" && response == "ゆきおんな")
{
  this.data.correct = '1';
}

else if(response=="1")


{
  this.data.correct = '2'
}

else
{
  this.data.correct = '0';
}
}
                },
                "title": "item",
                "tardy": true
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\r\n  \u003Cspan style = \"color:black; font-size:6vh\"\u003E${this.state.correct==\"2\" ? \"残念\" : this.state.correct==\"1\" ? \"正解\":\"不正解\"}\u003C\u002Fspan\u003E\r\n\u003C\u002Fdiv\u003E",
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
                "timeout": "2000",
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
              "title": "アナグラム課題",
              "content": "\u003Cp\u003Eいまからアナグラム問題に取り組んでいただきます。\n問題が表示されますので、\u003Cstrong\u003Eテキストの部分にひらがな5文字\u003C\u002Fstrong\u003Eを入力してください。\n\u003C\u002Fp\u003E\n\u003Cp\u003E解答が思い浮かばない場合は、\u003Cstrong\u003E１\u003C\u002Fstrong\u003Eを入力し次に進んでください。\u003C\u002Fp\u003E\n\n\u003C\u002Fp\u003E"
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
          "title": "Test1 : instruction"
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
              "word": "こやうおふ"
            },
            {
              "word": "ねりないき"
            },
            {
              "word": "またりちわ"
            },
            {
              "word": "とかひみつ"
            },
            {
              "word": "えめまりの"
            },
            {
              "word": "まとしおわ"
            },
            {
              "word": "くきたても"
            },
            {
              "word": "せしつふん"
            },
            {
              "word": "あもせちわ"
            },
            {
              "word": "らわかりま"
            },
            {
              "word": "うふいとめ"
            },
            {
              "word": "ないるそね"
            },
            {
              "word": "てくみのる"
            },
            {
              "word": "おねさみく"
            },
            {
              "word": "はるちめさ"
            },
            {
              "word": "なりやくも"
            },
            {
              "word": "とまきれす"
            },
            {
              "word": "ひめたちゆ"
            },
            {
              "word": "ねつめきよ"
            },
            {
              "word": "ことりすみ"
            },
            {
              "word": "めまほにて"
            },
            {
              "word": "ふたりかく"
            },
            {
              "word": "たなしもり"
            },
            {
              "word": "さくりもね"
            },
            {
              "word": "ひとくまり"
            },
            {
              "word": "ねりはまそ"
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
            "tardy": true,
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
                    "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\n  \u003Cp style=\"color:gray; font-size:1.5vh\"\u003Eアナグラム課題の答えをひらがな5文字でできるだけ正確に入力し，Enterで入力を確定してください。\n  \n\u003Cbr\u003E文字を消去する際は、アルファベットが残らないように注意してください。\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n",
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
  else if(inputArray.length != 0 && e.key == 'Enter')
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
else if(this.parameters.word == "とかひみつ" && response == "ひとつかみ" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "えめまりの" && response == "まえのめり" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "まとしおわ" && response == "とおまわし" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "くきたても" && response == "たもくてき" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "せしつふん" && response == "ふしんせつ" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "あもせちわ" && response == "もちあわせ" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "らわかりま" && response == "からまわり" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "うふいとめ" && response == "ふとうめい" )

{
  this.data.correct = '1';
}

else if(response=="1")


{
  this.data.correct = '2'
}

else
{
  this.data.correct = '0';
}
}
                },
                "title": "item",
                "tardy": true
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
                "timeout": "2000",
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
              "title": "アナグラム課題",
              "content": "\u003Cp\u003Eもう一度アナグラム問題に取り組んでいただきます。\n問題が表示されますので、\u003Cstrong\u003Eテキストの部分にひらがな5文字\u003C\u002Fstrong\u003Eを入力してください。\n\u003C\u002Fp\u003E\n\u003Cp\u003E解答が思い浮かばない場合は、\u003Cstrong\u003E１\u003C\u002Fstrong\u003Eを入力し次に進んでください。\u003C\u002Fp\u003E\n\n\u003C\u002Fp\u003E"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv class =\"content-horizontal-center\"\u003E\r\n  \u003Cbutton type =\"submit\" form=\"page-form\"\u003E課題を始める\u003C\u002Fbutton\u003E\r\n\u003C\u002Fdiv\u003E",
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
          "title": "Test2 : instruction"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "html",
              "content": "\u003Cdiv class =\"content-horizontal-center\"\u003E\r\n  \u003Ch1\u003ESTART!\u003C\u002Fh1\u003E\r\n\u003C\u002Fdiv\u003E",
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
              "word": "きうしろん"
            },
            {
              "word": "あまいたし"
            },
            {
              "word": "まうせんか"
            },
            {
              "word": "くれしてか"
            },
            {
              "word": "きつありま"
            },
            {
              "word": "うれはまや"
            },
            {
              "word": "てとふうき"
            },
            {
              "word": "みかりおし"
            },
            {
              "word": "ちむんいも"
            },
            {
              "word": "まんなかは"
            },
            {
              "word": "からさみう"
            },
            {
              "word": "いふうせり"
            },
            {
              "word": "んうきこね"
            },
            {
              "word": "まりはいか"
            },
            {
              "word": "いまさけく"
            },
            {
              "word": "かせみいん"
            },
            {
              "word": "ひかえみと"
            },
            {
              "word": "あしたかね"
            },
            {
              "word": "にかんみく"
            },
            {
              "word": "もたいかお"
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
            "tardy": true,
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
                    "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\r\n  \u003Cp style=\"color:gray; font-size:1.5vh\"\u003Eアナグラム課題の答えをひらがな5文字でできるだけ正確に入力し，Enterで入力を確定してください。\r\n  \r\n\u003Cbr\u003E文字を消去する際は、アルファベットが残らないように注意してください。\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
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
  else if(inputArray.length != 0 && e.key == 'Enter')
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

if(this.parameters.word == "きうしろん" && response == "しんきろう")
{
  this.data.correct = '1';
}
else if(this.parameters.word == "あまいたし" && response == "いしあたま")
{
  this.data.correct = '1';
}
else if(this.parameters.word == "まうせんか" && response == "うんまかせ")
{
  this.data.correct = '1';
}
else if(this.parameters.word == "くれしてか" && response == "てれかくし" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "きつありま" && response == "あきまつり" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "うれはまや" && response == "はやうまれ" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "てとふうき" && response == "ふてきとう" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "みかりおし" && response == "かおみしり" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "ちむんいも" && response == "むいちもん" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "まんなかは" && response == "なまはんか" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "からさみう" && response == "さかうらみ" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "いふうせり" && response == "ふせいりつ" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "んうきこね" && response == "こうねんき" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "まりはいか" && response == "はかまいり" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "いまさけく" && response == "まけいくさ" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "かせみいん" && response == "みかんせい" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "ひかえみと" && response == "かみひとえ" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "あしたかね" && response == "たねあかし" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "にかんみく" && response == "みかくにん" )

{
  this.data.correct = '1';
}
else if(this.parameters.word == "もたいかお" && response == "かたおもい" )

{
  this.data.correct = '1';
}

else if(response=="1")


{
  this.data.correct = '2'
}

else
{
  this.data.correct = '0';
}
}
                },
                "title": "item",
                "tardy": true
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cdiv class=\"content-horizontal-center\"\u003E\r\n  \u003Cspan style = \"color:black; font-size:6vh\"\u003E${this.state.correct==\"2\" ? \"残念\" : this.state.correct==\"1\" ? \"正解\":\"不正解\"}\u003C\u002Fspan\u003E\r\n\u003C\u002Fdiv\u003E",
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
                "timeout": "2000",
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
              "content": "\u003Cp\u003E以下の質問文を読んでいただき、あなたにもっとも当てはまると思う選択肢を選んで回答してください。\n\u003Cbr\u003E回答は選択肢のボタンをチェックすることで行ってください。\u003C\u002Fp\u003E"
            },
            {
              "required": true,
              "type": "radio",
              "label": "Q1  あなたは、この課題にできるだけ速く取り組んだ。",
              "options": [
                {
                  "label": " 1. 全くそう思わない",
                  "coding": "1"
                },
                {
                  "label": "2.  あまりそう思わない",
                  "coding": "2"
                },
                {
                  "coding": "3",
                  "label": "3. どちらともいえない"
                },
                {
                  "label": "4. まあまあそう思う",
                  "coding": "4"
                },
                {
                  "label": "5. 非常にそう思う",
                  "coding": "5"
                }
              ],
              "name": "q1"
            },
            {
              "required": true,
              "type": "radio",
              "label": "Q2   あなたは、この課題にできるだけ正確に取り組んだ。",
              "options": [
                {
                  "label": "1. 全くそう思わない",
                  "coding": "1"
                },
                {
                  "label": "2.  あまりそう思わない",
                  "coding": "2"
                },
                {
                  "label": "3. どちらともいえない",
                  "coding": "3"
                },
                {
                  "label": "4. まあまあそう思う",
                  "coding": "4"
                },
                {
                  "coding": "5",
                  "label": "5. 非常にそう思う"
                }
              ],
              "name": "q2"
            },
            {
              "required": true,
              "type": "radio",
              "label": "Q3  あなたは、最後まであきらめずにこの課題に取り組んだ。",
              "options": [
                {
                  "label": "1. 全くそう思わない",
                  "coding": "1"
                },
                {
                  "label": "2.  あまりそう思わない",
                  "coding": "2"
                },
                {
                  "label": "3. どちらともいえない",
                  "coding": "3"
                },
                {
                  "label": "4. まあまあそう思う",
                  "coding": "4"
                },
                {
                  "label": "5. 非常にそう思う",
                  "coding": "5"
                }
              ],
              "name": "q3"
            },
            {
              "required": true,
              "type": "radio",
              "label": "Q4  あなたは、課題に取り組んでいる時は，課題のことしか考えなかった。",
              "options": [
                {
                  "label": "1. 全くそう思わない",
                  "coding": "1"
                },
                {
                  "label": "2.  あまりそう思わない",
                  "coding": "2"
                },
                {
                  "label": "3. どちらともいえない",
                  "coding": "3"
                },
                {
                  "label": "4. まあまあそう思う",
                  "coding": "4"
                },
                {
                  "label": "5. 非常にそう思う",
                  "coding": "5"
                }
              ],
              "name": "q4"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "questionnaire"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "ありがとうございました。",
              "content": "\u003Cp\u003Eこれで実験は終了です。\n\u003Cbr\u003Eご参加いただき、誠にありがとうございました。\n\u003Cbr\u003E以下の「結果のダウンロード」ボタンを押すと結果をダウンロードできます。\u003C\u002Fp\u003E\n"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "結果のダウンロード →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Thanks"
        }
      ]
    }
  ]
})

// Let's go!
study.run()