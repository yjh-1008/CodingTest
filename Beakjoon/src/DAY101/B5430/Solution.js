const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const T = parseInt(input.shift());

function Solution() {
  let ret = [];
  for(let i=0;i<T;i++) {
    let cmd = input.shift().split('');
    let n = parseInt(input.shift());
    let arr
    let str = input.shift()
    if(n === 0) arr = []
    else arr = str.substring(1, str.length-1).split(',').map(Number);
    let flag = true;
    let chk = true;
    for(let j=0;j<cmd.length;j++) {
      if(cmd[j] === 'R') {
        flag = !flag;
      }else if(cmd[j] === 'D') {
        if(arr.length === 0 ){
          chk = false;
          break;
        }

        if(flag) arr.shift();
        else arr.pop();
      }
    }
    if(chk) {
      if(flag) ret.push(`[${arr.join(',')}]`)
      else  ret.push(`[${arr.reverse().join(',')}]`)
    }
    else ret.push('error')
  }
  return ret
}

console.log(Solution().join('\n'));