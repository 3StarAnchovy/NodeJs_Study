var url = require('url');

var curURL = url.parse('https://comic.naver.com/webtoon/list.nhn?titleId=703852&weekday=tue');

console.log("객체 --------------------");
console.dir(curURL);

var curStr = url.format(curURL);
console.log("주소 문자열 -----------------------");
console.log(curStr);

// ? 를 기준으로 전자는 호스트, 후자는 요청 파라미터임

var queryString = require('querystring');
var paraM = queryString.parse(curURL.query);
console.log("요청 파라미터 중 쿼리 값  : %s", paraM.query);