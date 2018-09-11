#webpack(v4)


### webpackでバンドル(JSのモジュール機構を解決)してみる

```
npm install webpack --save-dev

calc.jsを作成(mul関数を定義)
main.jsを作成(mul関数を使用)
webpack.conifg.jsを作成

npm install webpack-cli --save-dev
mkdir out

#これでout下にbundle.jsが作成される
webpack

#ファイル更新を監視する
webpack --watch
```