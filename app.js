//CommonJS, every file is module (by default)
// modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')

console.log(names);
sayHi('aman')
sayHi(names.john)
sayHi(names.peter)