
const fs = require('fs')
const input = fs.readFileSync('./text.txt').toString().trim();

function Solution() {
  const len = input.length;
  const div = len/2;
  if('9'.repeat(input.length) === input) {
    console.log((BigInt(input)+2n).toString());
  } else if(len === 1) {
    console.log((BigInt(input)+1n).toString())
  } else if(len % 2 === 0) { // 짝수
    const a = BigInt(input.slice(0, div));
    const b = input.slice(div);
    const reverse = a.toString().split("").reverse().join("");
    if(reverse>b) {
      console.log(a.toString()+reverse)
    } else {
      const plusA = (BigInt(a)+1n).toString();
      console.log(plusA + plusA.toString().split("").reverse().join(""));
    }
  } else { //홀수
    const num = parseInt(div);
    let a = input.slice(0, num+1);
    const b = input.slice(num, len);
    let reverse = a.split("").reverse().join("");
    
    if(BigInt(reverse) > b) {
      console.log(a + reverse.slice(1, num+1));
    } else {
      const middle = parseInt(a.at(-1));
      a = (BigInt(a)+1n).toString()
      reverse = a.slice(0, a.length-1).split("").reverse().join("")
      console.log(a+ reverse.slice(0, reverse.length));
    }
  }
  return;
}

Solution();