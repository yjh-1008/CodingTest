const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number);
const J = input[1];


function Solution() {
  let l = 1
  let r;
  let ret = 0;
  for(let i = 2;i<input.length;i++) {
    const cur = Number(input[i])
    r = l + M -1;
    if(cur >= l && cur <= r) continue;
    else {
      if(cur < l) {
        ret += (l - cur);
        l = cur;    
      } else {
        l += cur - r;
        ret += cur -r
      }
    }
  }

  console.log(ret);
}
Solution();