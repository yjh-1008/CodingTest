const arr = Array.from(new Array(3),() => new Array(3).fill(0))
let visited = Array.from(new Array(3),() => new Array(3).fill(false))
const dy = [1,-1,0,0];
const dx = [0,0,-1,1];

function solution(y,x) {
    visited[y][x] = true;
    for(let i=0;i<4;i++) {
        let my = y+dy[i];
        let mx = x+dx[i];
        if(visited[my][mx]) continue;
        if(arr[mx][my] === 0) continue;
        solution(my, mx);
    }
}

solution(0,0)