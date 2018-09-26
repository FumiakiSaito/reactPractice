const express = require('express');
const app = express();

const portNo = 3000;

// アクセスがあった時
app.get('/', (req, res, next) => {
    res.send('Hello world');
})

app.listen(portNo, () => {
    console.log('起動しました', `http://localhost:${portNo}`)
})
