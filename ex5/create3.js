var http = require('http');

var server = http.createServer();
port = 3000;

server.listen(port, function () {
    console.log('서버가 시작됩니다 ! : 포트번호 - %d', port);
});

server.on('connection', function (socket) {
    var addr = socket.address();
    console.log('클라이언트가 접속함 : %s,%d', addr.address, addr.port);
});

server.on('request', function (req, res) {
    console.log('클라이언트 요청이 들어옴');
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });
    res.write("");
});

server.on('close', function () {
    console.log('서버가 종료됩니다.');
});