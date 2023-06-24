const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
let N = parseInt(input[0]);
let combies = [],val =[9,3,1], visited= Array.from({length:64}).map((_)=> new Array(64).fill(0).map((__)=> new Array(64).fill(0)))
let arrvis = new Array(3).fill(0);
let ret=Number.MAX_VALUE;
function getCombination(idx, arr, cnt) {
  if(cnt === 3) {
    combies.push([...arr]);
    return;
  }

  for(let i=0;i<3;i++) {
    if(arrvis[i]) continue;
    arr.push(val[i]);
    arrvis[i] = 1;
    getCombination(i, arr, cnt+1);
    arrvis[i]= 0;
    arr.pop();
  }
  return;
}

function Solution() {
  let start = input[1].split(' ').map(Number)
  for(let i=0;i<3;i++) {
    if(start[i] === undefined ) start[i] = 0;
  }
  let q = []
  q.push(start)
  getCombination(0,[],0);
  while(q.length) {
    const [a,b,c]= q.shift();
  
    for(const combi of combies) {
      let na = Math.max(0, a-combi[0]);
      let nb = Math.max(0, b-combi[1]);
      let nc = Math.max(0, c-combi[2]);
      
      if(visited[0][0][0]){
        break;
      } 
      if(visited[na][nb][nc]){
        continue;
      } 
      
      visited[na][nb][nc] = visited[a][b][c]+1
      q.push([na,nb,nc]);
    }
  }
  return visited[0][0][0];
}
console.log(Solution());