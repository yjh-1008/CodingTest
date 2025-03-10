const combi = (arr, n) => {
  const result = [];
  if(n === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index+1);

    const combinations = combi(rest, n-1);

    const attached = combinations.map((el) => [...el, fixed]);
    result.push(...attached)
  })
  return result;
}

const permu = (arr, n) => {
  const result = [];
  if(n === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)];

    const p = permu(rest, n-1);
    const attached = p.map((el) => [...el, fixed]);
    result.push(...attached);
  })

  return result;
}

// DFS (재귀)
function dfs(graph, v, visited) {
  visited[v] = true;
  console.log(v);
  
  for (let node of graph[v]) {
      if (!visited[node]) {
          dfs(graph, node, visited);
      }
  }
}

// BFS (큐)
function bfs(graph, start) {
  const visited = new Array(graph.length).fill(false);
  const queue = [start];
  visited[start] = true;
  
  while (queue.length > 0) {
      const v = queue.shift();
      console.log(v);
      
      for (let node of graph[v]) {
          if (!visited[node]) {
              queue.push(node);
              visited[node] = true;
          }
      }
  }
}

// 퀵 정렬
const quickSort = (arr) => {
  if(arr.length <= 1) return arr;
  const left = [];
  const right = [];
  const pivot = arr[0];
  arr.forEach((item, index) => {
      if(index> 0) {
          if(pivot >= item) left.push(item)
          else right.push(item)  
      }
  })
  const lSorted = quickSort(left);
  const rSorted = quickSort(right);
  return [...lSorted, pivot, ...rSorted];
}

const mergeSort = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while(leftIndex < left.length && rightIndex < right.length) {
      if(left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex++]);
      } else {
          result.push(right[rightIndex++]);
      }
  }
  
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}

const merge = (arr) => {
  if(arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return mergeSort(merge(left), merge(right));
}

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  
  while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      
      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) start = mid + 1;
      else end = mid - 1;
  }
  return -1;
}

function dijkstra(graph, start) {
  const distances = {};
  const visited = new Set();
  
  // 초기화
  for (let vertex in graph) {
      distances[vertex] = Infinity;
  }
  distances[start] = 0;
  
  while (true) {
      let minVertex = null;
      let minDistance = Infinity;
      
      // 방문하지 않은 정점 중 최소 거리 찾기
      for (let vertex in distances) {
          if (!visited.has(vertex) && distances[vertex] < minDistance) {
              minVertex = vertex;
              minDistance = distances[vertex];
          }
      }
      
      if (minVertex === null) break;
      
      visited.add(minVertex);
      
      for (let neighbor in graph[minVertex]) {
          const distance = distances[minVertex] + graph[minVertex][neighbor];
          if (distance < distances[neighbor]) {
              distances[neighbor] = distance;
          }
      }
  }
  
  return distances;
}

class UnionFind {
  constructor(size) {
      this.parent = Array.from({length: size}, (_, i) => i);
      this.rank = new Array(size).fill(0);
  }
  
  find(x) {
      if (this.parent[x] !== x) {
          this.parent[x] = this.find(this.parent[x]);
      }
      return this.parent[x];
  }
  
  union(x, y) {
      let rootX = this.find(x);
      let rootY = this.find(y);
      
      if (rootX !== rootY) {
          if (this.rank[rootX] < this.rank[rootY]) {
              [rootX, rootY] = [rootY, rootX];
          }
          this.parent[rootY] = rootX;
          if (this.rank[rootX] === this.rank[rootY]) {
              this.rank[rootX]++;
          }
      }
  }
}