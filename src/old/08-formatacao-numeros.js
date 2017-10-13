var number = 123456.32;
var En = Intl.NumberFormat('en-US').format(number);
var De = Intl.NumberFormat('de-DE').format(number);

// apenas no navegador!!!
// O console do nodejs retorna só a formatação em en-US
console.log(En); // 123,456.32
console.log(De); // 123.456,32