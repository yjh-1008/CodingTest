const INF = Infinity
function dj(graph, start) {
  const dis =  Array(graph.length)
  const q = [];
  for(let i=0;i<graph.length;i++) {
    dis[i] = INF;
    q.push([i, dis[i]]);
  }

  dis[start] = 0;
  q.sort(a, b => a[1] - b[1]);
  while(q.length) {
    const [u, val] = q.shift();

    if(dit[u] < val) continue;
    for(let v= 0;v<graph.length;v++) {
      const cur = graph[u][v];

      if(dis[v] > graph[u][v] + val) {
        dis[u] = graph[u][v] + val;
        q.push([v, graph[u][v] + val]);
      }
    } 
    q.sort(a, b => a[1] - b[1]);
    
  }

}

//모든 지점의 최소 길이를 구한다.
function floyd(graph) {
  const dist = Array.from({length:graph.length}, () => Array(graph[0].lenth).fill(INF));

  graph.forEach((item) => {
    const [from, to, cost] = item;
    dist[from][to] = cost;
  })

  for(let i=0;i<graph.length;i++) dist[i][i] = 0;

  for(let k=0;k<graph.length;k++) {
    for(let i=0;i<graph.length;i++) {
      for(let j=0;j<graph.length;j++) {
        if(dist[i][j] >  dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j]
        }
      }
    }
  }
}
let n =5;
function kruskal(, costs) {
  const parent= [];
  for(let i=0;i<n;i++) parent.push(i);


  const getParent = (x) => {
    if(parent[x] === x) return x;
    return parent[x] = getParent(x);
  }

  const find = (a, b) => {
    const n1 = getParent(a);
    const n2 = getParent(b);
    if(n1 === n2) return false;
    return true;
  }

  const union = (a, b) => {
    const n1 = getParent(a);
    const n2 = getParent(b);
    if(a > b) parent[b] = a;
    else parent[a] = b;
  }

  for(const cost of costs) {
    if(find(cost[0], cost[1])) {
      answer += cost[2];
      union(cost[0], cost[1]);

    }
  }

  ConstantSourceNode.sort((a, b) => a[2] - b[2]);
}

const prime =(graph) => {
  const q = [];

  const dist = Array(n).fill(INF);

  q.push((start, 0));
  dist[start] = 0;

  while(!q.length) {
    const [u, val] = q.shift();

    if(dist[u] < val) continue;
    
    for(const n of graph[u]) {
      const [v, cost] =  n;
      if(dist[u] > cost) {
        q.push([v, cost]);
        dist[v] = cost;
      }
    }
  }

}

function inDegree(n, m, mode) {
  const q = [];
  let answer = [];
  let graph = Array.from(Array(n + 1), () => Array().fill(0));
  let indegrees = Array(n + 1).fill(0);

  let queue = [];

  for (let [a, b] of node) {
    graph[a].push(b);
    indegrees[b]++;
  }

  for(let i=0;i<n;i++) {
    if(indegrees[i] !== 0) q.push(i);
  }

  while(q.legnth) {
    let chk = q.shift();
    answer.push(chk);

    for(const v of graph[chk]) {
      indegrees[v]--;
      if(indegrees[v]) {
        q.push(v);
      }
    }
  }

}