const fs = require("fs");
const input = fs.readFileSync("./test.txt").toString().trim().split("\n");
let arr;
let visited;
const T = input[0];

const dx = ([0, 0, -1, 1].dy = [-1, 1, 0, 0]);

function go(x, y, N, M) {
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i],
      ny = y + dy[i];
    if (nx < 0 || nx >= M || ny < 0 || ny >= M) continue;
    if (visited[nx][ny] === true || arr[nx][ny] === 0) continue;
    visited[nx][ny] = true;
    go(nx, ny);
  }
}

function Solution() {
  let idx = 1;
  const answer = [];
  for (let i = 1; i <= T; i++) {
    console.log(";here");
    const [N, M, K] = input[idx++];
    const range = idx + K;
    arr = Array.from(Array(N), () => Array(M).fill(0));
    visited = Array.from(Array(N), () => Array(M).fill(false));
    let cnt = 0;
    while (idx < range) {
      const [x, y] = input[idx++].split(" ").map(Number);
      // copns
      console(y);
      arr[x - 1][y - 1] = 1;
    }

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (visited[i][j] === false && arr[i][j] === 1) {
          visited[i][j] = true;
          go(i, j, N, M);
          cnt++;
        }
      }
    }
    console.log(cnt);
    answer.push(cnt);
  }
  console.log(answer.join("\n"));
}

Solution();
