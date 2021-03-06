function add(a, b, callback) {
    var result = a + b;
    callback(result);

    var history = function () {
        return a + '+' + b + '=' + result;
    };
    return history;
}

var add_history = add(10, 10, function (result) {
    setTimeout(function () {
        console.log("파라미터로 전달된 콜백 함수 호출 됨.")
    }, 2000);
    console.log(result);
});

console.log("결과 값으로 받은 함수 실행 결과 :" + add_history());