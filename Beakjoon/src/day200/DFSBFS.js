function dfs(graph, v, visited) {
  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (let node of graph[v]) {
    if (!visited[node]) {
      visited[v] = true;
      dfs(graph, node, visited);
    }
  }
}


function bfs(graph, start, visited) {
  const queue = [];
  queue.push(start);
  visited[start] = true;

  while(queue.length) {
    const tmp = queue.shift();
    for(const n of graph[tmp]) {
      if(visited[n]) continue;
      visited[n] = true;
      queue.unshift(n);
    }
  }
}