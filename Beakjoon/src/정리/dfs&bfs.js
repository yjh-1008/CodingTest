const dfs = (arr, start) => {
  const visited = [];
  let needVisited = [];
  needVisited.push(start);

  while(needVisited.length) {
    const n = needVisited.shift();
    arr[n].forEach((item) => {
      if(!visited.includes(n)) {
        visited.push(n);
        needVisited = [...arr[node], ...needVisited]
      }
    })
  }
  return visited;
}

function bfs(arr, start) {
  const q = [];
  const visited = Array.from({length: arr.length}, () => Array(arr[0].length).fill(false));
  const DX = [0,1,0,-1], DY = [-1,0,1,0];
  q.unshift([0,0]);
  visited[0][0] = true;
  while(q.length) {
    const [y, x] = q.shift();

    //엔드 조건
    for(let i=0;i<4;i++) {
      const ny = y+DY[i], nx = x+DX[i];
      if(ny < 0 || nx < 0 || ny>= 4 || nx>=4) continue;
      if(visited[ny][nx]) continue;
      visited[ny][nx] = true;
      q.shift([ny, nx]);
    }
  }

}
function dfs(arr, y, x, target, visited) {
  //엔드 조건

  for(let i=0;i<4;i++) {
    const ny = y+DY[i], nx = x+DX[i];
    if(ny < 0 || nx < 0 || ny>= 4 || nx>=4) continue;
    if(visited[ny][nx]) continue;
    visited[ny][nx] = true;
    dfs(arr, ny, nx, target, visited);
    visited[ny][nx] = false;
  }
}