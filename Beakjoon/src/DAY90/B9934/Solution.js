const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
let K = parseInt(input[0]);
let arr = input[1].split(' ').map(Number);
let ret =[];

function go(idx,cn,depth) {
  
  if(idx === cn) {
    return;
  }else {
    let next = Math.floor((idx+cn)/2);
    ret[depth].push(arr[next]);
    go(idx, next, depth+1);
    go(next+1, cn, depth+1);
  }
  
  return;
}


function Solution() {

  for( let i=0;i<K;i++ ){
    ret.push([]);
  }
  let root = Math.floor(arr.length/2);
  ret[0].push(arr[root]);
  go(0, root, 1);
  go(root+1,arr.length, 1);
  let answer = ""
  ret.forEach((d)=> {
    answer+=d.join(" ")+"\n"
  })
  console.log(answer.trim());
}
Solution()
