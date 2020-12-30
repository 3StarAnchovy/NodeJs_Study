var express = require('express');
var http = require('http');
var app = express();

app.set('port', 3000);
app.use(function (req, res, next) {
    console.log('첫번째 미들웨어');
    res.writeHead('200', {
        'Content-Type': 'text/html;charset=utf8'
    })
    res.end('<h1>>Expree 서버에서 응답한 결과</h1>');
}); //미들웨어
http.createServer(app).listen(app.get('port'), function () {
    console.log('웹 서버 시작 !');
});