const getPermutation = (arr, n) => {
  const result = [];
  if(arr.length === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)];

    const attached = getPermutation(rest, n-1);
    const combinne = attached.map((v) => [fixed, ...v]);

    result.push(...combinne);
  })
  return result;
}

const getCombination = (arr, n) => {
  const result = [];
  if(n === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const attached = getCombination(rest, n-1);
    const combine = attached.map((v) => [fixed, ...v]);

    result.push(...combine);
  })
  return result;
}

const dfs = (graph, v, visited, n) => {
  //종료조건
  if(n === 5) {
    return;
  }
  for(let i of graph[v]) {
    if(!visited[i]) {
      visited[i] = true;
      dfs(graph, i, visited, n+1);
      visited[i] = false;
    }
  }
}

const bfs = (graph, start) => {
  const queue = [start];
  const visited = new Set();

  while(queue.length > 0) {
    const v = queue.shift();
    if(!visited.has(v)) {
      visited.add(v);
      queue.push(...graph[v]);
    }
  }
} 

const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length -1;

  while(left<= right) {
    const mid = Math.floor((left+right)/2);

    if(arr[mid] === target) return mid;
    else if(arr[mid] < target) left = mid +1 ;
    else right = mid-1;
  }

  return -1;
}

const quickSort = (arr) => {
  if(arr.length <= 1) return arr;

  const left = [];
  const right = [];
  const pivot = arr[0];

  for(let i=1;i<arr.length;i++) {
    if(arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

const mergeSort = (arr) => {
  if(arr.length <= 1) return arr;

  const mid = Math.floor(arr.length/2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

const merge = (left, right) => {
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

  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}


function dijkstra(graph, start) {
  const distances = {}; // 최단 거리를 저장할 객체
  const visited = new Set(); // 방문 여부를 체크할 Set
  const n = graph.length;
  
  // 거리 초기화
  for (let i = 0; i < n; i++) {
      distances[i] = Infinity;
  }
  distances[start] = 0;
  
  while (true) {
      let minVertex = null;
      let minDistance = Infinity;
      
      // 방문하지 않은 정점 중 최단 거리가 가장 짧은 정점 찾기
      for (let vertex = 0; vertex < n; vertex++) {
          if (!visited.has(vertex) && distances[vertex] < minDistance) {
              minDistance = distances[vertex];
              minVertex = vertex;
          }
      }
      
      // 더 이상 방문할 정점이 없으면 종료
      if (minVertex === null) break;
      
      // 방문 처리
      visited.add(minVertex);
      
      // 선택된 정점을 거쳐 가는 경우를 고려하여 distances 갱신
      for (let vertex = 0; vertex < n; vertex++) {
          if (!visited.has(vertex) && 
              graph[minVertex][vertex] !== Infinity) {
              const distance = distances[minVertex] + graph[minVertex][vertex];
              if (distance < distances[vertex]) {
                  distances[vertex] = distance;
              }
          }
      }
  }
  
  return distances;
}

//다익스트라 그래프(2차원 배열)
const graph = [
  [0, 5, Infinity, 8],
  [7, 0, 9, Infinity],
  [2, Infinity, 0, 4],
  [Infinity, Infinity, 3, 0]
]



