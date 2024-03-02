const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim();
const N = parseInt(input).toString(2)

let ret = 0;
for(let i=0;i<N.length;i++) {
  if(N.charAt(i) === '1') {
    ret+=1;
  } 
}

console.log(ret)