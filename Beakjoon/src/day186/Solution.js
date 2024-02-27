const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");
const [N,L] = input[0].split(" ").map(Number);
const arr = [];
const copy = Array.from({length:N}, () => new Array(N));
for(let i=1;i<input.length;i++) {
  arr.push([...input[i].split(" ").map(Number)]);
};

for(let i=0;i<N;i++) {
  for(let j=0;j<N;j++) {
    copy[j][i] = arr[i][j];
  }
}

let ret = 0;
function solve(a) {
  for(let i=0;i<N;i++) {
    let cnt = 1;
    let j;
    for(j=0;j<N-1;j++) {
      if(a[i][j] === a[i][j+1]) cnt+=1;
      else if(a[i][j] +1 === a[i][j+1] && cnt >= L) cnt = 1;
      else if(a[i][j] -1  === a[i][j+1] && cnt >= 0) cnt = -L + 1;
      else break; 
    }
    if(j === N-1 && cnt>=0) ret++;
  }
  return;
}


function Solution() {
  // step1. 전체 행 또는 열에 대해 검사. 
  // 1-1. 길을 L보다 작거나 같게 이동할 수 있는가?
  // 1-2. 내리막길일때 증가하지 않는가? 오르막일때 감소하지않는가?
  solve(arr);
  solve(copy);
  console.log(ret);

}

Solution();