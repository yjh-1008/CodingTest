const fs = require('fs');
const input = fs.readFileSync('./index.txt').toString().trim().split('\n');

let [N,M,T] = input.shift().split(' ').map(Number);
const arr = [];
const af=[];
const my=[1,0,-1,0], mx=[0,1,0,-1];
for(let i=0;i<N;i++) {
  const r = input.shift().split(' ').map(Number);
  for(let j=0;j<M;j++) {
    if(r[j] === -1) {
      af.push(i);
    }
  }
  arr.push(r);
}

function clearUp(cleanerRow) {
  for (let row = cleanerRow - 2; row >= 0; row--) {
      arr[row + 1][0] = arr[row][0];
  }

  for (let col = 1; col < M; col++) {
      arr[0][col - 1] = arr[0][col];
  }

  for (let row = 1; row <= cleanerRow; row++) {
      arr[row - 1][M - 1] = arr[row][M - 1];
  }

  for (let col = M - 2; col > 0; col--) {
      arr[cleanerRow][col + 1] = arr[cleanerRow][col];
  }

  arr[cleanerRow][1] = 0;
}

function clearDown(cleanerRow) {
  for (let row = cleanerRow + 2; row < N; row++) {
      arr[row - 1][0] = arr[row][0];
  }

  for (let col = 1; col < M; col++) {
      arr[N - 1][col - 1] = arr[N - 1][col];
  }

  for (let row = N - 2; row >= cleanerRow; row--) {
      arr[row + 1][M - 1] = arr[row][M - 1];
  }

  for (let col = M - 2; col > 0; col--) {
      arr[cleanerRow][col + 1] = arr[cleanerRow][col];
  }

  arr[cleanerRow][1] = 0;
}


function Solution() {
  let ret = 0;
  while(T--) {
    const dusts = [];
    for(let i=0;i<N;i++) {
      for(let j=0;j<M;j++) {
        if(arr[i][j] > 0) {
          const value = Math.floor(arr[i][j]/5);
          for(let k=0;k<4;k++) {
            let ny = i+my[k];
            let nx = j+mx[k];
            if(ny < 0 || ny>=N || nx <0|| nx>=M) continue;
            if(arr[ny][nx] === -1) continue;
            dusts.push([ny,nx,value]);
            arr[i][j] -= value; 
          }
        }
      }
    }
    for(let dust of dusts) {
      const [y, x, val] = dust;
      arr[y][x] += val;
    }
    
    clearUp(af[0]);
    clearDown(af[1]);
  }
  for(let i=0;i<N;i++) {
    for(let j=0;j<M;j++) {
      if(arr[i][j] > 0) ret+= arr[i][j]
    }
  }
  console.log(ret)
}

Solution();