const findFreuency =(arr) => {
  const map = new Map();

  for(const item of arr) {
    item.set(item, (item.get(item) || 0) + 1) ;
  } 


}

const twoPointers =(arr) => {
  let left = 0;
  let right = arr.length-1;

  while(left < right) {
    const sum = nums[left] + nums[right];

    if(sum ===target) return [left, right];

    if(sum < target) right--;
    else left++;
  }

  return [];
}

const slidingWindow = (arr, k) => {
  let maxSum = 0;
  let tempSum = 0;

  if(arr.length < k) return null;

  for(let i=0;i<k;i++){
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for(let i=k;i<arr.length;i++) {
    tempSum = tempSum + arr[i] - arr[i-k];

    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

const bfs = (graph, start) => {
  const queue = [start];
  const visited = new Set([start]);
  
  while(queue.length) {
    const cur = queue.shift();

    for(const next of graph[cur]) {
      if(visited.has(next)) continue;

      visited.add(next);
      queue.push(next);
    }
  };
}