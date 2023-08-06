const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');

const [N, M, T] = input.shift().split(' ').map(Number);

const arr = [];
let visited = Array.from(new Array(N),() => new Array(M).fill(0));
const my = [0, 0, 1, -1], mx = [-1, 1, 0, 0];
let flag;
for(let i=0;i<N;i++) {
  arr.push(input.shift().split(' ').map(Number));
}

function dfs(y, x) {
 
  for(let i=0;i<4;i++ ){
    const ny = y+my[i];
    const nx = (x+mx[i]+M)%M;
    if(ny <0 || ny>=N) continue; 
    if(visited[ny][nx]===1) continue;
    if(arr[y][x] === arr[ny][nx]) {
      visited[y][x]=1;
      visited[ny][nx] = 1
      flag= false;
      dfs(ny, nx);
    }
  }
}

function get_avg() {
  let avg=0, sum=0, cnt=0;
  if(flag) {
    for(let i=0;i<N;i++) {
      for(let j=0;j<M;j++) {
        if(arr[i][j] !== 0) {
          cnt++;
          sum+= arr[i][j];
        }
        
      }
    }
      
    avg = sum/cnt;
    for(let i=0;i<N;i++) {
      for(let j=0;j<M;j++) {
        if(arr[i][j] === 0) continue;
        if(arr[i][j] > avg) arr[i][j] -=1;
        else if(arr[i][j] < avg) arr[i][j] +=1;
      }
    }
  } else {
    for(let i=0;i<N;i++) {
      for(let j=0;j<M;j++) {
        if(visited[i][j]) {
          arr[i][j] = 0;
        }
      }
    }
  }
  

  
}

function Solution() {
  for(let i=0;i<T;i++) {
    const [x, d, k] = input.shift().split(' ').map(Number);

    //d가 0이면 시계 1이면 반시계

    if(d === 0) {
     
      for(let q=x; q<=N;q++) {
        if(q%x ===0) {
          for(let j=0;j<k;j++) {
            let tmp = arr[q-1].pop()
            arr[q-1].unshift(tmp);
          }
        }
      }
    }else {
      for(let q=x; q<=N;q++) {
        if(q%x ===0) {
          for(let j=0;j<k;j++) arr[q-1].push(arr[q-1].shift());
        }
      }
    }
    flag = true;
    visited = Array.from(new Array(N),() => new Array(M).fill(0));
    for(let i=0;i<N;i++) {
      for(let j=0;j<M;j++) {
        if(arr[i][j] === 0) continue;
        if(visited[i][j]) continue;
        dfs(i,j)
      }
    }
    get_avg();
   
  }
  let ret=  0;
  for(let i=0;i<N;i++) {
    for(let j=0;j<M;j++) {
      ret+= arr[i][j];
    }
  }
  // console.log(arr)
  console.log(ret)
}

Solution()