var result = 0;
console.time('TimeTest');
for (var i = 0; i < 100; i++) {
    result += i;
}

console.timeEnd('TimeTest');
console.log(result);

var Person = {
    name: "크쿠루삥뽕",
    size: 1
};
console.dir(Person);