const fs = require('fs');
let [N,...input] = fs.readFileSync('./index.txt').toString().trim().split('\n').map((v) => v.split(' ').map(Number));

function Solution() {
  let ret = 0;
  input.sort((a,b)=> {
    if(a[0]===b[0]) return a[1]-b[1];
    else return a[0]-b[0]
  })
  input.forEach((d)=> {
    if(d[0] > ret) {
      ret = d[0] + d[1];
    }else {
      ret+= d[1]
    }
  });
  console.log(ret)
}

Solution();