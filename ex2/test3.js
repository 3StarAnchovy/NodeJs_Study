var nconf = require("nconf");

nconf.env();
console.log(nconf.get("OS"));

// 모듈 설치 명령어 : npm install module
// 터미널 지정되어있는 폴더의 package 생성 : npm init -y 