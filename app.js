/* <関数とは>
同じプログラムで何度も記述するのは、効率的ではない
→　「関数」を使う

・「関数」は、繰り返し使われる一連の処理を1つにまとめたもの
・関数の形で定義しておき、毎回同じプログラムを書く代わりに、この関数を呼び出すことで処理を実行する。

(記述例)
function 関数名(){
  処理内容
}

JavaScriptでは、functionに続けて関数名を書き、｛｝内に処理内容を記述する。
*/


/* <「引数」と「戻り値」>
入力する値を「引数」、出力される値を「戻り値」という。

・関数に引数を渡したいときは、()内に引数を書く。
　引数は「,」でつないで複数指定することも可能。 → それぞれ順番に引数が格納される。
・関数の結果を出力したいときは、return内に戻り値を渡す。
　こうすると、関数の処理結果が呼び出し元から利用できるようになる。

(記述例)
function 関数名(引数){
  処理
  return 戻り値;
}*/


/* <関数の作成>
function addString(strA){
  → functionの後に、関数名「addString」を記述し、引数として「strA」を定義している。

  let addStr = "Hello" + strA;
  → 変数名「addStr」に、「Hello 」の文字列と、関数の引数「strA」に設定されている文字列を結合。

  return addStr;
  → 結合結果の格納された「addStr」を、関数の戻り値としている。
}
 */


/* // メイン部分
let alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString);

// 作成した関数
function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
} */

/* <複数の関数で表示できるようにする>
・入力ダイアログで値を入力する
let promptStr = prompt('何か好きな文字を入力してください。');

alert(promptStr); */


// ・じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
//　「"グー"以外且つ、チョキ"以外且つ、"パー"以外且つ、キャンセルボタン以外だったら」というような条件
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

// ・じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ・ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// ・結果を表示する
// 「キャンセルじゃなかったら」じゃんけんの結果を出し、elseで「キャンセルだったら」”またチャレンジしてね”という文言が出せる処理
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

// ・ランダムでじゃんけんの手を作成する関数
function getJShand(){
  // Math.floor( Math.random() * 3 )で0～2までのランダムな整数値を生成。
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand;

  if(js_hand_num == 0){
    hand = "グー";
  } else if(js_hand_num == 1){
    hand = "チョキ";
  } else if(js_hand_num == 2){
    hand = "パー";
  }

  return hand;
}

// ・ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}