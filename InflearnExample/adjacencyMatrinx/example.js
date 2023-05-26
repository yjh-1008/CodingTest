//1번.

const arr  = Array.from(new Array(10), () => new Array(10).fill(false))
const visited = Array(10).fill(false);
function connectVertex(s,e) {
    arr[s][e]=true;
    arr[e][s] = true;
}
//2번
function bfs(s,e) {
    const q = [];
    q.push(s);
    while(q.length) {
        const poll = q.shift();
        for(let j=0;j<10;j++) {
            if(visited[j]) continue;
            visited[j] = true;
            q.push(j);
        }
    }
}

connectVertex(1,2)
connectVertex(1,3)
connectVertex(3,4)

