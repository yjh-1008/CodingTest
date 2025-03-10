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