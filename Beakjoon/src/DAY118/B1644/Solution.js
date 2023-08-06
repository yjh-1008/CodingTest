const fs = require('fs');
const input = parseInt(fs.readFileSync('./index.txt').toString().trim());
let visited = new Array(4000001).fill(0);
function Solution() {
  for(let i=2;i<=4000000;i++) {
    if(visited[i]) continue;
    for(let j=i+i;j<=visited.length;j+=i) {
      visited[j] = 1;
    }
  }

  let lt=2, rt=2;
  let sum = lt;
  let ret = 0;
  while(rt < visited.length) {
    if(sum <= input) {
      if(sum === input) ret++;
      rt++;
      while(visited[rt]) rt++;
      sum += rt;
    } else {
      sum -= lt;
      lt++;
      while(visited[lt]) lt++;
      
    }
  }

  if(lt < visited.length) {
    while(lt < visited.length) {
      if(sum <= input) {
        if(sum === input) ret++;
        break;
      }

      if(!visited[lt]) sum-= lt;
      lt++;
    }
  }
  console.log(ret)
}

Solution();