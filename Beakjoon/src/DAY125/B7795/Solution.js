const fs = require('fs');

const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const T = parseInt(input.shift());

function binarySort(n, arr, len) {
  let lt =0, rt = len-1, ret = 0;
  while(lt<=rt) {
    let mid = Math.floor((lt+rt)/2);
    if(arr[mid] >= n) {
      rt = mid-1;
    }else {
      ret = Math.max(ret, mid);
      lt = mid+1;
    }
  }
  console.log('ret', ret)
  if(ret === 0 ) return arr[0] < n ? 1 : 0;
  ret++;
  return ret;
}

function Solution() {
  let ret = [];
  for(let i=0;i<T;i++) {
    let cnt = 0;
    let tmp = 0;
    const [N, M] = input.shift().split(' ').map(Number);
    const A = input.shift().split(' ').map(Number);
    const B = input.shift().split(' ').map(Number).sort((a,b) => a-b);
    for(let j=0;j<N;j++) {
      
      tmp += binarySort(A[j], B, M);
      console.log('tmp',tmp)
    }
    ret.push(tmp);
  }

  console.log(ret.join('\n'))
}

Solution();