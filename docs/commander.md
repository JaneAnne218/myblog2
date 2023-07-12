```js
//node 1.js -s / --first a/b/c  ls/d/lss
const { program } = require('commander');

program
  .option('--first')
  .option('-s, --separator <char>');

program.parse();

const options = program.opts();
console.log(program.args)//[ 'a/b/c', 'ls/d/lss' ]

const limit = options.first ? 1 : undefined;
console.log(options.first)// true
console.log(limit)// 1
console.log(program.args[1].split(options.separator, limit));//[ 'ls' ]

```
