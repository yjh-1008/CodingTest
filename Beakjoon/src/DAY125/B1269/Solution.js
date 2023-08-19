const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const [N,M] = input.shift().split(' ').map(Number);

const A = input.shift().split(' ').map(Number).sort((a,b)=>a-b);
const B = input.shift().split(' ').map(Number).sort((a,b)=>a-b);

function Solution() {
  let ret = 0
  for(let i=0;i<N;i++) {
    let lt = 0, rt = M-1,n=A[i];
    while(lt<=rt) {
      let mid = Math.floor((lt+rt)/2);
      if(B[mid] >= n) {
        if(B[mid] ===n) {
         ret++;
         break;
        }
        rt = mid -1;
      }else {
        lt = mid+1;
      }
    }
  }

  for(let i=0;i<M;i++) {
    let lt = 0, rt = N-1,n=B[i];
    while(lt<=rt) {
      let mid = Math.floor((lt+rt)/2);

      if(A[mid] >= n) {
        if(A[mid] === n) {
         ret++;
         break;
        }
        rt = mid -1;
      }else {
        lt = mid+1;
      }
    }
  }
  console.log(N+M-ret)
}

Solution();
 