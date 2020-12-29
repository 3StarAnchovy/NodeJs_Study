// var http = require('http');

// var server = http.createServer();

// var port = 3000;
// server.listen(port, function () {
//     console.log("웹 서버가 시작 되었습니다. : %d", port);
// });

var http = require('http');
var port = 3000;
var host = '211.230.78.115';

var server = http.createServer();

server.listen(port, host, function () { //특정 아이피 지정 후 포트번호에서 대기
    console.log('웹서버 붐');
});