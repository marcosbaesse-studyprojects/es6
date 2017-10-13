// antes do ES6
let name = 'Marcos';
let age = 21;
let text = "nome: " + name + ", Idade: " + age;

console.log(text);

// com ES6
text = `Nome: ${ name }, Idade: ${ age } `; // neste modo, uma quebra de linha equivale à um \n

console.log(text);