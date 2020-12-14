console.log("파라미터 수 : ", process.argv.length);
console.dir(process.argv);
//첫번째 파라미터 : node.exe
//두번째 파라미터 : node path

if (process.argv.length > 2) {
    console.log("세번째 파라미터 값 : %s", process.argv[2])
}

process.argv.forEach(function (item, index) {
    console.log(index + " : " + item);
});

console.dir(process.argv);