# 備忘録

## Vueインスタンスの作成

Vue.createAppメソッドを使用する

## テンプレートとは

HTMLベースのテンプレート構文を使用した描画部分に関する記述のこと
いわゆるMVCモデルとかMVVMモデルで言うところのVの部分 Viewに相当する部分です

### ルートテンプレートとは

テンプレートの中でも頂点に位置するテンプレートのこと  
HTMLの中でルートのテンプレートの中がVue.jsの世界として利用できる  
マウントが必要  
app.mount('#app')
mountメソッドを呼び出すことにより指定されたHTML要素がVue.jsが構築したDOMに置き換えられる  
この動作のことをマウントと呼ぶ

## リアクティブ

リアクティブというのは 日本語で言うと反応的といった意味になります  
わかりやすく ざっくりと説明するなら各要素をつなげて反応的に変化させることです

## アロー関数

関数式の簡潔な代替構文。  

```js
// アロー関数を使用した関数式(スッキリ)
const app = Vue.createApp({
    data: ()=>({
        message: 'Hello Vue.js'
    })
})
app.mount('#app')

// 従来の関数式(長い)
const app = Vue.createApp({
    data: function() {
        return{
            message: 'Hello Vue.js'
        }
    }
}).mount('#app')
```

## データバインディング

アプリケーションで使うデータをdataオプションで用意して テンプレート側がそれ(data)を参照することを行うデータ割り当ての仕組みのこと

データと描画を同期する仕組み

- 文字のリアルタイム反映

DOMの更新を自動化するデータバインディングを行うには テンプレートで使用するすべてのデータはリアクティブデータとして定義する必要がある  

### マスタッシュ構文

テキスト展開になります

日本語で言うと口ひげのことです(二重括弧が口ひげにも見えることから)

## ディレクティブ

日本語で言うと 指令  

Vue.jsに何らかの指示を行う仕組みです

ディレクティブの例

- v-bind
    - v-bind:class
- v-if
- v-show
- v-for
- v-on
- v-model

ディレクティブはDOMへ反映される前にVue.jsによって解釈・変換されてそのあとは内部的にのみ利用される

### v-bind

属性へのデータバインディングにはv-bindを使用する

```html
<input type="text" v-bind:value="message">
```

```js
  data: () => ({
    message: 'hello'
  })
```

#### v-bind:class

htmlでcssのクラス属性をデータバインディングする

#### 省略記法

### v-if

条件分岐によって要素の表示・非表示を切り替えることができるディレクティブです

```html
<p v-if="toggle">Hello</p>
```

```js
  data: () => ({
    toggle: true
  })
```

### v-for

繰り返し描画する際に使用する

```html
<b>colors</b>
<ol>
    <li v-for="color in colors">{{ color }}</li>
</ol>
<b>user</b>
<ul>
    <li v-for="value in user">{{ value }}</li>
</ul>
```

```js
        <b>colors</b>
        <ol>
            <li v-for="color in colors">{{ color }}</li>
        </ol>
        <b>user</b>
        <ul>
            <li v-for="(value, key) in user">{{ key}} : {{ value }}</li>
        </ul>
```

### v-on

イベントハンドラ(ボタンをクリックしたり、スクロールなどのユーザーによる一連の挙動を『イベント』と呼びます。そして、それら様々なイベントに対応して発動させる処理のこと（関数）)を実行させるために使う
> [【Vue.js】v-onについて #JavaScript - Qiita](https://qiita.com/Yudai_35_/items/abab633a25deddf09b75)

### v-model

双方向データバインディングを実装するために使用する

### v-on:submit.prevent

送信してリロードが実行されるのを防ぐ

### v-once

初回だけテンプレートを評価してそれ以降は静的なコンテンツとして扱う。  
処理を減らして 描画更新のパフォーマンスを上げたいときに利用できる

<!--
ここから続ける？
https://www.udemy.com/course/learn-vuejs/learn/lecture/28893134#overview
### v-pre

### v-html

### v-cloak

### v-text

## this
 -->

## コンポーネント

- 名前つきの再利用可能なインスタンス
    - ページを構成するUI部品のこと
- テンプレートとそのロジックから構成される
- よく使う機能をコンポーネント化するメリット
    - 再利用性が高くなる
    - コードの見通しがよくなる
    - 開発効率の改善につながる

## todoアプリの要件定義

- フォームからデータをCRUDできる
    - C(Create_登録)
        - データを登録できること
        - 登録できたらフォームを空にする
    - R(Read_参照)
        - 一覧を表示する
        - 編集するときははフォームに登録されている値が表示される状態にする
    - U(Update_更新)
        - 登録済みのデータを更新できるようにする
    - D(Delete_削除)
        - タスクを削除できるようにする
    - Option
        - タスクの未完了・完了の表示を切り替えられるようにする
