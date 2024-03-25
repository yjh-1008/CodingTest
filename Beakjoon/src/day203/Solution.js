const fs = require('fs');
const [min, max] = fs.readFileSync('./text.txt').toString().trim().split(" ").map(Number);
const chked = new Array(1000001).fill(0);
function Solution() {
  let ret = 0;
  // console.log
  for(let i=2;i*i<=max;i++) {
    let n = Math.floor(min/(i*i));
    // console.log(n,i)
    // if(min % (i*i)) {
    //   console.log(min, i);
    //   ret+=1;
    // }
    while(n * i * i <= max) {
      chked[n*i*i-min] = 1;
      n+=1;
    } 
  }
  for(let i=0;i<=max-min;i++) {
    if(chked[i] == 0) ret += 1;
  }
  console.log(ret)
}

Solution();