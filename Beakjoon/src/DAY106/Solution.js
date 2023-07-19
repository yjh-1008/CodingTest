const fs = require('fs');
let [str, bomb] = fs.readFileSync('./index.txt').toString().trim().split('\n');

function Solution() {
  str = str.split('');
  let ret = []
  for(let i=0;i<str.length;i++) {
    ret.push(str[i]);
    while(ret.length >= bomb.length) {
      let tmp = ret.slice(-bomb.length).join('');
      if(tmp === bomb) {
        ret.splice(-bomb.length, bomb.length)
      }else break;
    }
  }
  console.log(ret.length === 0 ? "FRULA" : ret.join(''))
}

Solution();