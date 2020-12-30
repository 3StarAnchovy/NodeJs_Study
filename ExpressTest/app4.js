var exprees = require('express');
var http = require('http');

var app = exprees();
app.set('port', 3000);

app.use(function (req, res, next) {
    console.log('첫번째 미들웨어');
    res.send({
        name: 'Be quiet',
        age: 50
    });
});
http.createServer(app).listen(app.get('port'), function () {
    console.log('웹서버 시작 : ' + app.get('port'));
});