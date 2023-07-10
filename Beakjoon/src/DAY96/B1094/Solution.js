const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim()
const N = parseInt(input);
function Solution() {
  let str = N.toString(2).split('');
  let ret = str.filter((d) => d=== '1')
  return ret.length;
  
}

console.log(Solution());