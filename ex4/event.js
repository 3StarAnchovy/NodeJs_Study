process.on('exit', function () { //3
    console.log('exit 이벤트 발생함');
});
console.log('2초후에 시스템 종료 시도'); //1
setTimeout(function () { //2
    process.exit();
}, 2000);