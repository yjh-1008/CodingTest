const fs = require('fs');
let input = fs.readFileSync('./index.txt').toString().trim();


function Solution() {
  let ret  = true;
  for(let i=0; i<input.length;i++) {
    if(i < input.length -1 && (input.substring(i,i+2) === 'pi' || input.substring(i,i+2) === 'ka')) i+=1;
    else if(i < input.length -2 && input.substring(i,i+3) === 'chu' ) i+=2;
    else ret = false;
  }
  return ret === false ? "NO" : "YES"
}

console.log(Solution())