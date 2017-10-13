// antes do ES6
console.log('Hello'.indexOf('ello') === 1); // true

// COM ES6
console.log('Hello'.startsWith('ello', 1)); // true
console.log('Hello'.endsWith('Hell', 4)); // true
console.log('Hello'.includes('llo')); // true

// pula o numero de indices e faz a busca no restante da string
console.log('Hello'.includes('e', 2)); // false, pois o é está no índice 2
console.log('Hello'.includes('o', 2)); // true