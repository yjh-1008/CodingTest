const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');
const N = parseInt(input[0])
let arr = input[1].split(' ')
let ret = [];
let visited = new Array(10).fill(0);


function go(cnt, str) {
  if(cnt === N) {
      ret.push(str);
  }


  let n = parseInt(str[cnt])
  if(arr[cnt] == '<') {
    for(let i=0;i<=9;i++) {
      if(visited[i]) continue;
      if(n < i) {
        visited[i] = 1;
        console.log(visited)
        go(cnt+1, str+`${i}`);
        visited[i] = 0;
      }
    }
  }else if(arr[cnt]== '>') {
   
    for(let i=0;i<=9;i++) {
      
      if(visited[i]) continue;
      if(n > i) {
        visited[i] = 1
        go(cnt+1, str+`${i}`);
        visited[i] = 0;
      }
    }
  }
  return;
}


function Solution() {
  for(let i=0;i<=9;i++) {
    visited[i] = 1
    go(0,`${i}`);
    visited[i] = 0
  }
  
  console.log(ret.pop()+'\n'+ret.shift('\n'))
}

Solution();