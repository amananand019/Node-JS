//CommonJS, every file is module (by default)
// modules - Encapsulated Code (only share minimum)
const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

console.log(names);
console.log(data);

// sayHi("aman");
// sayHi(names.john);
// sayHi(names.peter);
// sayHi(data.items[0]);
// sayHi(data.items[1]);
// sayHi(data.person.name);

//since function is invoked in the mind-grenade file so it will execute while importing
require("./7-mind-grenade");
