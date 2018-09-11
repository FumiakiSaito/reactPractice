### create-react-appコマンドで雛形の作成と、公開用ファイルをビルドしてみる

```
# create-react-appコマンドのインストール
npm install create-react-app

# React/jSXの雛形作成
create-react-app hello

cd hello
npm start

# プロブラムの公開
# これでbuildディレクトリに圧縮ファイルが作成される
npm run build

#↑のファイルをブラウザにドラッグしただけでは動かない
#サーバーが必要になるから
npm install -g serve
serve -s build


   ┌─────────────────────────────────────────────────┐
   │                                                 │
   │   Serving!                                      │
   │                                                 │
   │   - Local:            http://localhost:3000     │
   │   - On Your Network:  http://192.168.0.7:3000   │
   │                                                 │
   │   Copied local address to clipboard!            │
   │                                                 │
   └─────────────────────────────────────────────────┘

↑こんなのが出てくるのでブラウザでアクセスする

```