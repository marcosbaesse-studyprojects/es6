var US = new Intl.DateTimeFormat('en-US');
var BR = new Intl.DateTimeFormat('pt-BR');
var DE = new Intl.DateTimeFormat('de-DE');

console.log(US.format(new Date()));
console.log(BR.format(new Date()));
console.log(DE.format(new Date()));