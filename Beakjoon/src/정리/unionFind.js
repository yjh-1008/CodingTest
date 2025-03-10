function find(x) {
  if(arr[x] === x) {
    return x;
  }
  return find(arr[x]);
}

function union(a, b) {
  const A = find(a), B = find(b);
  arr[A] = B;
}

// function kruskal()
const Heap = require("collections/heap");
console.loh(Heap)