const INF = Infinity;
function prims (graph) {
  const V = graph.length;
  const selected = new Array(V).fill(false);
  const mst = new Array(V).fill(INF);

  mst[0] = 0;

  for(let i=0;i<V-1;i++) {
    let minKey = INF, u = -1;

    for(let j=0;j<V;j++) {
      if(!selected[j] && mst[j] < minKey) {
        u = j;
        minKey = mst[j];
      }
    }

    selected[u] = true;

    for(let j=0;j<V;j++) {
      if(graph[u][j]  && !selected[j] && graph[u][j] < mst[j]) {
        mst[j] = graph[u][j];
      }
    }


    // if(!selected[] && )
  }
}