var inputs = process.argv.slice(2);
var result = inputs.map((input) => input[0]).reduce((acc, current) => acc.concat(current))
console.log(`[${inputs}] becomes "${result}"`)