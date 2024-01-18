const path = require('path');

const filePath = './index.js';
const directoryPath = '../path';

// Is path Absolute ?
console.log(path.isAbsolute(filePath));

// index.js
console.log((path.basename(filePath)))
console.log((path.basename(directoryPath)))

console.log((path.dirname(directoryPath)))


