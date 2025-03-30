//10709
const E = [0,1];
const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split("\n");

const [H, W] = input[0].split(" ").map(Number);
const map = input.slice(1).map(str => str.split(""));
const visited = Array.from(Array(H), () => Array(W).fill(Number.MAX_SAFE_INTEGER));


function Solution() {
  const cludes = [];
  for(let i=0;i<H;i++) {
    for(let j=0;j<W;j++) {
      if(map[i][j] === "c") {
        cludes.unshift([i, j]);
        visited[i][j] = 0;
      }
    }
  }

  while(cludes.length) {
    const [r, c] = cludes.shift();

    const nr = r+E[0], nc = c + E[1];

    if(nc < W) {
      visited[nr][nc] = Math.min(visited[nr][nc], visited[r][c]+1);
      cludes.unshift([nr, nc]);
    }
  }


  visited.forEach((v) => {
    const tmp = [];
    for(const s of v) {
      tmp.push(s === Number.MAX_SAFE_INTEGER ? -1 : s);
    }
    answer += tmp.join(" ") +"\n"
  })
  console.log(answer)
}

Solution();