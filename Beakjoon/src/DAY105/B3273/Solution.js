  const fs = require('fs');
  let [N, arr, X] = fs.readFileSync('./index.txt').toString().trim().split('\n').map(v=> v.split(' ').map(Number));

function Solution() {
  let lt=0, rt=N[0]-1, sum = 0, ret = 0;
  arr.sort((a,b) => a-b)
  while(lt < rt) {
    if(arr[lt] + arr[rt] === X[0]) {
      rt--;
      ret++;
    }else if(arr[lt] + arr[rt] > X[0]) rt--;
    else lt++;
  }
  
  console.log(ret)
}

Solution()