const fs = require('fs');
let [N, arr, oper] = fs.readFileSync('./index.txt').toString().trim().split('\n').map((v)=>v.split(' ').map(Number));
let min_ret = 1000000000;
let max_ret = -1000000000;

function dfs(idx, sum, pl, mi, mu, di) {
  if(idx === N-1) {
      min_ret = Math.min(sum , min_ret);
      max_ret = Math.max(sum, max_ret);
      return;
  }
  if(pl) dfs(idx+1,sum+arr[idx+1], pl-1, mi, mu, di);
  if(mi) dfs(idx+1,sum-arr[idx+1], pl, mi-1, mu, di);
  if(mu) dfs(idx+1,sum*arr[idx+1], pl, mi, mu-1, di);
  if(di) dfs(idx+1,parseInt(sum/arr[idx+1]), pl, mi, mu, di-1);
  return
}

function Solution() {
  const [pl, mi, mu, di] = oper;

  dfs(0, arr[0], pl, mi, mu, di);
  console.log(`${max_ret}\n${min_ret}`)
 
}

Solution()