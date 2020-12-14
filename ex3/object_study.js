var Person = {
    name: ["Bro",
        "Hello"
    ],
    age: [11,
        23
    ],
    add: function (a, b) {
        return a + b;
    }
};

console.log(Person.name[1]);
console.log(Person.add(3, 5));