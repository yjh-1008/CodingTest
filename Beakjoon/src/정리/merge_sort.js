function solution(n, water) {
  // 방향 벡터 정의 (상, 하, 좌, 우)
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  let visited = Array.from({ length: n }, () => Array(n).fill(false));
  let queue = [];
  let steps = 0;

  // water의 각 위치를 큐에 추가하고 방문 표시
  for (let [row, col] of water) {
      queue.push([row, col]);
      visited[row][col] = true;
  }

  while (queue.length > 0) {
      let size = queue.length;
      for (let i = 0; i < size; i++) {
          let [curRow, curCol] = queue.shift();

          for (let [dRow, dCol] of directions) {
              let newRow = curRow + dRow;
              let newCol = curCol + dCol;

              if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n && !visited[newRow][newCol]) {
                  visited[newRow][newCol] = true;
                  queue.push([newRow, newCol]);
              }
          }
      }
      steps++;
  }

  return steps - 1; // 마지막 단계에서 빈 지역을 탐험하지 않음
}

// 테스트 케이스
const n = 4;
const water = [[2, 3], [3, 2], [4, 3]];
console.log(solution(n, water)); // 예시 출력: 3
