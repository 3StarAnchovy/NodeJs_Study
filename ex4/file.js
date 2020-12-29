// var fs = require('fs');

// var data = fs.readFileSync('./package-lock.json', 'utf-8');
// console.log(data); 동기식 IO로 파일 불러들임 , 파일 다 읽을 때 까지 콘솔로그가 실행이 되지 않음

var fs = require('fs');

var data = fs.readFile('./package-lock.json', 'utf-8', function (err, data) { //비동기식, 파읽 다 읽기전에 콘솔로그 실행
    console.log(data);
});

console.log("파일읅 읽을때까지 기다립니당....");