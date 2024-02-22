const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const N = parseInt(input[0]);
const max = input[1].split(" ").map(Number);
const arr = input.slice(2, input.length).map(v=> v.split(" ").map(Number));

function Solution() {
  let ret = Number.MAX_VALUE;
  let ret_v = [];
  let b, c, d, e, sum;
  for(let i=1;i<(1<<N);i++) {
    b=c=d=e=sum = 0;
    let idxs=[];
    for(let j=0;j<arr.length;j++) {
      if(i & (1<<j)) {
        idxs.push(j+1);
        b += arr[j][0];
        c += arr[j][1];
        d += arr[j][2];
        e += arr[j][3];
        sum += arr[j][4];
      }

    }
    if(b >= max[0] && c >= max[1] && d >= max[2] && e>=max[3]) {
      if(ret > sum) {
        ret = sum;
        ret_v = [];
        ret_v.push(idxs);
      } else if(ret === sum) ret_v.push(idxs);
    }
  }
  if(ret === Number.MAX_VALUE) console.log(-1);
  else console.log(`${ret}\n${ret_v.sort()[0].join(" ")}`)
}

Solution();