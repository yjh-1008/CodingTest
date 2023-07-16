const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');

function Solution() {
  const N = parseInt(input[0]);
  let arr = [];
  for(let i=1;i<=N;i++) {
    let tmp = input[i].split(' ').map(Number);
    arr.push([tmp[0], tmp[1]]);
  }
  arr.sort((a,b)=> {
    if(a[1] === b[1]) {
      return a[0]- b[0];
    }else{
      return a[1]-b[1];
    }  
  })
  let to = arr[0][1];
  let ret = 1;
  for(let i=1;i< N;i++) {
    if(to > arr[i][0]) continue;
    from = arr[i][0];
    to = arr[i][1];
    ret++;
  }
  console.log(ret)
}

Solution();