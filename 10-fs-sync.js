const { readFileSync, writeFileSync, read } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first);
console.log(second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
//here the flag:a meaning append.
//The file content will be appended not overridden
//By default the writefile will override the content

const result = readFileSync("./content/result-sync.txt", "utf-8");
console.log(result);
