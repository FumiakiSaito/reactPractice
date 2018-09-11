### webpackでReact/JSXをビルドしてみる

```
mkdir src out

#package.jsonの作成
npm init --force

#Webpackインストール
npm install --save-dev webpack
npm install --save-dev webpack-cli

#Reqctインストール
npm install --save-dev react react-dom

#Babel(v7)とReactプリセットをインストール
npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

webpack.config.jsを作成
.babelrcを作成

#これでout/bundle.jsが作成される
webpack


out/bundle.jsを読み込むhtmlを作成する
main.htmlを作成

#webサーバーを起動
serve

#ブラウザでアクセスする
http://localhost:5000

```