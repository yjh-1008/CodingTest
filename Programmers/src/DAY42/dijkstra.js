const dijkstra = (graph, start) => {
  const distances = {};
  const visited = new Set();

  //초기화
  for(let vertex in graph) {
    distances[vertex] = Infinity;
  }
  distances[start] = 0;

  while(true) {
    let minVertex = null;
    let minDistance = Infinity;

    for(let vertex in distances) {
      if(!visited.has(vertex) && distances[vertex] < minDistance)  {
        minVertex  = vertex;
        minDistance = distances[vertex];
      }
    }

    if(minVertex === null) break;

    visited.add(minVertex);

    for(let neighbor in graph[minVertex]) {
     const distance = distances[minVertex] + graph[minVertex][neighbor];
     if(distance < distances[neighbor]) {
      distances[neighbor] = distance;
     }
    }
  }
  return distances;
}