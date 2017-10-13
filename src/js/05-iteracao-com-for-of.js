var list = [
    'teste', 34, {name: 'Marcos'}
];

// antes do ES6

for (var index in list) {
    console.log(list[index]);
}

// com ES6
for (let value of list) {
    console.log(value);
}