import {MIN_HEAP} from './PQ'

const INF = Infinity

const dijkstra = (graph, start, len) => {
  const pq = new MinHeap();
  const visited = Array(len).fill(Infinity);
  visited[start] = 0;

  pq.heappush([start, 0]);

  while (pq.size()) {
      const [cur, curWeight] = pq.heappop();

      if (visited[cur] < curWeight) continue;

      for (let i = 0; i < graph[cur].length; i++) {
          const nextVal = graph[cur][i];
          if (nextVal > 0 && visited[i] > curWeight + nextVal) {
              visited[i] = curWeight + nextVal;
              pq.heappush([i, visited[i]]);
          }
      }
  }

  return visited;
};