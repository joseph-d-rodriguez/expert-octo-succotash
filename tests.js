assert = require('assert');
joeUtils = require('./index.js');

let result = null,
	A = 'A'.charCodeAt(0),
	Z = 'Z'.charCodeAt(0);
for (var i=0; i < 1000; i++) {
	result = joeUtils.generateDataBetween('A', 'Z').charCodeAt(0);
	assert(result >= A && result <= Z, `Bad result: ${String.fromCharCode(result)} (${result})`);
}


console.log('All tests pass!');
