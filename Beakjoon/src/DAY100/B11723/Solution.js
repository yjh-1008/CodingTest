const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const N = parseInt(input.shift());
const ret = [];
function Solution() {
  let num = 0;
  num = num.toString(2)
  for(let i=0;i<N;i++) {
    let [str, a] = input.shift().split(' ');
    a = parseInt(a);
    if(str === 'add') {
      // a = a.toString(2);
      // if(!(num & (1<<a))){
        num |= (1<<a);
      // }
    }else if(str === 'check') {
      if( !(num & (1<<a))) {
        ret.push(0);
      }else ret.push(1);
    }else if(str === 'remove') {
      if((num & (1<<a))){
        num &= ~(1<<a);
      }
    }else if(str === 'all') {
      num |= (1<<21)-1
    }else if(str === 'toggle') {
      num ^= (1<<a)
    }else if(str === 'empty') {
      num = 0;
    }
    
  }

  console.log(ret.join('\n'));
}

Solution();