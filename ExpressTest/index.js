var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 3000); //기본포트를 set 함수 호출해서 설정

http.createServer(app).listen(app.get('port'),function(){
    console.log('익스프레스 서버를 시작함 : '+app.get('port'));
});