const fs = require('fs');
const [N, arr] = fs.readFileSync('./index.txt').toString().trim().split('\n').map((v)=>v.split(' ').map(Number));

function Solution() {
  let cnt = new Array(N[0]).fill(0);
  let s =0, e=0, ret = 0;
  while(e<N) {
    
    if(!cnt[arr[e]]) {
      cnt[arr[e]]++;
      e++;
      
    }else {
      ret += e-s;
      cnt[arr[s]]--;
      s++;
    }
  }
  console.log(s)
  let tmp = e-s;
  ret += (tmp*(tmp+1))/2;
  console.log(ret)
}

Solution()