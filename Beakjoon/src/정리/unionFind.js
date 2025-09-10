function countComponents(n, edges) {
  const parent = Array.from({length: n}, (_, i) => i);
  
  function find(x) {
      if (parent[x] !== x) {
          parent[x] = find(parent[x]);
      }
      return parent[x];
  }
  
  function union(x, y) {
    const n1 = find(x);
    const n2 = find(y);
    if(n1 === n2) return false;
    parent[n1] = n2;
    return true;
  }
  
  for (const [x, y] of edges) {
      union(x, y);
  }
  
  const roots = new Set();
  for (let i = 0; i < n; i++) {
      roots.add(find(i));
  }
  
  return roots.size;
}